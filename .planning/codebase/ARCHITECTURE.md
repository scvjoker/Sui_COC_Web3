# Architecture

## High-Level Pattern
The project uses a dApp architecture:
- **Client**: A React 19 single-page application built with Vite, styled with Tailwind CSS, connecting to the blockchain via `@mysten/dapp-kit-react`.
- **Backend / Smart Contracts**: Sui Move contracts managing business logic for a tabletop-like system (Call of Cthulhu).

## Components & Data Flow

### Frontend (`coc_frontend/`)
- **UI Layer**: React components in `src/`. `main.tsx` is the application entry point.
- **State & Data Fetching**: React Query is set up via `@tanstack/react-query` to handle remote state and caching.
- **Blockchain Integration**: `src/dapp-kit.ts` likely configures the Sui network connection and wallet provider. Data flows from the Sui network to the UI through the dApp kit context.

### Smart Contracts (`coc_web3/`)
- **Domain Entities**:
  - `coc_profile.move`: Handles user accounts and player profiles on-chain.
  - `coc_investigator.move`: Defines character (investigator) models and attributes.
  - `coc_scenario.move`: Contains logic for game scenarios and campaigns.
- **Mechanics**:
  - `coc_dice.move`: Handles dice roll logic essential for tabletop RPG resolution.
- **Economy / Modules**:
  - `coc_marketplace.move`: Provides trading or purchasing logic for game assets.
  - `coc_invoice_bridge.move`: Acts as a bridge to external OnchainInvoice tooling.

## Component Dependencies
- Frontend connects directly to the Sui RPC, calling entry functions on `coc_web3` modules.
- `coc_invoice_bridge.move` depends on the `OnchainInvoice` package defined in `Move.toml`.
