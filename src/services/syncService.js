/**
 * 整合同步層 (syncService.js)
 * 自動整合 Firebase 雲端即時監聽與本機 LocalStorage / 跨分頁事件
 */
import {
  getFirebaseDb,
  subscribeGroupDoc,
  createGroupInFirestore,
  updateGroupInFirestore,
} from './firebaseService';
import { getGroupOrder, saveGroupOrder } from '../utils/storage';

/**
 * 檢查當前是否處於雲端連線模式
 */
export function isCloudModeEnabled() {
  return !!getFirebaseDb();
}

/**
 * 監聽團購資料更新 (自動在 雲端模式 與 本地跨分頁模式 間平滑切換)
 * @param {string} orderId - 團購 ID
 * @param {Function} onDataUpdated - 資料變更回呼函式
 * @returns {Function} cleanup 函式
 */
export function subscribeToGroup(orderId, onDataUpdated) {
  // 1. 若 Firebase 雲端可用，啟動 Firestore 即時監聽
  if (isCloudModeEnabled()) {
    const unsubscribeCloud = subscribeGroupDoc(orderId, (cloudData) => {
      saveGroupOrder(cloudData); // 同步鏡像至本機備份
      onDataUpdated(cloudData, 'cloud');
    });

    if (unsubscribeCloud) {
      return unsubscribeCloud;
    }
  }

  // 2. 本地模式：監聽 StorageEvent 與自訂廣播事件
  const handleLocalUpdate = () => {
    const localData = getGroupOrder();
    if (localData && (!orderId || localData.orderId === orderId)) {
      onDataUpdated(localData, 'local');
    }
  };

  window.addEventListener('storage', handleLocalUpdate);
  window.addEventListener('drink_group_updated', handleLocalUpdate);

  return () => {
    window.removeEventListener('storage', handleLocalUpdate);
    window.removeEventListener('drink_group_updated', handleLocalUpdate);
  };
}

/**
 * 儲存/開團
 */
export async function syncSaveGroup(groupData) {
  // 優先存本機
  saveGroupOrder(groupData);

  // 若雲端開啟，非同步推送至 Firestore
  if (isCloudModeEnabled()) {
    try {
      await createGroupInFirestore(groupData);
    } catch (e) {
      console.warn('雲端儲存略過或延遲:', e);
    }
  }
}

/**
 * 更新團購訂單或狀態
 */
export async function syncUpdateGroup(orderId, fullGroupData) {
  // 更新本機
  saveGroupOrder(fullGroupData);

  // 若雲端開啟，同步推送至 Firestore
  if (isCloudModeEnabled()) {
    try {
      await updateGroupInFirestore(orderId, fullGroupData);
    } catch (e) {
      console.warn('雲端更新失敗:', e);
    }
  }
}
