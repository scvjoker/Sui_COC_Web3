# Concerns

## Technical Debt & Known Issues
- **Missing Test Coverage**: Both the frontend (`coc_frontend`) and smart contracts (`coc_web3`) currently lack automated tests. This is a significant concern for maintaining business logic and smart contract security over time.
- **Unfinished Implementations in Dependencies**: The `sui_workshop_3` directory contains several unimplemented UI features in `front-end/src/InvoiceBoard.tsx` (e.g., "Implement USDC minting logic", "Implement Claim Prize logic"). It's currently unclear if this workshop frontend is meant to be shipped or is just reference material for the `OnchainInvoice` contract.

## Fragile Areas
- Integration points with `OnchainInvoice` need careful consideration due to the unfinished state of the workshop logic.
