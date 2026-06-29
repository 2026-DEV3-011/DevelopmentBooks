# Development Books

A small React + TypeScript application that calculates the price of a shopping
basket of software-development books, applying the editor's bulk discounts.

## Prerequisites

- [Node.js](https://nodejs.org/) 22.12+ (tested on 24 LTS)
- npm

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server on http://localhost:5173
```

## Available scripts

| Command              | Description                          |
| -------------------- | ------------------------------------ |
| `npm run dev`        | Start the Vite dev server            |
| `npm run build`      | Type-check and build for production  |
| `npm run preview`    | Preview the production build locally |
| `npm run lint`       | Lint the codebase                    |
| `npm test`           | Run the test suite once              |
| `npm run test:watch` | Run the tests in watch mode          |

## The kata

Every book costs **50 EUR**. Buying _distinct_ titles earns a discount on that
set of books:

| Distinct titles | Discount |
| --------------- | -------- |
| 2               | 5%       |
| 3               | 10%      |
| 4               | 20%      |
| 5               | 25%      |

The application computes the **cheapest** possible price for any basket which
means it must find the optimal grouping of books into sets, not simply the
largest sets.

## Project structure

```
src/
  domain/        Pure pricing logic, no React — calculatePrice (+ tests)
  basket/        Basket state (Context + provider) and pure operations
  components/    Presentational React components
  catalog.ts     The hardcoded book catalog
```

## Design decisions

- **TDD throughout the domain.** The pricing logic was built test-first
  (red → green → refactor).
- **Pure domain, isolated from the UI.** `src/domain` has no React or DOM
  dependency. `calculatePrice` works on book identifiers and a discount table. The UI and catalog depend on it, never the reverse.
- **Logic extracted out of components.** Basket operations (`addItem`,
  `removeItem`, `basketTotal`) are pure functions, testable without a DOM.
- **React Context for the basket.** The basket is shared between the catalog and
  the total view. Context avoids prop-drilling. Redux would be overkill here.
- **KISS / YAGNI.** Hardcoded catalog (no backend needed), no memoization
  (unnecessary for five titles), discounts kept as configurable data.
