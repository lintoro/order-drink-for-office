/**
 * 整合同步層 (syncService.js)
 * 支援 Cloudflare Worker KV 雲端儲存、Firebase Firestore 與本機 LocalStorage
 */
import {
  getFirebaseDb,
  subscribeGroupDoc,
  createGroupInFirestore,
  updateGroupInFirestore,
} from './firebaseService';
import { getGroupOrder, saveGroupOrder } from '../utils/storage';
import { getWorkerProxyUrl } from './geminiService';

/**
 * 檢查當前是否處於雲端連線模式
 */
export function isCloudModeEnabled() {
  return !!getFirebaseDb() || !!getWorkerProxyUrl();
}

/**
 * 取得當前雲端模式名稱
 */
export function getCloudProvider() {
  if (getFirebaseDb()) return 'firebase';
  if (getWorkerProxyUrl()) return 'cloudflare';
  return 'local';
}

/**
 * 監聽團購資料更新 (自動在 Cloudflare KV / Firebase 雲端模式 與 本地跨分頁模式 間平滑切換)
 * @param {string} orderId - 團購 ID
 * @param {Function} onDataUpdated - 資料變更回呼函式
 * @returns {Function} cleanup 函式
 */
export function subscribeToGroup(orderId, onDataUpdated) {
  // 1. 若 Firebase 雲端可用，啟動 Firestore 即時監聽
  if (getFirebaseDb()) {
    const unsubscribeCloud = subscribeGroupDoc(orderId, (cloudData) => {
      saveGroupOrder(cloudData); // 同步鏡像至本機備份
      onDataUpdated(cloudData, 'cloud');
    });

    if (unsubscribeCloud) {
      return unsubscribeCloud;
    }
  }

  // 2. 若 Cloudflare Worker 代理可用，啟動 KV 雲端資料同步與輪詢
  let pollTimer = null;
  const proxyUrl = getWorkerProxyUrl();
  if (proxyUrl && orderId) {
    const fetchCloudGroup = async () => {
      try {
        const res = await fetch(`${proxyUrl}/api/group?orderId=${encodeURIComponent(orderId)}`);
        if (res.ok) {
          const cloudData = await res.json();
          if (cloudData && cloudData.orderId) {
            saveGroupOrder(cloudData);
            onDataUpdated(cloudData, 'cloud');
          }
        }
      } catch (err) {
        // 靜默容錯重試
      }
    };

    // 立即由雲端拉取一次
    fetchCloudGroup();

    // 每 3.5 秒輪詢最新名單與結單狀態 (跨手機即時看見誰點了餐)
    pollTimer = setInterval(fetchCloudGroup, 3500);
  }

  // 3. 本地模式：監聽 StorageEvent 與自訂廣播事件
  const handleLocalUpdate = () => {
    const localData = getGroupOrder(orderId);
    if (localData && (!orderId || localData.orderId === orderId)) {
      onDataUpdated(localData, 'local');
    }
  };

  window.addEventListener('storage', handleLocalUpdate);
  window.addEventListener('drink_group_updated', handleLocalUpdate);

  return () => {
    if (pollTimer) clearInterval(pollTimer);
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

  // 1. 推送至 Firebase
  if (getFirebaseDb()) {
    try {
      await createGroupInFirestore(groupData);
    } catch (e) {
      console.warn('Firebase 雲端儲存略過:', e);
    }
  }

  // 2. 推送至 Cloudflare Worker KV
  const proxyUrl = getWorkerProxyUrl();
  if (proxyUrl) {
    try {
      await fetch(`${proxyUrl}/api/group`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(groupData),
      });
    } catch (e) {
      console.warn('Cloudflare KV 雲端儲存略過:', e);
    }
  }
}

/**
 * 更新團購訂單或狀態
 */
export async function syncUpdateGroup(orderId, fullGroupData) {
  // 更新本機
  saveGroupOrder(fullGroupData);

  // 1. 推送至 Firebase
  if (getFirebaseDb()) {
    try {
      await updateGroupInFirestore(orderId, fullGroupData);
    } catch (e) {
      console.warn('Firebase 雲端更新失敗:', e);
    }
  }

  // 2. 推送至 Cloudflare Worker KV
  const proxyUrl = getWorkerProxyUrl();
  if (proxyUrl) {
    try {
      await fetch(`${proxyUrl}/api/group`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fullGroupData),
      });
    } catch (e) {
      console.warn('Cloudflare KV 雲端更新略過:', e);
    }
  }
}

