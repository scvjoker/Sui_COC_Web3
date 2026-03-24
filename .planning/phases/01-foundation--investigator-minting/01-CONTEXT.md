# Phase 1: Foundation & Investigator Minting - Context

**Gathered:** 2026-03-25
**Status:** Ready for planning

<domain>
## Phase Boundary

Establishing the core platform foundation: wallet connection, user profile (CoreProfile) creation, and Investigator NFT minting with 3D6 generation and a granular reroll economy.
</domain>

<decisions>
## Implementation Decisions

### Wallet Connection UX
- **D-01:** Allow unauthenticated browsing of the lobby. The wallet connection modal only triggers when attempting an action.

### CoreProfile Setup
- **D-02:** Profile initialization requires a small SUI registration fee (e.g. 1 SUI) to act as a sybil/bot deterrent.

### Investigator Minting (3D6)
- **D-03:** Dice rolling UX should have a highly animated, ritualistic build-up to generate tension for the 3D6 results.

### Reroll Economy
- **D-04:** Allow players to spend Game Token (or equivalent dummy value for now) to reroll **single** specific attributes instead of wiping the entire card. Cater to whales/perfectionists.

### the agent's Discretion
- Wallet adapter library choice (use `@mysten/dapp-kit` default list).
- Visual asset placeholders or initial CSS styling for the dice animation.
- Specific attribute limits and exact 3D6 mathematical distribution logic.
</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Project Scope
- `.planning/ROADMAP.md` — Phase 1 goals and requirements.
- `.planning/REQUIREMENTS.md` — Requirement definitions (INFRA-01, INFRA-02, MECH-01).
- `coc_web3/WHITEPAPER.md` — Core vision on trustless TRPG mechanics.
</canonical_refs>

---
*Phase: 01-foundation--investigator-minting*
