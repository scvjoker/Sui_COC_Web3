# Research Summary

## Key Findings

### Technical Stack
The optimal stack relies heavily on Sui Move for all core logical entities (Characters, Scenarios, Dice Rolls) because of its object-centric model and native VRF (`sui::random`). The frontend should use React, Vite, and Tailwind CSS, fetching on-chain data via `@mysten/dapp-kit` and polling with React Query.

### Crucial Mechanisms (Table Stakes & Differentiators)
A Web3 TRPG must have on-chain character storage and verifiable dice rolling. The true differentiator for CoC-W3P is its dual-staking model and rigorous token sinks (e.g., character death permanently burns the NFT and associated assets, leaving only a commemorative SBT).

### Technical Pitfalls
The most dangerous pitfalls involve VRF manipulation (players front-running bad rolls) and economic death spirals (over-issuance of reward tokens without sufficient sinks). Architecture must enforce state transitions atomically and use time-locks to prevent KP/Player abandonment.
