/**
 * 本機儲存與模擬即時同步服務 (storage.js)
 * 支援多分頁 LocalStorage 事件監聽，提供即時無感跨分頁資料連動
 */

const STORAGE_KEYS = {
  CURRENT_GROUP: 'drink_order_group_data',
  USER_NICKNAME: 'drink_order_user_nickname',
  CUSTOM_STORES: 'drink_order_custom_stores',
};

// 讀取當前團購資料
export function getGroupOrder() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.CURRENT_GROUP);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    console.error('讀取團購資料失敗', e);
    return null;
  }
}

// 儲存或更新當前團購資料
export function saveGroupOrder(orderData) {
  try {
    localStorage.setItem(STORAGE_KEYS.CURRENT_GROUP, JSON.stringify(orderData));
    // 手動觸發事件供同頁面監聽
    window.dispatchEvent(new Event('drink_group_updated'));
    return true;
  } catch (e) {
    console.error('儲存團購資料失敗', e);
    return false;
  }
}

// 讀取/記錄上次填寫之同仁暱稱
export function getLastNickname() {
  return localStorage.getItem(STORAGE_KEYS.USER_NICKNAME) || '';
}

export function saveLastNickname(name) {
  if (name && name.trim()) {
    localStorage.setItem(STORAGE_KEYS.USER_NICKNAME, name.trim());
  }
}

// 自訂店家菜單保存 (供後續 AI 辨識後建檔)
export function getCustomStores() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.CUSTOM_STORES);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

export function saveCustomStore(store) {
  const existing = getCustomStores();
  const updated = [store, ...existing.filter((s) => s.id !== store.id)];
  localStorage.setItem(STORAGE_KEYS.CUSTOM_STORES, JSON.stringify(updated));
}
