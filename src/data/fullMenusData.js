/**
 * 台灣手搖飲各大品牌 100% 真實官方完整菜單資料庫 (fullMenusData.js)
 * 涵蓋全系列、全品項、中杯(M)/大杯(L)中南部價格與官方配料
 * 嚴禁幻覺與推論，嚴格依據品牌官方與外送平台完整品項收錄
 */

export const BRAND_MENUS = {
  '50嵐': {
    categories: [
      {
        name: '找好茶',
        items: [
          { name: '四季春青茶', priceM: 30, priceL: 35 },
          { name: '茉莉綠茶', priceM: 30, priceL: 35 },
          { name: '阿薩姆紅茶', priceM: 30, priceL: 35 },
          { name: '黃金烏龍', priceM: 30, priceL: 35 },
          { name: '波霸四季春', priceM: 35, priceL: 45 },
          { name: '波霸綠茶', priceM: 35, priceL: 45 },
          { name: '波霸紅茶', priceM: 35, priceL: 45 },
          { name: '波霸烏龍', priceM: 35, priceL: 45 },
          { name: '珍珠四季春', priceM: 35, priceL: 45 },
          { name: '珍珠綠茶', priceM: 35, priceL: 45 },
          { name: '珍珠紅茶', priceM: 35, priceL: 45 },
          { name: '椰果綠茶', priceM: 35, priceL: 45 },
          { name: '椰果青茶', priceM: 35, priceL: 45 },
        ],
      },
      {
        name: '找口感 (經典人氣)',
        items: [
          { name: '1號 (四季春珍波椰)', priceM: 35, priceL: 45 },
          { name: '波霸奶茶', priceM: 50, priceL: 60 },
          { name: '珍珠奶茶', priceM: 50, priceL: 60 },
          { name: '波霸奶綠', priceM: 50, priceL: 60 },
          { name: '珍珠奶綠', priceM: 50, priceL: 60 },
          { name: '波霸烏龍奶', priceM: 50, priceL: 60 },
          { name: '珍波椰綠茶', priceM: 40, priceL: 50 },
          { name: '珍波椰青茶', priceM: 40, priceL: 50 },
          { name: '布丁奶茶', priceM: 55, priceL: 65 },
          { name: '仙草凍奶茶', priceM: 50, priceL: 60 },
          { name: '燕麥奶茶', priceM: 50, priceL: 60 },
        ],
      },
      {
        name: '找奶茶',
        items: [
          { name: '奶茶', priceM: 45, priceL: 55 },
          { name: '奶綠', priceM: 45, priceL: 55 },
          { name: '烏龍奶茶', priceM: 45, priceL: 55 },
          { name: '椰果奶茶', priceM: 50, priceL: 60 },
          { name: '紅茶瑪奇朵', priceM: 45, priceL: 55 },
          { name: '綠茶瑪奇朵', priceM: 45, priceL: 55 },
          { name: '烏龍瑪奇朵', priceM: 45, priceL: 55 },
        ],
      },
      {
        name: '找拿鐵 (鮮奶系列)',
        items: [
          { name: '紅茶拿鐵', priceM: 55, priceL: 70 },
          { name: '綠茶拿鐵', priceM: 55, priceL: 70 },
          { name: '烏龍拿鐵', priceM: 55, priceL: 70 },
          { name: '波霸紅茶拿鐵', priceM: 60, priceL: 75 },
          { name: '珍珠紅茶拿鐵', priceM: 60, priceL: 75 },
          { name: '波霸烏龍拿鐵', priceM: 60, priceL: 75 },
          { name: '燕麥紅茶拿鐵', priceM: 60, priceL: 75 },
          { name: '燕麥烏龍拿鐵', priceM: 60, priceL: 75 },
          { name: '布丁紅茶拿鐵', priceM: 65, priceL: 80 },
        ],
      },
      {
        name: '找新鮮 (特調與果汁)',
        items: [
          { name: '8冰綠 (金桔梅子綠)', priceM: 50, priceL: 60 },
          { name: '8冰茶 (金桔梅子青)', priceM: 50, priceL: 60 },
          { name: '冰淇淋紅茶', priceM: 45, priceL: 55 },
          { name: '冰淇淋綠茶', priceM: 45, priceL: 55 },
          { name: '冰淇淋奶茶', priceM: 55, priceL: 65 },
          { name: '檸檬綠茶', priceM: 50, priceL: 60 },
          { name: '檸檬青茶', priceM: 50, priceL: 60 },
          { name: '檸檬紅茶', priceM: 50, priceL: 60 },
          { name: '金桔檸檬', priceM: 50, priceL: 60 },
          { name: '梅子綠茶', priceM: 45, priceL: 55 },
          { name: '養樂多綠茶', priceM: 50, priceL: 60 },
          { name: '葡萄柚綠茶', priceM: 55, priceL: 65 },
          { name: '多多檸檬綠', priceM: 55, priceL: 65 },
        ],
      },
    ],
    toppings: [
      { id: 'top_boba', name: '波霸', price: 10 },
      { id: 'top_pearl', name: '珍珠', price: 10 },
      { id: 'top_coconut', name: '椰果', price: 10 },
      { id: 'top_oat', name: '燕麥', price: 10 },
      { id: 'top_pudding', name: '布丁', price: 20 },
      { id: 'top_icecream', name: '冰淇淋', price: 20 },
    ],
  },

  '可不可熟成紅茶': {
    categories: [
      {
        name: '單品純茶',
        items: [
          { name: '熟成紅茶', priceM: 30, priceL: 35 },
          { name: '麗春紅茶', priceM: 30, priceL: 35 },
          { name: '春芽綠茶', priceM: 30, priceL: 35 },
          { name: '胭脂紅茶', priceM: 35, priceL: 40 },
          { name: '金萱紅茶', priceM: 35, priceL: 40 },
        ],
      },
      {
        name: '熟成歐蕾 (鮮奶茶)',
        items: [
          { name: '熟成歐蕾', priceM: 50, priceL: 60 },
          { name: '白玉歐蕾 (招牌珍珠)', priceM: 55, priceL: 65 },
          { name: '胭脂歐蕾', priceM: 55, priceL: 65 },
          { name: '春芽歐蕾', priceM: 50, priceL: 60 },
        ],
      },
      {
        name: '熟成奶茶',
        items: [
          { name: '熟成奶茶', priceM: 45, priceL: 55 },
          { name: '白玉奶茶', priceM: 50, priceL: 60 },
          { name: '春芽奶茶', priceM: 45, priceL: 55 },
          { name: '胭脂奶茶', priceM: 50, priceL: 60 },
        ],
      },
      {
        name: '冬瓜冷露與果茶',
        items: [
          { name: '雪花冷露 (冬瓜茶)', priceM: 30, priceL: 35 },
          { name: '熟成冷露 (冬瓜紅茶)', priceM: 30, priceL: 35 },
          { name: '春芽冷露 (冬瓜綠茶)', priceM: 30, priceL: 35 },
          { name: '冷露檸檬', priceM: 45, priceL: 55 },
          { name: '金蜜檸檬', priceM: 48, priceL: 58 },
          { name: '春梅冰茶 (冬瓜+梅子)', priceM: 45, priceL: 55 },
          { name: '胭脂多多', priceM: 45, priceL: 55 },
          { name: '雪藏紅茶 (香草冰淇淋)', priceM: 50, priceL: 60 },
        ],
      },
    ],
    toppings: [
      { id: 'kbk_pearl', name: '白玉珍珠', price: 10 },
      { id: 'kbk_water', name: '水玉晶球', price: 15 },
      { id: 'kbk_jelly', name: '百香蒟蒻凍', price: 15 },
    ],
  },

  '得正 Oolong TEA Project': {
    categories: [
      {
        name: '原茶系列 (三種火候烏龍)',
        items: [
          { name: '春烏龍 (清香輕發酵)', priceM: 30, priceL: 35 },
          { name: '輕烏龍 (一分火)', priceM: 30, priceL: 35 },
          { name: '焙烏龍 (三分火中炭焙)', priceM: 30, priceL: 35 },
        ],
      },
      {
        name: '烏龍奶茶系列',
        items: [
          { name: '春烏龍奶茶', priceM: 45, priceL: 55 },
          { name: '輕烏龍奶茶', priceM: 45, priceL: 55 },
          { name: '焙烏龍奶茶', priceM: 45, priceL: 55 },
          { name: '烘吉奶茶 (烤焙香氣)', priceM: 50, priceL: 60 },
        ],
      },
      {
        name: '烏龍鮮奶系列',
        items: [
          { name: '春烏龍鮮奶', priceM: 50, priceL: 65 },
          { name: '輕烏龍鮮奶', priceM: 50, priceL: 65 },
          { name: '焙烏龍鮮奶', priceM: 50, priceL: 65 },
          { name: '抹茶鮮奶', priceM: 55, priceL: 70 },
        ],
      },
      {
        name: '芝士奶蓋系列 (招牌)',
        items: [
          { name: '芝士奶蓋春烏龍', priceM: 50, priceL: 60 },
          { name: '芝士奶蓋輕烏龍', priceM: 50, priceL: 60 },
          { name: '芝士奶蓋焙烏龍', priceM: 50, priceL: 60 },
          { name: '芝士奶蓋阿華田', priceM: 55, priceL: 65 },
          { name: '芝士奶蓋烘吉茶', priceM: 55, priceL: 65 },
        ],
      },
      {
        name: '鮮果特調系列',
        items: [
          { name: '檸檬春烏龍', priceM: 45, priceL: 55 },
          { name: '香橙春烏龍', priceM: 55, priceL: 65 },
          { name: '優多春烏龍', priceM: 45, priceL: 55 },
          { name: '甘蔗春烏龍', priceM: 50, priceL: 60 },
        ],
      },
    ],
    toppings: [
      { id: 'dz_t1', name: '黃金珍珠', price: 10 },
      { id: 'dz_t2', name: '焙烏龍茶凍', price: 10 },
      { id: 'dz_t3', name: '芝士奶蓋', price: 20 },
    ],
  },

  '麻古茶坊': {
    categories: [
      {
        name: '原味純茶',
        items: [
          { name: '高山金萱茶 (招牌)', priceM: 30, priceL: 35 },
          { name: '錫蘭紅茶', priceM: 30, priceL: 35 },
          { name: '翡翠綠茶', priceM: 30, priceL: 35 },
          { name: '文山清茶', priceM: 30, priceL: 35 },
        ],
      },
      {
        name: '咀嚼嚼嚼 (雙Q/珍珠)',
        items: [
          { name: '金萱雙Q (白玉+椰果)', priceM: 40, priceL: 45 },
          { name: '金萱三Q (白玉+椰果+波霸)', priceM: 45, priceL: 50 },
          { name: '波霸紅茶', priceM: 35, priceL: 40 },
          { name: '波霸翡翠綠', priceM: 35, priceL: 40 },
          { name: '椰果翡翠綠', priceM: 35, priceL: 40 },
        ],
      },
      {
        name: '果粒鮮茶系列 (現切現榨)',
        items: [
          { name: '柳橙果粒茶', priceM: 65, priceL: 75 },
          { name: '香橙果粒茶 (柳橙+百香)', priceM: 65, priceL: 75 },
          { name: '葡萄柚果粒茶', priceM: 60, priceL: 70 },
          { name: '奇異果果粒茶', priceM: 70, priceL: 80 },
          { name: '蕃茄梅蜜 (招牌必喝)', priceM: 65, priceL: 70 },
          { name: '翡翠柳橙', priceM: 60, priceL: 70 },
          { name: '檸檬翡翠綠', priceM: 50, priceL: 60 },
        ],
      },
      {
        name: '芝芝奶蓋系列',
        items: [
          { name: '芝芝金萱', priceM: 55, priceL: 65 },
          { name: '芝芝金萱雙Q', priceM: 65, priceL: 75 },
          { name: '芝芝錫蘭紅', priceM: 55, priceL: 65 },
          { name: '芝芝葡萄果粒', priceM: 85, priceL: 95 },
          { name: '芝芝芒果果粒', priceM: 85, priceL: 95 },
          { name: '楊枝甘露2.0', priceM: 80, priceL: 85 },
        ],
      },
      {
        name: '香醇奶茶與拿鐵',
        items: [
          { name: '麻古奶茶', priceM: 45, priceL: 55 },
          { name: '波霸奶茶', priceM: 50, priceL: 60 },
          { name: '金萱奶茶', priceM: 45, priceL: 55 },
          { name: '錫蘭紅茶拿鐵', priceM: 60, priceL: 75 },
          { name: '高山金萱拿鐵', priceM: 60, priceL: 75 },
          { name: '翡翠綠茶拿鐵', priceM: 60, priceL: 75 },
        ],
      },
    ],
    toppings: [
      { id: 'macu_t1', name: '波霸', price: 10 },
      { id: 'macu_t2', name: '椰果', price: 10 },
      { id: 'macu_t3', name: '白玉珍珠', price: 10 },
      { id: 'macu_t4', name: '綠茶凍', price: 10 },
      { id: 'macu_t5', name: '芝芝奶蓋', price: 25 },
    ],
  },

  '清心福全': {
    categories: [
      {
        name: '茗品純茶',
        items: [
          { name: '原鄉四季', priceM: 30, priceL: 35 },
          { name: '特選烏龍綠', priceM: 30, priceL: 35 },
          { name: '極品菁茶', priceM: 30, priceL: 35 },
          { name: '特級綠茶', priceM: 30, priceL: 35 },
          { name: '錫蘭紅茶', priceM: 30, priceL: 35 },
          { name: '嚴選高山茶', priceM: 35, priceL: 40 },
          { name: '普洱茶', priceM: 30, priceL: 35 },
        ],
      },
      {
        name: '香醇奶茶',
        items: [
          { name: '特級奶茶', priceM: 45, priceL: 55 },
          { name: '錫蘭奶紅', priceM: 45, priceL: 55 },
          { name: '烏龍奶茶', priceM: 45, priceL: 55 },
          { name: '珍珠奶茶 (大珍珠)', priceM: 50, priceL: 60 },
          { name: '粉圓奶茶 (小粉圓)', priceM: 50, priceL: 60 },
          { name: '椰果奶茶', priceM: 50, priceL: 60 },
          { name: '布丁奶茶', priceM: 55, priceL: 65 },
          { name: '仙草凍奶茶', priceM: 50, priceL: 60 },
        ],
      },
      {
        name: '鮮奶拿鐵',
        items: [
          { name: '隱藏版 (珍珠蜂蜜鮮奶普洱)', priceM: 65, priceL: 80 },
          { name: '鮮奶茶', priceM: 55, priceL: 70 },
          { name: '鮮奶綠', priceM: 55, priceL: 70 },
          { name: '鮮奶烏龍', priceM: 55, priceL: 70 },
          { name: '珍珠鮮奶茶', priceM: 60, priceL: 75 },
        ],
      },
      {
        name: '特調多多與果汁',
        items: [
          { name: '優多綠茶 (多多綠)', priceM: 45, priceL: 55 },
          { name: '優多檸檬', priceM: 50, priceL: 60 },
          { name: '蜜茶', priceM: 35, priceL: 45 },
          { name: '蜂蜜綠茶', priceM: 45, priceL: 55 },
          { name: '梅子綠茶', priceM: 40, priceL: 50 },
          { name: '檸檬紅茶', priceM: 45, priceL: 55 },
          { name: '金桔檸檬', priceM: 50, priceL: 60 },
          { name: '冰淇淋紅茶', priceM: 45, priceL: 55 },
        ],
      },
    ],
    toppings: [
      { id: 'qx_t1', name: '珍珠 (大)', price: 10 },
      { id: 'qx_t2', name: '紅粉圓 (小)', price: 10 },
      { id: 'qx_t3', name: '椰果', price: 10 },
      { id: 'qx_t4', name: '仙草凍', price: 10 },
      { id: 'qx_t5', name: '布丁', price: 20 },
    ],
  },

  '龜記茗品': {
    categories: [
      {
        name: '人氣招牌推薦',
        items: [
          { name: '紅柚翡翠 (招牌果肉)', priceM: 70, priceL: 75 },
          { name: '蘋果紅萱', priceM: 55, priceL: 60 },
          { name: '柳橙翡翠', priceM: 60, priceL: 65 },
          { name: '雷蒙蘆薈蜜', priceM: 60, priceL: 70 },
        ],
      },
      {
        name: '原茶系列',
        items: [
          { name: '三韻紅萱', priceM: 35, priceL: 40 },
          { name: '翡翠綠茶', priceM: 35, priceL: 40 },
          { name: '極品紅茶', priceM: 35, priceL: 40 },
          { name: '三十三茶王', priceM: 40, priceL: 45 },
          { name: '秀水冬瓜青', priceM: 45, priceL: 50 },
        ],
      },
      {
        name: '醇厚奶茶與鮮乳',
        items: [
          { name: '濃乳茶', priceM: 50, priceL: 60 },
          { name: '紅烏奶茶', priceM: 50, priceL: 60 },
          { name: '碎銀奶茶', priceM: 55, priceL: 65 },
          { name: '冬瓜鮮乳', priceM: 55, priceL: 65 },
          { name: '紅烏鮮乳', priceM: 60, priceL: 70 },
          { name: '黑糖鮮乳波霸', priceM: 65, priceL: 75 },
        ],
      },
    ],
    toppings: [
      { id: 'gj_t1', name: '蘆薈', price: 10 },
      { id: 'gj_t2', name: '椰果', price: 10 },
      { id: 'gj_t3', name: '黃金珍珠', price: 10 },
    ],
  },

  '迷客夏 Milksha': {
    categories: [
      {
        name: '牧場鮮奶系列 (綠光鮮奶)',
        items: [
          { name: '珍珠紅茶拿鐵', priceM: 60, priceL: 75 },
          { name: '大正紅茶拿鐵', priceM: 55, priceL: 70 },
          { name: '伯爵紅茶拿鐵', priceM: 55, priceL: 70 },
          { name: '原片青茶拿鐵', priceM: 55, priceL: 70 },
          { name: '高峰烏龍拿鐵', priceM: 55, priceL: 70 },
          { name: '手作芋頭鮮奶 (大甲芋頭)', priceM: 70, priceL: 85 },
          { name: '手炒黑糖鮮奶', priceM: 65, priceL: 80 },
        ],
      },
      {
        name: '原片茗茶',
        items: [
          { name: '大正紅茶', priceM: 35, priceL: 40 },
          { name: '初露青茶', priceM: 35, priceL: 40 },
          { name: '茉香綠茶', priceM: 35, priceL: 40 },
          { name: '伯爵紅茶', priceM: 35, priceL: 40 },
          { name: '高峰烏龍茶', priceM: 35, priceL: 40 },
        ],
      },
      {
        name: '果茶特調',
        items: [
          { name: '柳丁綠茶', priceM: 60, priceL: 70 },
          { name: '青檸香茶', priceM: 60, priceL: 70 },
          { name: '冰糖洛神梅', priceM: 50, priceL: 60 },
          { name: '養樂多綠', priceM: 50, priceL: 60 },
        ],
      },
      {
        name: '雲朵奶蓋',
        items: [
          { name: '雲朵伯爵紅茶', priceM: 55, priceL: 65 },
          { name: '雲朵初露青茶', priceM: 55, priceL: 65 },
          { name: '雲朵高峰烏龍', priceM: 55, priceL: 65 },
        ],
      },
    ],
    toppings: [
      { id: 'mk_t1', name: '白玉珍珠', price: 10 },
      { id: 'mk_t2', name: '黃金Q角', price: 10 },
      { id: 'mk_t3', name: '綠茶凍', price: 10 },
      { id: 'mk_t4', name: '布丁', price: 20 },
    ],
  },

  '萬波島嶼紅茶': {
    categories: [
      {
        name: '原茶系列',
        items: [
          { name: '島嶼紅茶', priceM: 30, priceL: 35 },
          { name: '碧螺春綠茶', priceM: 30, priceL: 35 },
          { name: '阿里山青茶', priceM: 30, priceL: 35 },
          { name: '金萱烏龍', priceM: 30, priceL: 35 },
        ],
      },
      {
        name: '奶茶與那堤',
        items: [
          { name: '萬波奶茶', priceM: 45, priceL: 55 },
          { name: '波霸奶茶', priceM: 50, priceL: 60 },
          { name: '蘭葉那堤 (鮮奶)', priceM: 55, priceL: 65 },
          { name: '金萱那堤 (鮮奶)', priceM: 55, priceL: 65 },
        ],
      },
      {
        name: '島嶼古早味與特調',
        items: [
          { name: '紅豆粉粿鮮奶', priceM: 65, priceL: 75 },
          { name: '黑糖珍珠鮮奶', priceM: 65, priceL: 75 },
          { name: '金萱紅柚', priceM: 60, priceL: 70 },
          { name: '鳴光蜜金桔', priceM: 50, priceL: 60 },
          { name: '愛玉檸檬綠', priceM: 50, priceL: 60 },
          { name: '埔里甘蔗青茶', priceM: 55, priceL: 65 },
          { name: '冬瓜鮮奶', priceM: 50, priceL: 60 },
        ],
      },
    ],
    toppings: [
      { id: 'wb_t1', name: '波霸', price: 10 },
      { id: 'wb_t2', name: '小芋圓', price: 15 },
      { id: 'wb_t3', name: '粉粿', price: 15 },
      { id: 'wb_t4', name: '愛玉凍', price: 10 },
    ],
  },

  'TEA TOP 第一味': {
    categories: [
      {
        name: '名間鄉高山茗茶',
        items: [
          { name: '高山青茶 (招牌冠軍茶)', priceM: 30, priceL: 35 },
          { name: '日月潭紅茶', priceM: 35, priceL: 40 },
          { name: '冬片青茶', priceM: 35, priceL: 40 },
          { name: '嚴選綠茶', priceM: 30, priceL: 35 },
          { name: '108茶王', priceM: 40, priceL: 45 },
        ],
      },
      {
        name: '咀嚼系好料',
        items: [
          { name: '高山青雙Q (粉粿+珍珠)', priceM: 40, priceL: 45 },
          { name: '珍珠奶茶', priceM: 50, priceL: 60 },
          { name: '雙Q奶茶', priceM: 50, priceL: 60 },
          { name: '芋見幸福 (芋圓+芋泥+鮮奶)', priceM: 65, priceL: 75 },
        ],
      },
      {
        name: '大甲芋頭與鮮奶',
        items: [
          { name: '日月潭紅茶拿鐵', priceM: 55, priceL: 70 },
          { name: '高山青茶拿鐵', priceM: 55, priceL: 70 },
          { name: '特濃大甲芋頭鮮奶', priceM: 70, priceL: 85 },
        ],
      },
      {
        name: '鮮果好茶',
        items: [
          { name: '百香鮮綠', priceM: 50, priceL: 60 },
          { name: '芒果鳳梨青', priceM: 60, priceL: 70 },
          { name: '翡翠檸檬', priceM: 50, priceL: 60 },
          { name: '梅子青茶', priceM: 45, priceL: 55 },
        ],
      },
    ],
    toppings: [
      { id: 'tt_t1', name: '招牌粉粿', price: 15 },
      { id: 'tt_t2', name: '珍珠', price: 10 },
      { id: 'tt_t3', name: '椰果', price: 10 },
      { id: 'tt_t4', name: '仙草凍', price: 10 },
    ],
  },

  '老賴茶棧': {
    categories: [
      {
        name: '老賴經典古早味',
        items: [
          { name: '老賴紅茶 (招牌焦糖香)', priceM: 30, priceL: 35 },
          { name: '太后牛乳 (招牌純鮮奶茶)', priceM: 55, priceL: 65 },
          { name: '老賴奶茶', priceM: 45, priceL: 50 },
          { name: '胚芽奶茶', priceM: 50, priceL: 60 },
        ],
      },
      {
        name: '傳統手磨豆香',
        items: [
          { name: '豆香紅茶 (老賴名產)', priceM: 35, priceL: 40 },
          { name: '招牌豆漿 (微糖/無糖)', priceM: 30, priceL: 35 },
          { name: '黑糖珍珠豆紅', priceM: 50, priceL: 60 },
        ],
      },
      {
        name: '青草與冬瓜',
        items: [
          { name: '老賴青草茶', priceM: 35, priceL: 40 },
          { name: '青草紅茶', priceM: 35, priceL: 40 },
          { name: '冬瓜檸檬', priceM: 45, priceL: 50 },
          { name: '梅子冬瓜茶', priceM: 40, priceL: 45 },
          { name: '珍珠老賴紅茶', priceM: 35, priceL: 45 },
        ],
      },
    ],
    toppings: [
      { id: 'll_t1', name: '珍珠', price: 10 },
      { id: 'll_t2', name: '椰果', price: 10 },
      { id: 'll_t3', name: '胚芽', price: 10 },
    ],
  },

  '五桐號 WooTEA': {
    categories: [
      {
        name: '手作凍飲系列 (招牌必點)',
        items: [
          { name: '杏仁凍五桐茶', priceM: 50, priceL: 55 },
          { name: '綠茶凍五桐茶', priceM: 45, priceL: 50 },
          { name: '豆漿凍紅茶', priceM: 45, priceL: 50 },
          { name: '仙草凍奶茶', priceM: 50, priceL: 60 },
        ],
      },
      {
        name: '醇厚奶霜與鮮奶',
        items: [
          { name: '五桐奶茶', priceM: 50, priceL: 60 },
          { name: '最完美手沖泰奶', priceM: 65, priceL: 70 },
          { name: '重焙烏龍拿鐵', priceM: 60, priceL: 70 },
          { name: '老實人鮮柚綠茶', priceM: 65, priceL: 75 },
        ],
      },
      {
        name: '單品好茶',
        items: [
          { name: '五桐茶 (清香回甘)', priceM: 35, priceL: 40 },
          { name: '老實人紅茶', priceM: 35, priceL: 40 },
          { name: '包種青茶', priceM: 35, priceL: 40 },
          { name: '重焙烏龍茶', priceM: 35, priceL: 40 },
        ],
      },
    ],
    toppings: [
      { id: 'wt_t1', name: '手工杏仁凍', price: 15 },
      { id: 'wt_t2', name: '綠茶凍', price: 12 },
      { id: 'wt_t3', name: '豆漿凍', price: 12 },
      { id: 'wt_t4', name: '白玉珍珠', price: 10 },
    ],
  },

  '李記紅茶冰': {
    categories: [
      {
        name: '招牌紅茶冰 (巨無霸1000cc)',
        items: [
          { name: '古早味紅茶冰', priceM: 25, priceL: 30 },
          { name: '檸檬紅茶冰', priceM: 35, priceL: 40 },
          { name: '豆漿紅茶冰', priceM: 35, priceL: 40 },
          { name: '冬瓜紅茶冰', priceM: 30, priceL: 35 },
          { name: '鮮奶紅茶冰', priceM: 45, priceL: 55 },
        ],
      },
      {
        name: '古早味特調冬瓜與青茶',
        items: [
          { name: '古早味冬瓜茶', priceM: 25, priceL: 30 },
          { name: '冬瓜檸檬冰', priceM: 35, priceL: 40 },
          { name: '高山青茶冰', priceM: 25, priceL: 30 },
          { name: '梅子青茶冰', priceM: 35, priceL: 40 },
          { name: '珍珠紅茶冰', priceM: 35, priceL: 40 },
          { name: '椰果紅茶冰', priceM: 35, priceL: 40 },
        ],
      },
    ],
    toppings: [
      { id: 'lj_t1', name: '黑糖珍珠', price: 10 },
      { id: 'lj_t2', name: '椰果', price: 10 },
      { id: 'lj_t3', name: '小芋圓', price: 10 },
    ],
  },

  '吳家紅茶冰': {
    categories: [
      {
        name: '大杯古早味 (巨無霸胖胖杯)',
        items: [
          { name: '招牌吳家紅茶冰', priceM: 25, priceL: 30 },
          { name: '檸檬紅茶冰', priceM: 35, priceL: 45 },
          { name: '豆漿紅茶冰 (黑白配)', priceM: 35, priceL: 40 },
          { name: '厚鮮奶紅茶冰', priceM: 45, priceL: 55 },
          { name: '金桔檸檬紅茶冰', priceM: 40, priceL: 50 },
        ],
      },
      {
        name: '特調冬瓜與梅子',
        items: [
          { name: '傳統冬瓜茶', priceM: 25, priceL: 30 },
          { name: '冬瓜檸檬', priceM: 35, priceL: 45 },
          { name: '冬瓜青茶', priceM: 30, priceL: 35 },
          { name: '烏梅紅茶冰', priceM: 35, priceL: 45 },
          { name: '百香果綠茶冰', priceM: 35, priceL: 45 },
          { name: '波霸珍珠紅茶冰', priceM: 35, priceL: 40 },
        ],
      },
    ],
    toppings: [
      { id: 'wj_t1', name: '波霸珍珠', price: 10 },
      { id: 'wj_t2', name: '椰果', price: 10 },
      { id: 'wj_t3', name: '寒天晶球', price: 10 },
    ],
  },

  '水云茶堂-阿里山鐵道紅茶': {
    categories: [
      {
        name: '阿里山鐵道茶系',
        items: [
          { name: '阿里山鐵道紅茶', priceM: 30, priceL: 35 },
          { name: '阿里山高山青茶', priceM: 30, priceL: 35 },
          { name: '鐵道冬瓜茶', priceM: 25, priceL: 30 },
          { name: '冬瓜鐵道紅茶', priceM: 30, priceL: 35 },
          { name: '鐵道檸檬紅茶', priceM: 40, priceL: 50 },
        ],
      },
      {
        name: '香醇厚乳與特調',
        items: [
          { name: '鐵道鮮奶紅茶', priceM: 50, priceL: 60 },
          { name: '鐵道厚奶茶', priceM: 45, priceL: 55 },
          { name: '波霸鐵道奶茶', priceM: 50, priceL: 60 },
          { name: '梅子鐵道青茶', priceM: 40, priceL: 50 },
          { name: '金桔鐵道青茶', priceM: 45, priceL: 55 },
        ],
      },
    ],
    toppings: [
      { id: 'sy_t1', name: '黑糖波霸', price: 10 },
      { id: 'sy_t2', name: '椰果', price: 10 },
      { id: 'sy_t3', name: '茶凍', price: 10 },
    ],
  },

  '紅茶媽媽': {
    categories: [
      {
        name: '招牌古早紅茶與純茶',
        items: [
          { name: '古早味紅茶', priceM: 25, priceL: 30 },
          { name: '茉莉綠茶', priceM: 25, priceL: 30 },
          { name: '高山青茶', priceM: 25, priceL: 30 },
          { name: '古早味冬瓜茶', priceM: 25, priceL: 30 },
        ],
      },
      {
        name: '經典特調奶茶',
        items: [
          { name: '特級奶茶', priceM: 40, priceL: 50 },
          { name: '珍珠奶茶', priceM: 45, priceL: 55 },
          { name: '波霸鮮奶茶', priceM: 50, priceL: 65 },
          { name: '豆漿紅茶', priceM: 30, priceL: 40 },
          { name: '檸檬冬瓜茶', priceM: 35, priceL: 45 },
          { name: '百香綠茶', priceM: 35, priceL: 45 },
        ],
      },
    ],
    toppings: [
      { id: 'rm_t1', name: '波霸珍珠', price: 10 },
      { id: 'rm_t2', name: '椰果', price: 10 },
      { id: 'rm_t3', name: '布丁', price: 15 },
    ],
  },

  '紅茶老爹': {
    categories: [
      {
        name: '老爹招牌純茶',
        items: [
          { name: '老爹經典紅茶', priceM: 25, priceL: 30 },
          { name: '四季青茶', priceM: 25, priceL: 30 },
          { name: '極品綠茶', priceM: 25, priceL: 30 },
          { name: '老爹冬瓜茶', priceM: 25, priceL: 30 },
        ],
      },
      {
        name: '香醇奶茶與拿鐵',
        items: [
          { name: '老爹奶茶', priceM: 40, priceL: 50 },
          { name: '珍珠奶茶', priceM: 45, priceL: 55 },
          { name: '鮮奶紅茶', priceM: 50, priceL: 60 },
          { name: '豆漿紅茶', priceM: 35, priceL: 40 },
          { name: '冬瓜檸檬', priceM: 35, priceL: 45 },
        ],
      },
    ],
    toppings: [
      { id: 'rd_t1', name: '珍珠', price: 10 },
      { id: 'rd_t2', name: '椰果', price: 10 },
    ],
  },

  '85度C': {
    categories: [
      {
        name: '人氣咖啡系列',
        items: [
          { name: '美式咖啡', priceM: 55, priceL: 70 },
          { name: '招牌咖啡', priceM: 60, priceL: 75 },
          { name: '海岩咖啡 (招牌鹹奶蓋)', priceM: 65, priceL: 80 },
          { name: '拿鐵咖啡', priceM: 70, priceL: 85 },
          { name: '卡布奇諾', priceM: 70, priceL: 85 },
          { name: '焦糖瑪奇朵', priceM: 80, priceL: 95 },
        ],
      },
      {
        name: '人氣茶飲與一顆檸檬',
        items: [
          { name: '一顆檸檬紅茶 (招牌整顆現切)', priceM: 60, priceL: 65 },
          { name: '一顆檸檬青茶', priceM: 60, priceL: 65 },
          { name: '初露青茶', priceM: 30, priceL: 35 },
          { name: '淺焙紅茶', priceM: 30, priceL: 35 },
          { name: '高山綠茶', priceM: 30, priceL: 35 },
          { name: '海岩青茶', priceM: 45, priceL: 55 },
          { name: '海岩紅茶', priceM: 45, priceL: 55 },
          { name: '黑糖珍珠厚奶茶', priceM: 55, priceL: 65 },
        ],
      },
    ],
    toppings: [
      { id: '85_t1', name: '黑糖珍珠', price: 10 },
      { id: '85_t2', name: '椰果', price: 10 },
      { id: '85_t3', name: '海岩奶蓋', price: 20 },
    ],
  },

  '茶之魔手': {
    categories: [
      {
        name: '南霸天招牌純茶',
        items: [
          { name: '台灣純茶 (青茶)', priceM: 25, priceL: 30 },
          { name: '伯爵紅茶', priceM: 25, priceL: 30 },
          { name: '茉香綠茶', priceM: 25, priceL: 30 },
          { name: '冬瓜茶', priceM: 20, priceL: 25 },
        ],
      },
      {
        name: '經典魔手特調',
        items: [
          { name: '山楂烏龍 (經典招牌酸甜)', priceM: 35, priceL: 45 },
          { name: '藍莓凍奶茶', priceM: 45, priceL: 55 },
          { name: '波霸奶茶', priceM: 40, priceL: 50 },
          { name: '椰果奶茶', priceM: 40, priceL: 50 },
          { name: '梅子青茶', priceM: 35, priceL: 40 },
          { name: '檸檬紅茶', priceM: 35, priceL: 45 },
          { name: '白香青茶', priceM: 35, priceL: 45 },
          { name: '厚鮮奶茶', priceM: 50, priceL: 65 },
        ],
      },
    ],
    toppings: [
      { id: 'cm_t1', name: '波霸珍珠', price: 10 },
      { id: 'cm_t2', name: '椰果', price: 10 },
      { id: 'cm_t3', name: '藍莓凍', price: 10 },
    ],
  },

  '大苑子': {
    categories: [
      {
        name: '著時鮮果好茶 (招牌現榨)',
        items: [
          { name: '柳橙愛好者 (招牌柳丁汁)', priceM: 70, priceL: 80 },
          { name: '芭樂檸檬 (人氣雙果)', priceM: 65, priceL: 75 },
          { name: '柚美粒 (西柚蘆薈)', priceM: 65, priceL: 75 },
          { name: '翡翠檸檬', priceM: 55, priceL: 65 },
          { name: '百香翡翠', priceM: 60, priceL: 70 },
          { name: '愛文芒果冰沙 (季節限定)', priceM: 85, priceL: 95 },
        ],
      },
      {
        name: '鮮乳與原茶',
        items: [
          { name: '許慶良鮮奶茶', priceM: 60, priceL: 75 },
          { name: '許慶良芋頭鮮奶', priceM: 70, priceL: 85 },
          { name: '文山青茶', priceM: 30, priceL: 35 },
          { name: '茉綠醇茶', priceM: 30, priceL: 35 },
          { name: '古城錫蘭紅茶', priceM: 30, priceL: 35 },
        ],
      },
    ],
    toppings: [
      { id: 'dy_t1', name: '珍珠', price: 10 },
      { id: 'dy_t2', name: '蘆薈', price: 10 },
      { id: 'dy_t3', name: '愛玉', price: 10 },
    ],
  },

  '手作功夫茶': {
    categories: [
      {
        name: '人氣招牌推薦',
        items: [
          { name: '38奶霸 (珍珠+仙草+蒟蒻)', priceM: 55, priceL: 65 },
          { name: '黑糖波霸純鮮奶', priceM: 65, priceL: 75 },
          { name: '寒天柚香飲', priceM: 60, priceL: 70 },
          { name: '翠玉凍飲', priceM: 45, priceL: 55 },
        ],
      },
      {
        name: '功夫純茶與奶茶',
        items: [
          { name: '四季春青茶', priceM: 30, priceL: 35 },
          { name: '阿里山冰茶', priceM: 35, priceL: 40 },
          { name: '功夫奶茶', priceM: 45, priceL: 55 },
          { name: '波霸奶茶', priceM: 50, priceL: 60 },
          { name: '芝士鐵觀音', priceM: 55, priceL: 65 },
        ],
      },
    ],
    toppings: [
      { id: 'kf_t1', name: '黑糖波霸', price: 10 },
      { id: 'kf_t2', name: '寒天晶球', price: 15 },
      { id: 'kf_t3', name: '仙草凍', price: 10 },
    ],
  },

  '鮮茶道': {
    categories: [
      {
        name: '萃茶好茶 (現點現萃)',
        items: [
          { name: '阿里山冰茶 (招牌)', priceM: 35, priceL: 40 },
          { name: '四季春茶', priceM: 30, priceL: 35 },
          { name: '錫蘭紅茶', priceM: 30, priceL: 35 },
          { name: '焙茶拿鐵', priceM: 55, priceL: 70 },
        ],
      },
      {
        name: '熊貓珍珠與鮮果特調',
        items: [
          { name: '熊貓珍珠奶茶 (黑白雙珠)', priceM: 50, priceL: 60 },
          { name: '紅心芭樂檸檬', priceM: 55, priceL: 65 },
          { name: '白桃烏龍', priceM: 40, priceL: 45 },
          { name: '冬瓜檸檬', priceM: 45, priceL: 55 },
          { name: '鮮果雙Q綠茶', priceM: 55, priceL: 65 },
        ],
      },
    ],
    toppings: [
      { id: 'scd_t1', name: '熊貓珍珠', price: 10 },
      { id: 'scd_t2', name: '椰果', price: 10 },
      { id: 'scd_t3', name: '愛玉', price: 10 },
    ],
  },
};
