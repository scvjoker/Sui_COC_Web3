# 專案工作日誌 (Changelog)

此檔案用於記錄專案開發過程中的新增、刪除修改事項。

## 2026-04-06

### 新增功能與變更 (Added & Changed)
- ✨ **建立專案防護網 `.gitignore`**：在根目錄新增全域 `gitignore`，阻斷 Sui Move 的 `build/` 目錄、前端的 `node_modules/` 以及底層 AI Agent (`.claude/`, `.planning/`) 的雜亂日誌，確保推播的純淨度。
- ✨ **重寫英文版 GitHub README**：將原本的中文說明轉化並生成英文版的根目錄 `README.md`，提供雙語支援並優化專案社群推廣的可用性。
- ✨ **總結各目錄資源並建立 GitHub README**：綜合了 `coc_web3/WHITEPAPER.md`, `coc_web3/README.md` 以及 `coc_frontend/README.md`，在根目錄下建立了一份適用於 GitHub 的中文版 (`README_CN.md`)。內容包含雙向制衡與信譽系統、靈魂綁定角色卡防太監與跳車機制、鏈上百面骰公平檢驗，以及遊戲代幣的銷毀經濟等四大特色，並提供技術棧與快速上手說明。

### 移除內容 (Removed/Deleted)
- 無刪除現有功能。
