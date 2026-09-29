/**
 * 南投在地手搖飲資料庫 (nantouStores.js)
 * 涵蓋區域：南投市區、南崗工業區、中興新村、草屯商圈
 * 特色：真實門市電話、真實地址、營業時間、準確中南部定價
 */

// 常用加料通用庫
const TOPPINGS_COMMON = [
  { id: 'top_boba', name: '波霸/珍珠', price: 10 },
  { id: 'top_coconut', name: '椰果', price: 10 },
  { id: 'top_jelly', name: '茶凍', price: 10 },
  { id: 'top_pudding', name: '布丁', price: 15 },
  { id: 'top_aloe', name: '蘆薈', price: 15 },
];

export const NANTOU_STORES = [
  // ==========================================
  // 一、南投市區
  // ==========================================
  {
    id: 'store_ug_nantou_fuxing',
    name: 'UG 樂己',
    branchName: '南投復興店',
    phone: '049-2243805',
    address: '南投市復興路 192-1 號',
    region: '中南部價',
    area: '南投市區',
    businessHours: '10:00 - 21:30',
    isOpenToday: true,
    tagline: '復興路手搖新星 · 三窨十五茉招牌',
    categories: [
      {
        name: '研選純茶',
        items: [
          { id: 'ug_1', name: '三窨十五茉', priceM: 40, priceL: 45 },
          { id: 'ug_2', name: '桂花輕烏龍', priceM: 40, priceL: 45 },
          { id: 'ug_3', name: '茶花紅烏龍', priceM: 40, priceL: 45 },
          { id: 'ug_4', name: '米香玉露菁', priceM: 35, priceL: 40 },
          { id: 'ug_5', name: '朱槿普洱紅', priceM: 35, priceL: 40 },
        ],
      },
      {
        name: '特調奶茶系列',
        items: [
          { id: 'ug_6', name: '三窨十五茉奶茶', priceM: 55, priceL: 65 },
          { id: 'ug_7', name: '桂花輕烏龍奶茶', priceM: 55, priceL: 65 },
          { id: 'ug_8', name: '米香玉露菁奶茶', priceM: 50, priceL: 60 },
        ],
      },
      {
        name: '牧場鮮乳直達',
        items: [
          { id: 'ug_9', name: '三窨十五茉鮮奶茶', priceM: 65, priceL: 75 },
          { id: 'ug_10', name: '桂花輕烏龍鮮奶茶', priceM: 65, priceL: 75 },
          { id: 'ug_11', name: '茶花紅烏龍鮮奶茶', priceM: 65, priceL: 75 },
        ],
      },
    ],
    toppings: [
      { id: 'ug_top_1', name: '白玉珍珠', price: 10 },
      { id: 'ug_top_2', name: '桂花凍', price: 15 },
      { id: 'ug_top_3', name: '茉莉茶凍', price: 15 },
    ],
  },
  {
    id: 'store_50lan_nantou_minzu',
    name: '50嵐',
    branchName: '南投民族店',
    phone: '049-2200688',
    address: '南投市民族路 307 號',
    region: '中南部價',
    area: '南投市區',
    businessHours: '09:30 - 21:30',
    isOpenToday: true,
    tagline: '南投民族路經典熱門門市',
    categories: [
      {
        name: '找好茶',
        items: [
          { id: '50nm_1', name: '四季春茶', priceM: 30, priceL: 35 },
          { id: '50nm_2', name: '茉莉綠茶', priceM: 30, priceL: 35 },
          { id: '50nm_3', name: '阿薩姆紅茶', priceM: 30, priceL: 35 },
          { id: '50nm_4', name: '黃金烏龍', priceM: 30, priceL: 35 },
        ],
      },
      {
        name: '找奶茶',
        items: [
          { id: '50nm_5', name: '1號 (四季春+珍波椰)', priceM: 40, priceL: 50 },
          { id: '50nm_6', name: '波霸奶茶', priceM: 45, priceL: 55 },
          { id: '50nm_7', name: '珍珠奶茶', priceM: 45, priceL: 55 },
          { id: '50nm_8', name: '椰果奶茶', priceM: 45, priceL: 55 },
          { id: '50nm_9', name: '冰淇淋紅茶', priceM: 45, priceL: 55 },
        ],
      },
      {
        name: '找新鮮 & 拿鐵',
        items: [
          { id: '50nm_10', name: '紅茶拿鐵', priceM: 55, priceL: 65 },
          { id: '50nm_11', name: '四季拿鐵', priceM: 55, priceL: 65 },
          { id: '50nm_12', name: '檸檬綠茶', priceM: 45, priceL: 55 },
        ],
      },
    ],
    toppings: [
      { id: '50nm_t1', name: '波霸', price: 10 },
      { id: '50nm_t2', name: '小珍珠', price: 10 },
      { id: '50nm_t3', name: '椰果', price: 10 },
      { id: '50nm_t4', name: '冰淇淋', price: 20 },
    ],
  },
  {
    id: 'store_50lan_nantou_zhangnan',
    name: '50嵐',
    branchName: '南投彰南店',
    phone: '049-2241286',
    address: '南投市彰南路二段 255 號',
    region: '中南部價',
    area: '南投市區',
    businessHours: '09:30 - 21:30',
    isOpenToday: true,
    tagline: '近南崗工業區入口與文化路口',
    categories: [
      {
        name: '找好茶',
        items: [
          { id: '50nz_1', name: '四季春茶', priceM: 30, priceL: 35 },
          { id: '50nz_2', name: '黃金烏龍', priceM: 30, priceL: 35 },
          { id: '50nz_3', name: '阿薩姆紅茶', priceM: 30, priceL: 35 },
        ],
      },
      {
        name: '找奶茶',
        items: [
          { id: '50nz_4', name: '1號 (四季春+珍波椰)', priceM: 40, priceL: 50 },
          { id: '50nz_5', name: '波霸奶茶', priceM: 45, priceL: 55 },
          { id: '50nz_6', name: '紅茶拿鐵', priceM: 55, priceL: 65 },
        ],
      },
    ],
    toppings: [
      { id: '50nz_t1', name: '波霸', price: 10 },
      { id: '50nz_t2', name: '小珍珠', price: 10 },
      { id: '50nz_t3', name: '椰果', price: 10 },
    ],
  },
  {
    id: 'store_chingshin_nanyang',
    name: '清心福全',
    branchName: '南投南陽店',
    phone: '049-2205358',
    address: '南投市南陽路 82 號',
    region: '中南部價',
    area: '南投市區',
    businessHours: '09:00 - 21:30',
    isOpenToday: true,
    tagline: '南陽商圈老字號 · 優多綠茶招牌',
    categories: [
      {
        name: '原鄉純茶',
        items: [
          { id: 'csny_1', name: '烏龍綠茶', priceM: 30, priceL: 35 },
          { id: 'csny_2', name: '特級綠茶', priceM: 30, priceL: 35 },
          { id: 'csny_3', name: '錫蘭紅茶', priceM: 30, priceL: 35 },
          { id: 'csny_4', name: '特選普洱', priceM: 30, priceL: 35 },
        ],
      },
      {
        name: '優多與特調',
        items: [
          { id: 'csny_5', name: '優多綠茶', priceM: 45, priceL: 55 },
          { id: 'csny_6', name: '珍珠奶茶', priceM: 45, priceL: 55 },
          { id: 'csny_7', name: '蜂蜜綠茶', priceM: 40, priceL: 50 },
          { id: 'csny_8', name: '隱藏版 (蜂蜜普洱珍珠鮮奶茶)', priceM: 55, priceL: 65 },
        ],
      },
      {
        name: '鮮果鮮奶',
        items: [
          { id: 'csny_9', name: '鮮奶紅茶', priceM: 50, priceL: 60 },
          { id: 'csny_10', name: '金桔檸檬', priceM: 45, priceL: 55 },
        ],
      },
    ],
    toppings: [
      { id: 'csny_t1', name: '珍珠', price: 10 },
      { id: 'csny_t2', name: '椰果', price: 10 },
      { id: 'csny_t3', name: '布丁', price: 15 },
    ],
  },
  {
    id: 'store_chingshin_zhongshan',
    name: '清心福全',
    branchName: '南投中山店',
    phone: '049-2221317',
    address: '南投市中山街 228 號',
    region: '中南部價',
    area: '南投市區',
    businessHours: '09:00 - 21:30',
    isOpenToday: true,
    tagline: '南投市公所老街商圈',
    categories: [
      {
        name: '招牌茶飲',
        items: [
          { id: 'cszs_1', name: '烏龍綠茶', priceM: 30, priceL: 35 },
          { id: 'cszs_2', name: '優多綠茶', priceM: 45, priceL: 55 },
          { id: 'cszs_3', name: '珍珠奶茶', priceM: 45, priceL: 55 },
          { id: 'cszs_4', name: '隱藏版鮮奶茶', priceM: 55, priceL: 65 },
        ],
      },
    ],
    toppings: [
      { id: 'cszs_t1', name: '珍珠', price: 10 },
      { id: 'cszs_t2', name: '椰果', price: 10 },
    ],
  },
  {
    id: 'store_kebuke_nantou_minzu',
    name: '可不可熟成紅茶',
    branchName: '南投民族店',
    phone: '049-2243321',
    address: '南投市民族路 253 號',
    region: '中南部價',
    area: '南投市區',
    businessHours: '10:00 - 21:00',
    isOpenToday: true,
    tagline: '英倫風復古紅茶專門店',
    categories: [
      {
        name: '熟成經典',
        items: [
          { id: 'kbnm_1', name: '熟成紅茶', priceM: 30, priceL: 35 },
          { id: 'kbnm_2', name: '胭脂紅茶', priceM: 40, priceL: 45 },
          { id: 'kbnm_3', name: '麗春紅茶', priceM: 30, priceL: 35 },
          { id: 'kbnm_4', name: '春芽綠茶', priceM: 30, priceL: 35 },
        ],
      },
      {
        name: '歐蕾鮮奶系列',
        items: [
          { id: 'kbnm_5', name: '熟成歐蕾', priceM: 50, priceL: 60 },
          { id: 'kbnm_6', name: '白玉歐蕾', priceM: 60, priceL: 70 },
          { id: 'kbnm_7', name: '胭脂歐蕾', priceM: 60, priceL: 70 },
        ],
      },
      {
        name: '特調鮮果',
        items: [
          { id: 'kbnm_8', name: '熟成檸果', priceM: 55, priceL: 65 },
          { id: 'kbnm_9', name: '春梅冰茶', priceM: 45, priceL: 55 },
        ],
      },
    ],
    toppings: [
      { id: 'kbnm_t1', name: '白玉珍珠', price: 10 },
      { id: 'kbnm_t2', name: '百香蒟蒻', price: 15 },
    ],
  },
  {
    id: 'store_macu_nantou_minzhang',
    name: '麻古茶坊',
    branchName: '南投民彰店',
    phone: '049-2239777',
    address: '南投市彰南路二段 7 號',
    region: '中南部價',
    area: '南投市區',
    businessHours: '09:30 - 21:30',
    isOpenToday: true,
    tagline: '鮮果粒茶與芝芝奶蓋',
    categories: [
      {
        name: '果粒鮮果',
        items: [
          { id: 'mcnz_1', name: '柳橙果粒茶', priceM: 65, priceL: 75 },
          { id: 'mcnz_2', name: '翡翠柳橙', priceM: 65, priceL: 75 },
          { id: 'mcnz_3', name: '葡萄柚果粒茶', priceM: 65, priceL: 75 },
        ],
      },
      {
        name: '原味純茶',
        items: [
          { id: 'mcnz_4', name: '高山金萱茶', priceM: 30, priceL: 35 },
          { id: 'mcnz_5', name: '錫蘭紅茶', priceM: 30, priceL: 35 },
          { id: 'mcnz_6', name: '四季春茶', priceM: 30, priceL: 35 },
        ],
      },
      {
        name: '芝芝奶蓋系列',
        items: [
          { id: 'mcnz_7', name: '芝芝金萱', priceM: 50, priceL: 60 },
          { id: 'mcnz_8', name: '芝芝葡萄果粒', priceM: 85, priceL: 95 },
        ],
      },
    ],
    toppings: [
      { id: 'mcnz_t1', name: '波霸', price: 10 },
      { id: 'mcnz_t2', name: '椰果', price: 10 },
      { id: 'mcnz_t3', name: '寒天凍', price: 10 },
    ],
  },
  {
    id: 'store_milksha_nantou_minzu',
    name: '迷客夏 Milksha',
    branchName: '南投民族店',
    phone: '049-2248079',
    address: '南投市民族路 344 號',
    region: '中南部價',
    area: '南投市區',
    businessHours: '09:30 - 21:30',
    isOpenToday: true,
    tagline: '綠光牧場鮮奶專賣',
    categories: [
      {
        name: '牧場鮮奶茶',
        items: [
          { id: 'msnm_1', name: '伯爵紅茶拿鐵', priceM: 55, priceL: 65 },
          { id: 'msnm_2', name: '珍珠紅茶拿鐵', priceM: 65, priceL: 75 },
          { id: 'msnm_3', name: '大甲芋頭鮮奶', priceM: 65, priceL: 75 },
        ],
      },
      {
        name: '經典原茶',
        items: [
          { id: 'msnm_4', name: '決明大麥', priceM: 30, priceL: 35 },
          { id: 'msnm_5', name: '初露青茶', priceM: 30, priceL: 35 },
          { id: 'msnm_6', name: '娜杯紅茶', priceM: 30, priceL: 35 },
        ],
      },
    ],
    toppings: [
      { id: 'msnm_t1', name: '白玉珍珠', price: 10 },
      { id: 'msnm_t2', name: '綠茶凍', price: 10 },
    ],
  },
  {
    id: 'store_dayungs_nantou_minzu',
    name: '大苑子',
    branchName: '南投民族店',
    phone: '049-2239998',
    address: '南投市民族路 190 號',
    region: '中南部價',
    area: '南投市區',
    businessHours: '09:30 - 21:30',
    isOpenToday: true,
    tagline: '新鮮現榨水果鮮茶',
    categories: [
      {
        name: '鮮果茶',
        items: [
          { id: 'dynm_1', name: '芭樂檸檬', priceM: 55, priceL: 65 },
          { id: 'dynm_2', name: '翡翠檸檬', priceM: 50, priceL: 60 },
          { id: 'dynm_3', name: '柳橙愛好者', priceM: 65, priceL: 75 },
        ],
      },
      {
        name: '文山純茶',
        items: [
          { id: 'dynm_4', name: '文山青茶', priceM: 30, priceL: 35 },
          { id: 'dynm_5', name: '古城錫蘭紅茶', priceM: 30, priceL: 35 },
        ],
      },
    ],
    toppings: [
      { id: 'dynm_t1', name: '珍珠', price: 10 },
      { id: 'dynm_t2', name: '蘆薈', price: 15 },
    ],
  },
  {
    id: 'store_kungfutea_nantou_fuxing',
    name: '手作功夫茶',
    branchName: '南投復興店',
    phone: '049-2220001',
    address: '南投市復興路 197 號',
    region: '中南部價',
    area: '南投市區',
    businessHours: '10:00 - 21:30',
    isOpenToday: true,
    tagline: '38奶霸 · 手作特調茶飲',
    categories: [
      {
        name: '功夫招牌',
        items: [
          { id: 'kft_1', name: '38奶霸 (珍+波+仙草)', priceM: 50, priceL: 60 },
          { id: 'kft_2', name: '黑糖波霸純鮮奶', priceM: 55, priceL: 65 },
          { id: 'kft_3', name: '寒天柚香飲', priceM: 50, priceL: 60 },
        ],
      },
    ],
    toppings: TOPPINGS_COMMON,
  },

  // ==========================================
  // 二、南崗工業區周邊
  // ==========================================
  {
    id: 'store_chingshin_nangang',
    name: '清心福全',
    branchName: '南投南崗店',
    phone: '049-2225532',
    address: '南投市南崗二路 321 號',
    region: '中南部價',
    area: '南崗工業區',
    businessHours: '08:30 - 21:00',
    isOpenToday: true,
    tagline: '南崗工業區廠區外送首選 · 早上8:30即營業',
    categories: [
      {
        name: '工廠提神首選',
        items: [
          { id: 'csng_1', name: '烏龍綠茶', priceM: 30, priceL: 35 },
          { id: 'csng_2', name: '特級綠茶', priceM: 30, priceL: 35 },
          { id: 'csng_3', name: '優多綠茶', priceM: 45, priceL: 55 },
          { id: 'csng_4', name: '珍珠奶茶', priceM: 45, priceL: 55 },
          { id: 'csng_5', name: '冰淇淋紅茶', priceM: 45, priceL: 55 },
        ],
      },
    ],
    toppings: [
      { id: 'csng_t1', name: '珍珠', price: 10 },
      { id: 'csng_t2', name: '椰果', price: 10 },
    ],
  },

  // ==========================================
  // 三、中興新村生活圈
  // ==========================================
  {
    id: 'store_teatop_zhongxing',
    name: 'TEA TOP 第一味',
    branchName: '中興新村店',
    phone: '049-2295168',
    address: '南投市光明南路 67-1 號',
    region: '中南部價',
    area: '中興新村',
    businessHours: '09:00 - 21:00',
    isOpenToday: true,
    tagline: '中興新村公家機關常叫外送首選 · 高山青茶名店',
    categories: [
      {
        name: '高山茶師系列',
        items: [
          { id: 'ttzx_1', name: '招牌高山青', priceM: 30, priceL: 35 },
          { id: 'ttzx_2', name: '日月潭紅茶', priceM: 35, priceL: 40 },
          { id: 'ttzx_3', name: '冬瓜檸檬青', priceM: 45, priceL: 55 },
        ],
      },
      {
        name: '雙Q與奶茶',
        items: [
          { id: 'ttzx_4', name: '當代雙Q (珍珠+芋圓)', priceM: 45, priceL: 55 },
          { id: 'ttzx_5', name: '靚奶茶', priceM: 45, priceL: 55 },
          { id: 'ttzx_6', name: '大吉嶺鮮奶茶', priceM: 55, priceL: 65 },
        ],
      },
    ],
    toppings: [
      { id: 'ttzx_t1', name: '波霸粉圓', price: 10 },
      { id: 'ttzx_t2', name: '小芋圓', price: 10 },
      { id: 'ttzx_t3', name: '茶凍', price: 10 },
    ],
  },
  {
    id: 'store_chingshin_zhongxing',
    name: '清心福全',
    branchName: '南投中興店',
    phone: '049-2226630',
    address: '南投市南崗一路 13 號',
    region: '中南部價',
    area: '中興新村',
    businessHours: '09:00 - 21:30',
    isOpenToday: true,
    tagline: '南崗一路銜接中興新村交通要道',
    categories: [
      {
        name: '原鄉純茶與特調',
        items: [
          { id: 'cszx_1', name: '烏龍綠茶', priceM: 30, priceL: 35 },
          { id: 'cszx_2', name: '優多綠茶', priceM: 45, priceL: 55 },
          { id: 'cszx_3', name: '珍珠奶茶', priceM: 45, priceL: 55 },
        ],
      },
    ],
    toppings: TOPPINGS_COMMON,
  },

  // ==========================================
  // 四、草屯商圈 (熱門手搖外送主力)
  // ==========================================
  {
    id: 'store_dezheng_caotun',
    name: '得正 Oolong TEA Project',
    branchName: '草屯太平店',
    phone: '049-2300276',
    address: '草屯鎮太平路二段 278 號',
    region: '中南部價',
    area: '草屯商圈',
    businessHours: '10:00 - 20:30',
    isOpenToday: true,
    tagline: '草屯太平路計劃 · 辦公室烏龍茶人氣王',
    categories: [
      {
        name: '原茶系列',
        items: [
          { id: 'dzct_1', name: '春烏龍', priceM: 30, priceL: 35 },
          { id: 'dzct_2', name: '焙烏龍', priceM: 30, priceL: 35 },
          { id: 'dzct_3', name: '紅茶', priceM: 30, priceL: 35 },
        ],
      },
      {
        name: '鮮奶茶系列',
        items: [
          { id: 'dzct_4', name: '春烏龍鮮奶', priceM: 55, priceL: 65 },
          { id: 'dzct_5', name: '焙烏龍鮮奶', priceM: 55, priceL: 65 },
          { id: 'dzct_6', name: '紅茶鮮奶', priceM: 55, priceL: 65 },
        ],
      },
      {
        name: '芝士奶蓋系列',
        items: [
          { id: 'dzct_7', name: '芝士春烏龍', priceM: 50, priceL: 60 },
          { id: 'dzct_8', name: '芝士焙烏龍', priceM: 50, priceL: 60 },
        ],
      },
    ],
    toppings: [
      { id: 'dzct_t1', name: '黃金珍珠', price: 10 },
      { id: 'dzct_t2', name: '焙烏龍茶凍', price: 10 },
      { id: 'dzct_t3', name: '雙料 (珍珠+茶凍)', price: 15 },
    ],
  },
  {
    id: 'store_wootea_caotun',
    name: '五桐號 WooTEA',
    branchName: '草屯太平店',
    phone: '049-2305007',
    address: '草屯鎮太平路二段 367 號',
    region: '中南部價',
    area: '草屯商圈',
    businessHours: '10:00 - 21:30',
    isOpenToday: true,
    tagline: '獨家手作杏仁凍與五桐茶',
    categories: [
      {
        name: '五桐醇茶',
        items: [
          { id: 'wt_1', name: '五桐茶', priceM: 30, priceL: 35 },
          { id: 'wt_2', name: '老實人紅茶', priceM: 30, priceL: 35 },
          { id: 'wt_3', name: '一把青茶', priceM: 30, priceL: 35 },
        ],
      },
      {
        name: '手作凍飲系列',
        items: [
          { id: 'wt_4', name: '杏仁凍五桐茶', priceM: 45, priceL: 50 },
          { id: 'wt_5', name: '米漿凍奶茶', priceM: 55, priceL: 65 },
          { id: 'wt_6', name: '綠茶凍五桐茶', priceM: 45, priceL: 50 },
        ],
      },
    ],
    toppings: [
      { id: 'wt_t1', name: '手作杏仁凍', price: 15 },
      { id: 'wt_t2', name: '招牌綠茶凍', price: 10 },
      { id: 'wt_t3', name: '古早味米漿凍', price: 15 },
    ],
  },
  {
    id: 'store_guiji_caotun',
    name: '龜記茗品',
    branchName: '草屯碧山店',
    phone: '049-2367199',
    address: '草屯鎮碧山路 68 號',
    region: '中南部價',
    area: '草屯商圈',
    businessHours: '10:00 - 21:00',
    isOpenToday: true,
    tagline: '小人物大生活 · 紅柚翡翠招牌',
    categories: [
      {
        name: '鮮果茶系列',
        items: [
          { id: 'gj_1', name: '紅柚翡翠', priceM: 65, priceL: 75 },
          { id: 'gj_2', name: '蘋果紅萱', priceM: 50, priceL: 60 },
          { id: 'gj_3', name: '柳橙翡翠', priceM: 60, priceL: 70 },
        ],
      },
      {
        name: '古早原味純茶',
        items: [
          { id: 'gj_4', name: '三十三茶王', priceM: 35, priceL: 40 },
          { id: 'gj_5', name: '極品紅茶', priceM: 30, priceL: 35 },
          { id: 'gj_6', name: '濃乳茶', priceM: 55, priceL: 65 },
        ],
      },
    ],
    toppings: [
      { id: 'gj_t1', name: '蘆薈', price: 15 },
      { id: 'gj_t2', name: '珍珠', price: 10 },
    ],
  },
  {
    id: 'store_wanpo_caotun',
    name: '萬波島嶼紅茶',
    branchName: '草屯中正店',
    phone: '049-2356006',
    address: '草屯鎮中正路 642 號 1 樓',
    region: '中南部價',
    area: '草屯商圈',
    businessHours: '10:00 - 21:00',
    isOpenToday: true,
    tagline: '眷村古早味 · 紅豆粉粿鮮奶名店',
    categories: [
      {
        name: '島嶼純茶',
        items: [
          { id: 'wp_1', name: '島嶼紅茶', priceM: 30, priceL: 35 },
          { id: 'wp_2', name: '蘭香綠茶', priceM: 30, priceL: 35 },
          { id: 'wp_3', name: '阿里山青心烏龍', priceM: 30, priceL: 35 },
        ],
      },
      {
        name: '古早招牌特調',
        items: [
          { id: 'wp_4', name: '紅豆粉粿鮮奶', priceM: 65, priceL: 75 },
          { id: 'wp_5', name: '金萱珍波粉', priceM: 45, priceL: 50 },
          { id: 'wp_6', name: '蘭香鮮奶茶', priceM: 55, priceL: 65 },
        ],
      },
    ],
    toppings: [
      { id: 'wp_t1', name: '黑波霸', price: 10 },
      { id: 'wp_t2', name: '粉粿', price: 15 },
      { id: 'wp_t3', name: '愛玉', price: 10 },
    ],
  },
  {
    id: 'store_50lan_caotun_zhongzheng',
    name: '50嵐',
    branchName: '草屯中正店',
    phone: '049-2356153',
    address: '草屯鎮中正路 769 號',
    region: '中南部價',
    area: '草屯商圈',
    businessHours: '09:30 - 21:30',
    isOpenToday: true,
    tagline: '草屯中心商圈國民手搖',
    categories: [
      {
        name: '找好茶',
        items: [
          { id: '50ct_1', name: '四季春茶', priceM: 30, priceL: 35 },
          { id: '50ct_2', name: '茉莉綠茶', priceM: 30, priceL: 35 },
          { id: '50ct_3', name: '阿薩姆紅茶', priceM: 30, priceL: 35 },
        ],
      },
      {
        name: '找奶茶',
        items: [
          { id: '50ct_4', name: '1號 (四季春+珍波椰)', priceM: 40, priceL: 50 },
          { id: '50ct_5', name: '波霸奶茶', priceM: 45, priceL: 55 },
          { id: '50ct_6', name: '紅茶拿鐵', priceM: 55, priceL: 65 },
        ],
      },
    ],
    toppings: [
      { id: '50ct_t1', name: '波霸', price: 10 },
      { id: '50ct_t2', name: '小珍珠', price: 10 },
      { id: '50ct_t3', name: '椰果', price: 10 },
    ],
  },
  {
    id: 'store_kebuke_caotun_taiping',
    name: '可不可熟成紅茶',
    branchName: '草屯太平店',
    phone: '049-2318519',
    address: '草屯鎮太平路二段 269 號',
    region: '中南部價',
    area: '草屯商圈',
    businessHours: '10:00 - 21:00',
    isOpenToday: true,
    tagline: '草屯太平商圈熟成紅茶熱點',
    categories: [
      {
        name: '熟成經典',
        items: [
          { id: 'kbct_1', name: '熟成紅茶', priceM: 30, priceL: 35 },
          { id: 'kbct_2', name: '胭脂紅茶', priceM: 40, priceL: 45 },
          { id: 'kbct_3', name: '熟成歐蕾', priceM: 50, priceL: 60 },
          { id: 'kbct_4', name: '白玉歐蕾', priceM: 60, priceL: 70 },
        ],
      },
    ],
    toppings: [
      { id: 'kbct_t1', name: '白玉珍珠', price: 10 },
    ],
  },
  {
    id: 'store_macu_caotun_taiping',
    name: '麻古茶坊',
    branchName: '草屯太平店',
    phone: '049-2305688',
    address: '草屯鎮太平路二段 302 號',
    region: '中南部價',
    area: '草屯商圈',
    businessHours: '09:30 - 21:30',
    isOpenToday: true,
    tagline: '草屯太平路芝芝果粒茶名店',
    categories: [
      {
        name: '招牌果粒與金萱',
        items: [
          { id: 'mcct_1', name: '高山金萱茶', priceM: 30, priceL: 35 },
          { id: 'mcct_2', name: '柳橙果粒茶', priceM: 65, priceL: 75 },
          { id: 'mcct_3', name: '芝芝葡萄果粒', priceM: 85, priceL: 95 },
        ],
      },
    ],
    toppings: TOPPINGS_COMMON,
  },
  {
    id: 'store_chingshin_caotun_zhongzheng',
    name: '清心福全',
    branchName: '草屯中正店',
    phone: '049-2333886',
    address: '草屯鎮中正路 618 號',
    region: '中南部價',
    area: '草屯商圈',
    businessHours: '09:00 - 21:30',
    isOpenToday: true,
    tagline: '草屯中正路商圈清心好茶',
    categories: [
      {
        name: '招牌好茶',
        items: [
          { id: 'csct_1', name: '烏龍綠茶', priceM: 30, priceL: 35 },
          { id: 'csct_2', name: '優多綠茶', priceM: 45, priceL: 55 },
          { id: 'csct_3', name: '珍珠奶茶', priceM: 45, priceL: 55 },
        ],
      },
    ],
    toppings: TOPPINGS_COMMON,
  },
];
