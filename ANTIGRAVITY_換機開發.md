# Antigravity 異地跨電腦開發完整操作指南

本手冊為您在**另一台新電腦（例如筆記型電腦、家中電腦或備用工作站）**使用 **Google Antigravity IDE** 延續「辦公室訂飲料統計小工具 (DrinkOrder Helper)」開發之標準作業指引。

您可以將此 Markdown 文件**直接複製或留存**，在新電腦上按步驟執行即可在 5~10 分鐘內建立完全一致的 AI 協作開發環境。

---

## 🧭 異地開發運作架構一覽

```mermaid
graph TD
    subgraph 電腦 A (辦公室/工作站)
        A1[Antigravity IDE] -->|git push| GH[(GitHub 遠端儲存庫)]
    end
    
    subgraph 電腦 B (新電腦/筆記型電腦)
        GH -->|git clone / pull| B1[Antigravity IDE]
        B1 -->|git push| GH
    end
    
    GH -->|自動 CI/CD 發布| CF[Cloudflare Pages / Vercel]
    A1 -.->|調用同組 API| GM[(Google Gemini Flash API)]
    B1 -.->|調用同組 API| GM
```

* **程式碼核心**：託管於 GitHub 遠端儲存庫（單一真實來源 SSOT）。
* **線上發布**：只要任何一台電腦推送至 `main` 分支，Cloudflare Pages / Vercel 就會自動打包並更新線上網站。
* **雲端服務**：Gemini API 與雲端資料庫位於雲端，兩台電腦只需具備正確的環境變數設定檔即可無縫切換。

---

## 🚀 第一步：新電腦基礎環境準備 (軟體安裝)

請先在新電腦上下載並安裝以下必備工具：

### 1. 安裝 Git
* **下載網址**：https://git-scm.com/downloads
* **安裝重點**：安裝過程中建議勾選「Git Credential Manager」（可自動在瀏覽器中記住 GitHub 登入狀態）。
* 安裝完成後，開啟終端機（PowerShell 或 Command Prompt）設定基本識別資訊：
  ```bash
  git config --global user.name "您的名字或帳號"
  git config --global user.email "您的GitHub信箱"
  ```

### 2. 安裝 Node.js
* **下載網址**：https://nodejs.org/
* **建議版本**：請選 **LTS 長期支援版**（如 Node 18 或 20 以上）。
* 安裝完成後，可在終端機檢查確認：
  ```bash
  node -v
  npm -v
  ```

### 3. 安裝 Google Antigravity IDE
* 啟動 Antigravity IDE，並使用與目前相同的 Google 帳號進行登入與授權。

---

## 💻 第二步：在新電腦取得專案程式碼與啟動

### 1. 建立專案目錄並 Clone 儲存庫
在新電腦開啟終端機（PowerShell 或 CMD），進入放置專案的目錄（例如 `C:\Github\ReactApp\`）：
```powershell
# 1. 建立並進入資料夾
mkdir C:\Github\ReactApp -ErrorAction SilentlyContinue
cd C:\Github\ReactApp

# 2. 從 GitHub 拉取專案
git clone <您的專案 GitHub 倉庫網址> "order drink for office"

# 3. 進入專案資料夾
cd "order drink for office"
```

### 2. 安裝專案相依套件 (Dependencies)
```bash
npm install
```

### 3. 還原環境變數設定 (.env.local)
由於機密檔案受到 `.gitignore` 保護不會進入 GitHub，因此在新電腦上需要手動建立 `.env.local`：
```powershell
Copy-Item .env.example .env.local
```
用記事本或 Antigravity 開啟 `.env.local`，填入您的真實 `VITE_GEMINI_API_KEY`。

### 4. 啟動本機開發伺服器
```bash
npm run dev
```
瀏覽器開啟終端機顯示的本機網址（通常為 `http://localhost:5173`），確認頁面能正常顯示。

---

## 🔄 第三步：日常跨電腦切換標準作業守則 (SOP)

為了避免程式碼衝突或進度覆蓋，請牢記「離開前 Push，開始前 Pull」原則：

### 離開當前電腦前（電腦 A）：
1. 檢查檔案變更：`git status`
2. 提交所有變更：
   ```bash
   git add .
   git commit -m "feat: 完成特定功能模組"
   git push origin main
   ```
3. 確認終端機顯示推送成功。

### 到達另一台電腦開始工作前（電腦 B）：
1. 開啟終端機進入專案目錄：
   ```bash
   cd "C:\Github\ReactApp\order drink for office"
   ```
2. 拉取最新進度：
   ```bash
   git pull origin main
   ```
3. 若有新增套件，執行一次 `npm install`。
4. 啟動 Antigravity 繼續無縫開發。

---

## 🆘 換機常見疑難排解 (Troubleshooting)

1. **`git pull` 出現衝突 (Conflict)**：
   * 原因：兩台電腦同時修改了同一個檔案但未先 pull。
   * 解法：執行 `git status` 查看衝突檔案，使用 Antigravity 打開並依標記修復後 commit，或聯絡 AI 助理協助排解。
2. **`npm run dev` 找不到套件**：
   * 原因：新電腦尚未安裝新增的 npm 套件。
   * 解法：重新執行 `npm install`。
3. **Gemini 辨識失敗或報金鑰錯誤**：
   * 原因：`.env.local` 尚未建立或金鑰複製錯誤。
   * 解法：檢查 `.env.local` 檔案是否存在且 `VITE_GEMINI_API_KEY` 有效。
