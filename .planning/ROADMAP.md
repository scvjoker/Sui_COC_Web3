# Roadmap

## Phase 1: Foundation & Investigator Minting
**Goal:** Ensure users can connect wallets, create their CoreProfiles, and realistically mint Investigator NFTs with token constraints.
**Requirements:** INFRA-01, INFRA-02, MECH-01

### Success Criteria
- [ ] User can connect Web3 wallet securely on the frontend.
- [ ] User can initialize a `CoreProfile` on-chain, storing reputation scores.
- [ ] User can mint an Investigator NFT, utilizing traditional 3D6 logic, and has the option to spend Game Token for rerolls.

## Phase 2: Scenario Economic Core & VRF
**Goal:** Establish the scenario active lifecycle, financial escrow, and core dice mechanics via `sui::random`.
**Requirements:** ECON-01, ECON-02, MECH-02

### Success Criteria
- [ ] KP can create a new Scenario Shared Object by locking SUI/USDC margin deposit.
- [ ] Players can securely lock their Investigator and entry fee to join a Scenario.
- [ ] Frontend triggers `sui::random` via contract to generate a verifiable 1-100 outcome, emitted as an event.

## Phase 3: Resolution, Oracles & Reputation
**Goal:** Finalize the post-game lifecycle including closing reports, token burning, and integrate Pyth for pricing.
**Requirements:** ECON-03, ECON-04, MECH-03, MECH-04

### Success Criteria
- [ ] KP submits a closing report on-chain determining character survival and stat changes.
- [ ] Smart contract requires KP to pay collateral if stat growth points exceed the acceptable limit.
- [ ] Game Token burns correctly during economy interactions and Investigator permanent death.
- [ ] Pyth Oracle fetches SUI/USDC exchange rates representing in-game currency conversions smoothly.

## Phase 4: Virtual Tabletop UI & Theming (VTT)
**Goal:** Apply 1920s horror immersive styling and achievement visuals to the frontend.
**Requirements:** VTT-01, VTT-02, VTT-03

### Success Criteria
- [ ] Frontend styled with dark newspaper and flesh scroll aesthetics utilizing Tailwind.
- [ ] Action triggers specific UI animations (e.g., negative Sanity triggers graphic distortion).
- [ ] A "Valhalla" UI section queries and displays deceased NFT/SBT Investigators on the player's CoreProfile.
