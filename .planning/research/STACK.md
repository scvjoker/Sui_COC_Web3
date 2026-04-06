# Stack Research

## Recommended Stack
- **Smart Contracts**: Sui Move. Why: Object-centric model maps perfectly to TRPG entities (Characters, Scenarios, Items). Native VRF (`sui::random`) is essential for trustless dice rolls.
- **Frontend**: React + TypeScript + Vite. Why: Industry standard, broad talent pool, excellent Sui dApp Kit support (`@mysten/dapp-kit`).
- **Styling**: Tailwind CSS. Why: Rapid UI development for complex VTT dashboards.
- **Oracle**: Pyth Network. Why: Leading low-latency oracle on Sui, critical for real-time SUI/USDC exchange rates.
- **State Management**: TanStack Query (React Query). Why: Seamless integration with Sui RPC calls for caching and polling on-chain state.

## What NOT to use
- **EVM/Solidity**: Gas costs and sequential transaction processing make complex TTRPG mechanics prohibitively expensive and slow.
- **Traditional Backend (Node.js/Python DB)**: Defeats the purpose of a trustless system. Core logic and state must remain on-chain to prevent KP/Player disputes.
