# Directory Structure

## Repository Layout
```
/
├── coc_frontend/     # React Single Page Application
│   ├── src/          # Frontend source code
│   │   ├── main.tsx  # React entry point
│   │   ├── App.tsx   # Main application component
│   │   └── dapp-kit.ts # Wallet/Sui network configuration
│   └── package.json  # NPM dependencies and scripts
└── coc_web3/         # Sui Move Smart Contracts
    ├── sources/      # Move source files (.move)
    │   ├── coc_dice.move
    │   ├── coc_investigator.move
    │   ├── coc_invoice_bridge.move
    │   ├── coc_marketplace.move
    │   ├── coc_profile.move
    │   └── coc_scenario.move
    └── Move.toml     # Move package definition and dependencies
```

## Key Locations
- **Frontend Entry**: `coc_frontend/src/main.tsx` handles mounting the React app into the DOM.
- **Contracts Entry**: `coc_web3/sources/` contains all the Move smart contracts organizing the game's logic.

## Naming Conventions
- React components use PascalCase (e.g., `App.tsx`).
- Move modules are named with snake_case and prefixed with `coc_` (e.g., `coc_profile.move`).
- Configuration files follow standard names (`package.json`, `Move.toml`).
