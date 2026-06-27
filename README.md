# Development Books

A small React + TypeScript application that calculates the price of a shopping
basket of software-development books, applying the editor's bulk discounts.

## Prerequisites

- [Node.js](https://nodejs.org/) 24 (LTS)
- npm

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server on http://localhost:5173
```

## Available scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`        | Start the Vite dev server                  |
| `npm run build`      | Type-check and build for production        |
| `npm run preview`    | Preview the production build locally       |
| `npm run lint`       | Lint the codebase                          |
| `npm test`           | Run the test suite once                    |
| `npm run test:watch` | Run the tests in watch mode                |

## The kata

Every book costs **50 EUR**. Buying *distinct* titles earns a discount on that
set of books:

| Distinct titles | Discount |
| --------------- | -------- |
| 2               | 5%       |
| 3               | 10%      |
| 4               | 20%      |
| 5               | 25%      |

The application computes the **cheapest** possible price for any basket — which
means it must find the optimal grouping of books into sets, not simply the
largest sets.

## Design decisions

TODO
