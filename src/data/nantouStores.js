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
  // ✨ 南投在地獨立/自創品牌 (外送首選)
  // ==========================================
  {
    id: 'store_weichuan_nantou_fuxing',
    name: '微川飲料製造',
    branchName: '南投復興店',
    phone: '049-2206866',
    address: '南投市復興路 273 號',
    region: '中南部價',
    area: '南投獨立品牌',
    businessHours: '10:00 - 21:00',
    isOpenToday: true,
    tagline: '南投文青自創品牌 · 松柏嶺茶葉與茶磚冰塊',
    categories: [
      {
        name: '研磨好茶',
        items: [
          { id: 'wc_1', name: '桂花青茶', priceM: 35, priceL: 40 },
          { id: 'wc_2', name: '松柏嶺高山茶', priceM: 30, priceL: 35 },
          { id: 'wc_3', name: '熟成紅茶', priceM: 30, priceL: 35 },
        ],
      },
      {
        name: '川製厚奶與拿鐵',
        items: [
          { id: 'wc_4', name: '川製厚奶茶', priceM: 45, priceL: 55 },
          { id: 'wc_5', name: '熟成紅茶拿鐵', priceM: 50, priceL: 60 },
          { id: 'wc_6', name: '可可厚奶拿鐵', priceM: 50, priceL: 60 },
        ],
      },
      {
        name: '茶磚特調',
        items: [
          { id: 'wc_7', name: '檸檬冬瓜茶磚', priceM: 40, priceL: 50 },
          { id: 'wc_8', name: '翡翠檸檬茶', priceM: 45, priceL: 55 },
        ],
      },
    ],
    toppings: [
      { id: 'wc_t1', name: '珍珠', price: 10 },
      { id: 'wc_t2', name: '椰果', price: 10 },
      { id: 'wc_t3', name: '茉莉茶凍', price: 10 },
    ],
  },
  {
    id: 'store_xiannaini_nantou_minzu',
    name: '鮮奶奶',
    branchName: '南投民族店',
    phone: '049-2236479',
    address: '南投市民族路 351 號',
    region: '中南部價',
    area: '南投獨立品牌',
    businessHours: '10:30 - 20:30',
    isOpenToday: true,
    tagline: '手作豆花與手搖茶飲 · 辦公室咀嚼系救星',
    categories: [
      {
        name: '招牌豆花奶凍專區',
        items: [
          { id: 'xnn_1', name: '鮮奶奶茶豆花', priceM: 45, priceL: 55 },
          { id: 'xnn_2', name: '招牌嫩仙草奶凍', priceM: 50, priceL: 60 },
          { id: 'xnn_3', name: '鮮奶三寶 (豆花+珍珠+芋圓)', priceM: 50, priceL: 60 },
        ],
      },
      {
        name: '鮮奶手作特調',
        items: [
          { id: 'xnn_4', name: '珍珠冬瓜鮮奶', priceM: 45, priceL: 55 },
          { id: 'xnn_5', name: '黑糖珍珠鮮奶', priceM: 50, priceL: 60 },
          { id: 'xnn_6', name: '抹茶拿鐵', priceM: 50, priceL: 60 },
        ],
      },
      {
        name: '原味好茶',
        items: [
          { id: 'xnn_7', name: '高山青茶', priceM: 25, priceL: 30 },
          { id: 'xnn_8', name: '阿薩姆紅茶', priceM: 25, priceL: 30 },
        ],
      },
    ],
    toppings: [
      { id: 'xnn_t1', name: '手工嫩豆花', price: 15 },
      { id: 'xnn_t2', name: '手作嫩仙草', price: 15 },
      { id: 'xnn_t3', name: '手工小芋圓', price: 15 },
      { id: 'xnn_t4', name: 'Q彈珍珠', price: 10 },
    ],
  },
  {
    id: 'store_zengjia_nantou_zhangnan',
    name: '曾家純蔗糖',
    branchName: '南投彰南店',
    phone: '049-2200056',
    address: '南投市彰南路一段 1066 號',
    region: '中南部價',
    area: '南投獨立品牌',
    businessHours: '09:00 - 21:00',
    isOpenToday: true,
    tagline: '自家種植茶葉 · 100%天然純甘蔗糖熬製',
    categories: [
      {
        name: '天然甘蔗茶飲',
        items: [
          { id: 'zj_1', name: '甘蔗石蜜青茶', priceM: 40, priceL: 45 },
          { id: 'zj_2', name: '甘蔗檸檬', priceM: 50, priceL: 55 },
          { id: 'zj_3', name: '甘蔗鮮奶', priceM: 55, priceL: 60 },
        ],
      },
      {
        name: '契作高山茶',
        items: [
          { id: 'zj_4', name: '高山冷泡茶', priceM: 35, priceL: 40 },
          { id: 'zj_5', name: '石蜜青茶', priceM: 30, priceL: 35 },
          { id: 'zj_6', name: '熟成蜜香紅', priceM: 30, priceL: 35 },
        ],
      },
    ],
    toppings: [
      { id: 'zj_t1', name: '白玉珍珠', price: 10 },
      { id: 'zj_t2', name: '鮮蘆薈', price: 15 },
      { id: 'zj_t3', name: '綠茶凍', price: 10 },
    ],
  },
  {
    id: 'store_santaizi_nantou_zhangnan',
    name: '三泰子 SAN TAI ZI',
    branchName: '南投彰南店',
    phone: '049-2225066',
    address: '南投市彰南路二段 2 號',
    region: '中南部價',
    area: '南投獨立品牌',
    businessHours: '09:00 - 22:00',
    isOpenToday: true,
    tagline: '南投市泰式奶茶專賣 · 南洋特調濃厚茶乳',
    categories: [
      {
        name: '正統泰式系列',
        items: [
          { id: 'stz_1', name: '泰式奶奶 (經典泰奶)', priceM: 50, priceL: 60 },
          { id: 'stz_2', name: '泰式奶綠', priceM: 50, priceL: 60 },
          { id: 'stz_3', name: '泰式檸檬紅', priceM: 45, priceL: 55 },
        ],
      },
      {
        name: '拿鐵與特調',
        items: [
          { id: 'stz_4', name: '觀音烏龍拿鐵', priceM: 50, priceL: 55 },
          { id: 'stz_5', name: '冬瓜仙草蜜', priceM: 35, priceL: 40 },
          { id: 'stz_6', name: '馥郁紅茶', priceM: 30, priceL: 35 },
        ],
      },
    ],
    toppings: [
      { id: 'stz_t1', name: '黑糖珍珠', price: 10 },
      { id: 'stz_t2', name: '仙草凍', price: 10 },
      { id: 'stz_t3', name: '椰果', price: 10 },
    ],
  },
  {
    id: 'store_mikeq_nantou_fuxing',
    name: '米克Q手感茶飲',
    branchName: '南投復興店',
    phone: '049-2228158',
    address: '南投市復興路',
    region: '中南部價',
    area: '南投獨立品牌',
    businessHours: '10:00 - 21:30',
    isOpenToday: true,
    tagline: '南投在地平價手搖 · 陪伴長大的手感好茶',
    categories: [
      {
        name: '手感特調與鮮奶',
        items: [
          { id: 'mq_1', name: '鮮奶仙草凍', priceM: 40, priceL: 45 },
          { id: 'mq_2', name: '綠茶多酚 (石蓮花多酚)', priceM: 35, priceL: 40 },
          { id: 'mq_3', name: '拿鐵紅茶', priceM: 40, priceL: 45 },
          { id: 'mq_4', name: '芋香珍珠奶茶', priceM: 40, priceL: 45 },
        ],
      },
      {
        name: '平價純茶',
        items: [
          { id: 'mq_5', name: '四季青茶', priceM: 25, priceL: 30 },
          { id: 'mq_6', name: '茉莉綠茶', priceM: 25, priceL: 30 },
          { id: 'mq_7', name: '阿薩姆紅茶', priceM: 25, priceL: 30 },
        ],
      },
    ],
    toppings: [
      { id: 'mq_t1', name: '珍珠', price: 10 },
      { id: 'mq_t2', name: '仙草凍', price: 10 },
      { id: 'mq_t3', name: '椰果', price: 10 },
      { id: 'mq_t4', name: '統一布丁', price: 15 },
    ],
  },
  {
    id: 'store_taitea1_nantou_zhongshan',
    name: '台茶1號',
    branchName: '南投中山店',
    phone: '049-2241811',
    address: '南投市中山街 242 號',
    region: '中南部價',
    area: '南投獨立品牌',
    businessHours: '09:30 - 21:00',
    isOpenToday: true,
    tagline: '大甲純手工熬煮芋頭泥 · 鮮芋頭奶綠名店',
    categories: [
      {
        name: '芋頭手工熬煮招牌',
        items: [
          { id: 'tt1_1', name: '鮮芋頭奶綠', priceM: 55, priceL: 65 },
          { id: 'tt1_2', name: '鮮芋頭鮮奶', priceM: 65, priceL: 75 },
        ],
      },
      {
        name: '鮮奶與特調',
        items: [
          { id: 'tt1_3', name: '鮮奶三寶 (芋圓+珍珠+紅豆)', priceM: 50, priceL: 60 },
          { id: 'tt1_4', name: '翡翠百香蜜', priceM: 45, priceL: 50 },
        ],
      },
      {
        name: '契作原茶',
        items: [
          { id: 'tt1_5', name: '阿里山金萱', priceM: 30, priceL: 35 },
          { id: 'tt1_6', name: '炭焙烏龍', priceM: 30, priceL: 35 },
        ],
      },
    ],
    toppings: [
      { id: 'tt1_t1', name: '大甲純芋泥', price: 20 },
      { id: 'tt1_t2', name: '小芋圓', price: 15 },
      { id: 'tt1_t3', name: '黑糖珍珠', price: 10 },
      { id: 'tt1_t4', name: '萬丹紅豆', price: 15 },
    ],
  },
  {
    id: 'store_black_eyed_peas_nantou',
    name: '黑眼荳荳',
    branchName: '南投彰南店',
    phone: '049-2248279',
    address: '南投市彰南路二段 397 號',
    region: '中南部價',
    area: '南投獨立品牌',
    businessHours: '09:30 - 21:00',
    isOpenToday: true,
    tagline: '南投在地老字號手搖 · 辦公室特調奶茶人氣店',
    categories: [
      {
        name: '人氣特調系列',
        items: [
          { id: 'bep_1', name: '莓好多多', priceM: 45, priceL: 55 },
          { id: 'bep_2', name: '仙草拿鐵', priceM: 40, priceL: 50 },
          { id: 'bep_3', name: '紫米紅豆拿鐵', priceM: 45, priceL: 55 },
          { id: 'bep_4', name: '伯爵紅茶拿鐵', priceM: 40, priceL: 50 },
        ],
      },
      {
        name: '原淬純茶',
        items: [
          { id: 'bep_5', name: '四季青茶', priceM: 25, priceL: 30 },
          { id: 'bep_6', name: '茉香綠茶', priceM: 25, priceL: 30 },
          { id: 'bep_7', name: '阿薩姆紅茶', priceM: 25, priceL: 30 },
        ],
      },
    ],
    toppings: [
      { id: 'bep_t1', name: '珍珠', price: 10 },
      { id: 'bep_t2', name: '手工仙草凍', price: 10 },
      { id: 'bep_t3', name: '紫米紅豆', price: 15 },
    ],
  },
  {
    id: 'store_92half_coffee_nantou',
    name: '92度半咖啡',
    branchName: '南投三和號',
    phone: '0909-227685',
    address: '南投市三和二路 78 號',
    region: '中南部價',
    area: '南投獨立品牌',
    businessHours: '07:30 - 18:00',
    isOpenToday: true,
    tagline: '現磨手作義式咖啡 · 辦公室醒腦外送首選 (92又1/2)',
    categories: [
      {
        name: '小農厚奶咖啡',
        items: [
          { id: 'c92_1', name: '極厚小農拿鐵', priceM: 60, priceL: 70 },
          { id: 'c92_2', name: '生椰拿鐵', priceM: 65, priceL: 75 },
          { id: 'c92_3', name: '黑巧摩卡奇諾', priceM: 65, priceL: 75 },
          { id: 'c92_4', name: '香草風味拿鐵', priceM: 60, priceL: 70 },
        ],
      },
      {
        name: '手作黑咖啡與特調',
        items: [
          { id: 'c92_5', name: '92 美式黑咖啡', priceM: 40, priceL: 50 },
          { id: 'c92_6', name: '生椰美式', priceM: 55, priceL: 65 },
          { id: 'c92_7', name: '靜岡抹茶拿鐵', priceM: 55, priceL: 65 },
        ],
      },
    ],
    toppings: [
      { id: 'c92_t1', name: '濃縮雙份 (+Shot)', price: 15 },
      { id: 'c92_t2', name: '換燕麥奶', price: 20 },
    ],
  },
  {
    id: 'store_linglu_nantou_zhangnan',
    name: '嶺陸手作茶飲',
    branchName: '南投彰南店',
    phone: '049-2244880',
    address: '南投市彰南路二段 52 號',
    region: '中南部價',
    area: '南投獨立品牌',
    businessHours: '09:30 - 21:00',
    isOpenToday: true,
    tagline: '南投在地手作好茶 · 現煮茶香濃厚',
    categories: [
      {
        name: '嶺陸招牌茶',
        items: [
          { id: 'll_1', name: '嶺陸極上紅茶', priceM: 30, priceL: 35 },
          { id: 'll_2', name: '高山烏龍青', priceM: 30, priceL: 35 },
          { id: 'll_3', name: '茉香綠茶', priceM: 30, priceL: 35 },
        ],
      },
      {
        name: '手作鮮奶與特調',
        items: [
          { id: 'll_4', name: '嶺陸鮮奶茶', priceM: 50, priceL: 60 },
          { id: 'll_5', name: '波霸厚鮮奶', priceM: 55, priceL: 65 },
          { id: 'll_6', name: '翡翠檸檬綠', priceM: 45, priceL: 55 },
        ],
      },
    ],
    toppings: [
      { id: 'll_t1', name: '波霸珍珠', price: 10 },
      { id: 'll_t2', name: '椰果', price: 10 },
      { id: 'll_t3', name: '茶凍', price: 10 },
    ],
  },
  {
    id: 'store_mrblacktea_nantou_fuxing',
    name: '紅茶老爹',
    branchName: '南投復興店',
    phone: '049-2233231',
    address: '南投市崇文里復興路 138 號',
    region: '中南部價',
    area: '南投獨立品牌',
    businessHours: '10:00 - 21:00',
    isOpenToday: true,
    tagline: '古早味決明子紅茶 · 銅板價大容量好茶',
    categories: [
      {
        name: '老爹招牌紅茶',
        items: [
          { id: 'mbt_1', name: '老爹招牌紅茶', priceM: 25, priceL: 30 },
          { id: 'mbt_2', name: '決明大麥紅茶', priceM: 25, priceL: 30 },
          { id: 'mbt_3', name: '特級綠茶', priceM: 25, priceL: 30 },
        ],
      },
      {
        name: '濃厚特調與奶茶',
        items: [
          { id: 'mbt_4', name: '老爹鮮奶茶', priceM: 45, priceL: 55 },
          { id: 'mbt_5', name: '珍珠奶茶', priceM: 40, priceL: 50 },
          { id: 'mbt_6', name: '冬瓜檸檬', priceM: 35, priceL: 45 },
        ],
      },
    ],
    toppings: [
      { id: 'mbt_t1', name: '珍珠', price: 10 },
      { id: 'mbt_t2', name: '椰果', price: 10 },
    ],
  },

  // ==========================================
  // 一、南投市區 (連鎖手搖)
  // ==========================================
  {
    id: 'store_dezheng_nantou_minzu',
    name: '得正 Oolong TEA Project',
    branchName: '南投民族計劃',
    phone: '049-2248612',
    address: '南投市民族路 276 號',
    region: '中南部價',
    area: '南投市區',
    businessHours: '10:00 - 20:30',
    isOpenToday: true,
    tagline: '南投民族計劃門市 · 辦公室烏龍茶首選',
    categories: [
      {
        name: '原茶系列',
        items: [
          { id: 'dzn_1', name: '春烏龍', priceM: 30, priceL: 35 },
          { id: 'dzn_2', name: '焙烏龍', priceM: 30, priceL: 35 },
          { id: 'dzn_3', name: '紅茶', priceM: 30, priceL: 35 },
        ],
      },
      {
        name: '鮮奶茶系列',
        items: [
          { id: 'dzn_4', name: '春烏龍鮮奶', priceM: 55, priceL: 65 },
          { id: 'dzn_5', name: '焙烏龍鮮奶', priceM: 55, priceL: 65 },
          { id: 'dzn_6', name: '紅茶鮮奶', priceM: 55, priceL: 65 },
        ],
      },
      {
        name: '芝士奶蓋系列',
        items: [
          { id: 'dzn_7', name: '芝士春烏龍', priceM: 50, priceL: 60 },
          { id: 'dzn_8', name: '芝士焙烏龍', priceM: 50, priceL: 60 },
        ],
      },
    ],
    toppings: [
      { id: 'dzn_t1', name: '黃金珍珠', price: 10 },
      { id: 'dzn_t2', name: '焙烏龍茶凍', price: 10 },
      { id: 'dzn_t3', name: '雙料 (珍珠+茶凍)', price: 15 },
    ],
  },
  {
    id: 'store_wanpo_nantou_minzu',
    name: '萬波島嶼紅茶',
    branchName: '南投民族店',
    phone: '049-2202858',
    address: '南投市民族路 140 號',
    region: '中南部價',
    area: '南投市區',
    businessHours: '10:00 - 21:00',
    isOpenToday: true,
    tagline: '南投民族路眷村古早味 · 紅豆粉粿鮮奶名店',
    categories: [
      {
        name: '島嶼純茶',
        items: [
          { id: 'wpn_1', name: '島嶼紅茶', priceM: 30, priceL: 35 },
          { id: 'wpn_2', name: '蘭香綠茶', priceM: 30, priceL: 35 },
          { id: 'wpn_3', name: '阿里山青心烏龍', priceM: 30, priceL: 35 },
        ],
      },
      {
        name: '古早招牌特調',
        items: [
          { id: 'wpn_4', name: '紅豆粉粿鮮奶', priceM: 65, priceL: 75 },
          { id: 'wpn_5', name: '金萱珍波粉', priceM: 45, priceL: 50 },
          { id: 'wpn_6', name: '蘭香鮮奶茶', priceM: 55, priceL: 65 },
        ],
      },
    ],
    toppings: [
      { id: 'wpn_t1', name: '黑波霸', price: 10 },
      { id: 'wpn_t2', name: '粉粿', price: 15 },
      { id: 'wpn_t3', name: '愛玉', price: 10 },
    ],
  },
  {
    id: 'store_laolai_nantou_yule',
    name: '老賴茶棧',
    branchName: '南投育樂店',
    phone: '049-2227678',
    address: '南投市育樂路 97 號',
    region: '中南部價',
    area: '南投市區',
    businessHours: '09:30 - 21:30',
    isOpenToday: true,
    tagline: '台中第二市場發跡名店 · 豆香紅茶與招牌太極',
    categories: [
      {
        name: '老賴招牌',
        items: [
          { id: 'llz_1', name: '老賴紅茶', priceM: 30, priceL: 35 },
          { id: 'llz_2', name: '豆香紅茶 (豆漿紅茶)', priceM: 35, priceL: 40 },
          { id: 'llz_3', name: '太極冬瓜茶', priceM: 35, priceL: 40 },
          { id: 'llz_4', name: '青霧綠茶', priceM: 30, priceL: 35 },
        ],
      },
      {
        name: '鮮奶與厚乳',
        items: [
          { id: 'llz_5', name: '太極厚奶', priceM: 55, priceL: 65 },
          { id: 'llz_6', name: '招牌奶茶', priceM: 45, priceL: 55 },
          { id: 'llz_7', name: '黑糖珍珠鮮奶', priceM: 60, priceL: 70 },
        ],
      },
    ],
    toppings: [
      { id: 'llz_t1', name: '珍珠', price: 10 },
      { id: 'llz_t2', name: '胚芽', price: 10 },
      { id: 'llz_t3', name: '太極 (珍+椰)', price: 15 },
    ],
  },
  {
    id: 'store_teatop_nantou_minzu',
    name: 'TEA TOP 第一味',
    branchName: '南投民族店',
    phone: '049-2220901',
    address: '南投市民族路 137 號',
    region: '中南部價',
    area: '南投市區',
    businessHours: '09:00 - 21:30',
    isOpenToday: true,
    tagline: '南投民族路茶師名茶 · 當代雙Q與日月潭紅',
    categories: [
      {
        name: '高山好茶',
        items: [
          { id: 'ttm_1', name: '招牌高山青', priceM: 30, priceL: 35 },
          { id: 'ttm_2', name: '日月潭紅茶', priceM: 35, priceL: 40 },
          { id: 'ttm_3', name: '冬瓜檸檬青', priceM: 45, priceL: 55 },
        ],
      },
      {
        name: '雙Q與鮮奶茶',
        items: [
          { id: 'ttm_4', name: '當代雙Q (珍珠+芋圓)', priceM: 45, priceL: 55 },
          { id: 'ttm_5', name: '靚奶茶', priceM: 45, priceL: 55 },
          { id: 'ttm_6', name: '大吉嶺鮮奶茶', priceM: 55, priceL: 65 },
        ],
      },
    ],
    toppings: [
      { id: 'ttm_t1', name: '波霸粉圓', price: 10 },
      { id: 'ttm_t2', name: '小芋圓', price: 10 },
      { id: 'ttm_t3', name: '茶凍', price: 10 },
    ],
  },
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
  {
    id: 'store_presotea_nantou_zhangnan',
    name: '鮮茶道',
    branchName: '南投彰南店',
    phone: '049-2248762',
    address: '南投市彰南路一段 1112 號',
    region: '中南部價',
    area: '南投市區',
    businessHours: '09:15 - 20:45',
    isOpenToday: true,
    tagline: '高壓現萃茶 · 滿百即可外送 · 買十送一',
    categories: [
      {
        name: '現萃好茶',
        items: [
          { id: 'pt_1', name: '阿里山冰茶', priceM: 35, priceL: 40 },
          { id: 'pt_2', name: '四季春茶', priceM: 30, priceL: 35 },
          { id: 'pt_3', name: '伯爵紅茶', priceM: 30, priceL: 35 },
        ],
      },
      {
        name: '鮮奶與招牌特調',
        items: [
          { id: 'pt_4', name: '熊貓珍珠奶茶', priceM: 45, priceL: 55 },
          { id: 'pt_5', name: '焙茶烤奶', priceM: 50, priceL: 60 },
          { id: 'pt_6', name: '紅心芭樂梅', priceM: 50, priceL: 60 },
        ],
      },
    ],
    toppings: [
      { id: 'pt_t1', name: '熊貓珍珠 (黑+白)', price: 10 },
      { id: 'pt_t2', name: '椰果', price: 10 },
      { id: 'pt_t3', name: '寒天晶球', price: 15 },
    ],
  },
  {
    id: 'store_85c_nantou_datong',
    name: '85度C',
    branchName: '南投大同店',
    phone: '049-2200052',
    address: '南投市大同南街 109 號',
    region: '中南部價',
    area: '南投市區',
    businessHours: '07:30 - 23:00',
    isOpenToday: true,
    tagline: '咖啡蛋糕烘焙專賣 · 辦公室下午茶首選',
    categories: [
      {
        name: '經典咖啡',
        items: [
          { id: '85dt_1', name: '海岩咖啡', priceM: 55, priceL: 65 },
          { id: '85dt_2', name: '招牌拿鐵咖啡', priceM: 65, priceL: 75 },
          { id: '85dt_3', name: '美式咖啡', priceM: 45, priceL: 55 },
        ],
      },
      {
        name: '人氣茶飲',
        items: [
          { id: '85dt_4', name: '一顆檸檬紅茶', priceM: 55, priceL: 65 },
          { id: '85dt_5', name: '海岩青茶', priceM: 40, priceL: 50 },
          { id: '85dt_6', name: '黑糖珍珠鮮奶', priceM: 55, priceL: 65 },
        ],
      },
    ],
    toppings: [
      { id: '85dt_t1', name: '珍珠', price: 10 },
      { id: '85dt_t2', name: '椰果', price: 10 },
    ],
  },
  {
    id: 'store_chazhimoshou_nantou_minzu',
    name: '茶之魔手',
    branchName: '南投民族店',
    phone: '049-2222700',
    address: '南投市民族路 9 號',
    region: '中南部價',
    area: '南投市區',
    businessHours: '09:00 - 21:30',
    isOpenToday: true,
    tagline: '南投民族路老字號 · 平價大杯首選',
    categories: [
      {
        name: '經典好茶',
        items: [
          { id: 'czmm_1', name: '青梅青茶', priceM: 35, priceL: 40 },
          { id: 'czmm_2', name: '山茶花綠茶', priceM: 30, priceL: 35 },
          { id: 'czmm_3', name: '藍莓凍奶茶', priceM: 45, priceL: 50 },
          { id: 'czmm_4', name: '波霸奶茶', priceM: 40, priceL: 45 },
        ],
      },
    ],
    toppings: [
      { id: 'czmm_t1', name: '波霸', price: 5 },
      { id: 'czmm_t2', name: '藍莓凍', price: 10 },
    ],
  },
  {
    id: 'store_shuiyun_nantou_sanhe',
    name: '水云茶堂-阿里山鐵道紅茶',
    branchName: '南投三和店',
    phone: '049-2228800',
    address: '南投市三和三路 47 號',
    region: '中南部價',
    area: '南投市區',
    businessHours: '09:30 - 21:00',
    isOpenToday: true,
    tagline: '草屯發源特色手搖 · 阿里山鐵道紅茶與高山純茶',
    categories: [
      {
        name: '阿里山鐵道純茶',
        items: [
          { id: 'sy_1', name: '阿里山鐵道紅茶', priceM: 25, priceL: 30 },
          { id: 'sy_2', name: '阿里山清香青茶', priceM: 30, priceL: 35 },
          { id: 'sy_3', name: '茉香綠茶', priceM: 25, priceL: 30 },
        ],
      },
      {
        name: '鐵道鮮奶與奶茶',
        items: [
          { id: 'sy_4', name: '鐵道鮮奶茶', priceM: 50, priceL: 60 },
          { id: 'sy_5', name: '鐵道奶茶', priceM: 40, priceL: 50 },
          { id: 'sy_6', name: '冬瓜鮮奶', priceM: 45, priceL: 55 },
        ],
      },
      {
        name: '古早風味特調',
        items: [
          { id: 'sy_7', name: '鐵道冬瓜檸檬', priceM: 40, priceL: 50 },
          { id: 'sy_8', name: '仙草凍奶茶', priceM: 45, priceL: 55 },
          { id: 'sy_9', name: '翡翠檸檬', priceM: 45, priceL: 55 },
        ],
      },
    ],
    toppings: [
      { id: 'sy_t1', name: '波霸珍珠', price: 10 },
      { id: 'sy_t2', name: '嫩仙草凍', price: 10 },
      { id: 'sy_t3', name: '椰果', price: 10 },
    ],
  },
  {
    id: 'store_wujia_nantou_datong',
    name: '吳家紅茶冰',
    branchName: '南投大同店',
    phone: '0909-002028',
    address: '南投市大同街 151 號',
    region: '中南部價',
    area: '南投市區',
    businessHours: '09:00 - 21:00',
    isOpenToday: true,
    tagline: '經典古早味紅茶冰 · 大杯消暑首選',
    categories: [
      {
        name: '古早味招牌系列',
        items: [
          { id: 'wj_1', name: '古早味紅茶冰', priceM: 25, priceL: 30 },
          { id: 'wj_2', name: '決明大麥茶', priceM: 25, priceL: 30 },
          { id: 'wj_3', name: '茉莉綠茶', priceM: 25, priceL: 30 },
        ],
      },
      {
        name: '復刻特調與鮮奶',
        items: [
          { id: 'wj_4', name: '復刻奶茶', priceM: 40, priceL: 45 },
          { id: 'wj_5', name: '紅茶鮮奶', priceM: 50, priceL: 55 },
          { id: 'wj_6', name: '檸檬紅茶', priceM: 40, priceL: 45 },
        ],
      },
      {
        name: '經典冬瓜系列',
        items: [
          { id: 'wj_7', name: '古早冬瓜茶', priceM: 25, priceL: 30 },
          { id: 'wj_8', name: '冬瓜檸檬', priceM: 40, priceL: 45 },
          { id: 'wj_9', name: '冬瓜鮮奶', priceM: 50, priceL: 55 },
        ],
      },
    ],
    toppings: [
      { id: 'wj_t1', name: '波霸珍珠', price: 10 },
      { id: 'wj_t2', name: '椰果', price: 10 },
      { id: 'wj_t3', name: '仙草凍', price: 10 },
    ],
  },

  // ==========================================
  // 二、南崗工業區周邊
  // ==========================================
  {
    id: 'store_guiji_nantou_nangang',
    name: '龜記茗品',
    branchName: '南投南崗店',
    phone: '049-2247999',
    address: '南投市南崗二路 340 號',
    region: '中南部價',
    area: '南崗工業區',
    businessHours: '10:00 - 21:00',
    isOpenToday: true,
    tagline: '南崗二路工業區外送主力 · 紅柚翡翠名店',
    categories: [
      {
        name: '鮮果茶系列',
        items: [
          { id: 'gjn_1', name: '紅柚翡翠', priceM: 65, priceL: 75 },
          { id: 'gjn_2', name: '蘋果紅萱', priceM: 50, priceL: 60 },
          { id: 'gjn_3', name: '柳橙翡翠', priceM: 60, priceL: 70 },
        ],
      },
      {
        name: '古早原味純茶',
        items: [
          { id: 'gjn_4', name: '三十三茶王', priceM: 35, priceL: 40 },
          { id: 'gjn_5', name: '極品紅茶', priceM: 30, priceL: 35 },
          { id: 'gjn_6', name: '濃乳茶', priceM: 55, priceL: 65 },
        ],
      },
    ],
    toppings: [
      { id: 'gjn_t1', name: '蘆薈', price: 15 },
      { id: 'gjn_t2', name: '珍珠', price: 10 },
    ],
  },
  {
    id: 'store_teatop_nantou_nangang',
    name: 'TEA TOP 第一味',
    branchName: '南投南崗店',
    phone: '049-2220901',
    address: '南投市南崗二路 306 號',
    region: '中南部價',
    area: '南崗工業區',
    businessHours: '09:00 - 21:00',
    isOpenToday: true,
    tagline: '南崗二路工業區快速外送門市',
    categories: [
      {
        name: '高山好茶',
        items: [
          { id: 'ttng_1', name: '招牌高山青', priceM: 30, priceL: 35 },
          { id: 'ttng_2', name: '日月潭紅茶', priceM: 35, priceL: 40 },
          { id: 'ttng_3', name: '冬瓜檸檬青', priceM: 45, priceL: 55 },
        ],
      },
      {
        name: '雙Q與鮮奶茶',
        items: [
          { id: 'ttng_4', name: '當代雙Q (珍珠+芋圓)', priceM: 45, priceL: 55 },
          { id: 'ttng_5', name: '靚奶茶', priceM: 45, priceL: 55 },
          { id: 'ttng_6', name: '大吉嶺鮮奶茶', priceM: 55, priceL: 65 },
        ],
      },
    ],
    toppings: [
      { id: 'ttng_t1', name: '波霸粉圓', price: 10 },
      { id: 'ttng_t2', name: '小芋圓', price: 10 },
    ],
  },
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
  {
    id: 'store_chazhimoshou_nangang',
    name: '茶之魔手',
    branchName: '南投南崗店',
    phone: '049-2233999',
    address: '南投市南崗二路 332 號',
    region: '中南部價',
    area: '南崗工業區',
    businessHours: '08:30 - 21:30',
    isOpenToday: true,
    tagline: '南崗工業區廠區外送霸主 · 早上8:30營業',
    categories: [
      {
        name: '招牌魔手茶',
        items: [
          { id: 'czm_1', name: '青梅青茶', priceM: 35, priceL: 40 },
          { id: 'czm_2', name: '山茶花無糖綠', priceM: 30, priceL: 35 },
          { id: 'czm_3', name: '台灣純青茶', priceM: 25, priceL: 30 },
          { id: 'czm_4', name: '阿薩姆紅茶', priceM: 25, priceL: 30 },
        ],
      },
      {
        name: '特調與凍奶',
        items: [
          { id: 'czm_5', name: '藍莓凍奶茶', priceM: 45, priceL: 50 },
          { id: 'czm_6', name: '波霸奶茶', priceM: 40, priceL: 45 },
          { id: 'czm_7', name: '冬瓜青茶', priceM: 30, priceL: 35 },
        ],
      },
    ],
    toppings: [
      { id: 'czm_t1', name: '波霸', price: 5 },
      { id: 'czm_t2', name: '藍莓凍', price: 10 },
      { id: 'czm_t3', name: '椰果', price: 5 },
    ],
  },
  {
    id: 'store_mamatea_nangang_chenggong',
    name: '紅茶媽媽',
    branchName: '南投成功店',
    phone: '049-2255462',
    address: '南投市成功三路 33 號',
    region: '中南部價',
    area: '南崗工業區',
    businessHours: '10:00 - 19:30',
    isOpenToday: true,
    tagline: '南崗工業區成功三路下午茶首選 · 古早味決明紅茶與甘蔗青茶',
    categories: [
      {
        name: '媽媽招牌好茶',
        items: [
          { id: 'mm_1', name: '招牌古早味紅茶', priceM: 25, priceL: 30 },
          { id: 'mm_2', name: '決明大麥茶', priceM: 25, priceL: 30 },
          { id: 'mm_3', name: '翡翠綠茶', priceM: 25, priceL: 30 },
          { id: 'mm_4', name: '高山青茶', priceM: 30, priceL: 35 },
        ],
      },
      {
        name: '招牌奶茶與厚鮮奶',
        items: [
          { id: 'mm_5', name: '古早味奶茶', priceM: 40, priceL: 50 },
          { id: 'mm_6', name: '紅茶鮮奶', priceM: 50, priceL: 60 },
          { id: 'mm_7', name: '珍珠鮮奶茶', priceM: 55, priceL: 65 },
        ],
      },
      {
        name: '天然特調系列',
        items: [
          { id: 'mm_8', name: '招牌甘蔗青茶', priceM: 50, priceL: 55 },
          { id: 'mm_9', name: '冬瓜檸檬', priceM: 40, priceL: 50 },
          { id: 'mm_10', name: '檸檬冬瓜青', priceM: 45, priceL: 55 },
        ],
      },
    ],
    toppings: [
      { id: 'mm_t1', name: '珍珠', price: 10 },
      { id: 'mm_t2', name: '椰果', price: 10 },
      { id: 'mm_t3', name: '嫩仙草', price: 10 },
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
  {
    id: 'store_85c_nantou_zhongxing',
    name: '85度C',
    branchName: '南投中興店',
    phone: '049-2390885',
    address: '南投市中學西路 42-1 號',
    region: '中南部價',
    area: '中興新村',
    businessHours: '07:00 - 21:30',
    isOpenToday: true,
    tagline: '中興新村辦公室下午茶首選 · 滿200即外送',
    categories: [
      {
        name: '經典咖啡',
        items: [
          { id: '85zx_1', name: '海岩咖啡', priceM: 55, priceL: 65 },
          { id: '85zx_2', name: '招牌拿鐵咖啡', priceM: 65, priceL: 75 },
          { id: '85zx_3', name: '美式咖啡', priceM: 45, priceL: 55 },
        ],
      },
      {
        name: '人氣茶飲',
        items: [
          { id: '85zx_4', name: '一顆檸檬青茶', priceM: 55, priceL: 65 },
          { id: '85zx_5', name: '海岩綠茶', priceM: 40, priceL: 50 },
        ],
      },
    ],
    toppings: [
      { id: '85zx_t1', name: '珍珠', price: 10 },
    ],
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
  {
    id: 'store_shuiyun_caotun_bishan',
    name: '水云茶堂-阿里山鐵道紅茶',
    branchName: '草屯碧山店',
    phone: '049-2355586',
    address: '草屯鎮碧山路 101 號',
    region: '中南部價',
    area: '草屯商圈',
    businessHours: '09:00 - 21:30',
    isOpenToday: true,
    tagline: '草屯商圈外送必點 · 阿里山鐵道紅茶名店',
    categories: [
      {
        name: '阿里山鐵道純茶',
        items: [
          { id: 'syct_1', name: '阿里山鐵道紅茶', priceM: 25, priceL: 30 },
          { id: 'syct_2', name: '阿里山清香青茶', priceM: 30, priceL: 35 },
          { id: 'syct_3', name: '茉香綠茶', priceM: 25, priceL: 30 },
        ],
      },
      {
        name: '鐵道鮮奶與奶茶',
        items: [
          { id: 'syct_4', name: '鐵道鮮奶茶', priceM: 50, priceL: 60 },
          { id: 'syct_5', name: '冬瓜鮮奶', priceM: 45, priceL: 55 },
          { id: 'syct_6', name: '仙草凍奶茶', priceM: 45, priceL: 55 },
        ],
      },
    ],
    toppings: [
      { id: 'syct_t1', name: '波霸珍珠', price: 10 },
      { id: 'syct_t2', name: '嫩仙草凍', price: 10 },
      { id: 'syct_t3', name: '椰果', price: 10 },
    ],
  },
  {
    id: 'store_mamatea_caotun_hushan',
    name: '紅茶媽媽',
    branchName: '草屯虎山店',
    phone: '0909-543416',
    address: '草屯鎮新厝里虎山路 552 號',
    region: '中南部價',
    area: '草屯商圈',
    businessHours: '10:00 - 20:00',
    isOpenToday: true,
    tagline: '草屯虎山路古早味紅茶名店 · 招牌甘蔗青茶',
    categories: [
      {
        name: '媽媽招牌茶',
        items: [
          { id: 'mmct_1', name: '招牌古早味紅茶', priceM: 25, priceL: 30 },
          { id: 'mmct_2', name: '決明大麥茶', priceM: 25, priceL: 30 },
          { id: 'mmct_3', name: '招牌甘蔗青茶', priceM: 50, priceL: 55 },
          { id: 'mmct_4', name: '紅茶鮮奶', priceM: 50, priceL: 60 },
        ],
      },
    ],
    toppings: [
      { id: 'mmct_t1', name: '珍珠', price: 10 },
      { id: 'mmct_t2', name: '椰果', price: 10 },
      { id: 'mmct_t3', name: '嫩仙草', price: 10 },
    ],
  },
];
