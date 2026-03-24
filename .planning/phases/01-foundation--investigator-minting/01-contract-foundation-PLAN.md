---
wave: 1
depends_on: []
files_modified:
  - "coc_web3/sources/coc_profile.move"
  - "coc_web3/sources/coc_investigator.move"
autonomous: true
---

# Plan 01: Core Web3 Foundation Contracts

## Objective
Implement the `coc_profile` module for user registration (costing 1 SUI) and the `coc_investigator` module for minting 3D6 characters with single-attribute reroll functionality.

## Context
Ref: `.planning/phases/01-foundation--investigator-minting/01-CONTEXT.md`
- Registration costs SUI to prevent spam.
- Characters have 3D6 attributes and allow granular rerolls via Game Token or placeholder balance.

## Requirements
- **INFRA-02**: KP and Player abstraction profiles (`CoreProfile`) exist on-chain.
- **MECH-01**: Players can mint a complete Investigator NFT and spend Game Token for rerolls.

## Tasks

<task>
<read_first>
- `coc_web3/sources/coc_profile.move` (if exists, or new)
</read_first>
<action>
Create `coc_profile.move` module defining a `CoreProfile` object.
In the `init` function, create an `AdminCap` (transferred to the deployer) and a `Treasury` shared object to collect fees.
Implement `create_profile(treasury: &mut Treasury, payment: Coin<SUI>, ctx: &mut TxContext)` that requires exactly `1_000_000_000` MIST (1 SUI) using `coin::value(&payment) == 1_000_000_000`. The payment is deposited into the `Treasury` balance.
Implement `withdraw_fees(_cap: &AdminCap, treasury: &mut Treasury, amount: u64, ctx: &mut TxContext)` to allow the admin to withdraw collected SUI to their address.
The profile must track `player_reputation: u64`, `kp_reputation: u64`, and `escape_count: u64`, defaulting to 100, 100, and 0 respectively.
</action>
<acceptance_criteria>
- `coc_web3/sources/coc_profile.move` contains `struct CoreProfile`, `struct AdminCap`, and `struct Treasury`.
- `init` function properly initializes the admin cap and shared treasury.
- Contains `public fun create_profile` that takes `Coin<SUI>` and deposits it.
- Contains `public fun withdraw_fees` protected by `AdminCap`.
- Output from `sui move build` inside `coc_web3` has 0 errors.
</acceptance_criteria>
</task>

<task>
<read_first>
- `coc_web3/sources/coc_investigator.move` (if exists, or new)
</read_first>
<action>
Create `coc_investigator.move` module defining an `Investigator` NFT object.
Implement `mint_investigator` utilizing `sui::random::Random` to generate 3D6 combinations for at least the 9 basic attributes.
Implement `reroll_attribute(investigator: &mut Investigator, attribute_name: String, payment: Coin<GAME_TOKEN>, ctx: &mut TxContext)` ensuring payment covers the cost and uses `sui::random` to replace that specific attribute.
</action>
<acceptance_criteria>
- `coc_web3/sources/coc_investigator.move` contains `public fun mint_investigator`.
- Uses `sui::random::Random` context for generation.
- Contains `public fun reroll_attribute` that targets an attribute by name.
- Output from `sui move build` inside `coc_web3` has 0 errors.
</acceptance_criteria>
</task>
