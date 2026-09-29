/**
 * 本機儲存與模擬即時同步服務 (storage.js)
 * 支援多分頁 LocalStorage 事件監聽，提供即時無感跨分頁資料連動
 */

const STORAGE_KEYS = {
  CURRENT_GROUP: 'drink_order_group_data',
  ACTIVE_IDS: 'drink_order_active_group_ids',
  ADMIN_TOKENS: 'drink_order_admin_tokens',
  DEVICE_NICKNAMES_PREFIX: 'drink_order_device_nicknames_',
  USER_NICKNAME: 'drink_order_user_nickname',
  CUSTOM_STORES: 'drink_order_custom_stores',
  HIDDEN_STORES: 'drink_order_hidden_stores',
  ARCHIVED_GROUPS: 'drink_order_archived_groups',
};

// 讀取指定 orderId 或最新團購資料 (支援多團獨立並存)
export function getGroupOrder(targetOrderId = null) {
  try {
    if (targetOrderId) {
      const specificRaw = localStorage.getItem(`drink_order_group_${targetOrderId}`);
      if (specificRaw) return JSON.parse(specificRaw);
    }
    const raw = localStorage.getItem(STORAGE_KEYS.CURRENT_GROUP);
    const parsed = raw ? JSON.parse(raw) : null;
    if (targetOrderId && parsed && parsed.orderId !== targetOrderId) {
      return null;
    }
    return parsed;
  } catch (e) {
    console.error('讀取團購資料失敗', e);
    return null;
  }
}

// 取得所有進行中的團購列表
export function getAllActiveGroups() {
  try {
    const rawIds = localStorage.getItem(STORAGE_KEYS.ACTIVE_IDS);
    if (rawIds !== null) {
      const idList = JSON.parse(rawIds);
      const groups = [];
      idList.forEach((id) => {
        const gRaw = localStorage.getItem(`drink_order_group_${id}`);
        if (gRaw) {
          try {
            groups.push(JSON.parse(gRaw));
          } catch (err) {}
        }
      });
      return groups;
    }
    // 舊版相容 (ACTIVE_IDS 鍵值完全不存在時)
    const raw = localStorage.getItem(STORAGE_KEYS.CURRENT_GROUP);
    return raw ? [JSON.parse(raw)] : [];
  } catch (e) {
    return [];
  }
}

// 儲存或更新團購資料 (依 orderId 隔離，互不踩踏)
export function saveGroupOrder(orderData) {
  if (!orderData || !orderData.orderId) return false;
  try {
    // 1. 獨立儲存該團
    localStorage.setItem(`drink_order_group_${orderData.orderId}`, JSON.stringify(orderData));
    // 2. 設為當前最新團
    localStorage.setItem(STORAGE_KEYS.CURRENT_GROUP, JSON.stringify(orderData));

    // 3. 維護活躍 ID 清單
    const rawIds = localStorage.getItem(STORAGE_KEYS.ACTIVE_IDS);
    const idList = rawIds ? JSON.parse(rawIds) : [];
    if (!idList.includes(orderData.orderId)) {
      idList.unshift(orderData.orderId);
      localStorage.setItem(STORAGE_KEYS.ACTIVE_IDS, JSON.stringify(idList.slice(0, 20)));
    }

    // 4. 若有主揪 Token，記錄至 Token 字典
    if (orderData.adminToken) {
      saveAdminToken(orderData.orderId, orderData.adminToken);
    }

    // 手動觸發事件供同頁面監聽
    window.dispatchEvent(new Event('drink_group_updated'));
    return true;
  } catch (e) {
    console.error('儲存團購資料失敗', e);
    return false;
  }
}

// 清除特定團購資料
export function clearGroupOrder(targetOrderId = null) {
  try {
    const currentRaw = localStorage.getItem(STORAGE_KEYS.CURRENT_GROUP);
    const current = currentRaw ? JSON.parse(currentRaw) : null;
    const orderIdToClear = targetOrderId || current?.orderId;

    if (orderIdToClear) {
      localStorage.removeItem(`drink_order_group_${orderIdToClear}`);
      const rawIds = localStorage.getItem(STORAGE_KEYS.ACTIVE_IDS);
      if (rawIds) {
        const idList = JSON.parse(rawIds).filter((id) => id !== orderIdToClear);
        localStorage.setItem(STORAGE_KEYS.ACTIVE_IDS, JSON.stringify(idList));
      }
    }

    // 先清除當前團儲存格
    if (!targetOrderId || current?.orderId === targetOrderId) {
      localStorage.removeItem(STORAGE_KEYS.CURRENT_GROUP);
      // 若還有其他活躍團，替換為下一團
      const remaining = getAllActiveGroups();
      if (remaining.length > 0) {
        localStorage.setItem(STORAGE_KEYS.CURRENT_GROUP, JSON.stringify(remaining[0]));
      }
    }

    window.dispatchEvent(new Event('drink_group_updated'));
    return true;
  } catch (e) {
    console.error('清除團購資料失敗', e);
    return false;
  }
}

// 主揪 Token 字典存取
export function saveAdminToken(orderId, token) {
  if (!orderId || !token) return;
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.ADMIN_TOKENS);
    const tokens = raw ? JSON.parse(raw) : {};
    tokens[orderId] = token;
    localStorage.setItem(STORAGE_KEYS.ADMIN_TOKENS, JSON.stringify(tokens));
  } catch (e) {}
}

export function getAdminToken(orderId) {
  if (!orderId) return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.ADMIN_TOKENS);
    const tokens = raw ? JSON.parse(raw) : {};
    return tokens[orderId] || null;
  } catch (e) {
    return null;
  }
}

// 本機同設備代點之同仁暱稱清單管理
export function getDeviceNicknames(orderId) {
  if (!orderId) return [];
  try {
    const raw = localStorage.getItem(`${STORAGE_KEYS.DEVICE_NICKNAMES_PREFIX}${orderId}`);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

export function addDeviceNickname(orderId, nickname) {
  if (!orderId || !nickname || !nickname.trim()) return;
  try {
    const list = getDeviceNicknames(orderId);
    const trimmed = nickname.trim();
    if (!list.includes(trimmed)) {
      list.push(trimmed);
      localStorage.setItem(`${STORAGE_KEYS.DEVICE_NICKNAMES_PREFIX}${orderId}`, JSON.stringify(list));
    }
  } catch (e) {}
}

export function removeDeviceNickname(orderId, nickname) {
  if (!orderId || !nickname) return;
  try {
    const list = getDeviceNicknames(orderId);
    const updated = list.filter((n) => n.trim().toLowerCase() !== nickname.trim().toLowerCase());
    localStorage.setItem(`${STORAGE_KEYS.DEVICE_NICKNAMES_PREFIX}${orderId}`, JSON.stringify(updated));
  } catch (e) {}
}

// 取得歷史歸檔團購清單
export function getArchivedGroups() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.ARCHIVED_GROUPS);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('讀取歷史團購失敗', e);
    return [];
  }
}

// 結案並將當前團購歸檔至歷史庫
export function archiveGroupOrder(groupData) {
  if (!groupData) return false;
  try {
    const existing = getArchivedGroups();
    const archivedItem = {
      ...groupData,
      archivedAt: new Date().toISOString(),
    };
    // 最多保留最新 50 筆
    const updated = [archivedItem, ...existing.filter((g) => g.orderId !== groupData.orderId)].slice(0, 50);
    localStorage.setItem(STORAGE_KEYS.ARCHIVED_GROUPS, JSON.stringify(updated));
    // 同時清除當前進行中團購
    clearGroupOrder();
    return true;
  } catch (e) {
    console.error('歸檔團購失敗', e);
    return false;
  }
}

// 刪除單筆歷史紀錄
export function deleteArchivedGroup(orderId) {
  try {
    const existing = getArchivedGroups();
    const updated = existing.filter((g) => g.orderId !== orderId);
    localStorage.setItem(STORAGE_KEYS.ARCHIVED_GROUPS, JSON.stringify(updated));
    return true;
  } catch (e) {
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

// 取得已隱藏/已歇業店家 ID 陣列
export function getHiddenStoreIds() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.HIDDEN_STORES);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

// 隱藏特定店家（標記歇業或不在外送範圍）
export function hideStore(storeId) {
  if (!storeId) return;
  const list = getHiddenStoreIds();
  if (!list.includes(storeId)) {
    const updated = [...list, storeId];
    localStorage.setItem(STORAGE_KEYS.HIDDEN_STORES, JSON.stringify(updated));
  }
}

// 取消隱藏特定店家（恢復顯示）
export function unhideStore(storeId) {
  if (!storeId) return;
  const list = getHiddenStoreIds();
  const updated = list.filter((id) => id !== storeId);
  localStorage.setItem(STORAGE_KEYS.HIDDEN_STORES, JSON.stringify(updated));
}
