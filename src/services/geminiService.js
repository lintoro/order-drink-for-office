/**
 * Google Gemini Flash 菜單影像與文字/連結辨識服務 (geminiService.js)
 * 預設升級支援最新世代 Google Gemini 3.8 Flash 模型 (具備結構化 JSON 輸出)
 */

import { getMenuFromCache, saveMenuToCache } from '../utils/menuCache';

export const SUPPORTED_MODELS = [
  { id: 'gemini-3.8-flash', name: 'Gemini 3.8 Flash (Google 官方標準 Flash 模型)' },
];

/**
 * 取得當前設定之 Gemini 模型名稱 (固定使用 Google 官方指定 gemini-3.8-flash)
 */
export function getGeminiModel() {
  return 'gemini-3.8-flash';
}

export function setGeminiModel() {
  // 固定使用官方標準 gemini-3.8-flash
}

/**
 * 方案 B：取得 Cloudflare Worker 代理中繼網址 (優先讀取 LocalStorage，其次讀取環境變數)
 */
export function getWorkerProxyUrl() {
  return (
    localStorage.getItem('drink_order_worker_proxy_url') ||
    import.meta.env.VITE_WORKER_PROXY_URL ||
    ''
  );
}

/**
 * 方案 B：儲存 Cloudflare Worker 代理中繼網址至 LocalStorage
 */
export function setWorkerProxyUrl(url) {
  if (url && url.trim()) {
    localStorage.setItem('drink_order_worker_proxy_url', url.trim());
  } else {
    localStorage.removeItem('drink_order_worker_proxy_url');
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
    storeName: { type: 'STRING', description: '店家品牌名稱，例如：清心福全、得正、50嵐' },
    branchName: { type: 'STRING', description: '具體分店名稱，例如：南投南陽店、信義店。若無法判斷請填空字串' },
    phone: { type: 'STRING', description: '分店訂購電話，例如：049-2236388 或 02-27221234' },
    region: {
      type: 'STRING',
      description: '適用之定價分區（依所在縣市判定，例如：中南部價、北部價、全台均一價、東部/離島）',
    },
    isOpenToday: { type: 'BOOLEAN', description: '今日是否營業' },
    businessHours: { type: 'STRING', description: '今日營業時間或營業狀態，例如：09:30 - 21:30' },
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
    branchName: parsedData.branchName || '',
    phone: parsedData.phone || '',
    region: parsedData.region || '中南部價',
    isOpenToday: parsedData.isOpenToday !== undefined ? parsedData.isOpenToday : true,
    businessHours: parsedData.businessHours || '09:30 - 21:30',
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
 * 通用呼叫 Gemini API (支援直連 Google 或透過方案 B Cloudflare Worker 代理)
 */
async function callGeminiApi(payloadParts, customApiKey = '') {
  const proxyUrl = getWorkerProxyUrl();
  const apiKey = customApiKey || getGeminiApiKey();

  // 若未設定 Worker Proxy，則必須具備 API Key
  if (!proxyUrl && !apiKey) {
    throw new Error('請先輸入 Google Gemini API Key，或設定 Cloudflare Worker 代理網址！');
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
    // 方案 B：若有設定 Cloudflare Worker 代理，優先走中繼（保護金鑰 + 伺服器級快取）
    if (proxyUrl) {
      return fetch(proxyUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(apiKey ? { 'x-gemini-api-key': apiKey } : {}),
        },
        body: JSON.stringify(payload),
      });
    }

    // 方案 A：直連 Google 官方端點
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`;
    return fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  };

  let response;
  let attempts = 0;
  const maxAttempts = 2; // 最多重試 2 次

  while (attempts <= maxAttempts) {
    response = await makeRequest(selectedModel);
    if (response.ok) break;

    // 若遇到 Google 伺服器尖峰 (503 High Demand 或 429)，自動等待 1.5 秒重試
    if ((response.status === 503 || response.status === 429) && attempts < maxAttempts) {
      attempts++;
      console.warn(`Gemini 伺服器流量尖峰 (狀態: ${response.status})，等待 1.5 秒後進行第 ${attempts} 次自動重試...`);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      continue;
    }
    break;
  }

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    const rawMessage = errorData.error?.message || `API 回應錯誤碼: ${response.status}`;

    // 針對 Google Free Tier 429 頻率配額限制友善轉譯
    if (
      response.status === 429 ||
      rawMessage.includes('Quota exceeded') ||
      rawMessage.includes('exceeded your current quota')
    ) {
      const retryMatch = rawMessage.match(/retry in ([0-9.]+)s/i);
      const retrySeconds = retryMatch ? Math.ceil(parseFloat(retryMatch[1])) : 18;
      throw new Error(
        `Google 免費 API 每分鐘使用頻率已達上限（Rate Limit）。請稍候 ${retrySeconds} 秒冷卻時間後，再次點擊即可正常生成！`
      );
    }

    throw new Error(`Gemini 3.8 Flash 辨識失敗: ${rawMessage}`);
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

  const prompt = `你是一個專業的台灣手搖飲菜單解析專家。請仔細辨識這張手搖飲料菜單圖片中的資訊。
請注意：
1. 找出店家品牌名稱 (storeName) 與分店名稱 (branchName，若圖片有註明分店名或門市名稱)。
2. 找出分店訂購電話 (phone，若菜單有印門市電話號碼)。
3. 判斷定價分區 (region：北部價 / 中南部價 / 全台均一價 / 東部離島)。
4. 判斷營業時間 (businessHours，若圖片有營業時間資訊) 與今日是否營業 (isOpenToday)。
5. 將所有飲料依類別分類 (categories)，每一類包含多個品項 (items)。
6. 每個品項請解析出名稱 (name)、中杯價格 (priceM) 與大杯價格 (priceL)。若只有單一容量價格，請將 priceM 與 priceL 都設為該金額。
7. 找出常見加料選單 (toppings) 及其加價 (price)。若菜單未特別列出加料，請至少提供常見的「珍珠/波霸 (10元)」、「椰果 (10元)」。
8. 價格必須為純整數數字 (NT$)。
9. 請使用正體中文 (台灣常用用語)。`;

  const parts = [
    { text: prompt },
    {
      inlineData: {
        mimeType: imageData.mimeType,
        data: imageData.data,
      },
    },
  ];

  const result = await callGeminiApi(parts, customApiKey);
  // 方案 A：自動儲存至 LocalStorage 快取 (以店家名稱建索引)
  if (result?.storeName) {
    saveMenuToCache(result.storeName, result);
    if (result.branchName) {
      saveMenuToCache(`${result.storeName} ${result.branchName}`, result);
    }
  }
  return result;
}

/**
 * 2. 呼叫 Gemini Flash 辨識 Google 地圖連結 / 店家名稱 / 複製文字 (文字與連結解析)
 * 整合方案 A 本地快取：若曾解析過相同店名或網址，0 秒直接回傳，0 消耗 API！
 * @param {string} inputText - Google 地圖連結、店名或菜單文字內容
 * @param {string} customApiKey - 可選覆蓋 API Key
 */
export async function parseMenuFromTextOrUrl(inputText, customApiKey = '') {
  if (!inputText || !inputText.trim()) {
    throw new Error('請輸入 Google 地圖連結、店家名稱或菜單文字！');
  }

  const trimmedInput = inputText.trim();

  // 方案 A：先檢查本地 LocalStorage 快取是否命中
  const cachedMenu = getMenuFromCache(trimmedInput);
  if (cachedMenu) {
    console.log('⚡ [方案 A] 命中本地菜單快取，0 秒回應且 0 API 消耗:', trimmedInput);
    return cachedMenu;
  }

  const prompt = `你是一個專業的台灣手搖飲料專家與菜單解析工具。使用者提供了以下資訊，內容可能是：
1. Google 地圖店家分享連結、店家網址或包含店名地址電話的文字
2. 台灣手搖飲店家品牌與分店名稱 (例如「清心福全 南投南陽店」、「得正 台北南港店」、「50嵐 台南中正店」)
3. 從店家官方網站、社群粉專、外送平台或通訊軟體複製貼上的菜單文字

使用者提供的輸入內容如下：
"""
${trimmedInput}
"""

請執行以下解析任務：
1. 識別並提取店家品牌名稱 (storeName，如「清心福全」) 與具體分店名稱 (branchName，如「南投南陽店」)。
2. 提取或查證該分店的訂購電話 (phone，例如 049-2236388、02-27221234 等標準市話或手機格式)。若已知該分店電話請精確提供；若完全未知請留空字串。
3. 嚴格判定南北地區定價分區 (region)：
   - 台灣手搖飲（如清心福全、50嵐、可不可、得正等）存在顯著的南北分區定價差異！
   - 北部地區（基隆、台北、新北、桃園、新竹）通常適用「北部價」（通常每杯高 5 元左右）。
   - 中南部與東部地區（苗栗以南包含台中、彰化、南投、雲林、嘉義、台南、高雄、屏東、宜花東）通常適用「中南部價」。
   - 若為全國統一定價品牌，標註「全台均一價」。
   - 請根據該分店所在縣市，在各品項價格 (priceM, priceL) 中精準輸出該分店所在分區之真實價格，絕對不可混用錯誤區域價格！
4. 查證該分店今日營業時間 (businessHours，例如「09:00 - 21:30」) 與今日是否營業 (isOpenToday，布林值)。
5. 將飲品依類別分類 (categories，如「原茶系列」、「鮮奶茶系列」、「奶茶系列」、「鮮果茶」等)，每一類包含多個品項 (items)。
   - 列出該分店/品牌最受歡迎與經典的熱門品項及其對應區域之精準售價！
   - 若為貼上的文字內容，請從文字中精準萃取品項與價格。
6. 列出該品牌專屬或常見的加料選單 (toppings，如珍珠、波霸、椰果、茶凍、粉粿) 及其加價。
7. 價格必須為純整數 (NT$)，不帶貨幣符號。
8. 一律使用正體中文（台灣繁體用語）。`;

  const parts = [{ text: prompt }];
  const result = await callGeminiApi(parts, customApiKey);

  // 方案 A：解析成功後寫入本地 LocalStorage 快取 (預設存 7 天)
  saveMenuToCache(trimmedInput, result);

  return result;
}
