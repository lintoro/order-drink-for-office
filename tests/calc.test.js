import { describe, it, expect } from 'vitest';
import {
  calculateDeliveryFee,
  calculateItemTotal,
  upsertUserOrder,
  aggregateOrderSummary,
  generateAdminToken,
} from '../src/utils/calc.js';

describe('核心計算與業務防呆單元測試 (calc.test.js)', () => {
  // 1. 外送費無條件進位平攤測試
  describe('calculateDeliveryFee - 外送費平攤', () => {
    it('規格書案例：外送費 40 元由 3 人平攤，每人應收 14 元，溢收 2 元', () => {
      const result = calculateDeliveryFee(40, 3);
      expect(result.perPersonFee).toBe(14);
      expect(result.totalCollected).toBe(42);
      expect(result.surplus).toBe(2);
    });

    it('免外送費 (0 元) 時，每人應收 0 元，溢收 0 元', () => {
      const result = calculateDeliveryFee(0, 5);
      expect(result.perPersonFee).toBe(0);
      expect(result.totalCollected).toBe(0);
      expect(result.surplus).toBe(0);
    });

    it('剛好整除時 (外送費 60 元由 3 人平攤)，每人收 20 元，溢收 0 元', () => {
      const result = calculateDeliveryFee(60, 3);
      expect(result.perPersonFee).toBe(20);
      expect(result.totalCollected).toBe(60);
      expect(result.surplus).toBe(0);
    });

    it('邊界防呆：人數為 0 時，不發生除以零錯誤，回傳 0', () => {
      const result = calculateDeliveryFee(50, 0);
      expect(result.perPersonFee).toBe(0);
      expect(result.surplus).toBe(0);
    });
  });

  // 2. 飲料價格加料計算
  describe('calculateItemTotal - 飲品與加料價格', () => {
    it('基本茶飲 35 元，無加料應為 35 元', () => {
      expect(calculateItemTotal(35, [])).toBe(35);
    });

    it('鮮奶茶 60 元 + 珍珠 10 元 + 椰果 10 元 = 80 元', () => {
      const toppings = [
        { name: '珍珠', price: 10 },
        { name: '椰果', price: 10 },
      ];
      expect(calculateItemTotal(60, toppings)).toBe(80);
    });
  });

  // 3. 同暱稱自動覆蓋邏輯
  describe('upsertUserOrder - 同暱稱覆蓋防呆', () => {
    it('新同仁送單時，訂單數增加', () => {
      const orders = [];
      const order1 = {
        userName: '王小美',
        items: [{ itemName: '春烏龍', price: 35 }],
      };
      const result = upsertUserOrder(orders, order1);
      expect(result.length).toBe(1);
      expect(result[0].userName).toBe('王小美');
    });

    it('同名同仁「王小美」修改重新送單時，覆蓋舊單且長度不增加', () => {
      const initialOrders = [
        {
          id: 'ord_1',
          userName: '王小美',
          items: [{ itemName: '春烏龍', price: 35 }],
          isPaid: false,
          isPicked: true,
        },
      ];

      const newOrder = {
        userName: '王小美',
        items: [{ itemName: '焙烏龍鮮奶茶', price: 65 }],
      };

      const result = upsertUserOrder(initialOrders, newOrder);
      expect(result.length).toBe(1);
      expect(result[0].items[0].itemName).toBe('焙烏龍鮮奶茶');
      expect(result[0].items[0].price).toBe(65);
      // 改單後已取餐狀態應重設
      expect(result[0].isPicked).toBe(false);
    });
  });

  // 4. 電話下單彙整文字聚合
  describe('aggregateOrderSummary - 下單彙整文字', () => {
    it('聚合相同品項與相同規格至同一行並計算杯數', () => {
      const orders = [
        {
          userName: '小美',
          items: [
            {
              itemName: '焙烏龍鮮奶茶',
              size: '大杯',
              price: 60,
              ice: '微冰',
              sugar: '半糖',
              toppings: [{ name: '珍珠', price: 10 }],
            },
          ],
        },
        {
          userName: '阿明',
          items: [
            {
              itemName: '焙烏龍鮮奶茶',
              size: '大杯',
              price: 60,
              ice: '微冰',
              sugar: '半糖',
              toppings: [{ name: '珍珠', price: 10 }],
            },
          ],
        },
        {
          userName: '主管',
          items: [
            {
              itemName: '春烏龍',
              size: '中杯',
              price: 35,
              ice: '去冰',
              sugar: '無糖',
              toppings: [],
            },
          ],
        },
      ];

      const summary = aggregateOrderSummary('得正', orders, 40);

      expect(summary).toContain('【得正 - 電話下單彙整單】');
      expect(summary).toContain('焙烏龍鮮奶茶 (大杯) (共 2 杯)');
      expect(summary).toContain('微冰 / 半糖 + 珍珠 x2');
      expect(summary).toContain('春烏龍 (中杯) (共 1 杯)');
      expect(summary).toContain('總計杯數：3 杯 ｜ 點餐人數：3 人');
      expect(summary).toContain('外送費：$40 ｜ 預估全單應付總額：$215');
    });

    it('支援包含分店名稱、電話、定價分區與營業狀態之下單彙整', () => {
      const orders = [
        {
          userName: '同事A',
          items: [{ itemName: '烏龍綠茶', size: '大杯', price: 35, ice: '微冰', sugar: '微糖' }],
        },
      ];
      const extraInfo = {
        branchName: '南投南陽店',
        phone: '049-2236388',
        region: '中南部價',
        businessHours: '09:30 - 21:30',
        isOpenToday: true,
      };

      const summary = aggregateOrderSummary('清心福全', orders, 0, extraInfo);
      expect(summary).toContain('【清心福全 (南投南陽店) - 電話下單彙整單】');
      expect(summary).toContain('分店電話：049-2236388');
      expect(summary).toContain('定價分區：中南部價');
      expect(summary).toContain('營業狀態：09:30 - 21:30');
      expect(summary).toContain('烏龍綠茶 (大杯) (共 1 杯)');
    });
  });

  // 5. Admin Token
  describe('generateAdminToken', () => {
    it('產生隨機字串且長度符合安全規範', () => {
      const token1 = generateAdminToken();
      const token2 = generateAdminToken();
      expect(token1.startsWith('adm_')).toBe(true);
      expect(token1.length).toBeGreaterThan(20);
      expect(token1).not.toBe(token2);
    });
  });
});
