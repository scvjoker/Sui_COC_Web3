# Requirements

## v1 Requirements

### Core Infrastructure (INFRA)
- [ ] **INFRA-01**: User can connect Web3 wallet via Sui dApp Kit.
- [ ] **INFRA-02**: KP and Player abstraction profiles (`CoreProfile`) exist on-chain to track dual-dimensional reputation and escape counts.

### Game Economy & Escrow (ECON)
- [ ] **ECON-01**: KP can put up a SUI/USDC margin deposit to create a new Scenario Shared Object.
- [ ] **ECON-02**: Player can pay an entry fee and lock their Investigator NFT to join a Scenario.
- [ ] **ECON-03**: Pyth Oracle integration automatically calculates Game Token to USDC exchange rates for in-game purchases.
- [ ] **ECON-04**: Game Token is burned on specific interactions (e.g., marketplace purchases, character death).

### Tabletop Mechanics (MECH)
- [ ] **MECH-01**: Players can mint a complete Investigator NFT (requires Game Token payment for attributes reroll).
- [ ] **MECH-02**: Smart contract logic integrates `sui::random` to generate secure 1~100 VRF dice rolls and broadcasts events to the frontend.
- [ ] **MECH-03**: Scenario state updates require KP to submit structured closing reports assessing Investigator stats.
- [ ] **MECH-04**: KP must pay Game Token collateral if assigning unusually high stat growth points to an Investigator.

### Virtual Tabletop UI (VTT)
- [ ] **VTT-01**: User interface features a 1920s horror thematic design (old newspaper, flesh scrolls).
- [ ] **VTT-02**: UI visually reflects on-chain events (e.g., screen animations when Sanity drops).
- [ ] **VTT-03**: Users can view a "Valhalla" achievement wall in their CoreProfile for deceased Investigators (SBTs).

## v2 Requirements (Deferred)
- **KP Exam System**: AI-driven KP certification exam and simulated onboarding.
- **Complex In-Game Marketplace**: P2P trading features (currently disabled to preserve game balance).

## Out of Scope
- **Fully On-Chain Chat/Voice**: Too expensive and slow. Roleplaying communication will be deferred to Discord.
- **Off-Platform Item Trading**: Banned to prevent pay-to-win mechanics from breaking scenario difficulty.

## Traceability
- **INFRA-01**: Phase 1
- **INFRA-02**: Phase 1
- **MECH-01**: Phase 1
- **ECON-01**: Phase 2
- **ECON-02**: Phase 2
- **MECH-02**: Phase 2
- **ECON-03**: Phase 3
- **ECON-04**: Phase 3
- **MECH-03**: Phase 3
- **MECH-04**: Phase 3
- **VTT-01**: Phase 4
- **VTT-02**: Phase 4
- **VTT-03**: Phase 4
