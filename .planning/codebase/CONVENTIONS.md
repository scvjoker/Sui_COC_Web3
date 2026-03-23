# Conventions

## Frontend (`coc_frontend`)
- **Linting & Formatting**: The project uses ESLint flat config (`eslint.config.js`) utilizing recommended rules from:
  - `@eslint/js`
  - `typescript-eslint`
  - `eslint-plugin-react-hooks`
  - `eslint-plugin-react-refresh`
- **Typing**: TypeScript is strictly enforced using standard `tseslint.configs.recommended`.
- **Styling**: Tailwind CSS utility classes are the primary styling mechanism.

## Smart Contracts (`coc_web3`)
- **Naming**: Standard Move conventions apply. Modules and functions are `snake_case` (e.g., `coc_investigator`, `roll_dice`).
- **File Structure**: Each major domain entity is separated into its own `.move` file under the `sources/` directory.
