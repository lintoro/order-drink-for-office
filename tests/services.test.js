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

    it('未設定 API Key 時應提示需要輸入金鑰', async () => {
      const { parseMenuFromTextOrUrl } = await import('../src/services/geminiService');
      await expect(parseMenuFromTextOrUrl('得正 台北南港店', '')).rejects.toThrow('Google Gemini API Key');
    });
  });
});
