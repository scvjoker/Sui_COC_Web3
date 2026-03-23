# Tech Stack

## Language & Runtime
- **TypeScript / JavaScript**: Primary languages for frontend logic.
- **Node.js**: Underlying runtime for frontend build tools.
- **Move**: Smart contract language for the Sui network (`coc_web3`).

## Frameworks & Libraries
- **React 19**: Frontend UI library (`coc_frontend/package.json`).
- **Vite 8**: Frontend build tool and dev server.
- **Tailwind CSS 4**: Utility-first CSS framework for styling.
- **React Query 5**: Data fetching and state management (`@tanstack/react-query`).
- **Lucide React**: Icon library.

## Blockchain / Web3
- **Sui Framework**: Target blockchain environment for smart contracts (`coc_web3/Move.toml`).
- **Sui dApp Kit**: Integration library for frontend wallet connection and RPC (`@mysten/dapp-kit-react`, `@mysten/sui`).

## Architecture Constraints
- The frontend interacts with Sui smart contracts.
- Move smart contracts rely on the `OnchainInvoice` dependency.
