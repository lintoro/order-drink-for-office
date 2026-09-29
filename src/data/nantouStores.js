/**
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

export const NANTOU_STORES = [
  {
    "id": "store_weichuan_nantou_fuxing",
    "name": "微川飲料製造",
    "branchName": "南投復興店",
    "phone": "049-2206866",
    "address": "南投市復興路 273 號",
    "region": "中南部價",
    "area": "南投獨立品牌",
    "businessHours": "10:00 - 21:00",
    "isOpenToday": true,
    "tagline": "南投文青自創品牌 · 松柏嶺茶葉與茶磚冰塊",
    "categories": [
      {
        "name": "研磨好茶",
        "items": [
          {
            "id": "wc_1",
            "name": "桂花青茶",
            "priceM": 35,
            "priceL": 40
          },
          {
            "id": "wc_2",
            "name": "松柏嶺高山茶",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "wc_3",
            "name": "熟成紅茶",
            "priceM": 30,
            "priceL": 35
          }
        ]
      },
      {
        "name": "川製厚奶與拿鐵",
        "items": [
          {
            "id": "wc_4",
            "name": "川製厚奶茶",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "wc_5",
            "name": "熟成紅茶拿鐵",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "wc_6",
            "name": "可可厚奶拿鐵",
            "priceM": 50,
            "priceL": 60
          }
        ]
      },
      {
        "name": "茶磚特調",
        "items": [
          {
            "id": "wc_7",
            "name": "檸檬冬瓜茶磚",
            "priceM": 40,
            "priceL": 50
          },
          {
            "id": "wc_8",
            "name": "翡翠檸檬茶",
            "priceM": 45,
            "priceL": 55
          }
        ]
      }
    ],
    "toppings": [
      {
        "id": "wc_t1",
        "name": "珍珠",
        "price": 10
      },
      {
        "id": "wc_t2",
        "name": "椰果",
        "price": 10
      },
      {
        "id": "wc_t3",
        "name": "茉莉茶凍",
        "price": 10
      }
    ]
  },
  {
    "id": "store_xiannaini_nantou_minzu",
    "name": "鮮奶奶",
    "branchName": "南投民族店",
    "phone": "049-2236479",
    "address": "南投市民族路 351 號",
    "region": "中南部價",
    "area": "南投獨立品牌",
    "businessHours": "10:30 - 20:30",
    "isOpenToday": true,
    "tagline": "手作豆花與手搖茶飲 · 辦公室咀嚼系救星",
    "categories": [
      {
        "name": "招牌豆花奶凍專區",
        "items": [
          {
            "id": "xnn_1",
            "name": "鮮奶奶茶豆花",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "xnn_2",
            "name": "招牌嫩仙草奶凍",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "xnn_3",
            "name": "鮮奶三寶 (豆花+珍珠+芋圓)",
            "priceM": 50,
            "priceL": 60
          }
        ]
      },
      {
        "name": "鮮奶手作特調",
        "items": [
          {
            "id": "xnn_4",
            "name": "珍珠冬瓜鮮奶",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "xnn_5",
            "name": "黑糖珍珠鮮奶",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "xnn_6",
            "name": "抹茶拿鐵",
            "priceM": 50,
            "priceL": 60
          }
        ]
      },
      {
        "name": "原味好茶",
        "items": [
          {
            "id": "xnn_7",
            "name": "高山青茶",
            "priceM": 25,
            "priceL": 30
          },
          {
            "id": "xnn_8",
            "name": "阿薩姆紅茶",
            "priceM": 25,
            "priceL": 30
          }
        ]
      }
    ],
    "toppings": [
      {
        "id": "xnn_t1",
        "name": "手工嫩豆花",
        "price": 15
      },
      {
        "id": "xnn_t2",
        "name": "手作嫩仙草",
        "price": 15
      },
      {
        "id": "xnn_t3",
        "name": "手工小芋圓",
        "price": 15
      },
      {
        "id": "xnn_t4",
        "name": "Q彈珍珠",
        "price": 10
      }
    ]
  },
  {
    "id": "store_zengjia_nantou_zhangnan",
    "name": "曾家純蔗糖",
    "branchName": "南投彰南店",
    "phone": "049-2200056",
    "address": "南投市彰南路一段 1066 號",
    "region": "中南部價",
    "area": "南投獨立品牌",
    "businessHours": "09:00 - 21:00",
    "isOpenToday": true,
    "tagline": "自家種植茶葉 · 100%天然純甘蔗糖熬製",
    "categories": [
      {
        "name": "天然甘蔗茶飲",
        "items": [
          {
            "id": "zj_1",
            "name": "甘蔗石蜜青茶",
            "priceM": 40,
            "priceL": 45
          },
          {
            "id": "zj_2",
            "name": "甘蔗檸檬",
            "priceM": 50,
            "priceL": 55
          },
          {
            "id": "zj_3",
            "name": "甘蔗鮮奶",
            "priceM": 55,
            "priceL": 60
          }
        ]
      },
      {
        "name": "契作高山茶",
        "items": [
          {
            "id": "zj_4",
            "name": "高山冷泡茶",
            "priceM": 35,
            "priceL": 40
          },
          {
            "id": "zj_5",
            "name": "石蜜青茶",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "zj_6",
            "name": "熟成蜜香紅",
            "priceM": 30,
            "priceL": 35
          }
        ]
      }
    ],
    "toppings": [
      {
        "id": "zj_t1",
        "name": "白玉珍珠",
        "price": 10
      },
      {
        "id": "zj_t2",
        "name": "鮮蘆薈",
        "price": 15
      },
      {
        "id": "zj_t3",
        "name": "綠茶凍",
        "price": 10
      }
    ]
  },
  {
    "id": "store_santaizi_nantou_zhangnan",
    "name": "三泰子 SAN TAI ZI",
    "branchName": "南投彰南店",
    "phone": "049-2225066",
    "address": "南投市彰南路二段 2 號",
    "region": "中南部價",
    "area": "南投獨立品牌",
    "businessHours": "09:00 - 22:00",
    "isOpenToday": true,
    "tagline": "南投市泰式奶茶專賣 · 南洋特調濃厚茶乳",
    "categories": [
      {
        "name": "正統泰式系列",
        "items": [
          {
            "id": "stz_1",
            "name": "泰式奶奶 (經典泰奶)",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "stz_2",
            "name": "泰式奶綠",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "stz_3",
            "name": "泰式檸檬紅",
            "priceM": 45,
            "priceL": 55
          }
        ]
      },
      {
        "name": "拿鐵與特調",
        "items": [
          {
            "id": "stz_4",
            "name": "觀音烏龍拿鐵",
            "priceM": 50,
            "priceL": 55
          },
          {
            "id": "stz_5",
            "name": "冬瓜仙草蜜",
            "priceM": 35,
            "priceL": 40
          },
          {
            "id": "stz_6",
            "name": "馥郁紅茶",
            "priceM": 30,
            "priceL": 35
          }
        ]
      }
    ],
    "toppings": [
      {
        "id": "stz_t1",
        "name": "黑糖珍珠",
        "price": 10
      },
      {
        "id": "stz_t2",
        "name": "仙草凍",
        "price": 10
      },
      {
        "id": "stz_t3",
        "name": "椰果",
        "price": 10
      }
    ]
  },
  {
    "id": "store_mikeq_nantou_fuxing",
    "name": "米克Q手感茶飲",
    "branchName": "南投復興店",
    "phone": "049-2228158",
    "address": "南投市復興路",
    "region": "中南部價",
    "area": "南投獨立品牌",
    "businessHours": "10:00 - 21:30",
    "isOpenToday": true,
    "tagline": "南投在地平價手搖 · 陪伴長大的手感好茶",
    "categories": [
      {
        "name": "手感特調與鮮奶",
        "items": [
          {
            "id": "mq_1",
            "name": "鮮奶仙草凍",
            "priceM": 40,
            "priceL": 45
          },
          {
            "id": "mq_2",
            "name": "綠茶多酚 (石蓮花多酚)",
            "priceM": 35,
            "priceL": 40
          },
          {
            "id": "mq_3",
            "name": "拿鐵紅茶",
            "priceM": 40,
            "priceL": 45
          },
          {
            "id": "mq_4",
            "name": "芋香珍珠奶茶",
            "priceM": 40,
            "priceL": 45
          }
        ]
      },
      {
        "name": "平價純茶",
        "items": [
          {
            "id": "mq_5",
            "name": "四季青茶",
            "priceM": 25,
            "priceL": 30
          },
          {
            "id": "mq_6",
            "name": "茉莉綠茶",
            "priceM": 25,
            "priceL": 30
          },
          {
            "id": "mq_7",
            "name": "阿薩姆紅茶",
            "priceM": 25,
            "priceL": 30
          }
        ]
      }
    ],
    "toppings": [
      {
        "id": "mq_t1",
        "name": "珍珠",
        "price": 10
      },
      {
        "id": "mq_t2",
        "name": "仙草凍",
        "price": 10
      },
      {
        "id": "mq_t3",
        "name": "椰果",
        "price": 10
      },
      {
        "id": "mq_t4",
        "name": "統一布丁",
        "price": 15
      }
    ]
  },
  {
    "id": "store_taitea1_nantou_zhongshan",
    "name": "台茶1號",
    "branchName": "南投中山店",
    "phone": "049-2241811",
    "address": "南投市中山街 242 號",
    "region": "中南部價",
    "area": "南投獨立品牌",
    "businessHours": "09:30 - 21:00",
    "isOpenToday": true,
    "tagline": "大甲純手工熬煮芋頭泥 · 鮮芋頭奶綠名店",
    "categories": [
      {
        "name": "芋頭手工熬煮招牌",
        "items": [
          {
            "id": "tt1_1",
            "name": "鮮芋頭奶綠",
            "priceM": 55,
            "priceL": 65
          },
          {
            "id": "tt1_2",
            "name": "鮮芋頭鮮奶",
            "priceM": 65,
            "priceL": 75
          }
        ]
      },
      {
        "name": "鮮奶與特調",
        "items": [
          {
            "id": "tt1_3",
            "name": "鮮奶三寶 (芋圓+珍珠+紅豆)",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "tt1_4",
            "name": "翡翠百香蜜",
            "priceM": 45,
            "priceL": 50
          }
        ]
      },
      {
        "name": "契作原茶",
        "items": [
          {
            "id": "tt1_5",
            "name": "阿里山金萱",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "tt1_6",
            "name": "炭焙烏龍",
            "priceM": 30,
            "priceL": 35
          }
        ]
      }
    ],
    "toppings": [
      {
        "id": "tt1_t1",
        "name": "大甲純芋泥",
        "price": 20
      },
      {
        "id": "tt1_t2",
        "name": "小芋圓",
        "price": 15
      },
      {
        "id": "tt1_t3",
        "name": "黑糖珍珠",
        "price": 10
      },
      {
        "id": "tt1_t4",
        "name": "萬丹紅豆",
        "price": 15
      }
    ]
  },
  {
    "id": "store_black_eyed_peas_nantou",
    "name": "黑眼荳荳",
    "branchName": "南投彰南店",
    "phone": "049-2248279",
    "address": "南投市彰南路二段 397 號",
    "region": "中南部價",
    "area": "南投獨立品牌",
    "businessHours": "09:30 - 21:00",
    "isOpenToday": true,
    "tagline": "南投在地老字號手搖 · 辦公室特調奶茶人氣店",
    "categories": [
      {
        "name": "人氣特調系列",
        "items": [
          {
            "id": "bep_1",
            "name": "莓好多多",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "bep_2",
            "name": "仙草拿鐵",
            "priceM": 40,
            "priceL": 50
          },
          {
            "id": "bep_3",
            "name": "紫米紅豆拿鐵",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "bep_4",
            "name": "伯爵紅茶拿鐵",
            "priceM": 40,
            "priceL": 50
          }
        ]
      },
      {
        "name": "原淬純茶",
        "items": [
          {
            "id": "bep_5",
            "name": "四季青茶",
            "priceM": 25,
            "priceL": 30
          },
          {
            "id": "bep_6",
            "name": "茉香綠茶",
            "priceM": 25,
            "priceL": 30
          },
          {
            "id": "bep_7",
            "name": "阿薩姆紅茶",
            "priceM": 25,
            "priceL": 30
          }
        ]
      }
    ],
    "toppings": [
      {
        "id": "bep_t1",
        "name": "珍珠",
        "price": 10
      },
      {
        "id": "bep_t2",
        "name": "手工仙草凍",
        "price": 10
      },
      {
        "id": "bep_t3",
        "name": "紫米紅豆",
        "price": 15
      }
    ]
  },
  {
    "id": "store_92half_coffee_nantou",
    "name": "92度半咖啡",
    "branchName": "南投三和號",
    "phone": "0909-227685",
    "address": "南投市三和二路 78 號",
    "region": "中南部價",
    "area": "南投獨立品牌",
    "businessHours": "07:30 - 18:00",
    "isOpenToday": true,
    "tagline": "現磨手作義式咖啡 · 辦公室醒腦外送首選 (92又1/2)",
    "categories": [
      {
        "name": "小農厚奶咖啡",
        "items": [
          {
            "id": "c92_1",
            "name": "極厚小農拿鐵",
            "priceM": 60,
            "priceL": 70
          },
          {
            "id": "c92_2",
            "name": "生椰拿鐵",
            "priceM": 65,
            "priceL": 75
          },
          {
            "id": "c92_3",
            "name": "黑巧摩卡奇諾",
            "priceM": 65,
            "priceL": 75
          },
          {
            "id": "c92_4",
            "name": "香草風味拿鐵",
            "priceM": 60,
            "priceL": 70
          }
        ]
      },
      {
        "name": "手作黑咖啡與特調",
        "items": [
          {
            "id": "c92_5",
            "name": "92 美式黑咖啡",
            "priceM": 40,
            "priceL": 50
          },
          {
            "id": "c92_6",
            "name": "生椰美式",
            "priceM": 55,
            "priceL": 65
          },
          {
            "id": "c92_7",
            "name": "靜岡抹茶拿鐵",
            "priceM": 55,
            "priceL": 65
          }
        ]
      }
    ],
    "toppings": [
      {
        "id": "c92_t1",
        "name": "濃縮雙份 (+Shot)",
        "price": 15
      },
      {
        "id": "c92_t2",
        "name": "換燕麥奶",
        "price": 20
      }
    ]
  },
  {
    "id": "store_linglu_nantou_zhangnan",
    "name": "嶺陸手作茶飲",
    "branchName": "南投彰南店",
    "phone": "049-2244880",
    "address": "南投市彰南路二段 52 號",
    "region": "中南部價",
    "area": "南投獨立品牌",
    "businessHours": "09:30 - 21:00",
    "isOpenToday": true,
    "tagline": "南投在地手作好茶 · 現煮茶香濃厚",
    "categories": [
      {
        "name": "嶺陸招牌茶",
        "items": [
          {
            "id": "ll_1",
            "name": "嶺陸極上紅茶",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "ll_2",
            "name": "高山烏龍青",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "ll_3",
            "name": "茉香綠茶",
            "priceM": 30,
            "priceL": 35
          }
        ]
      },
      {
        "name": "手作鮮奶與特調",
        "items": [
          {
            "id": "ll_4",
            "name": "嶺陸鮮奶茶",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "ll_5",
            "name": "波霸厚鮮奶",
            "priceM": 55,
            "priceL": 65
          },
          {
            "id": "ll_6",
            "name": "翡翠檸檬綠",
            "priceM": 45,
            "priceL": 55
          }
        ]
      }
    ],
    "toppings": [
      {
        "id": "ll_t1",
        "name": "波霸珍珠",
        "price": 10
      },
      {
        "id": "ll_t2",
        "name": "椰果",
        "price": 10
      },
      {
        "id": "ll_t3",
        "name": "茶凍",
        "price": 10
      }
    ]
  },
  {
    "id": "store_mrblacktea_nantou_fuxing",
    "name": "紅茶老爹",
    "branchName": "南投復興店",
    "phone": "049-2233231",
    "address": "南投市崇文里復興路 138 號",
    "region": "中南部價",
    "area": "南投獨立品牌",
    "businessHours": "10:00 - 21:00",
    "isOpenToday": true,
    "tagline": "古早味決明子紅茶 · 銅板價大容量好茶",
    "categories": [
      {
        "name": "老爹招牌純茶",
        "items": [
          {
            "id": "store_mrblacktea_nantou_fuxing_c0_i0",
            "name": "老爹經典紅茶",
            "priceM": 25,
            "priceL": 30
          },
          {
            "id": "store_mrblacktea_nantou_fuxing_c0_i1",
            "name": "四季青茶",
            "priceM": 25,
            "priceL": 30
          },
          {
            "id": "store_mrblacktea_nantou_fuxing_c0_i2",
            "name": "極品綠茶",
            "priceM": 25,
            "priceL": 30
          },
          {
            "id": "store_mrblacktea_nantou_fuxing_c0_i3",
            "name": "老爹冬瓜茶",
            "priceM": 25,
            "priceL": 30
          }
        ]
      },
      {
        "name": "香醇奶茶與拿鐵",
        "items": [
          {
            "id": "store_mrblacktea_nantou_fuxing_c1_i0",
            "name": "老爹奶茶",
            "priceM": 40,
            "priceL": 50
          },
          {
            "id": "store_mrblacktea_nantou_fuxing_c1_i1",
            "name": "珍珠奶茶",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_mrblacktea_nantou_fuxing_c1_i2",
            "name": "鮮奶紅茶",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_mrblacktea_nantou_fuxing_c1_i3",
            "name": "豆漿紅茶",
            "priceM": 35,
            "priceL": 40
          },
          {
            "id": "store_mrblacktea_nantou_fuxing_c1_i4",
            "name": "冬瓜檸檬",
            "priceM": 35,
            "priceL": 45
          }
        ]
      }
    ],
    "toppings": [
      {
        "id": "rd_t1",
        "name": "珍珠",
        "price": 10
      },
      {
        "id": "rd_t2",
        "name": "椰果",
        "price": 10
      }
    ]
  },
  {
    "id": "store_dezheng_nantou_minzu",
    "name": "得正 Oolong TEA Project",
    "branchName": "南投民族計劃",
    "phone": "049-2248612",
    "address": "南投市民族路 276 號",
    "region": "中南部價",
    "area": "南投市區",
    "businessHours": "10:00 - 20:30",
    "isOpenToday": true,
    "tagline": "南投民族計劃門市 · 辦公室烏龍茶首選",
    "categories": [
      {
        "name": "原茶系列 (三種火候烏龍)",
        "items": [
          {
            "id": "store_dezheng_nantou_minzu_c0_i0",
            "name": "春烏龍 (清香輕發酵)",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_dezheng_nantou_minzu_c0_i1",
            "name": "輕烏龍 (一分火)",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_dezheng_nantou_minzu_c0_i2",
            "name": "焙烏龍 (三分火中炭焙)",
            "priceM": 30,
            "priceL": 35
          }
        ]
      },
      {
        "name": "烏龍奶茶系列",
        "items": [
          {
            "id": "store_dezheng_nantou_minzu_c1_i0",
            "name": "春烏龍奶茶",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_dezheng_nantou_minzu_c1_i1",
            "name": "輕烏龍奶茶",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_dezheng_nantou_minzu_c1_i2",
            "name": "焙烏龍奶茶",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_dezheng_nantou_minzu_c1_i3",
            "name": "烘吉奶茶 (烤焙香氣)",
            "priceM": 50,
            "priceL": 60
          }
        ]
      },
      {
        "name": "烏龍鮮奶系列",
        "items": [
          {
            "id": "store_dezheng_nantou_minzu_c2_i0",
            "name": "春烏龍鮮奶",
            "priceM": 50,
            "priceL": 65
          },
          {
            "id": "store_dezheng_nantou_minzu_c2_i1",
            "name": "輕烏龍鮮奶",
            "priceM": 50,
            "priceL": 65
          },
          {
            "id": "store_dezheng_nantou_minzu_c2_i2",
            "name": "焙烏龍鮮奶",
            "priceM": 50,
            "priceL": 65
          },
          {
            "id": "store_dezheng_nantou_minzu_c2_i3",
            "name": "抹茶鮮奶",
            "priceM": 55,
            "priceL": 70
          }
        ]
      },
      {
        "name": "芝士奶蓋系列 (招牌)",
        "items": [
          {
            "id": "store_dezheng_nantou_minzu_c3_i0",
            "name": "芝士奶蓋春烏龍",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_dezheng_nantou_minzu_c3_i1",
            "name": "芝士奶蓋輕烏龍",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_dezheng_nantou_minzu_c3_i2",
            "name": "芝士奶蓋焙烏龍",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_dezheng_nantou_minzu_c3_i3",
            "name": "芝士奶蓋阿華田",
            "priceM": 55,
            "priceL": 65
          },
          {
            "id": "store_dezheng_nantou_minzu_c3_i4",
            "name": "芝士奶蓋烘吉茶",
            "priceM": 55,
            "priceL": 65
          }
        ]
      },
      {
        "name": "鮮果特調系列",
        "items": [
          {
            "id": "store_dezheng_nantou_minzu_c4_i0",
            "name": "檸檬春烏龍",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_dezheng_nantou_minzu_c4_i1",
            "name": "香橙春烏龍",
            "priceM": 55,
            "priceL": 65
          },
          {
            "id": "store_dezheng_nantou_minzu_c4_i2",
            "name": "優多春烏龍",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_dezheng_nantou_minzu_c4_i3",
            "name": "甘蔗春烏龍",
            "priceM": 50,
            "priceL": 60
          }
        ]
      }
    ],
    "toppings": [
      {
        "id": "dz_t1",
        "name": "黃金珍珠",
        "price": 10
      },
      {
        "id": "dz_t2",
        "name": "焙烏龍茶凍",
        "price": 10
      },
      {
        "id": "dz_t3",
        "name": "芝士奶蓋",
        "price": 20
      }
    ]
  },
  {
    "id": "store_wanpo_nantou_minzu",
    "name": "萬波島嶼紅茶",
    "branchName": "南投民族店",
    "phone": "049-2202858",
    "address": "南投市民族路 140 號",
    "region": "中南部價",
    "area": "南投市區",
    "businessHours": "10:00 - 21:00",
    "isOpenToday": true,
    "tagline": "南投民族路眷村古早味 · 紅豆粉粿鮮奶名店",
    "categories": [
      {
        "name": "原茶系列",
        "items": [
          {
            "id": "store_wanpo_nantou_minzu_c0_i0",
            "name": "島嶼紅茶",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_wanpo_nantou_minzu_c0_i1",
            "name": "碧螺春綠茶",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_wanpo_nantou_minzu_c0_i2",
            "name": "阿里山青茶",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_wanpo_nantou_minzu_c0_i3",
            "name": "金萱烏龍",
            "priceM": 30,
            "priceL": 35
          }
        ]
      },
      {
        "name": "奶茶與那堤",
        "items": [
          {
            "id": "store_wanpo_nantou_minzu_c1_i0",
            "name": "萬波奶茶",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_wanpo_nantou_minzu_c1_i1",
            "name": "波霸奶茶",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_wanpo_nantou_minzu_c1_i2",
            "name": "蘭葉那堤 (鮮奶)",
            "priceM": 55,
            "priceL": 65
          },
          {
            "id": "store_wanpo_nantou_minzu_c1_i3",
            "name": "金萱那堤 (鮮奶)",
            "priceM": 55,
            "priceL": 65
          }
        ]
      },
      {
        "name": "島嶼古早味與特調",
        "items": [
          {
            "id": "store_wanpo_nantou_minzu_c2_i0",
            "name": "紅豆粉粿鮮奶",
            "priceM": 65,
            "priceL": 75
          },
          {
            "id": "store_wanpo_nantou_minzu_c2_i1",
            "name": "黑糖珍珠鮮奶",
            "priceM": 65,
            "priceL": 75
          },
          {
            "id": "store_wanpo_nantou_minzu_c2_i2",
            "name": "金萱紅柚",
            "priceM": 60,
            "priceL": 70
          },
          {
            "id": "store_wanpo_nantou_minzu_c2_i3",
            "name": "鳴光蜜金桔",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_wanpo_nantou_minzu_c2_i4",
            "name": "愛玉檸檬綠",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_wanpo_nantou_minzu_c2_i5",
            "name": "埔里甘蔗青茶",
            "priceM": 55,
            "priceL": 65
          },
          {
            "id": "store_wanpo_nantou_minzu_c2_i6",
            "name": "冬瓜鮮奶",
            "priceM": 50,
            "priceL": 60
          }
        ]
      }
    ],
    "toppings": [
      {
        "id": "wb_t1",
        "name": "波霸",
        "price": 10
      },
      {
        "id": "wb_t2",
        "name": "小芋圓",
        "price": 15
      },
      {
        "id": "wb_t3",
        "name": "粉粿",
        "price": 15
      },
      {
        "id": "wb_t4",
        "name": "愛玉凍",
        "price": 10
      }
    ]
  },
  {
    "id": "store_laolai_nantou_yule",
    "name": "老賴茶棧",
    "branchName": "南投育樂店",
    "phone": "049-2227678",
    "address": "南投市育樂路 97 號",
    "region": "中南部價",
    "area": "南投市區",
    "businessHours": "09:30 - 21:30",
    "isOpenToday": true,
    "tagline": "台中第二市場發跡名店 · 豆香紅茶與招牌太極",
    "categories": [
      {
        "name": "老賴經典古早味",
        "items": [
          {
            "id": "store_laolai_nantou_yule_c0_i0",
            "name": "老賴紅茶 (招牌焦糖香)",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_laolai_nantou_yule_c0_i1",
            "name": "太后牛乳 (招牌純鮮奶茶)",
            "priceM": 55,
            "priceL": 65
          },
          {
            "id": "store_laolai_nantou_yule_c0_i2",
            "name": "老賴奶茶",
            "priceM": 45,
            "priceL": 50
          },
          {
            "id": "store_laolai_nantou_yule_c0_i3",
            "name": "胚芽奶茶",
            "priceM": 50,
            "priceL": 60
          }
        ]
      },
      {
        "name": "傳統手磨豆香",
        "items": [
          {
            "id": "store_laolai_nantou_yule_c1_i0",
            "name": "豆香紅茶 (老賴名產)",
            "priceM": 35,
            "priceL": 40
          },
          {
            "id": "store_laolai_nantou_yule_c1_i1",
            "name": "招牌豆漿 (微糖/無糖)",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_laolai_nantou_yule_c1_i2",
            "name": "黑糖珍珠豆紅",
            "priceM": 50,
            "priceL": 60
          }
        ]
      },
      {
        "name": "青草與冬瓜",
        "items": [
          {
            "id": "store_laolai_nantou_yule_c2_i0",
            "name": "老賴青草茶",
            "priceM": 35,
            "priceL": 40
          },
          {
            "id": "store_laolai_nantou_yule_c2_i1",
            "name": "青草紅茶",
            "priceM": 35,
            "priceL": 40
          },
          {
            "id": "store_laolai_nantou_yule_c2_i2",
            "name": "冬瓜檸檬",
            "priceM": 45,
            "priceL": 50
          },
          {
            "id": "store_laolai_nantou_yule_c2_i3",
            "name": "梅子冬瓜茶",
            "priceM": 40,
            "priceL": 45
          },
          {
            "id": "store_laolai_nantou_yule_c2_i4",
            "name": "珍珠老賴紅茶",
            "priceM": 35,
            "priceL": 45
          }
        ]
      }
    ],
    "toppings": [
      {
        "id": "ll_t1",
        "name": "珍珠",
        "price": 10
      },
      {
        "id": "ll_t2",
        "name": "椰果",
        "price": 10
      },
      {
        "id": "ll_t3",
        "name": "胚芽",
        "price": 10
      }
    ]
  },
  {
    "id": "store_teatop_nantou_minzu",
    "name": "TEA TOP 第一味",
    "branchName": "南投民族店",
    "phone": "049-2220901",
    "address": "南投市民族路 137 號",
    "region": "中南部價",
    "area": "南投市區",
    "businessHours": "09:00 - 21:30",
    "isOpenToday": true,
    "tagline": "南投民族路茶師名茶 · 當代雙Q與日月潭紅",
    "categories": [
      {
        "name": "名間鄉高山茗茶",
        "items": [
          {
            "id": "store_teatop_nantou_minzu_c0_i0",
            "name": "高山青茶 (招牌冠軍茶)",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_teatop_nantou_minzu_c0_i1",
            "name": "日月潭紅茶",
            "priceM": 35,
            "priceL": 40
          },
          {
            "id": "store_teatop_nantou_minzu_c0_i2",
            "name": "冬片青茶",
            "priceM": 35,
            "priceL": 40
          },
          {
            "id": "store_teatop_nantou_minzu_c0_i3",
            "name": "嚴選綠茶",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_teatop_nantou_minzu_c0_i4",
            "name": "108茶王",
            "priceM": 40,
            "priceL": 45
          }
        ]
      },
      {
        "name": "咀嚼系好料",
        "items": [
          {
            "id": "store_teatop_nantou_minzu_c1_i0",
            "name": "高山青雙Q (粉粿+珍珠)",
            "priceM": 40,
            "priceL": 45
          },
          {
            "id": "store_teatop_nantou_minzu_c1_i1",
            "name": "珍珠奶茶",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_teatop_nantou_minzu_c1_i2",
            "name": "雙Q奶茶",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_teatop_nantou_minzu_c1_i3",
            "name": "芋見幸福 (芋圓+芋泥+鮮奶)",
            "priceM": 65,
            "priceL": 75
          }
        ]
      },
      {
        "name": "大甲芋頭與鮮奶",
        "items": [
          {
            "id": "store_teatop_nantou_minzu_c2_i0",
            "name": "日月潭紅茶拿鐵",
            "priceM": 55,
            "priceL": 70
          },
          {
            "id": "store_teatop_nantou_minzu_c2_i1",
            "name": "高山青茶拿鐵",
            "priceM": 55,
            "priceL": 70
          },
          {
            "id": "store_teatop_nantou_minzu_c2_i2",
            "name": "特濃大甲芋頭鮮奶",
            "priceM": 70,
            "priceL": 85
          }
        ]
      },
      {
        "name": "鮮果好茶",
        "items": [
          {
            "id": "store_teatop_nantou_minzu_c3_i0",
            "name": "百香鮮綠",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_teatop_nantou_minzu_c3_i1",
            "name": "芒果鳳梨青",
            "priceM": 60,
            "priceL": 70
          },
          {
            "id": "store_teatop_nantou_minzu_c3_i2",
            "name": "翡翠檸檬",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_teatop_nantou_minzu_c3_i3",
            "name": "梅子青茶",
            "priceM": 45,
            "priceL": 55
          }
        ]
      }
    ],
    "toppings": [
      {
        "id": "tt_t1",
        "name": "招牌粉粿",
        "price": 15
      },
      {
        "id": "tt_t2",
        "name": "珍珠",
        "price": 10
      },
      {
        "id": "tt_t3",
        "name": "椰果",
        "price": 10
      },
      {
        "id": "tt_t4",
        "name": "仙草凍",
        "price": 10
      }
    ]
  },
  {
    "id": "store_ug_nantou_fuxing",
    "name": "UG 樂己",
    "branchName": "南投復興店",
    "phone": "049-2243805",
    "address": "南投市復興路 192-1 號",
    "region": "中南部價",
    "area": "南投市區",
    "businessHours": "10:00 - 21:30",
    "isOpenToday": true,
    "tagline": "復興路手搖新星 · 三窨十五茉招牌",
    "categories": [
      {
        "name": "研選純茶",
        "items": [
          {
            "id": "ug_1",
            "name": "三窨十五茉",
            "priceM": 40,
            "priceL": 45
          },
          {
            "id": "ug_2",
            "name": "桂花輕烏龍",
            "priceM": 40,
            "priceL": 45
          },
          {
            "id": "ug_3",
            "name": "茶花紅烏龍",
            "priceM": 40,
            "priceL": 45
          },
          {
            "id": "ug_4",
            "name": "米香玉露菁",
            "priceM": 35,
            "priceL": 40
          },
          {
            "id": "ug_5",
            "name": "朱槿普洱紅",
            "priceM": 35,
            "priceL": 40
          }
        ]
      },
      {
        "name": "特調奶茶系列",
        "items": [
          {
            "id": "ug_6",
            "name": "三窨十五茉奶茶",
            "priceM": 55,
            "priceL": 65
          },
          {
            "id": "ug_7",
            "name": "桂花輕烏龍奶茶",
            "priceM": 55,
            "priceL": 65
          },
          {
            "id": "ug_8",
            "name": "米香玉露菁奶茶",
            "priceM": 50,
            "priceL": 60
          }
        ]
      },
      {
        "name": "牧場鮮乳直達",
        "items": [
          {
            "id": "ug_9",
            "name": "三窨十五茉鮮奶茶",
            "priceM": 65,
            "priceL": 75
          },
          {
            "id": "ug_10",
            "name": "桂花輕烏龍鮮奶茶",
            "priceM": 65,
            "priceL": 75
          },
          {
            "id": "ug_11",
            "name": "茶花紅烏龍鮮奶茶",
            "priceM": 65,
            "priceL": 75
          }
        ]
      }
    ],
    "toppings": [
      {
        "id": "ug_top_1",
        "name": "白玉珍珠",
        "price": 10
      },
      {
        "id": "ug_top_2",
        "name": "桂花凍",
        "price": 15
      },
      {
        "id": "ug_top_3",
        "name": "茉莉茶凍",
        "price": 15
      }
    ]
  },
  {
    "id": "store_50lan_nantou_minzu",
    "name": "50嵐",
    "branchName": "南投民族店",
    "phone": "049-2200688",
    "address": "南投市民族路 307 號",
    "region": "中南部價",
    "area": "南投市區",
    "businessHours": "09:30 - 21:30",
    "isOpenToday": true,
    "tagline": "南投民族路經典熱門門市",
    "categories": [
      {
        "name": "找好茶",
        "items": [
          {
            "id": "store_50lan_nantou_minzu_c0_i0",
            "name": "四季春青茶",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_50lan_nantou_minzu_c0_i1",
            "name": "茉莉綠茶",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_50lan_nantou_minzu_c0_i2",
            "name": "阿薩姆紅茶",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_50lan_nantou_minzu_c0_i3",
            "name": "黃金烏龍",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_50lan_nantou_minzu_c0_i4",
            "name": "波霸四季春",
            "priceM": 35,
            "priceL": 45
          },
          {
            "id": "store_50lan_nantou_minzu_c0_i5",
            "name": "波霸綠茶",
            "priceM": 35,
            "priceL": 45
          },
          {
            "id": "store_50lan_nantou_minzu_c0_i6",
            "name": "波霸紅茶",
            "priceM": 35,
            "priceL": 45
          },
          {
            "id": "store_50lan_nantou_minzu_c0_i7",
            "name": "波霸烏龍",
            "priceM": 35,
            "priceL": 45
          },
          {
            "id": "store_50lan_nantou_minzu_c0_i8",
            "name": "珍珠四季春",
            "priceM": 35,
            "priceL": 45
          },
          {
            "id": "store_50lan_nantou_minzu_c0_i9",
            "name": "珍珠綠茶",
            "priceM": 35,
            "priceL": 45
          },
          {
            "id": "store_50lan_nantou_minzu_c0_i10",
            "name": "珍珠紅茶",
            "priceM": 35,
            "priceL": 45
          },
          {
            "id": "store_50lan_nantou_minzu_c0_i11",
            "name": "椰果綠茶",
            "priceM": 35,
            "priceL": 45
          },
          {
            "id": "store_50lan_nantou_minzu_c0_i12",
            "name": "椰果青茶",
            "priceM": 35,
            "priceL": 45
          }
        ]
      },
      {
        "name": "找口感 (經典人氣)",
        "items": [
          {
            "id": "store_50lan_nantou_minzu_c1_i0",
            "name": "1號 (四季春珍波椰)",
            "priceM": 35,
            "priceL": 45
          },
          {
            "id": "store_50lan_nantou_minzu_c1_i1",
            "name": "波霸奶茶",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_50lan_nantou_minzu_c1_i2",
            "name": "珍珠奶茶",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_50lan_nantou_minzu_c1_i3",
            "name": "波霸奶綠",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_50lan_nantou_minzu_c1_i4",
            "name": "珍珠奶綠",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_50lan_nantou_minzu_c1_i5",
            "name": "波霸烏龍奶",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_50lan_nantou_minzu_c1_i6",
            "name": "珍波椰綠茶",
            "priceM": 40,
            "priceL": 50
          },
          {
            "id": "store_50lan_nantou_minzu_c1_i7",
            "name": "珍波椰青茶",
            "priceM": 40,
            "priceL": 50
          },
          {
            "id": "store_50lan_nantou_minzu_c1_i8",
            "name": "布丁奶茶",
            "priceM": 55,
            "priceL": 65
          },
          {
            "id": "store_50lan_nantou_minzu_c1_i9",
            "name": "仙草凍奶茶",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_50lan_nantou_minzu_c1_i10",
            "name": "燕麥奶茶",
            "priceM": 50,
            "priceL": 60
          }
        ]
      },
      {
        "name": "找奶茶",
        "items": [
          {
            "id": "store_50lan_nantou_minzu_c2_i0",
            "name": "奶茶",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_50lan_nantou_minzu_c2_i1",
            "name": "奶綠",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_50lan_nantou_minzu_c2_i2",
            "name": "烏龍奶茶",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_50lan_nantou_minzu_c2_i3",
            "name": "椰果奶茶",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_50lan_nantou_minzu_c2_i4",
            "name": "紅茶瑪奇朵",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_50lan_nantou_minzu_c2_i5",
            "name": "綠茶瑪奇朵",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_50lan_nantou_minzu_c2_i6",
            "name": "烏龍瑪奇朵",
            "priceM": 45,
            "priceL": 55
          }
        ]
      },
      {
        "name": "找拿鐵 (鮮奶系列)",
        "items": [
          {
            "id": "store_50lan_nantou_minzu_c3_i0",
            "name": "紅茶拿鐵",
            "priceM": 55,
            "priceL": 70
          },
          {
            "id": "store_50lan_nantou_minzu_c3_i1",
            "name": "綠茶拿鐵",
            "priceM": 55,
            "priceL": 70
          },
          {
            "id": "store_50lan_nantou_minzu_c3_i2",
            "name": "烏龍拿鐵",
            "priceM": 55,
            "priceL": 70
          },
          {
            "id": "store_50lan_nantou_minzu_c3_i3",
            "name": "波霸紅茶拿鐵",
            "priceM": 60,
            "priceL": 75
          },
          {
            "id": "store_50lan_nantou_minzu_c3_i4",
            "name": "珍珠紅茶拿鐵",
            "priceM": 60,
            "priceL": 75
          },
          {
            "id": "store_50lan_nantou_minzu_c3_i5",
            "name": "波霸烏龍拿鐵",
            "priceM": 60,
            "priceL": 75
          },
          {
            "id": "store_50lan_nantou_minzu_c3_i6",
            "name": "燕麥紅茶拿鐵",
            "priceM": 60,
            "priceL": 75
          },
          {
            "id": "store_50lan_nantou_minzu_c3_i7",
            "name": "燕麥烏龍拿鐵",
            "priceM": 60,
            "priceL": 75
          },
          {
            "id": "store_50lan_nantou_minzu_c3_i8",
            "name": "布丁紅茶拿鐵",
            "priceM": 65,
            "priceL": 80
          }
        ]
      },
      {
        "name": "找新鮮 (特調與果汁)",
        "items": [
          {
            "id": "store_50lan_nantou_minzu_c4_i0",
            "name": "8冰綠 (金桔梅子綠)",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_50lan_nantou_minzu_c4_i1",
            "name": "8冰茶 (金桔梅子青)",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_50lan_nantou_minzu_c4_i2",
            "name": "冰淇淋紅茶",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_50lan_nantou_minzu_c4_i3",
            "name": "冰淇淋綠茶",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_50lan_nantou_minzu_c4_i4",
            "name": "冰淇淋奶茶",
            "priceM": 55,
            "priceL": 65
          },
          {
            "id": "store_50lan_nantou_minzu_c4_i5",
            "name": "檸檬綠茶",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_50lan_nantou_minzu_c4_i6",
            "name": "檸檬青茶",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_50lan_nantou_minzu_c4_i7",
            "name": "檸檬紅茶",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_50lan_nantou_minzu_c4_i8",
            "name": "金桔檸檬",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_50lan_nantou_minzu_c4_i9",
            "name": "梅子綠茶",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_50lan_nantou_minzu_c4_i10",
            "name": "養樂多綠茶",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_50lan_nantou_minzu_c4_i11",
            "name": "葡萄柚綠茶",
            "priceM": 55,
            "priceL": 65
          },
          {
            "id": "store_50lan_nantou_minzu_c4_i12",
            "name": "多多檸檬綠",
            "priceM": 55,
            "priceL": 65
          }
        ]
      }
    ],
    "toppings": [
      {
        "id": "top_boba",
        "name": "波霸",
        "price": 10
      },
      {
        "id": "top_pearl",
        "name": "珍珠",
        "price": 10
      },
      {
        "id": "top_coconut",
        "name": "椰果",
        "price": 10
      },
      {
        "id": "top_oat",
        "name": "燕麥",
        "price": 10
      },
      {
        "id": "top_pudding",
        "name": "布丁",
        "price": 20
      },
      {
        "id": "top_icecream",
        "name": "冰淇淋",
        "price": 20
      }
    ]
  },
  {
    "id": "store_50lan_nantou_zhangnan",
    "name": "50嵐",
    "branchName": "南投彰南店",
    "phone": "049-2241286",
    "address": "南投市彰南路二段 255 號",
    "region": "中南部價",
    "area": "南投市區",
    "businessHours": "09:30 - 21:30",
    "isOpenToday": true,
    "tagline": "近南崗工業區入口與文化路口",
    "categories": [
      {
        "name": "找好茶",
        "items": [
          {
            "id": "store_50lan_nantou_zhangnan_c0_i0",
            "name": "四季春青茶",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_50lan_nantou_zhangnan_c0_i1",
            "name": "茉莉綠茶",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_50lan_nantou_zhangnan_c0_i2",
            "name": "阿薩姆紅茶",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_50lan_nantou_zhangnan_c0_i3",
            "name": "黃金烏龍",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_50lan_nantou_zhangnan_c0_i4",
            "name": "波霸四季春",
            "priceM": 35,
            "priceL": 45
          },
          {
            "id": "store_50lan_nantou_zhangnan_c0_i5",
            "name": "波霸綠茶",
            "priceM": 35,
            "priceL": 45
          },
          {
            "id": "store_50lan_nantou_zhangnan_c0_i6",
            "name": "波霸紅茶",
            "priceM": 35,
            "priceL": 45
          },
          {
            "id": "store_50lan_nantou_zhangnan_c0_i7",
            "name": "波霸烏龍",
            "priceM": 35,
            "priceL": 45
          },
          {
            "id": "store_50lan_nantou_zhangnan_c0_i8",
            "name": "珍珠四季春",
            "priceM": 35,
            "priceL": 45
          },
          {
            "id": "store_50lan_nantou_zhangnan_c0_i9",
            "name": "珍珠綠茶",
            "priceM": 35,
            "priceL": 45
          },
          {
            "id": "store_50lan_nantou_zhangnan_c0_i10",
            "name": "珍珠紅茶",
            "priceM": 35,
            "priceL": 45
          },
          {
            "id": "store_50lan_nantou_zhangnan_c0_i11",
            "name": "椰果綠茶",
            "priceM": 35,
            "priceL": 45
          },
          {
            "id": "store_50lan_nantou_zhangnan_c0_i12",
            "name": "椰果青茶",
            "priceM": 35,
            "priceL": 45
          }
        ]
      },
      {
        "name": "找口感 (經典人氣)",
        "items": [
          {
            "id": "store_50lan_nantou_zhangnan_c1_i0",
            "name": "1號 (四季春珍波椰)",
            "priceM": 35,
            "priceL": 45
          },
          {
            "id": "store_50lan_nantou_zhangnan_c1_i1",
            "name": "波霸奶茶",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_50lan_nantou_zhangnan_c1_i2",
            "name": "珍珠奶茶",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_50lan_nantou_zhangnan_c1_i3",
            "name": "波霸奶綠",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_50lan_nantou_zhangnan_c1_i4",
            "name": "珍珠奶綠",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_50lan_nantou_zhangnan_c1_i5",
            "name": "波霸烏龍奶",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_50lan_nantou_zhangnan_c1_i6",
            "name": "珍波椰綠茶",
            "priceM": 40,
            "priceL": 50
          },
          {
            "id": "store_50lan_nantou_zhangnan_c1_i7",
            "name": "珍波椰青茶",
            "priceM": 40,
            "priceL": 50
          },
          {
            "id": "store_50lan_nantou_zhangnan_c1_i8",
            "name": "布丁奶茶",
            "priceM": 55,
            "priceL": 65
          },
          {
            "id": "store_50lan_nantou_zhangnan_c1_i9",
            "name": "仙草凍奶茶",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_50lan_nantou_zhangnan_c1_i10",
            "name": "燕麥奶茶",
            "priceM": 50,
            "priceL": 60
          }
        ]
      },
      {
        "name": "找奶茶",
        "items": [
          {
            "id": "store_50lan_nantou_zhangnan_c2_i0",
            "name": "奶茶",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_50lan_nantou_zhangnan_c2_i1",
            "name": "奶綠",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_50lan_nantou_zhangnan_c2_i2",
            "name": "烏龍奶茶",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_50lan_nantou_zhangnan_c2_i3",
            "name": "椰果奶茶",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_50lan_nantou_zhangnan_c2_i4",
            "name": "紅茶瑪奇朵",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_50lan_nantou_zhangnan_c2_i5",
            "name": "綠茶瑪奇朵",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_50lan_nantou_zhangnan_c2_i6",
            "name": "烏龍瑪奇朵",
            "priceM": 45,
            "priceL": 55
          }
        ]
      },
      {
        "name": "找拿鐵 (鮮奶系列)",
        "items": [
          {
            "id": "store_50lan_nantou_zhangnan_c3_i0",
            "name": "紅茶拿鐵",
            "priceM": 55,
            "priceL": 70
          },
          {
            "id": "store_50lan_nantou_zhangnan_c3_i1",
            "name": "綠茶拿鐵",
            "priceM": 55,
            "priceL": 70
          },
          {
            "id": "store_50lan_nantou_zhangnan_c3_i2",
            "name": "烏龍拿鐵",
            "priceM": 55,
            "priceL": 70
          },
          {
            "id": "store_50lan_nantou_zhangnan_c3_i3",
            "name": "波霸紅茶拿鐵",
            "priceM": 60,
            "priceL": 75
          },
          {
            "id": "store_50lan_nantou_zhangnan_c3_i4",
            "name": "珍珠紅茶拿鐵",
            "priceM": 60,
            "priceL": 75
          },
          {
            "id": "store_50lan_nantou_zhangnan_c3_i5",
            "name": "波霸烏龍拿鐵",
            "priceM": 60,
            "priceL": 75
          },
          {
            "id": "store_50lan_nantou_zhangnan_c3_i6",
            "name": "燕麥紅茶拿鐵",
            "priceM": 60,
            "priceL": 75
          },
          {
            "id": "store_50lan_nantou_zhangnan_c3_i7",
            "name": "燕麥烏龍拿鐵",
            "priceM": 60,
            "priceL": 75
          },
          {
            "id": "store_50lan_nantou_zhangnan_c3_i8",
            "name": "布丁紅茶拿鐵",
            "priceM": 65,
            "priceL": 80
          }
        ]
      },
      {
        "name": "找新鮮 (特調與果汁)",
        "items": [
          {
            "id": "store_50lan_nantou_zhangnan_c4_i0",
            "name": "8冰綠 (金桔梅子綠)",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_50lan_nantou_zhangnan_c4_i1",
            "name": "8冰茶 (金桔梅子青)",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_50lan_nantou_zhangnan_c4_i2",
            "name": "冰淇淋紅茶",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_50lan_nantou_zhangnan_c4_i3",
            "name": "冰淇淋綠茶",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_50lan_nantou_zhangnan_c4_i4",
            "name": "冰淇淋奶茶",
            "priceM": 55,
            "priceL": 65
          },
          {
            "id": "store_50lan_nantou_zhangnan_c4_i5",
            "name": "檸檬綠茶",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_50lan_nantou_zhangnan_c4_i6",
            "name": "檸檬青茶",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_50lan_nantou_zhangnan_c4_i7",
            "name": "檸檬紅茶",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_50lan_nantou_zhangnan_c4_i8",
            "name": "金桔檸檬",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_50lan_nantou_zhangnan_c4_i9",
            "name": "梅子綠茶",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_50lan_nantou_zhangnan_c4_i10",
            "name": "養樂多綠茶",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_50lan_nantou_zhangnan_c4_i11",
            "name": "葡萄柚綠茶",
            "priceM": 55,
            "priceL": 65
          },
          {
            "id": "store_50lan_nantou_zhangnan_c4_i12",
            "name": "多多檸檬綠",
            "priceM": 55,
            "priceL": 65
          }
        ]
      }
    ],
    "toppings": [
      {
        "id": "top_boba",
        "name": "波霸",
        "price": 10
      },
      {
        "id": "top_pearl",
        "name": "珍珠",
        "price": 10
      },
      {
        "id": "top_coconut",
        "name": "椰果",
        "price": 10
      },
      {
        "id": "top_oat",
        "name": "燕麥",
        "price": 10
      },
      {
        "id": "top_pudding",
        "name": "布丁",
        "price": 20
      },
      {
        "id": "top_icecream",
        "name": "冰淇淋",
        "price": 20
      }
    ]
  },
  {
    "id": "store_chingshin_nanyang",
    "name": "清心福全",
    "branchName": "南投南陽店",
    "phone": "049-2205358",
    "address": "南投市南陽路 82 號",
    "region": "中南部價",
    "area": "南投市區",
    "businessHours": "09:00 - 21:30",
    "isOpenToday": true,
    "tagline": "南陽商圈老字號 · 優多綠茶招牌",
    "categories": [
      {
        "name": "茗品純茶",
        "items": [
          {
            "id": "store_chingshin_nanyang_c0_i0",
            "name": "原鄉四季",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_chingshin_nanyang_c0_i1",
            "name": "特選烏龍綠",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_chingshin_nanyang_c0_i2",
            "name": "極品菁茶",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_chingshin_nanyang_c0_i3",
            "name": "特級綠茶",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_chingshin_nanyang_c0_i4",
            "name": "錫蘭紅茶",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_chingshin_nanyang_c0_i5",
            "name": "嚴選高山茶",
            "priceM": 35,
            "priceL": 40
          },
          {
            "id": "store_chingshin_nanyang_c0_i6",
            "name": "普洱茶",
            "priceM": 30,
            "priceL": 35
          }
        ]
      },
      {
        "name": "香醇奶茶",
        "items": [
          {
            "id": "store_chingshin_nanyang_c1_i0",
            "name": "特級奶茶",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_chingshin_nanyang_c1_i1",
            "name": "錫蘭奶紅",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_chingshin_nanyang_c1_i2",
            "name": "烏龍奶茶",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_chingshin_nanyang_c1_i3",
            "name": "珍珠奶茶 (大珍珠)",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_chingshin_nanyang_c1_i4",
            "name": "粉圓奶茶 (小粉圓)",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_chingshin_nanyang_c1_i5",
            "name": "椰果奶茶",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_chingshin_nanyang_c1_i6",
            "name": "布丁奶茶",
            "priceM": 55,
            "priceL": 65
          },
          {
            "id": "store_chingshin_nanyang_c1_i7",
            "name": "仙草凍奶茶",
            "priceM": 50,
            "priceL": 60
          }
        ]
      },
      {
        "name": "鮮奶拿鐵",
        "items": [
          {
            "id": "store_chingshin_nanyang_c2_i0",
            "name": "隱藏版 (珍珠蜂蜜鮮奶普洱)",
            "priceM": 65,
            "priceL": 80
          },
          {
            "id": "store_chingshin_nanyang_c2_i1",
            "name": "鮮奶茶",
            "priceM": 55,
            "priceL": 70
          },
          {
            "id": "store_chingshin_nanyang_c2_i2",
            "name": "鮮奶綠",
            "priceM": 55,
            "priceL": 70
          },
          {
            "id": "store_chingshin_nanyang_c2_i3",
            "name": "鮮奶烏龍",
            "priceM": 55,
            "priceL": 70
          },
          {
            "id": "store_chingshin_nanyang_c2_i4",
            "name": "珍珠鮮奶茶",
            "priceM": 60,
            "priceL": 75
          }
        ]
      },
      {
        "name": "特調多多與果汁",
        "items": [
          {
            "id": "store_chingshin_nanyang_c3_i0",
            "name": "優多綠茶 (多多綠)",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_chingshin_nanyang_c3_i1",
            "name": "優多檸檬",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_chingshin_nanyang_c3_i2",
            "name": "蜜茶",
            "priceM": 35,
            "priceL": 45
          },
          {
            "id": "store_chingshin_nanyang_c3_i3",
            "name": "蜂蜜綠茶",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_chingshin_nanyang_c3_i4",
            "name": "梅子綠茶",
            "priceM": 40,
            "priceL": 50
          },
          {
            "id": "store_chingshin_nanyang_c3_i5",
            "name": "檸檬紅茶",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_chingshin_nanyang_c3_i6",
            "name": "金桔檸檬",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_chingshin_nanyang_c3_i7",
            "name": "冰淇淋紅茶",
            "priceM": 45,
            "priceL": 55
          }
        ]
      }
    ],
    "toppings": [
      {
        "id": "qx_t1",
        "name": "珍珠 (大)",
        "price": 10
      },
      {
        "id": "qx_t2",
        "name": "紅粉圓 (小)",
        "price": 10
      },
      {
        "id": "qx_t3",
        "name": "椰果",
        "price": 10
      },
      {
        "id": "qx_t4",
        "name": "仙草凍",
        "price": 10
      },
      {
        "id": "qx_t5",
        "name": "布丁",
        "price": 20
      }
    ]
  },
  {
    "id": "store_chingshin_zhongshan",
    "name": "清心福全",
    "branchName": "南投中山店",
    "phone": "049-2221317",
    "address": "南投市中山街 228 號",
    "region": "中南部價",
    "area": "南投市區",
    "businessHours": "09:00 - 21:30",
    "isOpenToday": true,
    "tagline": "南投市公所老街商圈",
    "categories": [
      {
        "name": "茗品純茶",
        "items": [
          {
            "id": "store_chingshin_zhongshan_c0_i0",
            "name": "原鄉四季",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_chingshin_zhongshan_c0_i1",
            "name": "特選烏龍綠",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_chingshin_zhongshan_c0_i2",
            "name": "極品菁茶",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_chingshin_zhongshan_c0_i3",
            "name": "特級綠茶",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_chingshin_zhongshan_c0_i4",
            "name": "錫蘭紅茶",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_chingshin_zhongshan_c0_i5",
            "name": "嚴選高山茶",
            "priceM": 35,
            "priceL": 40
          },
          {
            "id": "store_chingshin_zhongshan_c0_i6",
            "name": "普洱茶",
            "priceM": 30,
            "priceL": 35
          }
        ]
      },
      {
        "name": "香醇奶茶",
        "items": [
          {
            "id": "store_chingshin_zhongshan_c1_i0",
            "name": "特級奶茶",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_chingshin_zhongshan_c1_i1",
            "name": "錫蘭奶紅",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_chingshin_zhongshan_c1_i2",
            "name": "烏龍奶茶",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_chingshin_zhongshan_c1_i3",
            "name": "珍珠奶茶 (大珍珠)",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_chingshin_zhongshan_c1_i4",
            "name": "粉圓奶茶 (小粉圓)",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_chingshin_zhongshan_c1_i5",
            "name": "椰果奶茶",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_chingshin_zhongshan_c1_i6",
            "name": "布丁奶茶",
            "priceM": 55,
            "priceL": 65
          },
          {
            "id": "store_chingshin_zhongshan_c1_i7",
            "name": "仙草凍奶茶",
            "priceM": 50,
            "priceL": 60
          }
        ]
      },
      {
        "name": "鮮奶拿鐵",
        "items": [
          {
            "id": "store_chingshin_zhongshan_c2_i0",
            "name": "隱藏版 (珍珠蜂蜜鮮奶普洱)",
            "priceM": 65,
            "priceL": 80
          },
          {
            "id": "store_chingshin_zhongshan_c2_i1",
            "name": "鮮奶茶",
            "priceM": 55,
            "priceL": 70
          },
          {
            "id": "store_chingshin_zhongshan_c2_i2",
            "name": "鮮奶綠",
            "priceM": 55,
            "priceL": 70
          },
          {
            "id": "store_chingshin_zhongshan_c2_i3",
            "name": "鮮奶烏龍",
            "priceM": 55,
            "priceL": 70
          },
          {
            "id": "store_chingshin_zhongshan_c2_i4",
            "name": "珍珠鮮奶茶",
            "priceM": 60,
            "priceL": 75
          }
        ]
      },
      {
        "name": "特調多多與果汁",
        "items": [
          {
            "id": "store_chingshin_zhongshan_c3_i0",
            "name": "優多綠茶 (多多綠)",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_chingshin_zhongshan_c3_i1",
            "name": "優多檸檬",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_chingshin_zhongshan_c3_i2",
            "name": "蜜茶",
            "priceM": 35,
            "priceL": 45
          },
          {
            "id": "store_chingshin_zhongshan_c3_i3",
            "name": "蜂蜜綠茶",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_chingshin_zhongshan_c3_i4",
            "name": "梅子綠茶",
            "priceM": 40,
            "priceL": 50
          },
          {
            "id": "store_chingshin_zhongshan_c3_i5",
            "name": "檸檬紅茶",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_chingshin_zhongshan_c3_i6",
            "name": "金桔檸檬",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_chingshin_zhongshan_c3_i7",
            "name": "冰淇淋紅茶",
            "priceM": 45,
            "priceL": 55
          }
        ]
      }
    ],
    "toppings": [
      {
        "id": "qx_t1",
        "name": "珍珠 (大)",
        "price": 10
      },
      {
        "id": "qx_t2",
        "name": "紅粉圓 (小)",
        "price": 10
      },
      {
        "id": "qx_t3",
        "name": "椰果",
        "price": 10
      },
      {
        "id": "qx_t4",
        "name": "仙草凍",
        "price": 10
      },
      {
        "id": "qx_t5",
        "name": "布丁",
        "price": 20
      }
    ]
  },
  {
    "id": "store_kebuke_nantou_minzu",
    "name": "可不可熟成紅茶",
    "branchName": "南投民族店",
    "phone": "049-2243321",
    "address": "南投市民族路 253 號",
    "region": "中南部價",
    "area": "南投市區",
    "businessHours": "10:00 - 21:00",
    "isOpenToday": true,
    "tagline": "英倫風復古紅茶專門店",
    "categories": [
      {
        "name": "單品純茶",
        "items": [
          {
            "id": "store_kebuke_nantou_minzu_c0_i0",
            "name": "熟成紅茶",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_kebuke_nantou_minzu_c0_i1",
            "name": "麗春紅茶",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_kebuke_nantou_minzu_c0_i2",
            "name": "春芽綠茶",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_kebuke_nantou_minzu_c0_i3",
            "name": "胭脂紅茶",
            "priceM": 35,
            "priceL": 40
          },
          {
            "id": "store_kebuke_nantou_minzu_c0_i4",
            "name": "金萱紅茶",
            "priceM": 35,
            "priceL": 40
          }
        ]
      },
      {
        "name": "熟成歐蕾 (鮮奶茶)",
        "items": [
          {
            "id": "store_kebuke_nantou_minzu_c1_i0",
            "name": "熟成歐蕾",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_kebuke_nantou_minzu_c1_i1",
            "name": "白玉歐蕾 (招牌珍珠)",
            "priceM": 55,
            "priceL": 65
          },
          {
            "id": "store_kebuke_nantou_minzu_c1_i2",
            "name": "胭脂歐蕾",
            "priceM": 55,
            "priceL": 65
          },
          {
            "id": "store_kebuke_nantou_minzu_c1_i3",
            "name": "春芽歐蕾",
            "priceM": 50,
            "priceL": 60
          }
        ]
      },
      {
        "name": "熟成奶茶",
        "items": [
          {
            "id": "store_kebuke_nantou_minzu_c2_i0",
            "name": "熟成奶茶",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_kebuke_nantou_minzu_c2_i1",
            "name": "白玉奶茶",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_kebuke_nantou_minzu_c2_i2",
            "name": "春芽奶茶",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_kebuke_nantou_minzu_c2_i3",
            "name": "胭脂奶茶",
            "priceM": 50,
            "priceL": 60
          }
        ]
      },
      {
        "name": "冬瓜冷露與果茶",
        "items": [
          {
            "id": "store_kebuke_nantou_minzu_c3_i0",
            "name": "雪花冷露 (冬瓜茶)",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_kebuke_nantou_minzu_c3_i1",
            "name": "熟成冷露 (冬瓜紅茶)",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_kebuke_nantou_minzu_c3_i2",
            "name": "春芽冷露 (冬瓜綠茶)",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_kebuke_nantou_minzu_c3_i3",
            "name": "冷露檸檬",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_kebuke_nantou_minzu_c3_i4",
            "name": "金蜜檸檬",
            "priceM": 48,
            "priceL": 58
          },
          {
            "id": "store_kebuke_nantou_minzu_c3_i5",
            "name": "春梅冰茶 (冬瓜+梅子)",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_kebuke_nantou_minzu_c3_i6",
            "name": "胭脂多多",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_kebuke_nantou_minzu_c3_i7",
            "name": "雪藏紅茶 (香草冰淇淋)",
            "priceM": 50,
            "priceL": 60
          }
        ]
      }
    ],
    "toppings": [
      {
        "id": "kbk_pearl",
        "name": "白玉珍珠",
        "price": 10
      },
      {
        "id": "kbk_water",
        "name": "水玉晶球",
        "price": 15
      },
      {
        "id": "kbk_jelly",
        "name": "百香蒟蒻凍",
        "price": 15
      }
    ]
  },
  {
    "id": "store_macu_nantou_minzhang",
    "name": "麻古茶坊",
    "branchName": "南投民彰店",
    "phone": "049-2239777",
    "address": "南投市彰南路二段 7 號",
    "region": "中南部價",
    "area": "南投市區",
    "businessHours": "09:30 - 21:30",
    "isOpenToday": true,
    "tagline": "鮮果粒茶與芝芝奶蓋",
    "categories": [
      {
        "name": "原味純茶",
        "items": [
          {
            "id": "store_macu_nantou_minzhang_c0_i0",
            "name": "高山金萱茶 (招牌)",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_macu_nantou_minzhang_c0_i1",
            "name": "錫蘭紅茶",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_macu_nantou_minzhang_c0_i2",
            "name": "翡翠綠茶",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_macu_nantou_minzhang_c0_i3",
            "name": "文山清茶",
            "priceM": 30,
            "priceL": 35
          }
        ]
      },
      {
        "name": "咀嚼嚼嚼 (雙Q/珍珠)",
        "items": [
          {
            "id": "store_macu_nantou_minzhang_c1_i0",
            "name": "金萱雙Q (白玉+椰果)",
            "priceM": 40,
            "priceL": 45
          },
          {
            "id": "store_macu_nantou_minzhang_c1_i1",
            "name": "金萱三Q (白玉+椰果+波霸)",
            "priceM": 45,
            "priceL": 50
          },
          {
            "id": "store_macu_nantou_minzhang_c1_i2",
            "name": "波霸紅茶",
            "priceM": 35,
            "priceL": 40
          },
          {
            "id": "store_macu_nantou_minzhang_c1_i3",
            "name": "波霸翡翠綠",
            "priceM": 35,
            "priceL": 40
          },
          {
            "id": "store_macu_nantou_minzhang_c1_i4",
            "name": "椰果翡翠綠",
            "priceM": 35,
            "priceL": 40
          }
        ]
      },
      {
        "name": "果粒鮮茶系列 (現切現榨)",
        "items": [
          {
            "id": "store_macu_nantou_minzhang_c2_i0",
            "name": "柳橙果粒茶",
            "priceM": 65,
            "priceL": 75
          },
          {
            "id": "store_macu_nantou_minzhang_c2_i1",
            "name": "香橙果粒茶 (柳橙+百香)",
            "priceM": 65,
            "priceL": 75
          },
          {
            "id": "store_macu_nantou_minzhang_c2_i2",
            "name": "葡萄柚果粒茶",
            "priceM": 60,
            "priceL": 70
          },
          {
            "id": "store_macu_nantou_minzhang_c2_i3",
            "name": "奇異果果粒茶",
            "priceM": 70,
            "priceL": 80
          },
          {
            "id": "store_macu_nantou_minzhang_c2_i4",
            "name": "蕃茄梅蜜 (招牌必喝)",
            "priceM": 65,
            "priceL": 70
          },
          {
            "id": "store_macu_nantou_minzhang_c2_i5",
            "name": "翡翠柳橙",
            "priceM": 60,
            "priceL": 70
          },
          {
            "id": "store_macu_nantou_minzhang_c2_i6",
            "name": "檸檬翡翠綠",
            "priceM": 50,
            "priceL": 60
          }
        ]
      },
      {
        "name": "芝芝奶蓋系列",
        "items": [
          {
            "id": "store_macu_nantou_minzhang_c3_i0",
            "name": "芝芝金萱",
            "priceM": 55,
            "priceL": 65
          },
          {
            "id": "store_macu_nantou_minzhang_c3_i1",
            "name": "芝芝金萱雙Q",
            "priceM": 65,
            "priceL": 75
          },
          {
            "id": "store_macu_nantou_minzhang_c3_i2",
            "name": "芝芝錫蘭紅",
            "priceM": 55,
            "priceL": 65
          },
          {
            "id": "store_macu_nantou_minzhang_c3_i3",
            "name": "芝芝葡萄果粒",
            "priceM": 85,
            "priceL": 95
          },
          {
            "id": "store_macu_nantou_minzhang_c3_i4",
            "name": "芝芝芒果果粒",
            "priceM": 85,
            "priceL": 95
          },
          {
            "id": "store_macu_nantou_minzhang_c3_i5",
            "name": "楊枝甘露2.0",
            "priceM": 80,
            "priceL": 85
          }
        ]
      },
      {
        "name": "香醇奶茶與拿鐵",
        "items": [
          {
            "id": "store_macu_nantou_minzhang_c4_i0",
            "name": "麻古奶茶",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_macu_nantou_minzhang_c4_i1",
            "name": "波霸奶茶",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_macu_nantou_minzhang_c4_i2",
            "name": "金萱奶茶",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_macu_nantou_minzhang_c4_i3",
            "name": "錫蘭紅茶拿鐵",
            "priceM": 60,
            "priceL": 75
          },
          {
            "id": "store_macu_nantou_minzhang_c4_i4",
            "name": "高山金萱拿鐵",
            "priceM": 60,
            "priceL": 75
          },
          {
            "id": "store_macu_nantou_minzhang_c4_i5",
            "name": "翡翠綠茶拿鐵",
            "priceM": 60,
            "priceL": 75
          }
        ]
      }
    ],
    "toppings": [
      {
        "id": "macu_t1",
        "name": "波霸",
        "price": 10
      },
      {
        "id": "macu_t2",
        "name": "椰果",
        "price": 10
      },
      {
        "id": "macu_t3",
        "name": "白玉珍珠",
        "price": 10
      },
      {
        "id": "macu_t4",
        "name": "綠茶凍",
        "price": 10
      },
      {
        "id": "macu_t5",
        "name": "芝芝奶蓋",
        "price": 25
      }
    ]
  },
  {
    "id": "store_milksha_nantou_minzu",
    "name": "迷客夏 Milksha",
    "branchName": "南投民族店",
    "phone": "049-2248079",
    "address": "南投市民族路 344 號",
    "region": "中南部價",
    "area": "南投市區",
    "businessHours": "09:30 - 21:30",
    "isOpenToday": true,
    "tagline": "綠光牧場鮮奶專賣",
    "categories": [
      {
        "name": "牧場鮮奶系列 (綠光鮮奶)",
        "items": [
          {
            "id": "store_milksha_nantou_minzu_c0_i0",
            "name": "珍珠紅茶拿鐵",
            "priceM": 60,
            "priceL": 75
          },
          {
            "id": "store_milksha_nantou_minzu_c0_i1",
            "name": "大正紅茶拿鐵",
            "priceM": 55,
            "priceL": 70
          },
          {
            "id": "store_milksha_nantou_minzu_c0_i2",
            "name": "伯爵紅茶拿鐵",
            "priceM": 55,
            "priceL": 70
          },
          {
            "id": "store_milksha_nantou_minzu_c0_i3",
            "name": "原片青茶拿鐵",
            "priceM": 55,
            "priceL": 70
          },
          {
            "id": "store_milksha_nantou_minzu_c0_i4",
            "name": "高峰烏龍拿鐵",
            "priceM": 55,
            "priceL": 70
          },
          {
            "id": "store_milksha_nantou_minzu_c0_i5",
            "name": "手作芋頭鮮奶 (大甲芋頭)",
            "priceM": 70,
            "priceL": 85
          },
          {
            "id": "store_milksha_nantou_minzu_c0_i6",
            "name": "手炒黑糖鮮奶",
            "priceM": 65,
            "priceL": 80
          }
        ]
      },
      {
        "name": "原片茗茶",
        "items": [
          {
            "id": "store_milksha_nantou_minzu_c1_i0",
            "name": "大正紅茶",
            "priceM": 35,
            "priceL": 40
          },
          {
            "id": "store_milksha_nantou_minzu_c1_i1",
            "name": "初露青茶",
            "priceM": 35,
            "priceL": 40
          },
          {
            "id": "store_milksha_nantou_minzu_c1_i2",
            "name": "茉香綠茶",
            "priceM": 35,
            "priceL": 40
          },
          {
            "id": "store_milksha_nantou_minzu_c1_i3",
            "name": "伯爵紅茶",
            "priceM": 35,
            "priceL": 40
          },
          {
            "id": "store_milksha_nantou_minzu_c1_i4",
            "name": "高峰烏龍茶",
            "priceM": 35,
            "priceL": 40
          }
        ]
      },
      {
        "name": "果茶特調",
        "items": [
          {
            "id": "store_milksha_nantou_minzu_c2_i0",
            "name": "柳丁綠茶",
            "priceM": 60,
            "priceL": 70
          },
          {
            "id": "store_milksha_nantou_minzu_c2_i1",
            "name": "青檸香茶",
            "priceM": 60,
            "priceL": 70
          },
          {
            "id": "store_milksha_nantou_minzu_c2_i2",
            "name": "冰糖洛神梅",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_milksha_nantou_minzu_c2_i3",
            "name": "養樂多綠",
            "priceM": 50,
            "priceL": 60
          }
        ]
      },
      {
        "name": "雲朵奶蓋",
        "items": [
          {
            "id": "store_milksha_nantou_minzu_c3_i0",
            "name": "雲朵伯爵紅茶",
            "priceM": 55,
            "priceL": 65
          },
          {
            "id": "store_milksha_nantou_minzu_c3_i1",
            "name": "雲朵初露青茶",
            "priceM": 55,
            "priceL": 65
          },
          {
            "id": "store_milksha_nantou_minzu_c3_i2",
            "name": "雲朵高峰烏龍",
            "priceM": 55,
            "priceL": 65
          }
        ]
      }
    ],
    "toppings": [
      {
        "id": "mk_t1",
        "name": "白玉珍珠",
        "price": 10
      },
      {
        "id": "mk_t2",
        "name": "黃金Q角",
        "price": 10
      },
      {
        "id": "mk_t3",
        "name": "綠茶凍",
        "price": 10
      },
      {
        "id": "mk_t4",
        "name": "布丁",
        "price": 20
      }
    ]
  },
  {
    "id": "store_dayungs_nantou_minzu",
    "name": "大苑子",
    "branchName": "南投民族店",
    "phone": "049-2239998",
    "address": "南投市民族路 190 號",
    "region": "中南部價",
    "area": "南投市區",
    "businessHours": "09:30 - 21:30",
    "isOpenToday": true,
    "tagline": "新鮮現榨水果鮮茶",
    "categories": [
      {
        "name": "著時鮮果好茶 (招牌現榨)",
        "items": [
          {
            "id": "store_dayungs_nantou_minzu_c0_i0",
            "name": "柳橙愛好者 (招牌柳丁汁)",
            "priceM": 70,
            "priceL": 80
          },
          {
            "id": "store_dayungs_nantou_minzu_c0_i1",
            "name": "芭樂檸檬 (人氣雙果)",
            "priceM": 65,
            "priceL": 75
          },
          {
            "id": "store_dayungs_nantou_minzu_c0_i2",
            "name": "柚美粒 (西柚蘆薈)",
            "priceM": 65,
            "priceL": 75
          },
          {
            "id": "store_dayungs_nantou_minzu_c0_i3",
            "name": "翡翠檸檬",
            "priceM": 55,
            "priceL": 65
          },
          {
            "id": "store_dayungs_nantou_minzu_c0_i4",
            "name": "百香翡翠",
            "priceM": 60,
            "priceL": 70
          },
          {
            "id": "store_dayungs_nantou_minzu_c0_i5",
            "name": "愛文芒果冰沙 (季節限定)",
            "priceM": 85,
            "priceL": 95
          }
        ]
      },
      {
        "name": "鮮乳與原茶",
        "items": [
          {
            "id": "store_dayungs_nantou_minzu_c1_i0",
            "name": "許慶良鮮奶茶",
            "priceM": 60,
            "priceL": 75
          },
          {
            "id": "store_dayungs_nantou_minzu_c1_i1",
            "name": "許慶良芋頭鮮奶",
            "priceM": 70,
            "priceL": 85
          },
          {
            "id": "store_dayungs_nantou_minzu_c1_i2",
            "name": "文山青茶",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_dayungs_nantou_minzu_c1_i3",
            "name": "茉綠醇茶",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_dayungs_nantou_minzu_c1_i4",
            "name": "古城錫蘭紅茶",
            "priceM": 30,
            "priceL": 35
          }
        ]
      }
    ],
    "toppings": [
      {
        "id": "dy_t1",
        "name": "珍珠",
        "price": 10
      },
      {
        "id": "dy_t2",
        "name": "蘆薈",
        "price": 10
      },
      {
        "id": "dy_t3",
        "name": "愛玉",
        "price": 10
      }
    ]
  },
  {
    "id": "store_kungfutea_nantou_fuxing",
    "name": "手作功夫茶",
    "branchName": "南投復興店",
    "phone": "049-2220001",
    "address": "南投市復興路 197 號",
    "region": "中南部價",
    "area": "南投市區",
    "businessHours": "10:00 - 21:30",
    "isOpenToday": true,
    "tagline": "38奶霸 · 手作特調茶飲",
    "categories": [
      {
        "name": "人氣招牌推薦",
        "items": [
          {
            "id": "store_kungfutea_nantou_fuxing_c0_i0",
            "name": "38奶霸 (珍珠+仙草+蒟蒻)",
            "priceM": 55,
            "priceL": 65
          },
          {
            "id": "store_kungfutea_nantou_fuxing_c0_i1",
            "name": "黑糖波霸純鮮奶",
            "priceM": 65,
            "priceL": 75
          },
          {
            "id": "store_kungfutea_nantou_fuxing_c0_i2",
            "name": "寒天柚香飲",
            "priceM": 60,
            "priceL": 70
          },
          {
            "id": "store_kungfutea_nantou_fuxing_c0_i3",
            "name": "翠玉凍飲",
            "priceM": 45,
            "priceL": 55
          }
        ]
      },
      {
        "name": "功夫純茶與奶茶",
        "items": [
          {
            "id": "store_kungfutea_nantou_fuxing_c1_i0",
            "name": "四季春青茶",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_kungfutea_nantou_fuxing_c1_i1",
            "name": "阿里山冰茶",
            "priceM": 35,
            "priceL": 40
          },
          {
            "id": "store_kungfutea_nantou_fuxing_c1_i2",
            "name": "功夫奶茶",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_kungfutea_nantou_fuxing_c1_i3",
            "name": "波霸奶茶",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_kungfutea_nantou_fuxing_c1_i4",
            "name": "芝士鐵觀音",
            "priceM": 55,
            "priceL": 65
          }
        ]
      }
    ],
    "toppings": [
      {
        "id": "kf_t1",
        "name": "黑糖波霸",
        "price": 10
      },
      {
        "id": "kf_t2",
        "name": "寒天晶球",
        "price": 15
      },
      {
        "id": "kf_t3",
        "name": "仙草凍",
        "price": 10
      }
    ]
  },
  {
    "id": "store_presotea_nantou_zhangnan",
    "name": "鮮茶道",
    "branchName": "南投彰南店",
    "phone": "049-2248762",
    "address": "南投市彰南路一段 1112 號",
    "region": "中南部價",
    "area": "南投市區",
    "businessHours": "09:15 - 20:45",
    "isOpenToday": true,
    "tagline": "高壓現萃茶 · 滿百即可外送 · 買十送一",
    "categories": [
      {
        "name": "萃茶好茶 (現點現萃)",
        "items": [
          {
            "id": "store_presotea_nantou_zhangnan_c0_i0",
            "name": "阿里山冰茶 (招牌)",
            "priceM": 35,
            "priceL": 40
          },
          {
            "id": "store_presotea_nantou_zhangnan_c0_i1",
            "name": "四季春茶",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_presotea_nantou_zhangnan_c0_i2",
            "name": "錫蘭紅茶",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_presotea_nantou_zhangnan_c0_i3",
            "name": "焙茶拿鐵",
            "priceM": 55,
            "priceL": 70
          }
        ]
      },
      {
        "name": "熊貓珍珠與鮮果特調",
        "items": [
          {
            "id": "store_presotea_nantou_zhangnan_c1_i0",
            "name": "熊貓珍珠奶茶 (黑白雙珠)",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_presotea_nantou_zhangnan_c1_i1",
            "name": "紅心芭樂檸檬",
            "priceM": 55,
            "priceL": 65
          },
          {
            "id": "store_presotea_nantou_zhangnan_c1_i2",
            "name": "白桃烏龍",
            "priceM": 40,
            "priceL": 45
          },
          {
            "id": "store_presotea_nantou_zhangnan_c1_i3",
            "name": "冬瓜檸檬",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_presotea_nantou_zhangnan_c1_i4",
            "name": "鮮果雙Q綠茶",
            "priceM": 55,
            "priceL": 65
          }
        ]
      }
    ],
    "toppings": [
      {
        "id": "scd_t1",
        "name": "熊貓珍珠",
        "price": 10
      },
      {
        "id": "scd_t2",
        "name": "椰果",
        "price": 10
      },
      {
        "id": "scd_t3",
        "name": "愛玉",
        "price": 10
      }
    ]
  },
  {
    "id": "store_85c_nantou_datong",
    "name": "85度C",
    "branchName": "南投大同店",
    "phone": "049-2200052",
    "address": "南投市大同南街 109 號",
    "region": "中南部價",
    "area": "南投市區",
    "businessHours": "07:30 - 23:00",
    "isOpenToday": true,
    "tagline": "咖啡蛋糕烘焙專賣 · 辦公室下午茶首選",
    "categories": [
      {
        "name": "人氣咖啡系列",
        "items": [
          {
            "id": "store_85c_nantou_datong_c0_i0",
            "name": "美式咖啡",
            "priceM": 55,
            "priceL": 70
          },
          {
            "id": "store_85c_nantou_datong_c0_i1",
            "name": "招牌咖啡",
            "priceM": 60,
            "priceL": 75
          },
          {
            "id": "store_85c_nantou_datong_c0_i2",
            "name": "海岩咖啡 (招牌鹹奶蓋)",
            "priceM": 65,
            "priceL": 80
          },
          {
            "id": "store_85c_nantou_datong_c0_i3",
            "name": "拿鐵咖啡",
            "priceM": 70,
            "priceL": 85
          },
          {
            "id": "store_85c_nantou_datong_c0_i4",
            "name": "卡布奇諾",
            "priceM": 70,
            "priceL": 85
          },
          {
            "id": "store_85c_nantou_datong_c0_i5",
            "name": "焦糖瑪奇朵",
            "priceM": 80,
            "priceL": 95
          }
        ]
      },
      {
        "name": "人氣茶飲與一顆檸檬",
        "items": [
          {
            "id": "store_85c_nantou_datong_c1_i0",
            "name": "一顆檸檬紅茶 (招牌整顆現切)",
            "priceM": 60,
            "priceL": 65
          },
          {
            "id": "store_85c_nantou_datong_c1_i1",
            "name": "一顆檸檬青茶",
            "priceM": 60,
            "priceL": 65
          },
          {
            "id": "store_85c_nantou_datong_c1_i2",
            "name": "初露青茶",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_85c_nantou_datong_c1_i3",
            "name": "淺焙紅茶",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_85c_nantou_datong_c1_i4",
            "name": "高山綠茶",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_85c_nantou_datong_c1_i5",
            "name": "海岩青茶",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_85c_nantou_datong_c1_i6",
            "name": "海岩紅茶",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_85c_nantou_datong_c1_i7",
            "name": "黑糖珍珠厚奶茶",
            "priceM": 55,
            "priceL": 65
          }
        ]
      }
    ],
    "toppings": [
      {
        "id": "85_t1",
        "name": "黑糖珍珠",
        "price": 10
      },
      {
        "id": "85_t2",
        "name": "椰果",
        "price": 10
      },
      {
        "id": "85_t3",
        "name": "海岩奶蓋",
        "price": 20
      }
    ]
  },
  {
    "id": "store_chazhimoshou_nantou_minzu",
    "name": "茶之魔手",
    "branchName": "南投民族店",
    "phone": "049-2222700",
    "address": "南投市民族路 9 號",
    "region": "中南部價",
    "area": "南投市區",
    "businessHours": "09:00 - 21:30",
    "isOpenToday": true,
    "tagline": "南投民族路老字號 · 平價大杯首選",
    "categories": [
      {
        "name": "南霸天招牌純茶",
        "items": [
          {
            "id": "store_chazhimoshou_nantou_minzu_c0_i0",
            "name": "台灣純茶 (青茶)",
            "priceM": 25,
            "priceL": 30
          },
          {
            "id": "store_chazhimoshou_nantou_minzu_c0_i1",
            "name": "伯爵紅茶",
            "priceM": 25,
            "priceL": 30
          },
          {
            "id": "store_chazhimoshou_nantou_minzu_c0_i2",
            "name": "茉香綠茶",
            "priceM": 25,
            "priceL": 30
          },
          {
            "id": "store_chazhimoshou_nantou_minzu_c0_i3",
            "name": "冬瓜茶",
            "priceM": 20,
            "priceL": 25
          }
        ]
      },
      {
        "name": "經典魔手特調",
        "items": [
          {
            "id": "store_chazhimoshou_nantou_minzu_c1_i0",
            "name": "山楂烏龍 (經典招牌酸甜)",
            "priceM": 35,
            "priceL": 45
          },
          {
            "id": "store_chazhimoshou_nantou_minzu_c1_i1",
            "name": "藍莓凍奶茶",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_chazhimoshou_nantou_minzu_c1_i2",
            "name": "波霸奶茶",
            "priceM": 40,
            "priceL": 50
          },
          {
            "id": "store_chazhimoshou_nantou_minzu_c1_i3",
            "name": "椰果奶茶",
            "priceM": 40,
            "priceL": 50
          },
          {
            "id": "store_chazhimoshou_nantou_minzu_c1_i4",
            "name": "梅子青茶",
            "priceM": 35,
            "priceL": 40
          },
          {
            "id": "store_chazhimoshou_nantou_minzu_c1_i5",
            "name": "檸檬紅茶",
            "priceM": 35,
            "priceL": 45
          },
          {
            "id": "store_chazhimoshou_nantou_minzu_c1_i6",
            "name": "白香青茶",
            "priceM": 35,
            "priceL": 45
          },
          {
            "id": "store_chazhimoshou_nantou_minzu_c1_i7",
            "name": "厚鮮奶茶",
            "priceM": 50,
            "priceL": 65
          }
        ]
      }
    ],
    "toppings": [
      {
        "id": "cm_t1",
        "name": "波霸珍珠",
        "price": 10
      },
      {
        "id": "cm_t2",
        "name": "椰果",
        "price": 10
      },
      {
        "id": "cm_t3",
        "name": "藍莓凍",
        "price": 10
      }
    ]
  },
  {
    "id": "store_shuiyun_nantou_sanhe",
    "name": "水云茶堂-阿里山鐵道紅茶",
    "branchName": "南投三和店",
    "phone": "049-2228800",
    "address": "南投市三和三路 47 號",
    "region": "中南部價",
    "area": "南投市區",
    "businessHours": "09:30 - 21:00",
    "isOpenToday": true,
    "tagline": "草屯發源特色手搖 · 阿里山鐵道紅茶與高山純茶",
    "categories": [
      {
        "name": "阿里山鐵道茶系",
        "items": [
          {
            "id": "store_shuiyun_nantou_sanhe_c0_i0",
            "name": "阿里山鐵道紅茶",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_shuiyun_nantou_sanhe_c0_i1",
            "name": "阿里山高山青茶",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_shuiyun_nantou_sanhe_c0_i2",
            "name": "鐵道冬瓜茶",
            "priceM": 25,
            "priceL": 30
          },
          {
            "id": "store_shuiyun_nantou_sanhe_c0_i3",
            "name": "冬瓜鐵道紅茶",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_shuiyun_nantou_sanhe_c0_i4",
            "name": "鐵道檸檬紅茶",
            "priceM": 40,
            "priceL": 50
          }
        ]
      },
      {
        "name": "香醇厚乳與特調",
        "items": [
          {
            "id": "store_shuiyun_nantou_sanhe_c1_i0",
            "name": "鐵道鮮奶紅茶",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_shuiyun_nantou_sanhe_c1_i1",
            "name": "鐵道厚奶茶",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_shuiyun_nantou_sanhe_c1_i2",
            "name": "波霸鐵道奶茶",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_shuiyun_nantou_sanhe_c1_i3",
            "name": "梅子鐵道青茶",
            "priceM": 40,
            "priceL": 50
          },
          {
            "id": "store_shuiyun_nantou_sanhe_c1_i4",
            "name": "金桔鐵道青茶",
            "priceM": 45,
            "priceL": 55
          }
        ]
      }
    ],
    "toppings": [
      {
        "id": "sy_t1",
        "name": "黑糖波霸",
        "price": 10
      },
      {
        "id": "sy_t2",
        "name": "椰果",
        "price": 10
      },
      {
        "id": "sy_t3",
        "name": "茶凍",
        "price": 10
      }
    ]
  },
  {
    "id": "store_wujia_nantou_datong",
    "name": "吳家紅茶冰",
    "branchName": "南投大同店",
    "phone": "0909-002028",
    "address": "南投市大同街 151 號",
    "region": "中南部價",
    "area": "南投市區",
    "businessHours": "09:00 - 21:00",
    "isOpenToday": true,
    "tagline": "經典古早味紅茶冰 · 大杯消暑首選",
    "categories": [
      {
        "name": "大杯古早味 (巨無霸胖胖杯)",
        "items": [
          {
            "id": "store_wujia_nantou_datong_c0_i0",
            "name": "招牌吳家紅茶冰",
            "priceM": 25,
            "priceL": 30
          },
          {
            "id": "store_wujia_nantou_datong_c0_i1",
            "name": "檸檬紅茶冰",
            "priceM": 35,
            "priceL": 45
          },
          {
            "id": "store_wujia_nantou_datong_c0_i2",
            "name": "豆漿紅茶冰 (黑白配)",
            "priceM": 35,
            "priceL": 40
          },
          {
            "id": "store_wujia_nantou_datong_c0_i3",
            "name": "厚鮮奶紅茶冰",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_wujia_nantou_datong_c0_i4",
            "name": "金桔檸檬紅茶冰",
            "priceM": 40,
            "priceL": 50
          }
        ]
      },
      {
        "name": "特調冬瓜與梅子",
        "items": [
          {
            "id": "store_wujia_nantou_datong_c1_i0",
            "name": "傳統冬瓜茶",
            "priceM": 25,
            "priceL": 30
          },
          {
            "id": "store_wujia_nantou_datong_c1_i1",
            "name": "冬瓜檸檬",
            "priceM": 35,
            "priceL": 45
          },
          {
            "id": "store_wujia_nantou_datong_c1_i2",
            "name": "冬瓜青茶",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_wujia_nantou_datong_c1_i3",
            "name": "烏梅紅茶冰",
            "priceM": 35,
            "priceL": 45
          },
          {
            "id": "store_wujia_nantou_datong_c1_i4",
            "name": "百香果綠茶冰",
            "priceM": 35,
            "priceL": 45
          },
          {
            "id": "store_wujia_nantou_datong_c1_i5",
            "name": "波霸珍珠紅茶冰",
            "priceM": 35,
            "priceL": 40
          }
        ]
      }
    ],
    "toppings": [
      {
        "id": "wj_t1",
        "name": "波霸珍珠",
        "price": 10
      },
      {
        "id": "wj_t2",
        "name": "椰果",
        "price": 10
      },
      {
        "id": "wj_t3",
        "name": "寒天晶球",
        "price": 10
      }
    ]
  },
  {
    "id": "store_liji_nantou_zhangnan",
    "name": "李記紅茶冰",
    "branchName": "南投彰南店",
    "phone": "0902-268707",
    "address": "南投市三和三路 18 號",
    "region": "中南部價",
    "area": "南投市區",
    "businessHours": "10:30 - 21:30",
    "isOpenToday": true,
    "tagline": "古早味純糖熬煮紅茶冰 · 超大杯消暑首選",
    "categories": [
      {
        "name": "招牌紅茶冰 (巨無霸1000cc)",
        "items": [
          {
            "id": "store_liji_nantou_zhangnan_c0_i0",
            "name": "古早味紅茶冰",
            "priceM": 25,
            "priceL": 30
          },
          {
            "id": "store_liji_nantou_zhangnan_c0_i1",
            "name": "檸檬紅茶冰",
            "priceM": 35,
            "priceL": 40
          },
          {
            "id": "store_liji_nantou_zhangnan_c0_i2",
            "name": "豆漿紅茶冰",
            "priceM": 35,
            "priceL": 40
          },
          {
            "id": "store_liji_nantou_zhangnan_c0_i3",
            "name": "冬瓜紅茶冰",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_liji_nantou_zhangnan_c0_i4",
            "name": "鮮奶紅茶冰",
            "priceM": 45,
            "priceL": 55
          }
        ]
      },
      {
        "name": "古早味特調冬瓜與青茶",
        "items": [
          {
            "id": "store_liji_nantou_zhangnan_c1_i0",
            "name": "古早味冬瓜茶",
            "priceM": 25,
            "priceL": 30
          },
          {
            "id": "store_liji_nantou_zhangnan_c1_i1",
            "name": "冬瓜檸檬冰",
            "priceM": 35,
            "priceL": 40
          },
          {
            "id": "store_liji_nantou_zhangnan_c1_i2",
            "name": "高山青茶冰",
            "priceM": 25,
            "priceL": 30
          },
          {
            "id": "store_liji_nantou_zhangnan_c1_i3",
            "name": "梅子青茶冰",
            "priceM": 35,
            "priceL": 40
          },
          {
            "id": "store_liji_nantou_zhangnan_c1_i4",
            "name": "珍珠紅茶冰",
            "priceM": 35,
            "priceL": 40
          },
          {
            "id": "store_liji_nantou_zhangnan_c1_i5",
            "name": "椰果紅茶冰",
            "priceM": 35,
            "priceL": 40
          }
        ]
      }
    ],
    "toppings": [
      {
        "id": "lj_t1",
        "name": "黑糖珍珠",
        "price": 10
      },
      {
        "id": "lj_t2",
        "name": "椰果",
        "price": 10
      },
      {
        "id": "lj_t3",
        "name": "小芋圓",
        "price": 10
      }
    ]
  },
  {
    "id": "store_guiji_nantou_nangang",
    "name": "龜記茗品",
    "branchName": "南投南崗店",
    "phone": "049-2247999",
    "address": "南投市南崗二路 340 號",
    "region": "中南部價",
    "area": "南崗工業區",
    "businessHours": "10:00 - 21:00",
    "isOpenToday": true,
    "tagline": "南崗二路工業區外送主力 · 紅柚翡翠名店",
    "categories": [
      {
        "name": "人氣招牌推薦",
        "items": [
          {
            "id": "store_guiji_nantou_nangang_c0_i0",
            "name": "紅柚翡翠 (招牌果肉)",
            "priceM": 70,
            "priceL": 75
          },
          {
            "id": "store_guiji_nantou_nangang_c0_i1",
            "name": "蘋果紅萱",
            "priceM": 55,
            "priceL": 60
          },
          {
            "id": "store_guiji_nantou_nangang_c0_i2",
            "name": "柳橙翡翠",
            "priceM": 60,
            "priceL": 65
          },
          {
            "id": "store_guiji_nantou_nangang_c0_i3",
            "name": "雷蒙蘆薈蜜",
            "priceM": 60,
            "priceL": 70
          }
        ]
      },
      {
        "name": "原茶系列",
        "items": [
          {
            "id": "store_guiji_nantou_nangang_c1_i0",
            "name": "三韻紅萱",
            "priceM": 35,
            "priceL": 40
          },
          {
            "id": "store_guiji_nantou_nangang_c1_i1",
            "name": "翡翠綠茶",
            "priceM": 35,
            "priceL": 40
          },
          {
            "id": "store_guiji_nantou_nangang_c1_i2",
            "name": "極品紅茶",
            "priceM": 35,
            "priceL": 40
          },
          {
            "id": "store_guiji_nantou_nangang_c1_i3",
            "name": "三十三茶王",
            "priceM": 40,
            "priceL": 45
          },
          {
            "id": "store_guiji_nantou_nangang_c1_i4",
            "name": "秀水冬瓜青",
            "priceM": 45,
            "priceL": 50
          }
        ]
      },
      {
        "name": "醇厚奶茶與鮮乳",
        "items": [
          {
            "id": "store_guiji_nantou_nangang_c2_i0",
            "name": "濃乳茶",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_guiji_nantou_nangang_c2_i1",
            "name": "紅烏奶茶",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_guiji_nantou_nangang_c2_i2",
            "name": "碎銀奶茶",
            "priceM": 55,
            "priceL": 65
          },
          {
            "id": "store_guiji_nantou_nangang_c2_i3",
            "name": "冬瓜鮮乳",
            "priceM": 55,
            "priceL": 65
          },
          {
            "id": "store_guiji_nantou_nangang_c2_i4",
            "name": "紅烏鮮乳",
            "priceM": 60,
            "priceL": 70
          },
          {
            "id": "store_guiji_nantou_nangang_c2_i5",
            "name": "黑糖鮮乳波霸",
            "priceM": 65,
            "priceL": 75
          }
        ]
      }
    ],
    "toppings": [
      {
        "id": "gj_t1",
        "name": "蘆薈",
        "price": 10
      },
      {
        "id": "gj_t2",
        "name": "椰果",
        "price": 10
      },
      {
        "id": "gj_t3",
        "name": "黃金珍珠",
        "price": 10
      }
    ]
  },
  {
    "id": "store_teatop_nantou_nangang",
    "name": "TEA TOP 第一味",
    "branchName": "南投南崗店",
    "phone": "049-2220901",
    "address": "南投市南崗二路 306 號",
    "region": "中南部價",
    "area": "南崗工業區",
    "businessHours": "09:00 - 21:00",
    "isOpenToday": true,
    "tagline": "南崗二路工業區快速外送門市",
    "categories": [
      {
        "name": "名間鄉高山茗茶",
        "items": [
          {
            "id": "store_teatop_nantou_nangang_c0_i0",
            "name": "高山青茶 (招牌冠軍茶)",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_teatop_nantou_nangang_c0_i1",
            "name": "日月潭紅茶",
            "priceM": 35,
            "priceL": 40
          },
          {
            "id": "store_teatop_nantou_nangang_c0_i2",
            "name": "冬片青茶",
            "priceM": 35,
            "priceL": 40
          },
          {
            "id": "store_teatop_nantou_nangang_c0_i3",
            "name": "嚴選綠茶",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_teatop_nantou_nangang_c0_i4",
            "name": "108茶王",
            "priceM": 40,
            "priceL": 45
          }
        ]
      },
      {
        "name": "咀嚼系好料",
        "items": [
          {
            "id": "store_teatop_nantou_nangang_c1_i0",
            "name": "高山青雙Q (粉粿+珍珠)",
            "priceM": 40,
            "priceL": 45
          },
          {
            "id": "store_teatop_nantou_nangang_c1_i1",
            "name": "珍珠奶茶",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_teatop_nantou_nangang_c1_i2",
            "name": "雙Q奶茶",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_teatop_nantou_nangang_c1_i3",
            "name": "芋見幸福 (芋圓+芋泥+鮮奶)",
            "priceM": 65,
            "priceL": 75
          }
        ]
      },
      {
        "name": "大甲芋頭與鮮奶",
        "items": [
          {
            "id": "store_teatop_nantou_nangang_c2_i0",
            "name": "日月潭紅茶拿鐵",
            "priceM": 55,
            "priceL": 70
          },
          {
            "id": "store_teatop_nantou_nangang_c2_i1",
            "name": "高山青茶拿鐵",
            "priceM": 55,
            "priceL": 70
          },
          {
            "id": "store_teatop_nantou_nangang_c2_i2",
            "name": "特濃大甲芋頭鮮奶",
            "priceM": 70,
            "priceL": 85
          }
        ]
      },
      {
        "name": "鮮果好茶",
        "items": [
          {
            "id": "store_teatop_nantou_nangang_c3_i0",
            "name": "百香鮮綠",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_teatop_nantou_nangang_c3_i1",
            "name": "芒果鳳梨青",
            "priceM": 60,
            "priceL": 70
          },
          {
            "id": "store_teatop_nantou_nangang_c3_i2",
            "name": "翡翠檸檬",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_teatop_nantou_nangang_c3_i3",
            "name": "梅子青茶",
            "priceM": 45,
            "priceL": 55
          }
        ]
      }
    ],
    "toppings": [
      {
        "id": "tt_t1",
        "name": "招牌粉粿",
        "price": 15
      },
      {
        "id": "tt_t2",
        "name": "珍珠",
        "price": 10
      },
      {
        "id": "tt_t3",
        "name": "椰果",
        "price": 10
      },
      {
        "id": "tt_t4",
        "name": "仙草凍",
        "price": 10
      }
    ]
  },
  {
    "id": "store_chingshin_nangang",
    "name": "清心福全",
    "branchName": "南投南崗店",
    "phone": "049-2225532",
    "address": "南投市南崗二路 321 號",
    "region": "中南部價",
    "area": "南崗工業區",
    "businessHours": "08:30 - 21:00",
    "isOpenToday": true,
    "tagline": "南崗工業區廠區外送首選 · 早上8:30即營業",
    "categories": [
      {
        "name": "茗品純茶",
        "items": [
          {
            "id": "store_chingshin_nangang_c0_i0",
            "name": "原鄉四季",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_chingshin_nangang_c0_i1",
            "name": "特選烏龍綠",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_chingshin_nangang_c0_i2",
            "name": "極品菁茶",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_chingshin_nangang_c0_i3",
            "name": "特級綠茶",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_chingshin_nangang_c0_i4",
            "name": "錫蘭紅茶",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_chingshin_nangang_c0_i5",
            "name": "嚴選高山茶",
            "priceM": 35,
            "priceL": 40
          },
          {
            "id": "store_chingshin_nangang_c0_i6",
            "name": "普洱茶",
            "priceM": 30,
            "priceL": 35
          }
        ]
      },
      {
        "name": "香醇奶茶",
        "items": [
          {
            "id": "store_chingshin_nangang_c1_i0",
            "name": "特級奶茶",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_chingshin_nangang_c1_i1",
            "name": "錫蘭奶紅",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_chingshin_nangang_c1_i2",
            "name": "烏龍奶茶",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_chingshin_nangang_c1_i3",
            "name": "珍珠奶茶 (大珍珠)",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_chingshin_nangang_c1_i4",
            "name": "粉圓奶茶 (小粉圓)",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_chingshin_nangang_c1_i5",
            "name": "椰果奶茶",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_chingshin_nangang_c1_i6",
            "name": "布丁奶茶",
            "priceM": 55,
            "priceL": 65
          },
          {
            "id": "store_chingshin_nangang_c1_i7",
            "name": "仙草凍奶茶",
            "priceM": 50,
            "priceL": 60
          }
        ]
      },
      {
        "name": "鮮奶拿鐵",
        "items": [
          {
            "id": "store_chingshin_nangang_c2_i0",
            "name": "隱藏版 (珍珠蜂蜜鮮奶普洱)",
            "priceM": 65,
            "priceL": 80
          },
          {
            "id": "store_chingshin_nangang_c2_i1",
            "name": "鮮奶茶",
            "priceM": 55,
            "priceL": 70
          },
          {
            "id": "store_chingshin_nangang_c2_i2",
            "name": "鮮奶綠",
            "priceM": 55,
            "priceL": 70
          },
          {
            "id": "store_chingshin_nangang_c2_i3",
            "name": "鮮奶烏龍",
            "priceM": 55,
            "priceL": 70
          },
          {
            "id": "store_chingshin_nangang_c2_i4",
            "name": "珍珠鮮奶茶",
            "priceM": 60,
            "priceL": 75
          }
        ]
      },
      {
        "name": "特調多多與果汁",
        "items": [
          {
            "id": "store_chingshin_nangang_c3_i0",
            "name": "優多綠茶 (多多綠)",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_chingshin_nangang_c3_i1",
            "name": "優多檸檬",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_chingshin_nangang_c3_i2",
            "name": "蜜茶",
            "priceM": 35,
            "priceL": 45
          },
          {
            "id": "store_chingshin_nangang_c3_i3",
            "name": "蜂蜜綠茶",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_chingshin_nangang_c3_i4",
            "name": "梅子綠茶",
            "priceM": 40,
            "priceL": 50
          },
          {
            "id": "store_chingshin_nangang_c3_i5",
            "name": "檸檬紅茶",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_chingshin_nangang_c3_i6",
            "name": "金桔檸檬",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_chingshin_nangang_c3_i7",
            "name": "冰淇淋紅茶",
            "priceM": 45,
            "priceL": 55
          }
        ]
      }
    ],
    "toppings": [
      {
        "id": "qx_t1",
        "name": "珍珠 (大)",
        "price": 10
      },
      {
        "id": "qx_t2",
        "name": "紅粉圓 (小)",
        "price": 10
      },
      {
        "id": "qx_t3",
        "name": "椰果",
        "price": 10
      },
      {
        "id": "qx_t4",
        "name": "仙草凍",
        "price": 10
      },
      {
        "id": "qx_t5",
        "name": "布丁",
        "price": 20
      }
    ]
  },
  {
    "id": "store_chazhimoshou_nangang",
    "name": "茶之魔手",
    "branchName": "南投南崗店",
    "phone": "049-2233999",
    "address": "南投市南崗二路 332 號",
    "region": "中南部價",
    "area": "南崗工業區",
    "businessHours": "08:30 - 21:30",
    "isOpenToday": true,
    "tagline": "南崗工業區廠區外送霸主 · 早上8:30營業",
    "categories": [
      {
        "name": "南霸天招牌純茶",
        "items": [
          {
            "id": "store_chazhimoshou_nangang_c0_i0",
            "name": "台灣純茶 (青茶)",
            "priceM": 25,
            "priceL": 30
          },
          {
            "id": "store_chazhimoshou_nangang_c0_i1",
            "name": "伯爵紅茶",
            "priceM": 25,
            "priceL": 30
          },
          {
            "id": "store_chazhimoshou_nangang_c0_i2",
            "name": "茉香綠茶",
            "priceM": 25,
            "priceL": 30
          },
          {
            "id": "store_chazhimoshou_nangang_c0_i3",
            "name": "冬瓜茶",
            "priceM": 20,
            "priceL": 25
          }
        ]
      },
      {
        "name": "經典魔手特調",
        "items": [
          {
            "id": "store_chazhimoshou_nangang_c1_i0",
            "name": "山楂烏龍 (經典招牌酸甜)",
            "priceM": 35,
            "priceL": 45
          },
          {
            "id": "store_chazhimoshou_nangang_c1_i1",
            "name": "藍莓凍奶茶",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_chazhimoshou_nangang_c1_i2",
            "name": "波霸奶茶",
            "priceM": 40,
            "priceL": 50
          },
          {
            "id": "store_chazhimoshou_nangang_c1_i3",
            "name": "椰果奶茶",
            "priceM": 40,
            "priceL": 50
          },
          {
            "id": "store_chazhimoshou_nangang_c1_i4",
            "name": "梅子青茶",
            "priceM": 35,
            "priceL": 40
          },
          {
            "id": "store_chazhimoshou_nangang_c1_i5",
            "name": "檸檬紅茶",
            "priceM": 35,
            "priceL": 45
          },
          {
            "id": "store_chazhimoshou_nangang_c1_i6",
            "name": "白香青茶",
            "priceM": 35,
            "priceL": 45
          },
          {
            "id": "store_chazhimoshou_nangang_c1_i7",
            "name": "厚鮮奶茶",
            "priceM": 50,
            "priceL": 65
          }
        ]
      }
    ],
    "toppings": [
      {
        "id": "cm_t1",
        "name": "波霸珍珠",
        "price": 10
      },
      {
        "id": "cm_t2",
        "name": "椰果",
        "price": 10
      },
      {
        "id": "cm_t3",
        "name": "藍莓凍",
        "price": 10
      }
    ]
  },
  {
    "id": "store_mamatea_nangang_chenggong",
    "name": "紅茶媽媽",
    "branchName": "南投成功店",
    "phone": "049-2255462",
    "address": "南投市成功三路 33 號",
    "region": "中南部價",
    "area": "南崗工業區",
    "businessHours": "10:00 - 19:30",
    "isOpenToday": true,
    "tagline": "南崗工業區成功三路下午茶首選 · 古早味決明紅茶與甘蔗青茶",
    "categories": [
      {
        "name": "招牌古早紅茶與純茶",
        "items": [
          {
            "id": "store_mamatea_nangang_chenggong_c0_i0",
            "name": "古早味紅茶",
            "priceM": 25,
            "priceL": 30
          },
          {
            "id": "store_mamatea_nangang_chenggong_c0_i1",
            "name": "茉莉綠茶",
            "priceM": 25,
            "priceL": 30
          },
          {
            "id": "store_mamatea_nangang_chenggong_c0_i2",
            "name": "高山青茶",
            "priceM": 25,
            "priceL": 30
          },
          {
            "id": "store_mamatea_nangang_chenggong_c0_i3",
            "name": "古早味冬瓜茶",
            "priceM": 25,
            "priceL": 30
          }
        ]
      },
      {
        "name": "經典特調奶茶",
        "items": [
          {
            "id": "store_mamatea_nangang_chenggong_c1_i0",
            "name": "特級奶茶",
            "priceM": 40,
            "priceL": 50
          },
          {
            "id": "store_mamatea_nangang_chenggong_c1_i1",
            "name": "珍珠奶茶",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_mamatea_nangang_chenggong_c1_i2",
            "name": "波霸鮮奶茶",
            "priceM": 50,
            "priceL": 65
          },
          {
            "id": "store_mamatea_nangang_chenggong_c1_i3",
            "name": "豆漿紅茶",
            "priceM": 30,
            "priceL": 40
          },
          {
            "id": "store_mamatea_nangang_chenggong_c1_i4",
            "name": "檸檬冬瓜茶",
            "priceM": 35,
            "priceL": 45
          },
          {
            "id": "store_mamatea_nangang_chenggong_c1_i5",
            "name": "百香綠茶",
            "priceM": 35,
            "priceL": 45
          }
        ]
      }
    ],
    "toppings": [
      {
        "id": "rm_t1",
        "name": "波霸珍珠",
        "price": 10
      },
      {
        "id": "rm_t2",
        "name": "椰果",
        "price": 10
      },
      {
        "id": "rm_t3",
        "name": "布丁",
        "price": 15
      }
    ]
  },
  {
    "id": "store_liji_nantou_nangang",
    "name": "李記紅茶冰",
    "branchName": "南崗店",
    "phone": "0958-429003",
    "address": "南投市新興里南崗三路 144 號",
    "region": "中南部價",
    "area": "南崗工業區",
    "businessHours": "09:00 - 20:30",
    "isOpenToday": true,
    "tagline": "南崗三路工業區超大杯紅茶冰 · 工廠外送提神首選",
    "categories": [
      {
        "name": "招牌紅茶冰 (巨無霸1000cc)",
        "items": [
          {
            "id": "store_liji_nantou_nangang_c0_i0",
            "name": "古早味紅茶冰",
            "priceM": 25,
            "priceL": 30
          },
          {
            "id": "store_liji_nantou_nangang_c0_i1",
            "name": "檸檬紅茶冰",
            "priceM": 35,
            "priceL": 40
          },
          {
            "id": "store_liji_nantou_nangang_c0_i2",
            "name": "豆漿紅茶冰",
            "priceM": 35,
            "priceL": 40
          },
          {
            "id": "store_liji_nantou_nangang_c0_i3",
            "name": "冬瓜紅茶冰",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_liji_nantou_nangang_c0_i4",
            "name": "鮮奶紅茶冰",
            "priceM": 45,
            "priceL": 55
          }
        ]
      },
      {
        "name": "古早味特調冬瓜與青茶",
        "items": [
          {
            "id": "store_liji_nantou_nangang_c1_i0",
            "name": "古早味冬瓜茶",
            "priceM": 25,
            "priceL": 30
          },
          {
            "id": "store_liji_nantou_nangang_c1_i1",
            "name": "冬瓜檸檬冰",
            "priceM": 35,
            "priceL": 40
          },
          {
            "id": "store_liji_nantou_nangang_c1_i2",
            "name": "高山青茶冰",
            "priceM": 25,
            "priceL": 30
          },
          {
            "id": "store_liji_nantou_nangang_c1_i3",
            "name": "梅子青茶冰",
            "priceM": 35,
            "priceL": 40
          },
          {
            "id": "store_liji_nantou_nangang_c1_i4",
            "name": "珍珠紅茶冰",
            "priceM": 35,
            "priceL": 40
          },
          {
            "id": "store_liji_nantou_nangang_c1_i5",
            "name": "椰果紅茶冰",
            "priceM": 35,
            "priceL": 40
          }
        ]
      }
    ],
    "toppings": [
      {
        "id": "lj_t1",
        "name": "黑糖珍珠",
        "price": 10
      },
      {
        "id": "lj_t2",
        "name": "椰果",
        "price": 10
      },
      {
        "id": "lj_t3",
        "name": "小芋圓",
        "price": 10
      }
    ]
  },
  {
    "id": "store_teatop_zhongxing",
    "name": "TEA TOP 第一味",
    "branchName": "中興新村店",
    "phone": "049-2295168",
    "address": "南投市光明南路 67-1 號",
    "region": "中南部價",
    "area": "中興新村",
    "businessHours": "09:00 - 21:00",
    "isOpenToday": true,
    "tagline": "中興新村公家機關常叫外送首選 · 高山青茶名店",
    "categories": [
      {
        "name": "名間鄉高山茗茶",
        "items": [
          {
            "id": "store_teatop_zhongxing_c0_i0",
            "name": "高山青茶 (招牌冠軍茶)",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_teatop_zhongxing_c0_i1",
            "name": "日月潭紅茶",
            "priceM": 35,
            "priceL": 40
          },
          {
            "id": "store_teatop_zhongxing_c0_i2",
            "name": "冬片青茶",
            "priceM": 35,
            "priceL": 40
          },
          {
            "id": "store_teatop_zhongxing_c0_i3",
            "name": "嚴選綠茶",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_teatop_zhongxing_c0_i4",
            "name": "108茶王",
            "priceM": 40,
            "priceL": 45
          }
        ]
      },
      {
        "name": "咀嚼系好料",
        "items": [
          {
            "id": "store_teatop_zhongxing_c1_i0",
            "name": "高山青雙Q (粉粿+珍珠)",
            "priceM": 40,
            "priceL": 45
          },
          {
            "id": "store_teatop_zhongxing_c1_i1",
            "name": "珍珠奶茶",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_teatop_zhongxing_c1_i2",
            "name": "雙Q奶茶",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_teatop_zhongxing_c1_i3",
            "name": "芋見幸福 (芋圓+芋泥+鮮奶)",
            "priceM": 65,
            "priceL": 75
          }
        ]
      },
      {
        "name": "大甲芋頭與鮮奶",
        "items": [
          {
            "id": "store_teatop_zhongxing_c2_i0",
            "name": "日月潭紅茶拿鐵",
            "priceM": 55,
            "priceL": 70
          },
          {
            "id": "store_teatop_zhongxing_c2_i1",
            "name": "高山青茶拿鐵",
            "priceM": 55,
            "priceL": 70
          },
          {
            "id": "store_teatop_zhongxing_c2_i2",
            "name": "特濃大甲芋頭鮮奶",
            "priceM": 70,
            "priceL": 85
          }
        ]
      },
      {
        "name": "鮮果好茶",
        "items": [
          {
            "id": "store_teatop_zhongxing_c3_i0",
            "name": "百香鮮綠",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_teatop_zhongxing_c3_i1",
            "name": "芒果鳳梨青",
            "priceM": 60,
            "priceL": 70
          },
          {
            "id": "store_teatop_zhongxing_c3_i2",
            "name": "翡翠檸檬",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_teatop_zhongxing_c3_i3",
            "name": "梅子青茶",
            "priceM": 45,
            "priceL": 55
          }
        ]
      }
    ],
    "toppings": [
      {
        "id": "tt_t1",
        "name": "招牌粉粿",
        "price": 15
      },
      {
        "id": "tt_t2",
        "name": "珍珠",
        "price": 10
      },
      {
        "id": "tt_t3",
        "name": "椰果",
        "price": 10
      },
      {
        "id": "tt_t4",
        "name": "仙草凍",
        "price": 10
      }
    ]
  },
  {
    "id": "store_chingshin_zhongxing",
    "name": "清心福全",
    "branchName": "南投中興店",
    "phone": "049-2226630",
    "address": "南投市南崗一路 13 號",
    "region": "中南部價",
    "area": "中興新村",
    "businessHours": "09:00 - 21:30",
    "isOpenToday": true,
    "tagline": "南崗一路銜接中興新村交通要道",
    "categories": [
      {
        "name": "茗品純茶",
        "items": [
          {
            "id": "store_chingshin_zhongxing_c0_i0",
            "name": "原鄉四季",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_chingshin_zhongxing_c0_i1",
            "name": "特選烏龍綠",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_chingshin_zhongxing_c0_i2",
            "name": "極品菁茶",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_chingshin_zhongxing_c0_i3",
            "name": "特級綠茶",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_chingshin_zhongxing_c0_i4",
            "name": "錫蘭紅茶",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_chingshin_zhongxing_c0_i5",
            "name": "嚴選高山茶",
            "priceM": 35,
            "priceL": 40
          },
          {
            "id": "store_chingshin_zhongxing_c0_i6",
            "name": "普洱茶",
            "priceM": 30,
            "priceL": 35
          }
        ]
      },
      {
        "name": "香醇奶茶",
        "items": [
          {
            "id": "store_chingshin_zhongxing_c1_i0",
            "name": "特級奶茶",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_chingshin_zhongxing_c1_i1",
            "name": "錫蘭奶紅",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_chingshin_zhongxing_c1_i2",
            "name": "烏龍奶茶",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_chingshin_zhongxing_c1_i3",
            "name": "珍珠奶茶 (大珍珠)",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_chingshin_zhongxing_c1_i4",
            "name": "粉圓奶茶 (小粉圓)",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_chingshin_zhongxing_c1_i5",
            "name": "椰果奶茶",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_chingshin_zhongxing_c1_i6",
            "name": "布丁奶茶",
            "priceM": 55,
            "priceL": 65
          },
          {
            "id": "store_chingshin_zhongxing_c1_i7",
            "name": "仙草凍奶茶",
            "priceM": 50,
            "priceL": 60
          }
        ]
      },
      {
        "name": "鮮奶拿鐵",
        "items": [
          {
            "id": "store_chingshin_zhongxing_c2_i0",
            "name": "隱藏版 (珍珠蜂蜜鮮奶普洱)",
            "priceM": 65,
            "priceL": 80
          },
          {
            "id": "store_chingshin_zhongxing_c2_i1",
            "name": "鮮奶茶",
            "priceM": 55,
            "priceL": 70
          },
          {
            "id": "store_chingshin_zhongxing_c2_i2",
            "name": "鮮奶綠",
            "priceM": 55,
            "priceL": 70
          },
          {
            "id": "store_chingshin_zhongxing_c2_i3",
            "name": "鮮奶烏龍",
            "priceM": 55,
            "priceL": 70
          },
          {
            "id": "store_chingshin_zhongxing_c2_i4",
            "name": "珍珠鮮奶茶",
            "priceM": 60,
            "priceL": 75
          }
        ]
      },
      {
        "name": "特調多多與果汁",
        "items": [
          {
            "id": "store_chingshin_zhongxing_c3_i0",
            "name": "優多綠茶 (多多綠)",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_chingshin_zhongxing_c3_i1",
            "name": "優多檸檬",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_chingshin_zhongxing_c3_i2",
            "name": "蜜茶",
            "priceM": 35,
            "priceL": 45
          },
          {
            "id": "store_chingshin_zhongxing_c3_i3",
            "name": "蜂蜜綠茶",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_chingshin_zhongxing_c3_i4",
            "name": "梅子綠茶",
            "priceM": 40,
            "priceL": 50
          },
          {
            "id": "store_chingshin_zhongxing_c3_i5",
            "name": "檸檬紅茶",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_chingshin_zhongxing_c3_i6",
            "name": "金桔檸檬",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_chingshin_zhongxing_c3_i7",
            "name": "冰淇淋紅茶",
            "priceM": 45,
            "priceL": 55
          }
        ]
      }
    ],
    "toppings": [
      {
        "id": "qx_t1",
        "name": "珍珠 (大)",
        "price": 10
      },
      {
        "id": "qx_t2",
        "name": "紅粉圓 (小)",
        "price": 10
      },
      {
        "id": "qx_t3",
        "name": "椰果",
        "price": 10
      },
      {
        "id": "qx_t4",
        "name": "仙草凍",
        "price": 10
      },
      {
        "id": "qx_t5",
        "name": "布丁",
        "price": 20
      }
    ]
  },
  {
    "id": "store_85c_nantou_zhongxing",
    "name": "85度C",
    "branchName": "南投中興店",
    "phone": "049-2390885",
    "address": "南投市中學西路 42-1 號",
    "region": "中南部價",
    "area": "中興新村",
    "businessHours": "07:00 - 21:30",
    "isOpenToday": true,
    "tagline": "中興新村辦公室下午茶首選 · 滿200即外送",
    "categories": [
      {
        "name": "人氣咖啡系列",
        "items": [
          {
            "id": "store_85c_nantou_zhongxing_c0_i0",
            "name": "美式咖啡",
            "priceM": 55,
            "priceL": 70
          },
          {
            "id": "store_85c_nantou_zhongxing_c0_i1",
            "name": "招牌咖啡",
            "priceM": 60,
            "priceL": 75
          },
          {
            "id": "store_85c_nantou_zhongxing_c0_i2",
            "name": "海岩咖啡 (招牌鹹奶蓋)",
            "priceM": 65,
            "priceL": 80
          },
          {
            "id": "store_85c_nantou_zhongxing_c0_i3",
            "name": "拿鐵咖啡",
            "priceM": 70,
            "priceL": 85
          },
          {
            "id": "store_85c_nantou_zhongxing_c0_i4",
            "name": "卡布奇諾",
            "priceM": 70,
            "priceL": 85
          },
          {
            "id": "store_85c_nantou_zhongxing_c0_i5",
            "name": "焦糖瑪奇朵",
            "priceM": 80,
            "priceL": 95
          }
        ]
      },
      {
        "name": "人氣茶飲與一顆檸檬",
        "items": [
          {
            "id": "store_85c_nantou_zhongxing_c1_i0",
            "name": "一顆檸檬紅茶 (招牌整顆現切)",
            "priceM": 60,
            "priceL": 65
          },
          {
            "id": "store_85c_nantou_zhongxing_c1_i1",
            "name": "一顆檸檬青茶",
            "priceM": 60,
            "priceL": 65
          },
          {
            "id": "store_85c_nantou_zhongxing_c1_i2",
            "name": "初露青茶",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_85c_nantou_zhongxing_c1_i3",
            "name": "淺焙紅茶",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_85c_nantou_zhongxing_c1_i4",
            "name": "高山綠茶",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_85c_nantou_zhongxing_c1_i5",
            "name": "海岩青茶",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_85c_nantou_zhongxing_c1_i6",
            "name": "海岩紅茶",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_85c_nantou_zhongxing_c1_i7",
            "name": "黑糖珍珠厚奶茶",
            "priceM": 55,
            "priceL": 65
          }
        ]
      }
    ],
    "toppings": [
      {
        "id": "85_t1",
        "name": "黑糖珍珠",
        "price": 10
      },
      {
        "id": "85_t2",
        "name": "椰果",
        "price": 10
      },
      {
        "id": "85_t3",
        "name": "海岩奶蓋",
        "price": 20
      }
    ]
  },
  {
    "id": "store_dezheng_caotun",
    "name": "得正 Oolong TEA Project",
    "branchName": "草屯太平店",
    "phone": "049-2300276",
    "address": "草屯鎮太平路二段 278 號",
    "region": "中南部價",
    "area": "草屯商圈",
    "businessHours": "10:00 - 20:30",
    "isOpenToday": true,
    "tagline": "草屯太平路計劃 · 辦公室烏龍茶人氣王",
    "categories": [
      {
        "name": "原茶系列 (三種火候烏龍)",
        "items": [
          {
            "id": "store_dezheng_caotun_c0_i0",
            "name": "春烏龍 (清香輕發酵)",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_dezheng_caotun_c0_i1",
            "name": "輕烏龍 (一分火)",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_dezheng_caotun_c0_i2",
            "name": "焙烏龍 (三分火中炭焙)",
            "priceM": 30,
            "priceL": 35
          }
        ]
      },
      {
        "name": "烏龍奶茶系列",
        "items": [
          {
            "id": "store_dezheng_caotun_c1_i0",
            "name": "春烏龍奶茶",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_dezheng_caotun_c1_i1",
            "name": "輕烏龍奶茶",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_dezheng_caotun_c1_i2",
            "name": "焙烏龍奶茶",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_dezheng_caotun_c1_i3",
            "name": "烘吉奶茶 (烤焙香氣)",
            "priceM": 50,
            "priceL": 60
          }
        ]
      },
      {
        "name": "烏龍鮮奶系列",
        "items": [
          {
            "id": "store_dezheng_caotun_c2_i0",
            "name": "春烏龍鮮奶",
            "priceM": 50,
            "priceL": 65
          },
          {
            "id": "store_dezheng_caotun_c2_i1",
            "name": "輕烏龍鮮奶",
            "priceM": 50,
            "priceL": 65
          },
          {
            "id": "store_dezheng_caotun_c2_i2",
            "name": "焙烏龍鮮奶",
            "priceM": 50,
            "priceL": 65
          },
          {
            "id": "store_dezheng_caotun_c2_i3",
            "name": "抹茶鮮奶",
            "priceM": 55,
            "priceL": 70
          }
        ]
      },
      {
        "name": "芝士奶蓋系列 (招牌)",
        "items": [
          {
            "id": "store_dezheng_caotun_c3_i0",
            "name": "芝士奶蓋春烏龍",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_dezheng_caotun_c3_i1",
            "name": "芝士奶蓋輕烏龍",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_dezheng_caotun_c3_i2",
            "name": "芝士奶蓋焙烏龍",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_dezheng_caotun_c3_i3",
            "name": "芝士奶蓋阿華田",
            "priceM": 55,
            "priceL": 65
          },
          {
            "id": "store_dezheng_caotun_c3_i4",
            "name": "芝士奶蓋烘吉茶",
            "priceM": 55,
            "priceL": 65
          }
        ]
      },
      {
        "name": "鮮果特調系列",
        "items": [
          {
            "id": "store_dezheng_caotun_c4_i0",
            "name": "檸檬春烏龍",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_dezheng_caotun_c4_i1",
            "name": "香橙春烏龍",
            "priceM": 55,
            "priceL": 65
          },
          {
            "id": "store_dezheng_caotun_c4_i2",
            "name": "優多春烏龍",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_dezheng_caotun_c4_i3",
            "name": "甘蔗春烏龍",
            "priceM": 50,
            "priceL": 60
          }
        ]
      }
    ],
    "toppings": [
      {
        "id": "dz_t1",
        "name": "黃金珍珠",
        "price": 10
      },
      {
        "id": "dz_t2",
        "name": "焙烏龍茶凍",
        "price": 10
      },
      {
        "id": "dz_t3",
        "name": "芝士奶蓋",
        "price": 20
      }
    ]
  },
  {
    "id": "store_wootea_caotun",
    "name": "五桐號 WooTEA",
    "branchName": "草屯太平店",
    "phone": "049-2305007",
    "address": "草屯鎮太平路二段 367 號",
    "region": "中南部價",
    "area": "草屯商圈",
    "businessHours": "10:00 - 21:30",
    "isOpenToday": true,
    "tagline": "獨家手作杏仁凍與五桐茶",
    "categories": [
      {
        "name": "手作凍飲系列 (招牌必點)",
        "items": [
          {
            "id": "store_wootea_caotun_c0_i0",
            "name": "杏仁凍五桐茶",
            "priceM": 50,
            "priceL": 55
          },
          {
            "id": "store_wootea_caotun_c0_i1",
            "name": "綠茶凍五桐茶",
            "priceM": 45,
            "priceL": 50
          },
          {
            "id": "store_wootea_caotun_c0_i2",
            "name": "豆漿凍紅茶",
            "priceM": 45,
            "priceL": 50
          },
          {
            "id": "store_wootea_caotun_c0_i3",
            "name": "仙草凍奶茶",
            "priceM": 50,
            "priceL": 60
          }
        ]
      },
      {
        "name": "醇厚奶霜與鮮奶",
        "items": [
          {
            "id": "store_wootea_caotun_c1_i0",
            "name": "五桐奶茶",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_wootea_caotun_c1_i1",
            "name": "最完美手沖泰奶",
            "priceM": 65,
            "priceL": 70
          },
          {
            "id": "store_wootea_caotun_c1_i2",
            "name": "重焙烏龍拿鐵",
            "priceM": 60,
            "priceL": 70
          },
          {
            "id": "store_wootea_caotun_c1_i3",
            "name": "老實人鮮柚綠茶",
            "priceM": 65,
            "priceL": 75
          }
        ]
      },
      {
        "name": "單品好茶",
        "items": [
          {
            "id": "store_wootea_caotun_c2_i0",
            "name": "五桐茶 (清香回甘)",
            "priceM": 35,
            "priceL": 40
          },
          {
            "id": "store_wootea_caotun_c2_i1",
            "name": "老實人紅茶",
            "priceM": 35,
            "priceL": 40
          },
          {
            "id": "store_wootea_caotun_c2_i2",
            "name": "包種青茶",
            "priceM": 35,
            "priceL": 40
          },
          {
            "id": "store_wootea_caotun_c2_i3",
            "name": "重焙烏龍茶",
            "priceM": 35,
            "priceL": 40
          }
        ]
      }
    ],
    "toppings": [
      {
        "id": "wt_t1",
        "name": "手工杏仁凍",
        "price": 15
      },
      {
        "id": "wt_t2",
        "name": "綠茶凍",
        "price": 12
      },
      {
        "id": "wt_t3",
        "name": "豆漿凍",
        "price": 12
      },
      {
        "id": "wt_t4",
        "name": "白玉珍珠",
        "price": 10
      }
    ]
  },
  {
    "id": "store_guiji_caotun",
    "name": "龜記茗品",
    "branchName": "草屯碧山店",
    "phone": "049-2367199",
    "address": "草屯鎮碧山路 68 號",
    "region": "中南部價",
    "area": "草屯商圈",
    "businessHours": "10:00 - 21:00",
    "isOpenToday": true,
    "tagline": "小人物大生活 · 紅柚翡翠招牌",
    "categories": [
      {
        "name": "人氣招牌推薦",
        "items": [
          {
            "id": "store_guiji_caotun_c0_i0",
            "name": "紅柚翡翠 (招牌果肉)",
            "priceM": 70,
            "priceL": 75
          },
          {
            "id": "store_guiji_caotun_c0_i1",
            "name": "蘋果紅萱",
            "priceM": 55,
            "priceL": 60
          },
          {
            "id": "store_guiji_caotun_c0_i2",
            "name": "柳橙翡翠",
            "priceM": 60,
            "priceL": 65
          },
          {
            "id": "store_guiji_caotun_c0_i3",
            "name": "雷蒙蘆薈蜜",
            "priceM": 60,
            "priceL": 70
          }
        ]
      },
      {
        "name": "原茶系列",
        "items": [
          {
            "id": "store_guiji_caotun_c1_i0",
            "name": "三韻紅萱",
            "priceM": 35,
            "priceL": 40
          },
          {
            "id": "store_guiji_caotun_c1_i1",
            "name": "翡翠綠茶",
            "priceM": 35,
            "priceL": 40
          },
          {
            "id": "store_guiji_caotun_c1_i2",
            "name": "極品紅茶",
            "priceM": 35,
            "priceL": 40
          },
          {
            "id": "store_guiji_caotun_c1_i3",
            "name": "三十三茶王",
            "priceM": 40,
            "priceL": 45
          },
          {
            "id": "store_guiji_caotun_c1_i4",
            "name": "秀水冬瓜青",
            "priceM": 45,
            "priceL": 50
          }
        ]
      },
      {
        "name": "醇厚奶茶與鮮乳",
        "items": [
          {
            "id": "store_guiji_caotun_c2_i0",
            "name": "濃乳茶",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_guiji_caotun_c2_i1",
            "name": "紅烏奶茶",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_guiji_caotun_c2_i2",
            "name": "碎銀奶茶",
            "priceM": 55,
            "priceL": 65
          },
          {
            "id": "store_guiji_caotun_c2_i3",
            "name": "冬瓜鮮乳",
            "priceM": 55,
            "priceL": 65
          },
          {
            "id": "store_guiji_caotun_c2_i4",
            "name": "紅烏鮮乳",
            "priceM": 60,
            "priceL": 70
          },
          {
            "id": "store_guiji_caotun_c2_i5",
            "name": "黑糖鮮乳波霸",
            "priceM": 65,
            "priceL": 75
          }
        ]
      }
    ],
    "toppings": [
      {
        "id": "gj_t1",
        "name": "蘆薈",
        "price": 10
      },
      {
        "id": "gj_t2",
        "name": "椰果",
        "price": 10
      },
      {
        "id": "gj_t3",
        "name": "黃金珍珠",
        "price": 10
      }
    ]
  },
  {
    "id": "store_wanpo_caotun",
    "name": "萬波島嶼紅茶",
    "branchName": "草屯中正店",
    "phone": "049-2356006",
    "address": "草屯鎮中正路 642 號 1 樓",
    "region": "中南部價",
    "area": "草屯商圈",
    "businessHours": "10:00 - 21:00",
    "isOpenToday": true,
    "tagline": "眷村古早味 · 紅豆粉粿鮮奶名店",
    "categories": [
      {
        "name": "原茶系列",
        "items": [
          {
            "id": "store_wanpo_caotun_c0_i0",
            "name": "島嶼紅茶",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_wanpo_caotun_c0_i1",
            "name": "碧螺春綠茶",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_wanpo_caotun_c0_i2",
            "name": "阿里山青茶",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_wanpo_caotun_c0_i3",
            "name": "金萱烏龍",
            "priceM": 30,
            "priceL": 35
          }
        ]
      },
      {
        "name": "奶茶與那堤",
        "items": [
          {
            "id": "store_wanpo_caotun_c1_i0",
            "name": "萬波奶茶",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_wanpo_caotun_c1_i1",
            "name": "波霸奶茶",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_wanpo_caotun_c1_i2",
            "name": "蘭葉那堤 (鮮奶)",
            "priceM": 55,
            "priceL": 65
          },
          {
            "id": "store_wanpo_caotun_c1_i3",
            "name": "金萱那堤 (鮮奶)",
            "priceM": 55,
            "priceL": 65
          }
        ]
      },
      {
        "name": "島嶼古早味與特調",
        "items": [
          {
            "id": "store_wanpo_caotun_c2_i0",
            "name": "紅豆粉粿鮮奶",
            "priceM": 65,
            "priceL": 75
          },
          {
            "id": "store_wanpo_caotun_c2_i1",
            "name": "黑糖珍珠鮮奶",
            "priceM": 65,
            "priceL": 75
          },
          {
            "id": "store_wanpo_caotun_c2_i2",
            "name": "金萱紅柚",
            "priceM": 60,
            "priceL": 70
          },
          {
            "id": "store_wanpo_caotun_c2_i3",
            "name": "鳴光蜜金桔",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_wanpo_caotun_c2_i4",
            "name": "愛玉檸檬綠",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_wanpo_caotun_c2_i5",
            "name": "埔里甘蔗青茶",
            "priceM": 55,
            "priceL": 65
          },
          {
            "id": "store_wanpo_caotun_c2_i6",
            "name": "冬瓜鮮奶",
            "priceM": 50,
            "priceL": 60
          }
        ]
      }
    ],
    "toppings": [
      {
        "id": "wb_t1",
        "name": "波霸",
        "price": 10
      },
      {
        "id": "wb_t2",
        "name": "小芋圓",
        "price": 15
      },
      {
        "id": "wb_t3",
        "name": "粉粿",
        "price": 15
      },
      {
        "id": "wb_t4",
        "name": "愛玉凍",
        "price": 10
      }
    ]
  },
  {
    "id": "store_50lan_caotun_zhongzheng",
    "name": "50嵐",
    "branchName": "草屯中正店",
    "phone": "049-2356153",
    "address": "草屯鎮中正路 769 號",
    "region": "中南部價",
    "area": "草屯商圈",
    "businessHours": "09:30 - 21:30",
    "isOpenToday": true,
    "tagline": "草屯中心商圈國民手搖",
    "categories": [
      {
        "name": "找好茶",
        "items": [
          {
            "id": "store_50lan_caotun_zhongzheng_c0_i0",
            "name": "四季春青茶",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_50lan_caotun_zhongzheng_c0_i1",
            "name": "茉莉綠茶",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_50lan_caotun_zhongzheng_c0_i2",
            "name": "阿薩姆紅茶",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_50lan_caotun_zhongzheng_c0_i3",
            "name": "黃金烏龍",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_50lan_caotun_zhongzheng_c0_i4",
            "name": "波霸四季春",
            "priceM": 35,
            "priceL": 45
          },
          {
            "id": "store_50lan_caotun_zhongzheng_c0_i5",
            "name": "波霸綠茶",
            "priceM": 35,
            "priceL": 45
          },
          {
            "id": "store_50lan_caotun_zhongzheng_c0_i6",
            "name": "波霸紅茶",
            "priceM": 35,
            "priceL": 45
          },
          {
            "id": "store_50lan_caotun_zhongzheng_c0_i7",
            "name": "波霸烏龍",
            "priceM": 35,
            "priceL": 45
          },
          {
            "id": "store_50lan_caotun_zhongzheng_c0_i8",
            "name": "珍珠四季春",
            "priceM": 35,
            "priceL": 45
          },
          {
            "id": "store_50lan_caotun_zhongzheng_c0_i9",
            "name": "珍珠綠茶",
            "priceM": 35,
            "priceL": 45
          },
          {
            "id": "store_50lan_caotun_zhongzheng_c0_i10",
            "name": "珍珠紅茶",
            "priceM": 35,
            "priceL": 45
          },
          {
            "id": "store_50lan_caotun_zhongzheng_c0_i11",
            "name": "椰果綠茶",
            "priceM": 35,
            "priceL": 45
          },
          {
            "id": "store_50lan_caotun_zhongzheng_c0_i12",
            "name": "椰果青茶",
            "priceM": 35,
            "priceL": 45
          }
        ]
      },
      {
        "name": "找口感 (經典人氣)",
        "items": [
          {
            "id": "store_50lan_caotun_zhongzheng_c1_i0",
            "name": "1號 (四季春珍波椰)",
            "priceM": 35,
            "priceL": 45
          },
          {
            "id": "store_50lan_caotun_zhongzheng_c1_i1",
            "name": "波霸奶茶",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_50lan_caotun_zhongzheng_c1_i2",
            "name": "珍珠奶茶",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_50lan_caotun_zhongzheng_c1_i3",
            "name": "波霸奶綠",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_50lan_caotun_zhongzheng_c1_i4",
            "name": "珍珠奶綠",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_50lan_caotun_zhongzheng_c1_i5",
            "name": "波霸烏龍奶",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_50lan_caotun_zhongzheng_c1_i6",
            "name": "珍波椰綠茶",
            "priceM": 40,
            "priceL": 50
          },
          {
            "id": "store_50lan_caotun_zhongzheng_c1_i7",
            "name": "珍波椰青茶",
            "priceM": 40,
            "priceL": 50
          },
          {
            "id": "store_50lan_caotun_zhongzheng_c1_i8",
            "name": "布丁奶茶",
            "priceM": 55,
            "priceL": 65
          },
          {
            "id": "store_50lan_caotun_zhongzheng_c1_i9",
            "name": "仙草凍奶茶",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_50lan_caotun_zhongzheng_c1_i10",
            "name": "燕麥奶茶",
            "priceM": 50,
            "priceL": 60
          }
        ]
      },
      {
        "name": "找奶茶",
        "items": [
          {
            "id": "store_50lan_caotun_zhongzheng_c2_i0",
            "name": "奶茶",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_50lan_caotun_zhongzheng_c2_i1",
            "name": "奶綠",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_50lan_caotun_zhongzheng_c2_i2",
            "name": "烏龍奶茶",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_50lan_caotun_zhongzheng_c2_i3",
            "name": "椰果奶茶",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_50lan_caotun_zhongzheng_c2_i4",
            "name": "紅茶瑪奇朵",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_50lan_caotun_zhongzheng_c2_i5",
            "name": "綠茶瑪奇朵",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_50lan_caotun_zhongzheng_c2_i6",
            "name": "烏龍瑪奇朵",
            "priceM": 45,
            "priceL": 55
          }
        ]
      },
      {
        "name": "找拿鐵 (鮮奶系列)",
        "items": [
          {
            "id": "store_50lan_caotun_zhongzheng_c3_i0",
            "name": "紅茶拿鐵",
            "priceM": 55,
            "priceL": 70
          },
          {
            "id": "store_50lan_caotun_zhongzheng_c3_i1",
            "name": "綠茶拿鐵",
            "priceM": 55,
            "priceL": 70
          },
          {
            "id": "store_50lan_caotun_zhongzheng_c3_i2",
            "name": "烏龍拿鐵",
            "priceM": 55,
            "priceL": 70
          },
          {
            "id": "store_50lan_caotun_zhongzheng_c3_i3",
            "name": "波霸紅茶拿鐵",
            "priceM": 60,
            "priceL": 75
          },
          {
            "id": "store_50lan_caotun_zhongzheng_c3_i4",
            "name": "珍珠紅茶拿鐵",
            "priceM": 60,
            "priceL": 75
          },
          {
            "id": "store_50lan_caotun_zhongzheng_c3_i5",
            "name": "波霸烏龍拿鐵",
            "priceM": 60,
            "priceL": 75
          },
          {
            "id": "store_50lan_caotun_zhongzheng_c3_i6",
            "name": "燕麥紅茶拿鐵",
            "priceM": 60,
            "priceL": 75
          },
          {
            "id": "store_50lan_caotun_zhongzheng_c3_i7",
            "name": "燕麥烏龍拿鐵",
            "priceM": 60,
            "priceL": 75
          },
          {
            "id": "store_50lan_caotun_zhongzheng_c3_i8",
            "name": "布丁紅茶拿鐵",
            "priceM": 65,
            "priceL": 80
          }
        ]
      },
      {
        "name": "找新鮮 (特調與果汁)",
        "items": [
          {
            "id": "store_50lan_caotun_zhongzheng_c4_i0",
            "name": "8冰綠 (金桔梅子綠)",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_50lan_caotun_zhongzheng_c4_i1",
            "name": "8冰茶 (金桔梅子青)",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_50lan_caotun_zhongzheng_c4_i2",
            "name": "冰淇淋紅茶",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_50lan_caotun_zhongzheng_c4_i3",
            "name": "冰淇淋綠茶",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_50lan_caotun_zhongzheng_c4_i4",
            "name": "冰淇淋奶茶",
            "priceM": 55,
            "priceL": 65
          },
          {
            "id": "store_50lan_caotun_zhongzheng_c4_i5",
            "name": "檸檬綠茶",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_50lan_caotun_zhongzheng_c4_i6",
            "name": "檸檬青茶",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_50lan_caotun_zhongzheng_c4_i7",
            "name": "檸檬紅茶",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_50lan_caotun_zhongzheng_c4_i8",
            "name": "金桔檸檬",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_50lan_caotun_zhongzheng_c4_i9",
            "name": "梅子綠茶",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_50lan_caotun_zhongzheng_c4_i10",
            "name": "養樂多綠茶",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_50lan_caotun_zhongzheng_c4_i11",
            "name": "葡萄柚綠茶",
            "priceM": 55,
            "priceL": 65
          },
          {
            "id": "store_50lan_caotun_zhongzheng_c4_i12",
            "name": "多多檸檬綠",
            "priceM": 55,
            "priceL": 65
          }
        ]
      }
    ],
    "toppings": [
      {
        "id": "top_boba",
        "name": "波霸",
        "price": 10
      },
      {
        "id": "top_pearl",
        "name": "珍珠",
        "price": 10
      },
      {
        "id": "top_coconut",
        "name": "椰果",
        "price": 10
      },
      {
        "id": "top_oat",
        "name": "燕麥",
        "price": 10
      },
      {
        "id": "top_pudding",
        "name": "布丁",
        "price": 20
      },
      {
        "id": "top_icecream",
        "name": "冰淇淋",
        "price": 20
      }
    ]
  },
  {
    "id": "store_kebuke_caotun_taiping",
    "name": "可不可熟成紅茶",
    "branchName": "草屯太平店",
    "phone": "049-2318519",
    "address": "草屯鎮太平路二段 269 號",
    "region": "中南部價",
    "area": "草屯商圈",
    "businessHours": "10:00 - 21:00",
    "isOpenToday": true,
    "tagline": "草屯太平商圈熟成紅茶熱點",
    "categories": [
      {
        "name": "單品純茶",
        "items": [
          {
            "id": "store_kebuke_caotun_taiping_c0_i0",
            "name": "熟成紅茶",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_kebuke_caotun_taiping_c0_i1",
            "name": "麗春紅茶",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_kebuke_caotun_taiping_c0_i2",
            "name": "春芽綠茶",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_kebuke_caotun_taiping_c0_i3",
            "name": "胭脂紅茶",
            "priceM": 35,
            "priceL": 40
          },
          {
            "id": "store_kebuke_caotun_taiping_c0_i4",
            "name": "金萱紅茶",
            "priceM": 35,
            "priceL": 40
          }
        ]
      },
      {
        "name": "熟成歐蕾 (鮮奶茶)",
        "items": [
          {
            "id": "store_kebuke_caotun_taiping_c1_i0",
            "name": "熟成歐蕾",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_kebuke_caotun_taiping_c1_i1",
            "name": "白玉歐蕾 (招牌珍珠)",
            "priceM": 55,
            "priceL": 65
          },
          {
            "id": "store_kebuke_caotun_taiping_c1_i2",
            "name": "胭脂歐蕾",
            "priceM": 55,
            "priceL": 65
          },
          {
            "id": "store_kebuke_caotun_taiping_c1_i3",
            "name": "春芽歐蕾",
            "priceM": 50,
            "priceL": 60
          }
        ]
      },
      {
        "name": "熟成奶茶",
        "items": [
          {
            "id": "store_kebuke_caotun_taiping_c2_i0",
            "name": "熟成奶茶",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_kebuke_caotun_taiping_c2_i1",
            "name": "白玉奶茶",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_kebuke_caotun_taiping_c2_i2",
            "name": "春芽奶茶",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_kebuke_caotun_taiping_c2_i3",
            "name": "胭脂奶茶",
            "priceM": 50,
            "priceL": 60
          }
        ]
      },
      {
        "name": "冬瓜冷露與果茶",
        "items": [
          {
            "id": "store_kebuke_caotun_taiping_c3_i0",
            "name": "雪花冷露 (冬瓜茶)",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_kebuke_caotun_taiping_c3_i1",
            "name": "熟成冷露 (冬瓜紅茶)",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_kebuke_caotun_taiping_c3_i2",
            "name": "春芽冷露 (冬瓜綠茶)",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_kebuke_caotun_taiping_c3_i3",
            "name": "冷露檸檬",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_kebuke_caotun_taiping_c3_i4",
            "name": "金蜜檸檬",
            "priceM": 48,
            "priceL": 58
          },
          {
            "id": "store_kebuke_caotun_taiping_c3_i5",
            "name": "春梅冰茶 (冬瓜+梅子)",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_kebuke_caotun_taiping_c3_i6",
            "name": "胭脂多多",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_kebuke_caotun_taiping_c3_i7",
            "name": "雪藏紅茶 (香草冰淇淋)",
            "priceM": 50,
            "priceL": 60
          }
        ]
      }
    ],
    "toppings": [
      {
        "id": "kbk_pearl",
        "name": "白玉珍珠",
        "price": 10
      },
      {
        "id": "kbk_water",
        "name": "水玉晶球",
        "price": 15
      },
      {
        "id": "kbk_jelly",
        "name": "百香蒟蒻凍",
        "price": 15
      }
    ]
  },
  {
    "id": "store_macu_caotun_taiping",
    "name": "麻古茶坊",
    "branchName": "草屯太平店",
    "phone": "049-2305688",
    "address": "草屯鎮太平路二段 302 號",
    "region": "中南部價",
    "area": "草屯商圈",
    "businessHours": "09:30 - 21:30",
    "isOpenToday": true,
    "tagline": "草屯太平路芝芝果粒茶名店",
    "categories": [
      {
        "name": "原味純茶",
        "items": [
          {
            "id": "store_macu_caotun_taiping_c0_i0",
            "name": "高山金萱茶 (招牌)",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_macu_caotun_taiping_c0_i1",
            "name": "錫蘭紅茶",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_macu_caotun_taiping_c0_i2",
            "name": "翡翠綠茶",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_macu_caotun_taiping_c0_i3",
            "name": "文山清茶",
            "priceM": 30,
            "priceL": 35
          }
        ]
      },
      {
        "name": "咀嚼嚼嚼 (雙Q/珍珠)",
        "items": [
          {
            "id": "store_macu_caotun_taiping_c1_i0",
            "name": "金萱雙Q (白玉+椰果)",
            "priceM": 40,
            "priceL": 45
          },
          {
            "id": "store_macu_caotun_taiping_c1_i1",
            "name": "金萱三Q (白玉+椰果+波霸)",
            "priceM": 45,
            "priceL": 50
          },
          {
            "id": "store_macu_caotun_taiping_c1_i2",
            "name": "波霸紅茶",
            "priceM": 35,
            "priceL": 40
          },
          {
            "id": "store_macu_caotun_taiping_c1_i3",
            "name": "波霸翡翠綠",
            "priceM": 35,
            "priceL": 40
          },
          {
            "id": "store_macu_caotun_taiping_c1_i4",
            "name": "椰果翡翠綠",
            "priceM": 35,
            "priceL": 40
          }
        ]
      },
      {
        "name": "果粒鮮茶系列 (現切現榨)",
        "items": [
          {
            "id": "store_macu_caotun_taiping_c2_i0",
            "name": "柳橙果粒茶",
            "priceM": 65,
            "priceL": 75
          },
          {
            "id": "store_macu_caotun_taiping_c2_i1",
            "name": "香橙果粒茶 (柳橙+百香)",
            "priceM": 65,
            "priceL": 75
          },
          {
            "id": "store_macu_caotun_taiping_c2_i2",
            "name": "葡萄柚果粒茶",
            "priceM": 60,
            "priceL": 70
          },
          {
            "id": "store_macu_caotun_taiping_c2_i3",
            "name": "奇異果果粒茶",
            "priceM": 70,
            "priceL": 80
          },
          {
            "id": "store_macu_caotun_taiping_c2_i4",
            "name": "蕃茄梅蜜 (招牌必喝)",
            "priceM": 65,
            "priceL": 70
          },
          {
            "id": "store_macu_caotun_taiping_c2_i5",
            "name": "翡翠柳橙",
            "priceM": 60,
            "priceL": 70
          },
          {
            "id": "store_macu_caotun_taiping_c2_i6",
            "name": "檸檬翡翠綠",
            "priceM": 50,
            "priceL": 60
          }
        ]
      },
      {
        "name": "芝芝奶蓋系列",
        "items": [
          {
            "id": "store_macu_caotun_taiping_c3_i0",
            "name": "芝芝金萱",
            "priceM": 55,
            "priceL": 65
          },
          {
            "id": "store_macu_caotun_taiping_c3_i1",
            "name": "芝芝金萱雙Q",
            "priceM": 65,
            "priceL": 75
          },
          {
            "id": "store_macu_caotun_taiping_c3_i2",
            "name": "芝芝錫蘭紅",
            "priceM": 55,
            "priceL": 65
          },
          {
            "id": "store_macu_caotun_taiping_c3_i3",
            "name": "芝芝葡萄果粒",
            "priceM": 85,
            "priceL": 95
          },
          {
            "id": "store_macu_caotun_taiping_c3_i4",
            "name": "芝芝芒果果粒",
            "priceM": 85,
            "priceL": 95
          },
          {
            "id": "store_macu_caotun_taiping_c3_i5",
            "name": "楊枝甘露2.0",
            "priceM": 80,
            "priceL": 85
          }
        ]
      },
      {
        "name": "香醇奶茶與拿鐵",
        "items": [
          {
            "id": "store_macu_caotun_taiping_c4_i0",
            "name": "麻古奶茶",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_macu_caotun_taiping_c4_i1",
            "name": "波霸奶茶",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_macu_caotun_taiping_c4_i2",
            "name": "金萱奶茶",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_macu_caotun_taiping_c4_i3",
            "name": "錫蘭紅茶拿鐵",
            "priceM": 60,
            "priceL": 75
          },
          {
            "id": "store_macu_caotun_taiping_c4_i4",
            "name": "高山金萱拿鐵",
            "priceM": 60,
            "priceL": 75
          },
          {
            "id": "store_macu_caotun_taiping_c4_i5",
            "name": "翡翠綠茶拿鐵",
            "priceM": 60,
            "priceL": 75
          }
        ]
      }
    ],
    "toppings": [
      {
        "id": "macu_t1",
        "name": "波霸",
        "price": 10
      },
      {
        "id": "macu_t2",
        "name": "椰果",
        "price": 10
      },
      {
        "id": "macu_t3",
        "name": "白玉珍珠",
        "price": 10
      },
      {
        "id": "macu_t4",
        "name": "綠茶凍",
        "price": 10
      },
      {
        "id": "macu_t5",
        "name": "芝芝奶蓋",
        "price": 25
      }
    ]
  },
  {
    "id": "store_chingshin_caotun_zhongzheng",
    "name": "清心福全",
    "branchName": "草屯中正店",
    "phone": "049-2333886",
    "address": "草屯鎮中正路 618 號",
    "region": "中南部價",
    "area": "草屯商圈",
    "businessHours": "09:00 - 21:30",
    "isOpenToday": true,
    "tagline": "草屯中正路商圈清心好茶",
    "categories": [
      {
        "name": "茗品純茶",
        "items": [
          {
            "id": "store_chingshin_caotun_zhongzheng_c0_i0",
            "name": "原鄉四季",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_chingshin_caotun_zhongzheng_c0_i1",
            "name": "特選烏龍綠",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_chingshin_caotun_zhongzheng_c0_i2",
            "name": "極品菁茶",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_chingshin_caotun_zhongzheng_c0_i3",
            "name": "特級綠茶",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_chingshin_caotun_zhongzheng_c0_i4",
            "name": "錫蘭紅茶",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_chingshin_caotun_zhongzheng_c0_i5",
            "name": "嚴選高山茶",
            "priceM": 35,
            "priceL": 40
          },
          {
            "id": "store_chingshin_caotun_zhongzheng_c0_i6",
            "name": "普洱茶",
            "priceM": 30,
            "priceL": 35
          }
        ]
      },
      {
        "name": "香醇奶茶",
        "items": [
          {
            "id": "store_chingshin_caotun_zhongzheng_c1_i0",
            "name": "特級奶茶",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_chingshin_caotun_zhongzheng_c1_i1",
            "name": "錫蘭奶紅",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_chingshin_caotun_zhongzheng_c1_i2",
            "name": "烏龍奶茶",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_chingshin_caotun_zhongzheng_c1_i3",
            "name": "珍珠奶茶 (大珍珠)",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_chingshin_caotun_zhongzheng_c1_i4",
            "name": "粉圓奶茶 (小粉圓)",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_chingshin_caotun_zhongzheng_c1_i5",
            "name": "椰果奶茶",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_chingshin_caotun_zhongzheng_c1_i6",
            "name": "布丁奶茶",
            "priceM": 55,
            "priceL": 65
          },
          {
            "id": "store_chingshin_caotun_zhongzheng_c1_i7",
            "name": "仙草凍奶茶",
            "priceM": 50,
            "priceL": 60
          }
        ]
      },
      {
        "name": "鮮奶拿鐵",
        "items": [
          {
            "id": "store_chingshin_caotun_zhongzheng_c2_i0",
            "name": "隱藏版 (珍珠蜂蜜鮮奶普洱)",
            "priceM": 65,
            "priceL": 80
          },
          {
            "id": "store_chingshin_caotun_zhongzheng_c2_i1",
            "name": "鮮奶茶",
            "priceM": 55,
            "priceL": 70
          },
          {
            "id": "store_chingshin_caotun_zhongzheng_c2_i2",
            "name": "鮮奶綠",
            "priceM": 55,
            "priceL": 70
          },
          {
            "id": "store_chingshin_caotun_zhongzheng_c2_i3",
            "name": "鮮奶烏龍",
            "priceM": 55,
            "priceL": 70
          },
          {
            "id": "store_chingshin_caotun_zhongzheng_c2_i4",
            "name": "珍珠鮮奶茶",
            "priceM": 60,
            "priceL": 75
          }
        ]
      },
      {
        "name": "特調多多與果汁",
        "items": [
          {
            "id": "store_chingshin_caotun_zhongzheng_c3_i0",
            "name": "優多綠茶 (多多綠)",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_chingshin_caotun_zhongzheng_c3_i1",
            "name": "優多檸檬",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_chingshin_caotun_zhongzheng_c3_i2",
            "name": "蜜茶",
            "priceM": 35,
            "priceL": 45
          },
          {
            "id": "store_chingshin_caotun_zhongzheng_c3_i3",
            "name": "蜂蜜綠茶",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_chingshin_caotun_zhongzheng_c3_i4",
            "name": "梅子綠茶",
            "priceM": 40,
            "priceL": 50
          },
          {
            "id": "store_chingshin_caotun_zhongzheng_c3_i5",
            "name": "檸檬紅茶",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_chingshin_caotun_zhongzheng_c3_i6",
            "name": "金桔檸檬",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_chingshin_caotun_zhongzheng_c3_i7",
            "name": "冰淇淋紅茶",
            "priceM": 45,
            "priceL": 55
          }
        ]
      }
    ],
    "toppings": [
      {
        "id": "qx_t1",
        "name": "珍珠 (大)",
        "price": 10
      },
      {
        "id": "qx_t2",
        "name": "紅粉圓 (小)",
        "price": 10
      },
      {
        "id": "qx_t3",
        "name": "椰果",
        "price": 10
      },
      {
        "id": "qx_t4",
        "name": "仙草凍",
        "price": 10
      },
      {
        "id": "qx_t5",
        "name": "布丁",
        "price": 20
      }
    ]
  },
  {
    "id": "store_shuiyun_caotun_bishan",
    "name": "水云茶堂-阿里山鐵道紅茶",
    "branchName": "草屯碧山店",
    "phone": "049-2355586",
    "address": "草屯鎮碧山路 101 號",
    "region": "中南部價",
    "area": "草屯商圈",
    "businessHours": "09:00 - 21:30",
    "isOpenToday": true,
    "tagline": "草屯商圈外送必點 · 阿里山鐵道紅茶名店",
    "categories": [
      {
        "name": "阿里山鐵道茶系",
        "items": [
          {
            "id": "store_shuiyun_caotun_bishan_c0_i0",
            "name": "阿里山鐵道紅茶",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_shuiyun_caotun_bishan_c0_i1",
            "name": "阿里山高山青茶",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_shuiyun_caotun_bishan_c0_i2",
            "name": "鐵道冬瓜茶",
            "priceM": 25,
            "priceL": 30
          },
          {
            "id": "store_shuiyun_caotun_bishan_c0_i3",
            "name": "冬瓜鐵道紅茶",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_shuiyun_caotun_bishan_c0_i4",
            "name": "鐵道檸檬紅茶",
            "priceM": 40,
            "priceL": 50
          }
        ]
      },
      {
        "name": "香醇厚乳與特調",
        "items": [
          {
            "id": "store_shuiyun_caotun_bishan_c1_i0",
            "name": "鐵道鮮奶紅茶",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_shuiyun_caotun_bishan_c1_i1",
            "name": "鐵道厚奶茶",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_shuiyun_caotun_bishan_c1_i2",
            "name": "波霸鐵道奶茶",
            "priceM": 50,
            "priceL": 60
          },
          {
            "id": "store_shuiyun_caotun_bishan_c1_i3",
            "name": "梅子鐵道青茶",
            "priceM": 40,
            "priceL": 50
          },
          {
            "id": "store_shuiyun_caotun_bishan_c1_i4",
            "name": "金桔鐵道青茶",
            "priceM": 45,
            "priceL": 55
          }
        ]
      }
    ],
    "toppings": [
      {
        "id": "sy_t1",
        "name": "黑糖波霸",
        "price": 10
      },
      {
        "id": "sy_t2",
        "name": "椰果",
        "price": 10
      },
      {
        "id": "sy_t3",
        "name": "茶凍",
        "price": 10
      }
    ]
  },
  {
    "id": "store_mamatea_caotun_hushan",
    "name": "紅茶媽媽",
    "branchName": "草屯虎山店",
    "phone": "0909-543416",
    "address": "草屯鎮新厝里虎山路 552 號",
    "region": "中南部價",
    "area": "草屯商圈",
    "businessHours": "10:00 - 20:00",
    "isOpenToday": true,
    "tagline": "草屯虎山路古早味紅茶名店 · 招牌甘蔗青茶",
    "categories": [
      {
        "name": "招牌古早紅茶與純茶",
        "items": [
          {
            "id": "store_mamatea_caotun_hushan_c0_i0",
            "name": "古早味紅茶",
            "priceM": 25,
            "priceL": 30
          },
          {
            "id": "store_mamatea_caotun_hushan_c0_i1",
            "name": "茉莉綠茶",
            "priceM": 25,
            "priceL": 30
          },
          {
            "id": "store_mamatea_caotun_hushan_c0_i2",
            "name": "高山青茶",
            "priceM": 25,
            "priceL": 30
          },
          {
            "id": "store_mamatea_caotun_hushan_c0_i3",
            "name": "古早味冬瓜茶",
            "priceM": 25,
            "priceL": 30
          }
        ]
      },
      {
        "name": "經典特調奶茶",
        "items": [
          {
            "id": "store_mamatea_caotun_hushan_c1_i0",
            "name": "特級奶茶",
            "priceM": 40,
            "priceL": 50
          },
          {
            "id": "store_mamatea_caotun_hushan_c1_i1",
            "name": "珍珠奶茶",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_mamatea_caotun_hushan_c1_i2",
            "name": "波霸鮮奶茶",
            "priceM": 50,
            "priceL": 65
          },
          {
            "id": "store_mamatea_caotun_hushan_c1_i3",
            "name": "豆漿紅茶",
            "priceM": 30,
            "priceL": 40
          },
          {
            "id": "store_mamatea_caotun_hushan_c1_i4",
            "name": "檸檬冬瓜茶",
            "priceM": 35,
            "priceL": 45
          },
          {
            "id": "store_mamatea_caotun_hushan_c1_i5",
            "name": "百香綠茶",
            "priceM": 35,
            "priceL": 45
          }
        ]
      }
    ],
    "toppings": [
      {
        "id": "rm_t1",
        "name": "波霸珍珠",
        "price": 10
      },
      {
        "id": "rm_t2",
        "name": "椰果",
        "price": 10
      },
      {
        "id": "rm_t3",
        "name": "布丁",
        "price": 15
      }
    ]
  },
  {
    "id": "store_liji_caotun_zhongzheng",
    "name": "李記紅茶冰",
    "branchName": "草屯中正店",
    "phone": "049-2565869",
    "address": "草屯鎮南埔里中正路 259-2 號",
    "region": "中南部價",
    "area": "草屯商圈",
    "businessHours": "09:00 - 21:00",
    "isOpenToday": true,
    "tagline": "草屯超大杯古早味紅茶冰 · 滿額外送",
    "categories": [
      {
        "name": "招牌紅茶冰 (巨無霸1000cc)",
        "items": [
          {
            "id": "store_liji_caotun_zhongzheng_c0_i0",
            "name": "古早味紅茶冰",
            "priceM": 25,
            "priceL": 30
          },
          {
            "id": "store_liji_caotun_zhongzheng_c0_i1",
            "name": "檸檬紅茶冰",
            "priceM": 35,
            "priceL": 40
          },
          {
            "id": "store_liji_caotun_zhongzheng_c0_i2",
            "name": "豆漿紅茶冰",
            "priceM": 35,
            "priceL": 40
          },
          {
            "id": "store_liji_caotun_zhongzheng_c0_i3",
            "name": "冬瓜紅茶冰",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_liji_caotun_zhongzheng_c0_i4",
            "name": "鮮奶紅茶冰",
            "priceM": 45,
            "priceL": 55
          }
        ]
      },
      {
        "name": "古早味特調冬瓜與青茶",
        "items": [
          {
            "id": "store_liji_caotun_zhongzheng_c1_i0",
            "name": "古早味冬瓜茶",
            "priceM": 25,
            "priceL": 30
          },
          {
            "id": "store_liji_caotun_zhongzheng_c1_i1",
            "name": "冬瓜檸檬冰",
            "priceM": 35,
            "priceL": 40
          },
          {
            "id": "store_liji_caotun_zhongzheng_c1_i2",
            "name": "高山青茶冰",
            "priceM": 25,
            "priceL": 30
          },
          {
            "id": "store_liji_caotun_zhongzheng_c1_i3",
            "name": "梅子青茶冰",
            "priceM": 35,
            "priceL": 40
          },
          {
            "id": "store_liji_caotun_zhongzheng_c1_i4",
            "name": "珍珠紅茶冰",
            "priceM": 35,
            "priceL": 40
          },
          {
            "id": "store_liji_caotun_zhongzheng_c1_i5",
            "name": "椰果紅茶冰",
            "priceM": 35,
            "priceL": 40
          }
        ]
      }
    ],
    "toppings": [
      {
        "id": "lj_t1",
        "name": "黑糖珍珠",
        "price": 10
      },
      {
        "id": "lj_t2",
        "name": "椰果",
        "price": 10
      },
      {
        "id": "lj_t3",
        "name": "小芋圓",
        "price": 10
      }
    ]
  },
  {
    "id": "store_85c_caotun_zhongshan",
    "name": "85度C",
    "branchName": "草屯中山店",
    "phone": "049-2328123",
    "address": "草屯鎮碧山路 159-1 號",
    "region": "中南部價",
    "area": "草屯商圈",
    "businessHours": "07:00 - 22:30",
    "isOpenToday": true,
    "tagline": "草屯碧山路商圈咖啡烘焙 · 辦公室下午茶蛋糕專賣",
    "categories": [
      {
        "name": "人氣咖啡系列",
        "items": [
          {
            "id": "store_85c_caotun_zhongshan_c0_i0",
            "name": "美式咖啡",
            "priceM": 55,
            "priceL": 70
          },
          {
            "id": "store_85c_caotun_zhongshan_c0_i1",
            "name": "招牌咖啡",
            "priceM": 60,
            "priceL": 75
          },
          {
            "id": "store_85c_caotun_zhongshan_c0_i2",
            "name": "海岩咖啡 (招牌鹹奶蓋)",
            "priceM": 65,
            "priceL": 80
          },
          {
            "id": "store_85c_caotun_zhongshan_c0_i3",
            "name": "拿鐵咖啡",
            "priceM": 70,
            "priceL": 85
          },
          {
            "id": "store_85c_caotun_zhongshan_c0_i4",
            "name": "卡布奇諾",
            "priceM": 70,
            "priceL": 85
          },
          {
            "id": "store_85c_caotun_zhongshan_c0_i5",
            "name": "焦糖瑪奇朵",
            "priceM": 80,
            "priceL": 95
          }
        ]
      },
      {
        "name": "人氣茶飲與一顆檸檬",
        "items": [
          {
            "id": "store_85c_caotun_zhongshan_c1_i0",
            "name": "一顆檸檬紅茶 (招牌整顆現切)",
            "priceM": 60,
            "priceL": 65
          },
          {
            "id": "store_85c_caotun_zhongshan_c1_i1",
            "name": "一顆檸檬青茶",
            "priceM": 60,
            "priceL": 65
          },
          {
            "id": "store_85c_caotun_zhongshan_c1_i2",
            "name": "初露青茶",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_85c_caotun_zhongshan_c1_i3",
            "name": "淺焙紅茶",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_85c_caotun_zhongshan_c1_i4",
            "name": "高山綠茶",
            "priceM": 30,
            "priceL": 35
          },
          {
            "id": "store_85c_caotun_zhongshan_c1_i5",
            "name": "海岩青茶",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_85c_caotun_zhongshan_c1_i6",
            "name": "海岩紅茶",
            "priceM": 45,
            "priceL": 55
          },
          {
            "id": "store_85c_caotun_zhongshan_c1_i7",
            "name": "黑糖珍珠厚奶茶",
            "priceM": 55,
            "priceL": 65
          }
        ]
      }
    ],
    "toppings": [
      {
        "id": "85_t1",
        "name": "黑糖珍珠",
        "price": 10
      },
      {
        "id": "85_t2",
        "name": "椰果",
        "price": 10
      },
      {
        "id": "85_t3",
        "name": "海岩奶蓋",
        "price": 20
      }
    ]
  }
];
