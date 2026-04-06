# Pitfalls Research

## Common Mistakes
1. **VRF Manipulation**: Failing to secure the randomness generator, allowing players to predict or abort bad rolls.
   - *Prevention*: Use native `sui::random` correctly, ensuring the transaction requesting the roll also resolves the outcome in the same atomic block if possible, or use a secure commit-reveal if asynchronous.
2. **Economic Death Spiral**: Issuing reward tokens without enough sinks.
   - *Prevention*: Strict token sinks like high-cost character rerolls, item durability, and permanent asset burning upon character death.
3. **State Bloat**: Storing too much narrative text on-chain.
   - *Prevention*: Store only mechanical state (stats, inventory, status effects) on-chain. Narrative flavor text and images should live on IPFS/Arweave or the frontend.
4. **Front-running**: Players seeing a bad roll event and trying to withdraw their character before the consequence is applied.
   - *Prevention*: Once a character is locked into a Scenario Shared Object, they cannot be withdrawn until the KP resolves the session or a time-lock expires.
