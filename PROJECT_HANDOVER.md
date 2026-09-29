# 專案交接手冊與部署維運指南 (PROJECT_HANDOVER.md)

本手冊為「辦公室訂飲料統計小工具 (DrinkOrder Helper)」之完整交接指南，涵蓋專案架構、開發環境準備、環境變數需求、換機作業指引、資料備份規範與部署維運說明。

---

## 📌 1. 專案基本資訊

* **專案名稱**：辦公室訂飲料統計小工具 (DrinkOrder Helper)
* **專案路徑**：`c:\Github\ReactApp\order drink for office`
* **遠端儲存庫**：`https://github.com/lintoro/order-drink-for-office.git` (分支：`main`)
* **企劃規格書**：`plan_order drink for office.md`
* **專案守則與資安規範**：`AGENTS.md`
* **問題排查紀錄**：`ISSUES_LOG.md`
* **主要目標**：解決辦公室訂飲料群組洗版、菜單打錯字、外送費零錢算不清、跨機同步障礙、現場現金核銷混亂各大痛點。
* **技術架構**：
  * **前端**：React 18 + Vite 6 + Tailwind CSS (SPA 單頁架構)
  * **自動化測試**：Vitest (33 項單元測試 100% 通過)
  * **圖片辨識與 URL 菜單解析**：Google Gemini 2.5/3.8 Flash (結構化 JSON Output，支援 Google Maps 連結與菜單圖)
  * **雲端跨機即時中繼**：Cloudflare Worker KV (`drink-order-api.laijunyou.workers.dev`)，零休眠、跨設備 1 秒同步
  * **內建店家資料庫**：南投草屯/市區/南崗 52 間實體門市官方真實全品項菜單 (`nantouStores.js` & `fullMenusData.js`)
  * **本機存儲隔離**：多團獨立槽位 (`drink_order_group_${orderId}`)、代點名單多帳號切換、歷史結案歸檔庫 (`drink_order_archived_groups`)
  * **託管部署**：Vercel 自動化 CI/CD（GitHub main 分支推送即熱部署）

---

## ⚙️ 2. 本機開發環境需求

* **Node.js**：LTS 版本 (推薦 v18.x 或 v20.x 以上)
* **Git**：最新版本 (含 Git Credential Manager)
* **開發編輯器**：Google Antigravity IDE 或 VS Code
* **瀏覽器**：Google Chrome / Edge / Safari (支援現代 JavaScript 與響應式手機模擬)

---

## 🔑 3. 環境變數配置 (.env)

本專案所有敏感設定均透過環境變數管理，防止外洩至公開倉庫：

| 變數名稱 | 必填 | 說明 | 取得途徑 |
| :--- | :---: | :--- | :--- |
| `VITE_GEMINI_API_KEY` | 是 | Google Gemini API Key，用於菜單拍照與文字解析 | Google AI Studio (免費額度) |
| `VITE_CLOUDFLARE_WORKER_URL` | 否 | 雲端同步 Worker 網址 (已有預設正式環境端點) | Cloudflare Worker 部署端點 |
| `VITE_FIREBASE_API_KEY` | 否 | Firebase Web API Key (備用雲端方案) | Firebase Console 專案設定 |

> [!WARNING]
> **切勿將 `.env` 或 `.env.local` 提交至 Git 倉庫！** 本機開發時請複製 `.env.example` 為 `.env.local` 並填入真實金鑰。

---

## 💻 4. 換機開發快速指南 (5 分鐘啟動)

若需要在新電腦（筆電、家中電腦、備用工作站）接續開發：

1. **取得程式碼**：
   ```bash
   git clone https://github.com/lintoro/order-drink-for-office.git "order drink for office"
   cd "order drink for office"
   ```
2. **還原相依套件**：
   ```bash
   npm install
   ```
3. **建立環境變數**：
   ```powershell
   Copy-Item .env.example .env.local
   # 用編輯器開啟 .env.local 填入 VITE_GEMINI_API_KEY
   ```
4. **驗證測試與建置**：
   ```bash
   npm test -- --run   # 確認 33 項單元測試全數 PASS
   npm run build       # 確認生產打包編譯無誤
   ```
5. **啟動本機開發伺服器**：
   ```bash
   npm run dev
   ```

詳細換機步驟與注意事項請參閱專屬文件：`ANTIGRAVITY_換機開發.md`。

---

## 💾 5. 備份作業與資料安全規範

依據專案規範與業務流程，系統實施多層次備份作業：

1. **程式碼備份 (SSOT)**：
   * 以 GitHub 遠端儲存庫 `origin/main` 為單一真實來源，每次重大改動完成後必定 commit 並 push。
2. **開團與點餐即時資料備份**：
   * **雲端層**：Cloudflare Worker KV 全球分散式持久化儲存，主揪發起開團或同事點餐送單時自動更新。
   * **本機快取層**：瀏覽器 LocalStorage 雙重獨立快取，即便離線或網路微弱，仍可即時讀取本機最新狀態。
3. **歷史訂購結案歸檔備份 (報帳與審計)**：
   * 主揪結單後點擊「📦 結案歸檔此團」，訂單完整名單、杯數、金額、分攤外送費與核銷註記自動存入本機歸檔庫。
   * 支援**「📥 匯出 CSV 報帳檔」**，內嵌 UTF-8 BOM，Excel 開啟不亂碼，方便辦公室會計核帳保存。
4. **菜單資料庫與自訂店家備份**：
   * 開團頁支援**「匯出店家庫 JSON」**與**「匯入店家庫 JSON」**，更換電腦或清除快取時可一鍵完整還原自訂菜單。

---

## 🛡️ 6. 系統核心業務防呆與權限隔離

1. **主揪權限隔離 (防提權與被邀請者侵入)**：
   * 系統採用無密碼雙網址架構：公開填單網址（一般同仁）、主揪管理網址（帶有高強度亂數 Admin Token）。
   * 權限真實來源僅限於「本機主揪原創建立登記」或「URL 明確帶有正確 Token」。
   * 同仁自雲端同步拉取團購資料時，強制傳入 `isHost = false`，絕對禁止將主揪 Token 寫入同仁設備儲存區。
   * 同仁點餐頁完全隱藏後台入口；若惡意竄改網址，Screen C 亦有全螢幕存取攔截阻擋。
2. **外送費無條件進位平攤 (Ceil Rounding)**：
   * 實體現金分攤公式：$\lceil \text{總外送費} \div \text{總人數} \rceil$，零頭自動提示為「溢收公積金」。
3. **同暱稱自動覆蓋 (Overwrite by Nickname)**：
   * 截止前同仁以同暱稱重複送單直接覆蓋舊單，避免重複下單；同時支援切換不同同仁代點。
4. **雙向獨立核銷看板 (Paid & Picked)**：
   * 「已付款」與「已取餐」獨立狀態切換，完美契合辦公室「先拿飲料再給錢」或「代付代拿」的現場作業。

---

## 🚀 7. 部署維運手冊 (Deployment)

1. **託管平台**：Vercel
2. **自動部署觸發**：當分支 `main` 有新的 commit 推送時，Vercel 透過 Webhook 自動執行建置並熱部署發布。
3. **建置設定**：
   * Framework Preset: `Vite`
   * Build Command: `npm run build`
   * Output Directory: `dist`
   * SPA 重寫支援：`vercel.json` 內已預先配置 rewrite 規則，保證深層路由與查詢參數重整頁面不報 404。

