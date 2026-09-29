/**
 * 辦公室訂飲料 - 核心商業計算與資料處理純函式 (calc.js)
 * 遵循 plan_order drink for office.md 與 AGENTS.md 業務防呆規範
 */

/**
 * 1. 外送費無條件進位平攤 (Ceil Rounding)
 * @param {number} totalDeliveryFee - 全單總外送費
 * @param {number} totalParticipants - 點餐總人數 (以人頭數計算)
 * @returns {{ perPersonFee: number, totalCollected: number, surplus: number }}
 */
export function calculateDeliveryFee(totalDeliveryFee = 0, totalParticipants = 0) {
  const fee = Math.max(0, Number(totalDeliveryFee) || 0);
  const people = Math.max(0, Number(totalParticipants) || 0);

  if (fee === 0 || people === 0) {
    return {
      perPersonFee: 0,
      totalCollected: 0,
      surplus: 0,
    };
  }

  // 無條件進位至整數元 (實體收現不收小數)
  const perPersonFee = Math.ceil(fee / people);
  const totalCollected = perPersonFee * people;
  const surplus = totalCollected - fee; // 溢收零錢

  return {
    perPersonFee,
    totalCollected,
    surplus,
  };
}

/**
 * 2. 計算單杯飲料總價 (基準價 + 加料價)
 * @param {number} basePrice - 飲料基礎價格
 * @param {Array<{ name: string, price: number }>} toppings - 選取的加料清單
 * @returns {number}
 */
export function calculateItemTotal(basePrice = 0, toppings = []) {
  const base = Math.max(0, Number(basePrice) || 0);
  const toppingsTotal = (toppings || []).reduce((sum, top) => sum + (Number(top.price) || 0), 0);
  return base + toppingsTotal;
}

/**
 * 3. 同暱稱自動覆蓋邏輯 (Overwrite by Nickname)
 * @param {Array<object>} existingOrders - 當前訂單清單
 * @param {object} newOrder - 新提交的訂單資料 (需包含 userName)
 * @returns {Array<object>} 更新後的訂單清單
 */
export function upsertUserOrder(existingOrders = [], newOrder) {
  if (!newOrder || !newOrder.userName || !newOrder.userName.trim()) {
    throw new Error('訂單必須包含同仁暱稱');
  }

  const trimmedName = newOrder.userName.trim();
  const normalizedOrder = {
    ...newOrder,
    userName: trimmedName,
    updatedAt: new Date().toISOString(),
  };

  const index = existingOrders.findIndex(
    (order) => order.userName.toLowerCase() === trimmedName.toLowerCase()
  );

  if (index !== -1) {
    // 存在同名訂單 -> 直接覆蓋更新 (保留既有的付款/取餐註記若有需要，或由新單覆寫)
    const updated = [...existingOrders];
    updated[index] = {
      ...updated[index],
      ...normalizedOrder,
      // 若改單，取餐狀態通常重設為未取，保留原付款狀態或依設定
      isPicked: false,
    };
    return updated;
  }

  // 新同仁訂單 -> 追加至尾端
  return [
    ...existingOrders,
    {
      id: 'ord_' + Math.random().toString(36).substring(2, 9),
      isPaid: false,
      isPicked: false,
      createdAt: new Date().toISOString(),
      ...normalizedOrder,
    },
  ];
}

/**
 * 4. 電話下單彙整文字聚合器 (1-A 規格合併)
 * 將多筆訂單依「品項名稱 + 規格容量 + 甜度冰塊加料」聚合計算杯數
 * @param {string} storeName - 店家名稱
 * @param {Array<object>} orders - 點餐清單
 * @param {number} totalDeliveryFee - 外送費
 * @param {object} [extraInfo={}] - 額外分店資訊 (branchName, phone, region, businessHours, isOpenToday)
 * @returns {string} 格式化可一鍵複製的電話下單文字
 */
export function aggregateOrderSummary(storeName = '手搖飲料', orders = [], totalDeliveryFee = 0, extraInfo = {}) {
  const fullStoreTitle = extraInfo.branchName ? `${storeName} (${extraInfo.branchName})` : storeName;

  if (!orders || orders.length === 0) {
    let emptyLines = [`【${fullStoreTitle} - 電話下單彙整單】`];
    if (extraInfo.phone) emptyLines.push(`分店電話：${extraInfo.phone}`);
    if (extraInfo.region) emptyLines.push(`定價分區：${extraInfo.region}`);
    emptyLines.push('目前尚無任何點餐資料。');
    return emptyLines.join('\n');
  }

  // 1. 依「品項名稱 + 容量」歸類
  const itemMap = new Map();
  let totalCups = 0;
  let totalDrinkCost = 0;

  orders.forEach((order) => {
    (order.items || []).forEach((item) => {
      totalCups += 1;
      const itemTotal = calculateItemTotal(item.price, item.toppings);
      totalDrinkCost += itemTotal;

      const mainKey = `${item.itemName} (${item.size || '大杯'})`;
      const toppingsStr = (item.toppings || []).map((t) => t.name).join('+');
      const specKey = `${item.ice || '正常冰'} / ${item.sugar || '正常糖'}${toppingsStr ? ` + ${toppingsStr}` : ''}`;

      if (!itemMap.has(mainKey)) {
        itemMap.set(mainKey, new Map());
      }
      const specMap = itemMap.get(mainKey);
      specMap.set(specKey, (specMap.get(specKey) || 0) + 1);
    });
  });

  // 2. 組裝清單文字
  let lines = [];
  lines.push(`【${fullStoreTitle} - 電話下單彙整單】`);
  if (extraInfo.phone) {
    lines.push(`分店電話：${extraInfo.phone}`);
  }
  if (extraInfo.region) {
    lines.push(`定價分區：${extraInfo.region}`);
  }
  if (extraInfo.businessHours) {
    lines.push(`營業狀態：${extraInfo.businessHours}`);
  }
  lines.push(`下單時間：${new Date().toLocaleTimeString('zh-TW', { hour: '2-digit', minute: '2-digit' })}`);
  lines.push('----------------------------------------');

  let itemIndex = 1;
  itemMap.forEach((specMap, mainKey) => {
    const itemSubtotalCups = Array.from(specMap.values()).reduce((a, b) => a + b, 0);
    lines.push(`${itemIndex}. ${mainKey} (共 ${itemSubtotalCups} 杯)`);
    specMap.forEach((count, spec) => {
      lines.push(`   - ${spec} x${count}`);
    });
    itemIndex += 1;
  });

  const finalCost = totalDrinkCost + Number(totalDeliveryFee || 0);

  lines.push('----------------------------------------');
  lines.push(`總計杯數：${totalCups} 杯 ｜ 點餐人數：${orders.length} 人`);
  lines.push(`外送費：$${totalDeliveryFee} ｜ 預估全單應付總額：$${finalCost}`);

  return lines.join('\n');
}

/**
 * 5. 產生高強度隨機 Admin Token (用於無密碼主揪後台授權)
 * @returns {string}
 */
export function generateAdminToken() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let token = 'adm_';
  for (let i = 0; i < 24; i++) {
    token += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return token;
}
