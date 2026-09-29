# 專案交接手冊與部署維運指南 (PROJECT_HANDOVER.md)

本手冊為「辦公室訂飲料統計小工具 (DrinkOrder Helper)」之完整交接指南，涵蓋專案架構、開發環境準備、環境變數需求、換機作業指引與部署維運說明。

---

## 📌 1. 專案基本資訊

* **專案名稱**：辦公室訂飲料統計小工具 (DrinkOrder Helper)
* **專案路徑**：`c:\Github\ReactApp\order drink for office`
* **企劃規格書**：`plan_order drink for office.md`
* **主要目標**：解決辦公室訂飲料群組洗版、菜單打錯字、外送費零錢算不清、現場現金核銷混亂三大痛點。
* **技術架構**：
  * 前端：SPA (HTML5 + Tailwind CSS + React / Vue 3)
  * 圖片辨識：Google Gemini Flash (Structured JSON Output)
  * 資料存儲：Firebase Firestore (永不休眠 Spark 免費版) / 本機 LocalStorage 快取
  * 託管部署：Cloudflare Pages / Vercel (自帶全球 CDN，免維護)

---

## ⚙️ 2. 本機開發環境需求

* **Node.js**：LTS 版本 (推薦 v18.x 或 v20.x 以上)
* **Git**：最新版本 (含 Git Credential Manager)
* **開發編輯器**：Google Antigravity IDE 或 VS Code
* **瀏覽器**：Google Chrome / Edge (支援現代 JavaScript 與響應式手機模擬)

---

## 🔑 3. 環境變數配置 (.env)

本專案將所有敏感金鑰抽離至環境變數中，防止外洩：

| 變數名稱 | 必填 | 說明 | 取得途徑 |
| :--- | :---: | :--- | :--- |
| `VITE_GEMINI_API_KEY` | 是 | Google Gemini API Key，用於菜單影像萃取 | Google AI Studio (免費額度) |
| `VITE_FIREBASE_API_KEY` | 否 | Firebase Web API Key (若啟用即時雲端同步) | Firebase Console 專案設定 |
| `VITE_FIREBASE_PROJECT_ID` | 否 | Firebase Project ID | Firebase Console |
| `VITE_FIREBASE_AUTH_DOMAIN` | 否 | Firebase 授權網域 | Firebase Console |

> [!WARNING]
> **切勿將 `.env` 或 `.env.local` 提交至 Git 倉庫！** 本機開發時請複製 `.env.example` 為 `.env.local` 並填入真實金鑰。

---

## 💻 4. 換機開發快速指南 (5 分鐘啟動)

若需要在新電腦（筆電、家中電腦）接續開發：

1. **取得程式碼**：
   ```bash
   git clone <遠端儲存庫網址>
   cd "order drink for office"
   ```
2. **安裝套件**：
   ```bash
   npm install
   ```
3. **建立環境變數**：
   ```bash
   cp .env.example .env.local
   # 編輯 .env.local 填入 Gemini API Key
   ```
4. **啟動本機開發伺服器**：
   ```bash
   npm run dev
   ```

詳細換機步驟與注意事項請參閱專屬文件：`ANTIGRAVITY_換機開發.md`。

---

## 🚀 5. 部署維運手冊 (Deployment)

1. **靜態網站託管平台推薦**：
   * **Cloudflare Pages**（首選）：全球 CDN 加速、無限頻寬、建置自動化、永不休眠。
   * **Vercel**：整合 GitHub 一鍵自動部署、預覽環境健全。
2. **部署設定重點**：
   * Build Command: `npm run build`
   * Output Directory: `dist`
   * Environment Variables: 記得在雲端託管後台設定相同的環境變數 (`VITE_GEMINI_API_KEY` 等)。

---

## 🛡️ 6. 系統核心安全與防護

1. **主揪權限控制**：
   * 系統不採用傳統帳密登入，而是在開團時生成含 32 位高熵亂數 Token 的專屬管理網址。
   * 主揪端於本機快取該 Token，避免誤關閉瀏覽器遺失管理權限。
2. **防覆蓋機制**：
   * 同事以「同暱稱」重複送單時，系統視為改單並覆蓋前次內容，杜絕重複統計。
   * 後台核銷狀態（已付款/已取餐）變更具備即時性，避免多人重複核銷出錯。
