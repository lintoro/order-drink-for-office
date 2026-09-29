/**
 * 預設常用店家菜單資料 (可直接開團測試，亦支援未來 AI 辨識後新增擴充)
 */
export const DEFAULT_STORES = [
  {
    id: 'store_dezheng',
    name: '得正 Oolong TEA Project',
    tagline: '專注烏龍茶焙火香氣',
    categories: [
      {
        name: '原茶系列',
        items: [
          { id: 'dz_1', name: '春烏龍', priceM: 30, priceL: 35 },
          { id: 'dz_2', name: '焙烏龍', priceM: 30, priceL: 35 },
          { id: 'dz_3', name: '紅茶', priceM: 30, priceL: 35 },
        ]
      },
      {
        name: '鮮奶茶系列',
        items: [
          { id: 'dz_4', name: '春烏龍鮮奶', priceM: 55, priceL: 65 },
          { id: 'dz_5', name: '焙烏龍鮮奶', priceM: 55, priceL: 65 },
          { id: 'dz_6', name: '紅茶鮮奶', priceM: 55, priceL: 65 },
        ]
      },
      {
        name: '芝士奶蓋系列',
        items: [
          { id: 'dz_7', name: '芝士春烏龍', priceM: 50, priceL: 60 },
          { id: 'dz_8', name: '芝士焙烏龍', priceM: 50, priceL: 60 },
        ]
      }
    ],
    toppings: [
      { id: 'top_1', name: '黃金珍珠', price: 10 },
      { id: 'top_2', name: '焙烏龍茶凍', price: 10 },
      { id: 'top_3', name: '雙料 (珍珠+茶凍)', price: 15 },
    ]
  },
  {
    id: 'store_50lan',
    name: '50嵐',
    tagline: '經典手搖台灣國民茶飲',
    categories: [
      {
        name: '找好茶',
        items: [
          { id: '50_1', name: '四季春茶', priceM: 30, priceL: 35 },
          { id: '50_2', name: '阿薩姆紅茶', priceM: 30, priceL: 35 },
          { id: '50_3', name: '茉莉綠茶', priceM: 30, priceL: 35 },
        ]
      },
      {
        name: '找奶茶',
        items: [
          { id: '50_4', name: '波霸奶茶', priceM: 50, priceL: 60 },
          { id: '50_5', name: '1號 (四季春+珍波椰)', priceM: 45, priceL: 55 },
          { id: '50_6', name: '冰淇淋紅茶', priceM: 50, priceL: 60 },
        ]
      }
    ],
    toppings: [
      { id: '50_top_1', name: '波霸', price: 10 },
      { id: '50_top_2', name: '珍珠', price: 10 },
      { id: '50_top_3', name: '椰果', price: 10 },
    ]
  },
  {
    id: 'store_macu',
    name: '麻古茶坊 MACU',
    tagline: '新鮮果粒茶與芝芝系列',
    categories: [
      {
        name: '果粒鮮果茶',
        items: [
          { id: 'mc_1', name: '柳橙果粒茶', priceM: 65, priceL: 75 },
          { id: 'mc_2', name: '葡萄柚果粒茶', priceM: 65, priceL: 75 },
        ]
      },
      {
        name: '原味純茶',
        items: [
          { id: 'mc_3', name: '高山金萱茶', priceM: 30, priceL: 35 },
          { id: 'mc_4', name: '錫蘭紅茶', priceM: 30, priceL: 35 },
        ]
      }
    ],
    toppings: [
      { id: 'mc_top_1', name: '波霸', price: 10 },
      { id: 'mc_top_2', name: '椰果', price: 10 },
      { id: 'mc_top_3', name: '寒天凍', price: 10 },
    ]
  }
];
