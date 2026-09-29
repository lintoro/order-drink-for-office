/**
 * Google Gemini Flash 菜單影像辨識服務 (geminiService.js)
 * 專為台灣手搖飲菜單設計之 Structured Output 結構化辨識
 */

const GEMINI_API_ENDPOINT =
  'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';

/**
 * 取得當前有效的 Gemini API Key (優先從 LocalStorage 讀取，其次從環境變數讀取)
 */
export function getGeminiApiKey() {
  return (
    localStorage.getItem('drink_order_gemini_api_key') ||
    import.meta.env.VITE_GEMINI_API_KEY ||
    ''
  );
}

/**
 * 儲存使用者的 Gemini API Key 至本機 LocalStorage (方便前端測試不用重啟伺服器)
 */
export function setGeminiApiKey(key) {
  if (key && key.trim()) {
    localStorage.setItem('drink_order_gemini_api_key', key.trim());
  } else {
    localStorage.removeItem('drink_order_gemini_api_key');
  }
}

/**
 * 將 File 物件轉為 Base64 字串
 */
export function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      // 移除 data:image/xxx;base64, 前綴以符合 Gemini inlineData 要求
      const base64String = reader.result.split(',')[1];
      resolve({
        mimeType: file.type || 'image/jpeg',
        data: base64String,
      });
    };
    reader.onerror = (error) => reject(error);
  });
}

/**
 * 呼叫 Gemini 1.5 Flash 辨識菜單圖片並輸出標準結構化 JSON
 * @param {File} imageFile - 上傳的菜單圖片
 * @param {string} customApiKey - 可選的覆蓋 API Key
 * @returns {Promise<{ storeName: string, categories: Array, toppings: Array }>}
 */
export async function parseMenuImageWithGemini(imageFile, customApiKey = '') {
  const apiKey = customApiKey || getGeminiApiKey();

  if (!apiKey) {
    throw new Error('請先輸入 Google Gemini API Key，或於 .env.local 中設定 VITE_GEMINI_API_KEY');
  }

  const imageData = await fileToBase64(imageFile);

  const prompt = `你是一個專業的手搖飲菜單解析專家。請仔細辨識這張手搖飲料菜單圖片中的資訊。
請注意：
1. 找出店家名稱 (storeName)。
2. 將所有飲料依類別分類 (categories)，每一類包含多個品項 (items)。
3. 每個品項請解析出名稱 (name)、中杯價格 (priceM) 與大杯價格 (priceL)。若只有單一容量價格，請將 priceM 與 priceL 都設為該金額。
4. 找出常見加料選單 (toppings) 及其加價 (price)。若菜單未特別列出加料，請至少提供常見的「珍珠/波霸 (10元)」、「椰果 (10元)」。
5. 價格必須為純整數數字 (NT$)。
6. 請使用正體中文 (台灣常用用語)。`;

  const payload = {
    contents: [
      {
        parts: [
          { text: prompt },
          {
            inlineData: {
              mimeType: imageData.mimeType,
              data: imageData.data,
            },
          },
        ],
      },
    ],
    generationConfig: {
      temperature: 0.1,
      responseMimeType: 'application/json',
      responseSchema: {
        type: 'OBJECT',
        properties: {
          storeName: { type: 'STRING', description: '店家名稱' },
          categories: {
            type: 'ARRAY',
            items: {
              type: 'OBJECT',
              properties: {
                name: { type: 'STRING', description: '分類名稱，如原茶類、鮮奶茶類' },
                items: {
                  type: 'ARRAY',
                  items: {
                    type: 'OBJECT',
                    properties: {
                      name: { type: 'STRING', description: '品項名稱' },
                      priceM: { type: 'INTEGER', description: '中杯價格' },
                      priceL: { type: 'INTEGER', description: '大杯價格' },
                    },
                    required: ['name', 'priceM', 'priceL'],
                  },
                },
              },
              required: ['name', 'items'],
            },
          },
          toppings: {
            type: 'ARRAY',
            items: {
              type: 'OBJECT',
              properties: {
                name: { type: 'STRING', description: '加料名稱' },
                price: { type: 'INTEGER', description: '加料金額' },
              },
              required: ['name', 'price'],
            },
          },
        },
        required: ['storeName', 'categories'],
      },
    },
  };

  const response = await fetch(`${GEMINI_API_ENDPOINT}?key=${apiKey}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    const message = errorData.error?.message || `API 回應錯誤碼: ${response.status}`;
    throw new Error(`Gemini 辨識失敗: ${message}`);
  }

  const result = await response.json();
  const textOutput = result.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!textOutput) {
    throw new Error('Gemini 未回傳有效解析內容');
  }

  try {
    const parsedData = JSON.parse(textOutput);
    // 自動補強品項 ID
    const formattedCategories = (parsedData.categories || []).map((cat, cIdx) => ({
      name: cat.name || '精選推薦',
      items: (cat.items || []).map((item, iIdx) => ({
        id: `ai_${cIdx}_${iIdx}_${Date.now().toString(36)}`,
        name: item.name,
        priceM: Number(item.priceM) || Number(item.priceL) || 30,
        priceL: Number(item.priceL) || Number(item.priceM) || 35,
      })),
    }));

    const formattedToppings = (parsedData.toppings || []).map((top, tIdx) => ({
      id: `ai_top_${tIdx}`,
      name: top.name,
      price: Number(top.price) || 10,
    }));

    return {
      storeName: parsedData.storeName || '自訂手搖飲',
      categories: formattedCategories,
      toppings: formattedToppings.length > 0 ? formattedToppings : [
        { id: 'top_def_1', name: '珍珠', price: 10 },
        { id: 'top_def_2', name: '椰果', price: 10 },
      ],
    };
  } catch (err) {
    throw new Error('解析 Gemini 回傳 JSON 失敗: ' + err.message);
  }
}
