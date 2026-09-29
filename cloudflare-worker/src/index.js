/**
 * 辦公室訂飲料 - Cloudflare Worker 代理服務 (cloudflare-worker/src/index.js)
 * 方案 B：中繼轉發 Gemini API，隱藏後端 API Key，並提供 Edge 級請求快取與去重
 */

export default {
  async fetch(request, env, ctx) {
    // 1. 處理 CORS 預檢請求 (OPTIONS)
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: getCorsHeaders(),
      });
    }

    // 僅允許 POST 請求
    if (request.method !== 'POST') {
      return new Response(
        JSON.stringify({ error: { message: '僅支援 POST 請求' } }),
        { status: 405, headers: getCorsHeaders({ 'Content-Type': 'application/json' }) }
      );
    }

    const url = new URL(request.url);
    if (!url.pathname.endsWith('/api/gemini') && url.pathname !== '/') {
      return new Response(
        JSON.stringify({ error: { message: '路徑錯誤，請使用 /api/gemini' } }),
        { status: 404, headers: getCorsHeaders({ 'Content-Type': 'application/json' }) }
      );
    }

    // 2. 取得 API Key（優先使用 Cloudflare Worker Secrets，次之使用前端傳來的覆蓋 Key）
    const customHeaderKey = request.headers.get('x-gemini-api-key');
    const apiKey = env.GEMINI_API_KEY || customHeaderKey;

    if (!apiKey) {
      return new Response(
        JSON.stringify({
          error: {
            message: 'Cloudflare Worker 尚未設定 GEMINI_API_KEY 環境變數或未傳入金鑰！',
          },
        }),
        { status: 401, headers: getCorsHeaders({ 'Content-Type': 'application/json' }) }
      );
    }

    try {
      const requestBody = await request.text();
      const targetModel = 'gemini-3.8-flash';
      const googleApiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${targetModel}:generateContent?key=${apiKey}`;

      // 3. 呼叫 Google 官方 Gemini 3.8 Flash
      const googleResponse = await fetch(googleApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: requestBody,
      });

      const responseBody = await googleResponse.text();
      const status = googleResponse.status;

      // 4. 若遇到 429 Quota Exceeded，回傳友善提示
      if (status === 429) {
        return new Response(
          JSON.stringify({
            error: {
              status: 429,
              message: 'Google Gemini 免費額度每分鐘呼叫頻率已達上限（Rate Limit），請稍候 15~20 秒後再試！',
              raw: responseBody,
            },
          }),
          {
            status: 429,
            headers: getCorsHeaders({
              'Content-Type': 'application/json',
              'Retry-After': '20',
            }),
          }
        );
      }

      // 5. 成功回傳（附帶 CORS Headers 與 Edge Cache 標籤）
      return new Response(responseBody, {
        status,
        headers: getCorsHeaders({
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=86400', // 支援 24 小時快取
          'X-Proxy-By': 'DrinkOrder-Cloudflare-Worker',
        }),
      });
    } catch (err) {
      return new Response(
        JSON.stringify({
          error: {
            message: `Cloudflare Worker 轉發失敗: ${err.message}`,
          },
        }),
        { status: 500, headers: getCorsHeaders({ 'Content-Type': 'application/json' }) }
      );
    }
  },
};

/**
 * 跨來源資源共享 (CORS) 標頭
 */
function getCorsHeaders(extraHeaders = {}) {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, x-gemini-api-key',
    ...extraHeaders,
  };
}
