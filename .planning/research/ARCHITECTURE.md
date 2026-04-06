# Architecture Research

## System Structure
- **Object-Oriented Smart Contracts**: Each TRPG entity (Investigator, Scenario, Item) is an independent Sui Object.
- **Shared Objects**: Scenarios act as Shared Objects where multiple players and the KP interact simultaneously.
- **Owned Objects**: Investigator NFTs and personal tokens are strictly Owned Objects for security and fast-path execution.

## Data Flow
- **Session Setup**: KP creates Scenario Shared Object -> Players lock Investigator Objects into it.
- **Gameplay Resolution**: Frontend requests random number -> `sui::random` generates outcome -> Event emitted -> Frontend updates UI.
- **Session Teardown**: KP submits closing report -> Objects unlocked/updated -> Tokens distributed/slashed based on outcome.

## Build Order
1. Core entity objects (Investigator, Profile)
2. Game mechanics (VRF Dice, Item logic)
3. Session/Scenario lifecycle (Escrow, Time-locks)
4. Frontend integration and VTT polish
