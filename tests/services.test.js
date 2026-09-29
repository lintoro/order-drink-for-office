import { describe, it, expect, beforeEach } from 'vitest';
import { getGeminiApiKey, setGeminiApiKey } from '../src/services/geminiService';
import { getCustomStores, saveCustomStore } from '../src/utils/storage';
import { getFirebaseConfig, saveFirebaseConfig } from '../src/services/firebaseService';

// Node 環境 localStorage mock
const mockStorage = new Map();
globalThis.localStorage = {
  getItem: (k) => mockStorage.get(k) || null,
  setItem: (k, v) => mockStorage.set(k, String(v)),
  removeItem: (k) => mockStorage.delete(k),
  clear: () => mockStorage.clear(),
};

describe('P3 & P4 服務層與資料處理測試 (services.test.js)', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  // 1. Gemini API Key 存取測試
  describe('Gemini API Key 本機管理', () => {
    it('預設無設定時應為空字串', () => {
      expect(getGeminiApiKey()).toBe('');
    });

    it('設定金鑰後能正確讀取與清除', () => {
      setGeminiApiKey('AIzaSyTestKey12345');
      expect(getGeminiApiKey()).toBe('AIzaSyTestKey12345');

      setGeminiApiKey('');
      expect(getGeminiApiKey()).toBe('');
    });
  });

  // 2. 自訂常用店家庫存儲測試 (Phase 3 歷史店家庫)
  describe('常用店家庫 (Store Preset Archive)', () => {
    it('能夠儲存與檢索自訂店家菜單', () => {
      expect(getCustomStores().length).toBe(0);

      const store = {
        id: 'store_test_01',
        name: '清心福全',
        branchName: '南投南陽店',
        phone: '049-2236388',
        region: '中南部價',
        businessHours: '09:30 - 21:30',
        isOpenToday: true,
        categories: [{ name: '原茶類', items: [{ name: '烏龍綠茶', priceM: 30, priceL: 35 }] }],
      };

      saveCustomStore(store);
      const stores = getCustomStores();
      expect(stores.length).toBe(1);
      expect(stores[0].name).toBe('清心福全');
      expect(stores[0].branchName).toBe('南投南陽店');
      expect(stores[0].phone).toBe('049-2236388');
      expect(stores[0].region).toBe('中南部價');
      expect(stores[0].businessHours).toBe('09:30 - 21:30');
      expect(stores[0].categories[0].items[0].name).toBe('烏龍綠茶');
    });

    it('相同 ID 的店家儲存時應覆蓋更新而不重複累積', () => {
      const store1 = { id: 's1', name: '可不可', branchName: '台中一中店', region: '中南部價' };
      const store2 = { id: 's1', name: '可不可熟成紅茶 (已改版)', branchName: '台中一中店', region: '中南部價' };

      saveCustomStore(store1);
      saveCustomStore(store2);

      const stores = getCustomStores();
      expect(stores.length).toBe(1);
      expect(stores[0].name).toBe('可不可熟成紅茶 (已改版)');
    });

    it('南投在地資料庫包含完整分區、分店電話、地址與中南部定價', async () => {
      const { NANTOU_STORES } = await import('../src/data/nantouStores');
      expect(NANTOU_STORES.length).toBeGreaterThanOrEqual(15);

      // 檢查是否涵蓋各大區域與在地獨立品牌
      const areas = new Set(NANTOU_STORES.map((s) => s.area));
      expect(areas.has('南投獨立品牌')).toBe(true);
      expect(areas.has('南投市區')).toBe(true);
      expect(areas.has('南崗工業區')).toBe(true);
      expect(areas.has('中興新村')).toBe(true);
      expect(areas.has('草屯商圈')).toBe(true);

      // 檢查南投在地獨立/特色品牌
      const independentStores = NANTOU_STORES.filter((s) => s.area === '南投獨立品牌');
      expect(independentStores.length).toBe(10);
      const independentNames = independentStores.map((s) => s.name);
      expect(independentNames).toContain('黑眼荳荳');
      expect(independentNames).toContain('92度半咖啡');
      expect(independentNames).toContain('嶺陸手作茶飲');
      expect(independentNames).toContain('紅茶老爹');
      expect(independentNames).toContain('微川飲料製造');
      expect(independentNames).toContain('鮮奶奶');
      expect(independentNames).toContain('曾家純蔗糖');
      expect(independentNames).toContain('三泰子 SAN TAI ZI');
      expect(independentNames).toContain('米克Q手感茶飲');
      expect(independentNames).toContain('台茶1號');

      // 檢查以南投市區、南崗工業區為主的熱門連鎖分店
      const dezhengNantou = NANTOU_STORES.find((s) => s.name.includes('得正') && s.branchName.includes('民族'));
      expect(dezhengNantou).toBeDefined();
      expect(dezhengNantou.phone).toBe('049-2248612');

      const wanpoNantou = NANTOU_STORES.find((s) => s.name.includes('萬波') && s.branchName.includes('民族'));
      expect(wanpoNantou).toBeDefined();
      expect(wanpoNantou.phone).toBe('049-2202858');

      const guijiNangang = NANTOU_STORES.find((s) => s.name.includes('龜記') && s.branchName.includes('南崗'));
      expect(guijiNangang).toBeDefined();
      expect(guijiNangang.phone).toBe('049-2247999');

      const teatopNangang = NANTOU_STORES.find((s) => s.name.includes('TEA TOP') && s.branchName.includes('南崗'));
      expect(teatopNangang).toBeDefined();
      expect(teatopNangang.phone).toBe('049-2220901');

      const teatopMinzu = NANTOU_STORES.find((s) => s.name.includes('TEA TOP') && s.branchName.includes('民族'));
      expect(teatopMinzu).toBeDefined();

      const laolaiNantou = NANTOU_STORES.find((s) => s.name.includes('老賴') && s.branchName.includes('育樂'));
      expect(laolaiNantou).toBeDefined();
      expect(laolaiNantou.phone).toBe('049-2227678');

      const kebukeMinzu = NANTOU_STORES.find((s) => s.name.includes('可不可') && s.branchName.includes('民族'));
      expect(kebukeMinzu).toBeDefined();
      expect(kebukeMinzu.phone).toBe('049-2243321');

      // 檢查新增之連鎖熱門門市（鮮茶道、85度C、茶之魔手）
      const presoteaStores = NANTOU_STORES.filter((s) => s.name === '鮮茶道');
      expect(presoteaStores.length).toBeGreaterThanOrEqual(1);

      const store85c = NANTOU_STORES.filter((s) => s.name === '85度C');
      expect(store85c.length).toBeGreaterThanOrEqual(2);

      const chazhimoshou = NANTOU_STORES.filter((s) => s.name === '茶之魔手');
      expect(chazhimoshou.length).toBeGreaterThanOrEqual(2);

      // 檢查同品牌不同分店（如清心福全、50嵐、可不可）
      const chingshinStores = NANTOU_STORES.filter((s) => s.name === '清心福全');
      expect(chingshinStores.length).toBeGreaterThanOrEqual(3);

      const fiftyLanStores = NANTOU_STORES.filter((s) => s.name === '50嵐');
      expect(fiftyLanStores.length).toBeGreaterThanOrEqual(2);

      // 檢查水云茶堂、吳家紅茶冰、紅茶老爹、紅茶媽媽
      const shuiyunStores = NANTOU_STORES.filter((s) => s.name.includes('水云茶堂'));
      expect(shuiyunStores.length).toBeGreaterThanOrEqual(2);
      expect(shuiyunStores.some((s) => s.branchName.includes('三和'))).toBe(true);

      const wujiaStores = NANTOU_STORES.filter((s) => s.name.includes('吳家紅茶冰'));
      expect(wujiaStores.length).toBeGreaterThanOrEqual(1);
      expect(wujiaStores[0].branchName).toBe('南投大同店');

      const mamateaStores = NANTOU_STORES.filter((s) => s.name.includes('紅茶媽媽'));
      expect(mamateaStores.length).toBeGreaterThanOrEqual(2);
      const mamateaNangang = mamateaStores.find((s) => s.area === '南崗工業區');
      expect(mamateaNangang).toBeDefined();
      expect(mamateaNangang.phone).toBe('049-2255462');

      const mrblackteaStore = NANTOU_STORES.find((s) => s.name.includes('紅茶老爹'));
      expect(mrblackteaStore).toBeDefined();
      expect(mrblackteaStore.phone).toBe('049-2233231');

      // 驗證每間門市皆具備必要欄位與 049 或 09 手機電話
      NANTOU_STORES.forEach((store) => {
        expect(store.phone).toMatch(/^(049-|09)/);
        expect(store.region).toBe('中南部價');
        expect(store.categories.length).toBeGreaterThan(0);
      });
    });
  });

  // 3. Firebase 雲端配置儲存 (Phase 4 永不休眠雲端同步)
  describe('Firebase 雲端配置 (Firestore Sync)', () => {
    it('可正確保存並讀取 Firebase 配置物件', () => {
      const config = {
        apiKey: 'fake_fb_key',
        projectId: 'drink-order-office',
      };
      saveFirebaseConfig(config);
      const saved = getFirebaseConfig();
      expect(saved.projectId).toBe('drink-order-office');
      expect(saved.apiKey).toBe('fake_fb_key');

      saveFirebaseConfig(null);
      expect(getFirebaseConfig()).toBeNull();
    });
  });

  // 4. 雙網址架構驗證
  describe('雙網址 Token 授權解析', () => {
    it('應能區分公開填單與主揪 Token 網址', () => {
      const orderId = 'grp_12345';
      const adminToken = 'adm_abcdef6789';

      const publicQuery = `?order=${orderId}`;
      const adminQuery = `?order=${orderId}&token=${adminToken}`;

      const paramsPub = new URLSearchParams(publicQuery);
      const paramsAdm = new URLSearchParams(adminQuery);

      expect(paramsPub.get('order')).toBe(orderId);
      expect(paramsPub.get('token')).toBeNull();

      expect(paramsAdm.get('order')).toBe(orderId);
      expect(paramsAdm.get('token')).toBe(adminToken);
    });
  });

  // 5. 文字 / Google 地圖連結菜單解析防呆測試
  describe('parseMenuFromTextOrUrl - 連結與文字菜單解析', () => {
    it('輸入空白或未填寫時應拋出明確錯誤提示', async () => {
      const { parseMenuFromTextOrUrl } = await import('../src/services/geminiService');
      await expect(parseMenuFromTextOrUrl('')).rejects.toThrow('請輸入 Google 地圖連結、店家名稱或菜單文字');
      await expect(parseMenuFromTextOrUrl('   ')).rejects.toThrow('請輸入 Google 地圖連結、店家名稱或菜單文字');
    });

    it('未設定 API Key 與 Proxy 時應提示需要設定', async () => {
      const { parseMenuFromTextOrUrl } = await import('../src/services/geminiService');
      await expect(parseMenuFromTextOrUrl('得正 台北南港店', '')).rejects.toThrow('Google Gemini API Key');
    });
  });

  // 6. 方案 A：本地菜單快取機制測試 (menuCache.js)
  describe('方案 A：本地菜單快取 (menuCache)', () => {
    it('能正確寫入並讀取快取，支援大小寫與多餘空格標準化', async () => {
      const { getMenuFromCache, saveMenuToCache } = await import('../src/utils/menuCache');

      const menuMock = {
        storeName: 'UG 樂己',
        branchName: '南投復興店',
        phone: '049-2245678',
        region: '中南部價',
        categories: [{ name: '原茶', items: [{ name: '三蜜桂香茶', priceM: 40, priceL: 45 }] }],
      };

      saveMenuToCache('UG 樂己 南投復興店', menuMock);

      // 測試不同空白或大小寫皆能命中
      const cached1 = getMenuFromCache('  ug 樂己   南投復興店 ');
      expect(cached1).not.toBeNull();
      expect(cached1.storeName).toBe('UG 樂己');
      expect(cached1._fromCache).toBe(true);

      // 測試未快取的店家回傳 null
      const nonCached = getMenuFromCache('不存在的店家 123');
      expect(nonCached).toBeNull();
    });

    it('快取過期時自動清除並回傳 null', async () => {
      const { getMenuFromCache, saveMenuToCache } = await import('../src/utils/menuCache');

      const menuMock = { storeName: '測試過期店' };
      // 傳入 -1 天表示已過期
      saveMenuToCache('過期店', menuMock, -1);

      const cached = getMenuFromCache('過期店');
      expect(cached).toBeNull();
    });

    it('支援手動刪除特定店家的本地快取 (強制刷新)', async () => {
      const { getMenuFromCache, saveMenuToCache, removeMenuFromCache } = await import('../src/utils/menuCache');

      saveMenuToCache('待清除店', { storeName: '待清除店' });
      expect(getMenuFromCache('待清除店')).not.toBeNull();

      removeMenuFromCache('待清除店');
      expect(getMenuFromCache('待清除店')).toBeNull();
    });
  });

  // 7. 方案 B：Cloudflare Worker 代理設定測試
  describe('方案 B：Cloudflare Worker 代理中繼設定', () => {
    it('能正確儲存與讀取 Worker 代理網址', async () => {
      const { getWorkerProxyUrl, setWorkerProxyUrl } = await import('../src/services/geminiService');

      expect(getWorkerProxyUrl()).toBe('');

      setWorkerProxyUrl('https://drink-order-proxy.test.workers.dev/api/gemini');
      expect(getWorkerProxyUrl()).toBe('https://drink-order-proxy.test.workers.dev/api/gemini');

      setWorkerProxyUrl('');
      expect(getWorkerProxyUrl()).toBe('');
    });
  });

  // 8. 門市維護：歇業與隱藏門市管理測試
  describe('門市維護 (歇業與隱藏門市)', () => {
    it('能夠隱藏特定門市並從隱藏清單恢復', async () => {
      const { getHiddenStoreIds, hideStore, unhideStore } = await import('../src/utils/storage');

      expect(getHiddenStoreIds()).toEqual([]);

      hideStore('store_closed_01');
      expect(getHiddenStoreIds()).toContain('store_closed_01');

      hideStore('store_closed_02');
      expect(getHiddenStoreIds()).toHaveLength(2);

      unhideStore('store_closed_01');
      expect(getHiddenStoreIds()).not.toContain('store_closed_01');
      expect(getHiddenStoreIds()).toContain('store_closed_02');
    });
  });
});
