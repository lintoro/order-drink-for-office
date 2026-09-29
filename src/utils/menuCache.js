/**
 * 辦公室訂飲料 - 本地菜單快取管理 (menuCache.js)
 * 方案 A：將已成功解析過的店家菜單暫存於 LocalStorage，避免重複呼叫 Gemini API 消耗配額
 */

const CACHE_PREFIX = 'drink_menu_cache_';
const CACHE_INDEX_KEY = 'drink_menu_cache_index';
const DEFAULT_TTL_DAYS = 7; // 預設快取 7 天

/**
 * 標準化搜尋鍵名（去除空白、轉小寫）
 */
export function normalizeCacheKey(text = '') {
  return String(text)
    .trim()
    .toLowerCase()
    .replace(/\s+/g, ' ');
}

/**
 * 取得所有已快取的店家鍵名索引
 */
export function getCacheIndex() {
  try {
    const raw = localStorage.getItem(CACHE_INDEX_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

/**
 * 從本地快取中取得菜單資料
 * @param {string} rawKey - 搜尋關鍵字（店名、網址等）
 * @returns {object|null} 命中且未過期回傳菜單資料，否則回傳 null
 */
export function getMenuFromCache(rawKey) {
  if (!rawKey) return null;
  const key = normalizeCacheKey(rawKey);
  const storageKey = CACHE_PREFIX + key;

  try {
    const raw = localStorage.getItem(storageKey);
    if (!raw) return null;

    const cached = JSON.parse(raw);
    const now = Date.now();

    // 檢查是否過期
    if (cached.expiresAt && now > cached.expiresAt) {
      localStorage.removeItem(storageKey);
      removeKeyFromIndex(key);
      return null;
    }

    return {
      ...cached.data,
      _fromCache: true,
      _cachedAt: cached.cachedAt,
    };
  } catch (e) {
    console.warn('讀取菜單快取失敗', e);
    return null;
  }
}

/**
 * 將解析後的菜單寫入本地快取
 * @param {string} rawKey - 搜尋關鍵字或店家名稱
 * @param {object} menuData - 菜單資料
 * @param {number} [ttlDays=7] - 有效天數
 */
export function saveMenuToCache(rawKey, menuData, ttlDays = DEFAULT_TTL_DAYS) {
  if (!rawKey || !menuData) return;
  const key = normalizeCacheKey(rawKey);
  const storageKey = CACHE_PREFIX + key;

  const now = Date.now();
  const expiresAt = now + ttlDays * 24 * 60 * 60 * 1000;

  const cachePayload = {
    key,
    data: menuData,
    cachedAt: now,
    expiresAt,
  };

  try {
    localStorage.setItem(storageKey, JSON.stringify(cachePayload));
    addKeyToIndex(key);

    // 同步以店家名稱也存一份快取（若關鍵字是特定分店名）
    if (menuData.storeName && menuData.branchName) {
      const storeFullName = `${menuData.storeName} ${menuData.branchName}`;
      const fullKey = normalizeCacheKey(storeFullName);
      if (fullKey !== key) {
        localStorage.setItem(
          CACHE_PREFIX + fullKey,
          JSON.stringify({ ...cachePayload, key: fullKey })
        );
        addKeyToIndex(fullKey);
      }
    }
  } catch (e) {
    console.warn('寫入菜單快取失敗 (可能容量超出限制)', e);
  }
}

/**
 * 清除所有已過期的快取
 */
export function pruneExpiredCache() {
  const index = getCacheIndex();
  const now = Date.now();
  const validIndex = [];

  index.forEach((key) => {
    const storageKey = CACHE_PREFIX + key;
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) {
        const cached = JSON.parse(raw);
        if (cached.expiresAt && now > cached.expiresAt) {
          localStorage.removeItem(storageKey);
        } else {
          validIndex.push(key);
        }
      }
    } catch (e) {
      localStorage.removeItem(storageKey);
    }
  });

  localStorage.setItem(CACHE_INDEX_KEY, JSON.stringify(validIndex));
}

// 輔助函式：新增索引
function addKeyToIndex(key) {
  const index = getCacheIndex();
  if (!index.includes(key)) {
    index.push(key);
    localStorage.setItem(CACHE_INDEX_KEY, JSON.stringify(index));
  }
}

// 輔助函式：移除索引
function removeKeyFromIndex(key) {
  const index = getCacheIndex();
  const filtered = index.filter((k) => k !== key);
  localStorage.setItem(CACHE_INDEX_KEY, JSON.stringify(filtered));
}
