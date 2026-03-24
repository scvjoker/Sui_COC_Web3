---
wave: 2
depends_on: ["01-contract-foundation-PLAN.md"]
files_modified:
  - "coc_frontend/src/App.tsx"
  - "coc_frontend/src/components/WalletConnect.tsx"
  - "coc_frontend/src/components/CreateProfile.tsx"
  - "coc_frontend/src/components/DiceRoller.tsx"
autonomous: true
---

# Plan 02: Frontend Foundation Integration

## Objective
Implement a sleek wallet connection, Profile creation UI requiring 1 SUI, and an immersive 3D6 minting sequence prioritizing dramatic animation before revealing stats, along with single-stat reroll components.

## Context
Ref: `.planning/phases/01-foundation--investigator-minting/01-CONTEXT.md`
- Wallet prompt must not block lobby browsing.
- Dice roll requires substantial narrative animation to build tension.

## Requirements
- **INFRA-01**: User can connect Web3 wallet securely on the frontend.
- **MECH-01**: Mint and reroll interface implemented on the client.

## Tasks

<task>
<read_first>
- `coc_frontend/package.json`
- `coc_frontend/src/App.tsx`
- `@mysten/dapp-kit` documentation
</read_first>
<action>
Implement `WalletConnect.tsx` using `@mysten/dapp-kit` UI components (`<ConnectButton />`). Place it in the general layout header but do NOT force it via modal on initial load. Users can browse freely.
Add `CreateProfile.tsx` triggering the `create_profile` smart contract call (passing 1 SUI) only when the user intends to play.
</action>
<acceptance_criteria>
- `WalletConnect.tsx` contains `<ConnectButton />`.
- `<WalletProvider>` wraps the root in `App.tsx` (or parent provider).
- App compiles without errors (`npm run build`).
</acceptance_criteria>
</task>

<task>
<read_first>
- `coc_frontend/src/components/DiceRoller.tsx` (if exists, or new)
</read_first>
<action>
Draft the core UI for the character minting process (`InvestigatorMint.tsx`). Build a `DiceRoller` component with an animated CSS state to visually represent "rolling" for a few seconds before revealing the 3D6 results retrieved from the contract's VRF emission.
Add individual `Reroll` buttons next to each of the 9 base stats, triggering `reroll_attribute`.
</action>
<acceptance_criteria>
- `InvestigatorMint.tsx` renders 9 stat blocks with individual reroll buttons.
- `DiceRoller.tsx` incorporates standard CSS animations (e.g., spinning or flashing numbers) before confirming final state.
</acceptance_criteria>
</task>
