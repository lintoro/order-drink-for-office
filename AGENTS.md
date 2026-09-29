# 專案 Agent 行為與開發守則 (Project Rules & Safety Principles)

本文件定義本專案（**辦公室訂飲料統計小工具 / DrinkOrder Helper**）之核心資安、開發流程、換機跨機規範、備份策略、核心業務邏輯防呆與維護規範，所有 Agent 與開發人員必須嚴格遵守。

---

## 🌐 一、 語言原則 (Language Policy)

1. **強制使用繁體中文（台灣）**：所有對使用者的說明、回應、分析、Plan、Task、Walkthrough 及專案文件，必須 100% 使用「繁體中文（台灣）」。
2. **嚴禁簡體中文**：嚴格禁止出現任何簡體中文詞彙與標點習慣。
3. **技術用語慣例**：優先使用台灣常用技術用語（如：程式碼、專案、伺服器、工作表、函式、陣列、非同步），程式碼、API 名稱、變數名稱及技術專有名詞可保留英文。

---

## 🔒 二、 核心資安守則 (Security Principles)

1. **機密檔案零追蹤 (Zero Secret Leak)**：
   - 包含 API 金鑰或連線憑證之檔案（如 `.env`, `.env.local`, `credentials.json`, `service_account*.json`）**嚴禁納入 Git 版本控制**。
   - 所有敏感設定必須透過 `.env.example` 提供範本，實際金鑰由開發者本機填入 `.env.local`。
   - 程式碼、前端 HTML/JS 與 Markdown 文件中嚴禁硬編碼任何敏感金鑰（如 Gemini API Key、Firebase Service Account）。
2. **API 金鑰調用安全**：
   - Gemini 視覺解析等需要付費或配額之 API，若直接於前端調用，需有基本配額控管與防刷機制（例如本機快取與防連續觸發）。
   - 若未來部署至雲端，建議搭配 Cloudflare Worker 或 Serverless 代理轉發，隱藏後端 API Key。
3. **雙網址授權與權限防護**：
   - 系統採用無密碼雙網址架構：公開填單網址（一般使用者）、主揪管理網址（帶有高強度亂數 Admin Token）。
   - 一般使用者端不可外洩或推導出主揪專屬 Admin Token。
   - 伺服端/資料庫安全規則（如 Firestore Rules）必須確保未授權端無法篡改主揪控制參數（如強制提早結單、修改他人付款狀態）。

---

## 💻 三、 換機開發守則 (Cross-Machine Migration Rules)

為了支援在辦公室工作站、個人筆電、家用電腦等多設備間無縫切換開發，必須遵循以下規範：

1. **標準開發環境相依性**：
   - 依賴鎖定：前端採用標準 Node.js LTS (>= 18.x)，套件安裝使用 `npm install`。
   - 不依賴任何非標準全域路徑，所有相對路徑與相依套件必須完整列於 `package.json`。
2. **換機工作四步驟**：
   - Step 1: 從 GitHub Clone 最新專案程式碼。
   - Step 2: 執行 `npm install` 還原相依套件。
   - Step 3: 參照 `.env.example` 建立本機 `.env.local` 並填入必要 API 金鑰。
   - Step 4: 執行 `npm run dev` 啟動本機開發伺服器，驗證功能無誤。
3. **跨機工作前之 Git 紀律**：
   - 離開當前電腦前，必須執行完整 Commit 並 Push 至遠端儲存庫，嚴禁將未完成之變更遺留在本機 stash 中。
   - 到達新電腦開始工作前，第一步必須執行 `git pull` 確認工作區為最新狀態。
4. **專屬指引文件**：
   - 專案根目錄必須維持 `ANTIGRAVITY_換機開發.md` 與 `PROJECT_HANDOVER.md`，提供新電腦環境快速設定說明。

---

## 💾 四、 備份與版本控制規範 (Backup & Version Control Strategy)

1. **Git Commit 規範**：
   - 採用 Conventional Commits 格式（如 `feat:`, `fix:`, `docs:`, `refactor:`, `chore:`）。
   - 每完成一個獨立邏輯模組或修復單一 Bug 即進行一次原子性 Commit。
2. **多重備份原則**：
   - **程式碼雲端備份**：以 GitHub 為單一真實來源 (Single Source of Truth, SSOT)，每次重大階段完成後必須 Push。
   - **歷史菜單與設定資料備份**：主揪常用店家菜單資料支援匯出 JSON 功能，即使資料庫或瀏覽器快取清除，仍可透過匯入快速還原。
3. **長效穩定架構（拒絕自動休眠）**：
   - 後端與資料庫選型堅決排除具有「無流量自動休眠凍結」之免費服務（如 Supabase 免費版超過 7 天未存取會暫停專案）。
   - 優先選用永不凍結方案（如 Firebase Cloud Firestore Spark 免費專案、Cloudflare D1、或靜態 LocalStorage + P2P/Sync）。

---

## 🥤 五、 專案核心業務邏輯防呆規範 (Business Logic Principles)

依據專案規格書 `plan_order drink for office.md`，系統必須嚴格落實以下業務規則：

1. **外送費無條件進位平攤 (Ceil Rounding)**：
   - 實體收現不收小數，每人外送費公式：
     $$\text{每人外送費} = \lceil \text{總外送費} \div \text{總點餐人數} \rceil$$
   - 系統自動計算並提示「外送費溢收金額」（例如外送費 40 元 3 人訂，每人收 14 元，溢收 +2 元），標註留作零錢儲備。
2. **同暱稱自動覆蓋 (Overwrite by Nickname)**：
   - 結單截止前，同事若重複送單，以「開團 ID + 同事暱稱」作為唯一索引直接覆蓋舊單，避免重複下單與手動退單。
   - 瀏覽器自動透過 LocalStorage 快取上次填寫之暱稱。
3. **截單時間防呆**：
   - 時間到達自動鎖單，禁用送單按鈕，狀態切換為統整中。
   - 主揪可一鍵手動延長時間（如「延長 10 分鐘」）或提早手動結單。
4. **電話下單文字聚合 (Order Aggregation)**：
   - 結單後自動將所有品項按照「同商品、同容量、同冰塊甜度加料」聚合計算杯數，並提供「一鍵複製下單文字」功能。
5. **現場分開核銷模式 (Separate Paid & Picked)**：
   - 支援「已付款」與「已取餐」獨立勾選，精準應對辦公室「先拿飲料、待會給錢」或「代付代拿」情境。
   - 點餐者進入取餐狀態時，自動呈現大字體高對比「個人取餐卡」顯示應付現金。

---

## 📜 六、 標準開發歷程與文件維護規範 (Documentation SOP)

每次重大開發、架構演進或交接時，必須維護專案根目錄下的四份標準文件：

1. `AGENTS.md`：專案核心守則、資安鐵律與開發規範（本文件）。
2. `PROGRESS.md`：系統開發進度、各階段里程碑與功能完成度對照表。
3. `ISSUES_LOG.md`：踩坑記錄、問題排查與修復日誌。
4. `PROJECT_HANDOVER.md`：專案交接手冊、環境變數需求、換機作業與部署維運手冊。
