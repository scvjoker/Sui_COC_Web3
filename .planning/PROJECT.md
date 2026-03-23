# Cthulhu Web3 Protocol (CoC-W3P)

## What This Is

CoC-W3P 是一個建立在 Sui 區塊鏈之上的去中心化線上跑團 (TRPG) 協議平台。透過導入 DeFi 雙向質押防跳車機制、SocialFi 聲譽系統、VRF 鏈上隨機數與專屬的代幣經濟體系，它徹底解決了傳統網團玩家中途退出或守秘人 (KP) 惡意太監的信任危機，為熱愛《克蘇魯的呼喚》的玩家打造一個公平、安全且極具沉浸感的 Web3 遊戲大廳。

## Core Value

以絕對客觀的智能合約與強勢的經濟博弈（押金與懲罰），打造一個徹底根除「跳車」與「作弊」，讓玩家與 KP 都能安心沉浸於克蘇魯世界觀的去信任化 TRPG 平台。

## Requirements

### Validated

<!-- 從現有程式碼推導出的功能 -->
- ✓ [Sui 智能合約架構建立] — 存在 `coc_investigator`, `coc_profile`, `coc_scenario`, `coc_dice`, `coc_marketplace`, `coc_invoice_bridge`
- ✓ [React 前端骨架] — 存在基於 Vite, React 19, Tailwind CSS 與 Sui dApp Kit 的基礎前端

### Active

- [ ] **雙向質押與時間鎖防護 (Dual-Staking & Time-Lock)**: 
  - KP 發起劇本需鎖入高於報名費兩倍之押金。
  - 玩家報名需支付入局費並鎖定其專屬的調查員 (Investigator) NFT。
  - 設有超時多簽解散與單人強退沒收機制。
- [ ] **高難度創卡與英靈殿 (Hardcore Character Minting & Valhalla)**: 
  - 採用傳統 3D6 隨機骰點創卡。
  - 代幣重骰成本極高（如相當於 1000U 的 Game Token），以維持數值神聖性。
  - 將撕卡 (死亡/發瘋) 視為 Game Token 的銷毀引擎 (Token Sink)。NFT 銷毀後在玩家的 CoreProfile 留下永久的「墓碑/英靈殿」紀錄。
- [ ] **VRF 防作弊擲骰**: 前端發起檢定時，觸發 `sui::random` 產生 1~100 亂數並作為鏈上事件廣播。
- [ ] **預言機 (Pyth Oracle) 整合**: 錨定 SUI/USDC 的商城定價，並作為劇本內 1920 年代法幣兌換的即時運算基準。
- [ ] **KP 結團規範與聲望考核**: 
  - KP 需填寫包含狀態變動的結團報告。若給予玩家超標的獎勵/成長數值，KP 需額外抵押 Game Token 進行擔保。
  - 導入雙維度信譽評分 (`player_reputation`, `kp_reputation`)，逃跑次數為全域汙點且決定大廳曝光權限。
- [ ] **復古沉浸式 VTT 前端**: 採用殘破的舊報紙與人皮卷軸風格 UI，主要用於行動宣告、擲骰展示與動畫特效（如理智狂降的扭曲感）。
- [ ] **雙代幣循環體系 (Tokenomics)**: SUI/USDC 為大廳保證金；引入專屬 Game Token 作為官方/優質劇本分潤、通關獎勵與商店消耗媒介。

### Out of Scope

- [KP AI 模擬面試系統] — 核心合約與前端穩定前，暫時將「考核所需的 AI 玩家引擎」視為未來擴展項目。
- [完整語音/文字頻道 VTT] — 為減輕前端負載並順應玩家習慣，深度 RP 溝通依舊交由 Discord 進行，VTT 僅保留極簡宣告與互動特效功能。
- [道具資源場外交易 (P2P Trading)] — 為防範破壞遊戲體驗的「神仙道具」氾濫，神話典籍、法器等資源將嚴格綁定角色卡或 CoreProfile，不開放自由市場 P2P 轉售。

## Context

- **生態背景**：桌上角色扮演社群長年苦於「網團品質參差不齊」及「缺乏約束力導致的跳車斷聯」。本專案正是以此為痛點進行 Web3 降維打擊。
- **技術債/現有狀態**：目前已具備合約基礎檔案清單與前端 React 骨架，但缺乏具體的測試框架 (`TESTING.md` 顯示無測試)，以及核心場景的細部實作。前端尚未對接複雜的智能合約邏輯。
- **美學理念**：要求 100% 契合克蘇魯神話的克蘇魯神話驚悚、復古氛圍。

## Constraints

- **[Tech]**: 區塊鏈層必須使用 Sui Move 語言，原因為需利用其 `sui::random` 與強大物件導向能力。
- **[Tech]**: 前端使用 React + Tailwind，輕量化處理，專注 Web3 錢包互動的安全性。
- **[Design]**: 系統極度要求經濟防弊（防止刷分、惡意超發道具），這將約束任何資料寫入（如結算）皆需在合約層有多重校驗。

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| 雙向質押防跳車 | 解決網團最大痛點，用經濟代價保障遊戲完整性 | — Pending |
| 鎖死場外 P2P 交易 | 保護劇本原汁原味，防止道具破壞平衝 | — Pending |
| 撕卡連帶銷毀代幣/資產 | 契合 CoC 高死亡率，順勢成為完美的代幣通縮機制 | — Pending |
| 人皮卷軸/舊報紙 VTT | 專注氣氛營造，把繁雜溝通丟回 Discord，降低開發與維運成本 | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-03-24 after initialization*
