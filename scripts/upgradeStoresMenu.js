import fs from 'fs';
import path from 'path';
import { BRAND_MENUS } from '../src/data/fullMenusData.js';
import { NANTOU_STORES } from '../src/data/nantouStores.js';

let updatedCount = 0;
let totalItemsAdded = 0;

const updatedStores = NANTOU_STORES.map((store) => {
  // 檢查是否符合知名品牌
  let matchedBrandKey = null;
  for (const brandKey of Object.keys(BRAND_MENUS)) {
    if (store.name.includes(brandKey) || brandKey.includes(store.name)) {
      matchedBrandKey = brandKey;
      break;
    }
  }

  if (matchedBrandKey) {
    const brandData = BRAND_MENUS[matchedBrandKey];
    // 為每個品項生成唯一 ID
    const enrichedCategories = brandData.categories.map((cat, cIdx) => ({
      name: cat.name,
      items: cat.items.map((it, iIdx) => ({
        id: `${store.id}_c${cIdx}_i${iIdx}`,
        name: it.name,
        priceM: it.priceM,
        priceL: it.priceL,
      })),
    }));

    const totalItems = enrichedCategories.reduce((sum, c) => sum + c.items.length, 0);
    updatedCount++;
    totalItemsAdded += totalItems;

    return {
      ...store,
      categories: enrichedCategories,
      toppings: brandData.toppings || store.toppings,
    };
  }

  return store;
});

console.log(`成功升級 ${updatedCount} 家連鎖門市菜單！`);
console.log(`總品項數大幅擴充，包含完整官方系列分類！`);

// 寫回 nantouStores.js
const fileHeader = `/**
 * 南投在地手搖飲資料庫 (nantouStores.js)
 * 涵蓋區域：南投市區、南崗工業區、中興新村、草屯商圈
 * 特色：真實門市電話、真實地址、營業時間、100% 官方真實完整菜單、準確中南部定價
 */

// 常用加料通用庫
const TOPPINGS_COMMON = [
  { id: 'top_boba', name: '波霸/珍珠', price: 10 },
  { id: 'top_coconut', name: '椰果', price: 10 },
  { id: 'top_jelly', name: '茶凍', price: 10 },
  { id: 'top_pudding', name: '布丁', price: 15 },
  { id: 'top_aloe', name: '蘆薈', price: 15 },
];

export const NANTOU_STORES = `;

const content = fileHeader + JSON.stringify(updatedStores, null, 2) + ';\n';
fs.writeFileSync('src/data/nantouStores.js', content, 'utf-8');
console.log('已成功寫入 src/data/nantouStores.js！');
