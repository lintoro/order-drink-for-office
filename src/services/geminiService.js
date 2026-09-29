/**
 * Google Gemini Flash 菜單影像與文字/連結辨識服務 (geminiService.js)
 * 預設升級支援最新世代 Google Gemini 3.8 Flash 模型 (具備結構化 JSON 輸出)
 */

export const SUPPORTED_MODELS = [
  { id: 'gemini-2.5-flash', name: 'Gemini 2.5 Flash (目前官方推薦主力，穩定秒級輸出)' },
  { id: 'gemini-2.0-flash', name: 'Gemini 2.0 Flash (經典高速版本，高穩定備援)' },
  { id: 'gemini-3.8-flash', name: 'Gemini 3.8 Flash (最新預覽，若遇尖峰排隊自動備援)' },
];

/**
 * 取得當前設定之 Gemini 模型名稱 (預設穩定 gemini-2.5-flash)
 */
export function getGeminiModel() {
  return localStorage.getItem('drink_order_gemini_model') || 'gemini-2.5-flash';
}

export function setGeminiModel(modelId) {
  if (modelId && modelId.trim()) {
    localStorage.setItem('drink_order_gemini_model', modelId.trim());
  } else {
    localStorage.removeItem('drink_order_gemini_model');
  }
}

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
 * 儲存使用者的 Gemini API Key 至本機 LocalStorage
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
 * 菜單標準輸出 JSON Schema
 */
const MENU_RESPONSE_SCHEMA = {
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
};

/**
 * 格式化與補強 Gemini 輸出的菜單資料
 */
function formatParsedMenuData(parsedData) {
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
    toppings:
      formattedToppings.length > 0
        ? formattedToppings
        : [
            { id: 'top_def_1', name: '珍珠', price: 10 },
            { id: 'top_def_2', name: '椰果', price: 10 },
          ],
  };
}

/**
 * 通用呼叫 Gemini API (含自動備援)
 */
async function callGeminiApi(payloadParts, customApiKey = '') {
  const apiKey = customApiKey || getGeminiApiKey();

  if (!apiKey) {
    throw new Error('請先輸入 Google Gemini API Key，或於 .env.local 中設定 VITE_GEMINI_API_KEY');
  }

  const payload = {
    contents: [{ parts: payloadParts }],
    generationConfig: {
      temperature: 0.1,
      responseMimeType: 'application/json',
      responseSchema: MENU_RESPONSE_SCHEMA,
    },
  };

  const selectedModel = getGeminiModel();
  const makeRequest = (modelName) => {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`;
    return fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  };

  let usedModel = selectedModel;
  let response = await makeRequest(usedModel);

  // 若遇到任何失敗 (如 503 High Demand、429 配額限制、404 未找到)，自動多層備援嘗試
  if (!response.ok && usedModel !== 'gemini-2.5-flash') {
    console.warn(`模型 ${usedModel} 請求未成功 (狀態碼: ${response.status})，自動備援切換至 gemini-2.5-flash 重試...`);
    usedModel = 'gemini-2.5-flash';
    response = await makeRequest(usedModel);
  }

  // 若 gemini-2.5-flash 仍遇到尖峰負載，最後備援嘗試 gemini-2.0-flash
  if (!response.ok && usedModel !== 'gemini-2.0-flash') {
    console.warn(`備援模型重試未成功，嘗試穩定備援 gemini-2.0-flash...`);
    usedModel = 'gemini-2.0-flash';
    response = await makeRequest(usedModel);
  }

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    const message = errorData.error?.message || `API 回應錯誤碼: ${response.status}`;
    throw new Error(`Gemini 辨識失敗 (${usedModel}): ${message}`);
  }

  const result = await response.json();
  const textOutput = result.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!textOutput) {
    throw new Error('Gemini 未回傳有效解析內容');
  }

  try {
    const parsedData = JSON.parse(textOutput);
    return formatParsedMenuData(parsedData);
  } catch (err) {
    throw new Error('解析 Gemini 回傳 JSON 失敗: ' + err.message);
  }
}

/**
 * 1. 呼叫 Gemini Flash 辨識菜單圖片 (照片解析)
 */
export async function parseMenuImageWithGemini(imageFile, customApiKey = '') {
  const imageData = await fileToBase64(imageFile);

  const prompt = `你是一個專業的手搖飲菜單解析專家。請仔細辨識這張手搖飲料菜單圖片中的資訊。
請注意：
1. 找出店家名稱 (storeName)。
2. 將所有飲料依類別分類 (categories)，每一類包含多個品項 (items)。
3. 每個品項請解析出名稱 (name)、中杯價格 (priceM) 與大杯價格 (priceL)。若只有單一容量價格，請將 priceM 與 priceL 都設為該金額。
4. 找出常見加料選單 (toppings) 及其加價 (price)。若菜單未特別列出加料，請至少提供常見的「珍珠/波霸 (10元)」、「椰果 (10元)」。
5. 價格必須為純整數數字 (NT$)。
6. 請使用正體中文 (台灣常用用語)。`;

  const parts = [
    { text: prompt },
    {
      inlineData: {
        mimeType: imageData.mimeType,
        data: imageData.data,
      },
    },
  ];

  return callGeminiApi(parts, customApiKey);
}

/**
 * 2. 呼叫 Gemini Flash 辨識 Google 地圖連結 / 店家名稱 / 複製文字 (文字與連結解析)
 * @param {string} inputText - Google 地圖連結、店名或菜單文字內容
 * @param {string} customApiKey - 可選覆蓋 API Key
 */
export async function parseMenuFromTextOrUrl(inputText, customApiKey = '') {
  if (!inputText || !inputText.trim()) {
    throw new Error('請輸入 Google 地圖連結、店家名稱或菜單文字！');
  }

  const prompt = `你是一個專業的台灣手搖飲料專家與菜單解析工具。使用者提供了以下資訊，內容可能是：
1. Google 地圖店家分享連結或店家文字 (例如 maps.app.goo.gl/... 或包含地址店名的文字)
2. 台灣手搖飲店家品牌名稱 (例如「得正 台北南港店」、「一沐日 新竹巨城」、「可不可熟成紅茶」)
3. 從店家官方網站、社群粉專、外送平台或通訊軟體複製貼上的菜單文字

使用者提供的輸入內容如下：
"""
${inputText.trim()}
"""

請執行以下解析任務：
1. 識別並提取店家品牌名稱 (storeName)，若為連鎖品牌請提取完整的品牌名稱（如「得正 Oolong TEA」、「一沐日」）。
2. 將所有飲品依類別分類 (categories，如「原茶系列」、「鮮奶茶系列」、「奶蓋系列」、「鮮果茶」等)，每一類包含多個品項 (items)。
3. 每個品項包含：名稱 (name)、中杯價格 (priceM)、大杯價格 (priceL)。
   - 若使用者輸入的是手搖飲品牌名稱或 Google Maps 連結，請直接調用你對該台灣手搖飲品牌的完整真實知識庫，列出該品牌最受歡迎與標誌性的 10~25 款熱門品項及其最新標準售價！
   - 若為貼上的文字內容，請從文字中精準萃取品項與價格。若只有單一容量價格，請將中杯與大杯都填該金額。
4. 列出該品牌專屬或常見的加料選單 (toppings，如粉粿、波霸、茶凍、椰果、珍珠) 及其加價。
5. 價格必須為純整數 (NT$)，不帶貨幣符號。
6. 一律使用正體中文（台灣用語）。`;

  const parts = [{ text: prompt }];
  return callGeminiApi(parts, customApiKey);
}
