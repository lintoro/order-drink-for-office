/**
 * Firebase Firestore 雲端即時同步服務 (firebaseService.js)
 * 遵循永不休眠原則 (Firebase Spark 方案)
 */
import { initializeApp, getApps, getApp } from 'firebase/app';
import {
  getFirestore,
  doc,
  setDoc,
  updateDoc,
  onSnapshot,
  getDoc,
} from 'firebase/firestore';

const FIREBASE_CONFIG_KEY = 'drink_order_firebase_config';

/**
 * 取得 Firebase 設定檔 (優先從 LocalStorage 讀取，其次從環境變數讀取)
 */
export function getFirebaseConfig() {
  try {
    const saved = localStorage.getItem(FIREBASE_CONFIG_KEY);
    if (saved) return JSON.parse(saved);
  } catch (e) {
    // ignore
  }

  const envKey = import.meta.env.VITE_FIREBASE_API_KEY;
  const envProjectId = import.meta.env.VITE_FIREBASE_PROJECT_ID;

  if (envKey && envProjectId) {
    return {
      apiKey: envKey,
      authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || `${envProjectId}.firebaseapp.com`,
      projectId: envProjectId,
      storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || `${envProjectId}.appspot.com`,
      messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '',
      appId: import.meta.env.VITE_FIREBASE_APP_ID || '',
    };
  }

  return null;
}

/**
 * 儲存使用者的 Firebase 配置檔
 */
export function saveFirebaseConfig(config) {
  if (!config) {
    localStorage.removeItem(FIREBASE_CONFIG_KEY);
  } else {
    localStorage.setItem(FIREBASE_CONFIG_KEY, JSON.stringify(config));
  }
}

/**
 * 初始化 Firebase 實例
 */
export function getFirebaseDb() {
  const config = getFirebaseConfig();
  if (!config || !config.apiKey || !config.projectId) {
    return null;
  }

  try {
    const app = getApps().length === 0 ? initializeApp(config) : getApp();
    return getFirestore(app);
  } catch (err) {
    console.warn('Firebase 初始化失敗:', err);
    return null;
  }
}

/**
 * 監聽指定團購訂單的即時變更 (雲端 Firestore onSnapshot)
 * @param {string} orderId - 團購開團 ID
 * @param {Function} onUpdate - 資料更新回呼
 * @param {Function} onError - 錯誤回呼
 * @returns {Function|null} unsubscribe 函式
 */
export function subscribeGroupDoc(orderId, onUpdate, onError) {
  const db = getFirebaseDb();
  if (!db || !orderId) return null;

  try {
    const groupRef = doc(db, 'group_orders', orderId);
    const unsubscribe = onSnapshot(
      groupRef,
      (snapshot) => {
        if (snapshot.exists()) {
          onUpdate(snapshot.data());
        }
      },
      (error) => {
        console.error('Firestore 即時監聽異常:', error);
        if (onError) onError(error);
      }
    );
    return unsubscribe;
  } catch (e) {
    console.error('訂閱失敗:', e);
    return null;
  }
}

/**
 * 雲端開團儲存
 */
export async function createGroupInFirestore(groupData) {
  const db = getFirebaseDb();
  if (!db) return false;

  try {
    const groupRef = doc(db, 'group_orders', groupData.orderId);
    await setDoc(groupRef, {
      ...groupData,
      updatedAt: new Date().toISOString(),
    });
    return true;
  } catch (err) {
    console.error('儲存至 Firestore 失敗:', err);
    throw err;
  }
}

/**
 * 雲端更新團購狀態或名單
 */
export async function updateGroupInFirestore(orderId, partialData) {
  const db = getFirebaseDb();
  if (!db) return false;

  try {
    const groupRef = doc(db, 'group_orders', orderId);
    await updateDoc(groupRef, {
      ...partialData,
      updatedAt: new Date().toISOString(),
    });
    return true;
  } catch (err) {
    console.error('更新 Firestore 失敗:', err);
    throw err;
  }
}
