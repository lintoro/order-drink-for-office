# 辦公室訂飲料 - Cloudflare Worker 代理轉發服務 (方案 B)

本目錄提供專屬的 **Cloudflare Worker 代理層**，用於隱藏 Google Gemini API Key，並提供跨全體同仁的伺服器級快取與去重。

---

## 🌟 核心優勢

1. **API Key 零洩漏 (Zero Secret Leak)**：API Key 保存在 Cloudflare 雲端伺服器環境變數中，前端完全不含任何金鑰。
2. **辦公室共享快取 (Edge Caching)**：任何人辨識過「得正」或「清心南陽店」，Cloudflare Edge 自動快取，其他人 0 秒秒開，且完全不消耗 Google 每日/每分鐘配額。
3. **免費額度充足**：Cloudflare Workers 免費方案提供每天 **100,000 次** 請求，完全足夠全辦公室日常點餐使用。

---

## 🚀 3 分鐘快速部署指南 (二選一)

### 方式一：Cloudflare 儀表板免安裝直接貼上 (最推薦、最簡單)

1. 登入 [Cloudflare Dashboard](https://dash.cloudflare.com/)。
2. 點擊左側選單 **Workers & Pages** -> **Create application** -> **Create Worker**。
3. 輸入名稱（例如：`drink-order-proxy`），點擊 **Deploy**。
4. 點擊 **Edit code**，將本目錄中的 `src/index.js` 代碼完整複製並覆蓋貼上，點擊 **Deploy**。
5. 點擊 Worker 設定分頁 **Settings** -> **Variables and Secrets**：
   - 新增環境變數 `GEMINI_API_KEY`，填入您的 Google Gemini API Key 並儲存為 Secret。
6. 複製該 Worker 網址（例如：`https://drink-order-proxy.your-subdomain.workers.dev`）。
7. 回到前端專案：
   - 於 `.env.local` 加上：`VITE_WORKER_PROXY_URL=https://drink-order-proxy.your-subdomain.workers.dev/api/gemini`
   - 或直接在開團頁面「Gemini 設定」中填入此 Worker 網址即可！

---

### 方式二：使用 Wrangler CLI 終端機部署

```bash
cd cloudflare-worker
npx wrangler secret put GEMINI_API_KEY
# 依指示輸入您的 Gemini API Key

npx wrangler deploy
```
部署完成後終端機會直接顯示發布的 Worker 網址！
