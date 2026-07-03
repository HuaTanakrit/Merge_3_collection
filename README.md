# Merge Sorted Collections

TypeScript implementation of a `merge` function that combines three sorted number collections into one ascending sorted array.

## Problem

Implement this function:

```ts
merge(collection1: number[], collection2: number[], collection3: number[]): number[]
```

Given:

- `collection1` is already sorted from min to max.
- `collection2` is already sorted from min to max.
- `collection3` is already sorted from max to min.
- Do not use any built-in sort function.

The function returns a new array sorted in ascending order.

## Setup

Install dependencies:

```bash
npm install
```

## Run Type Check

```bash
npm run typecheck
```

## Run Unit Tests

```bash
npm test
```

## Project Structure

```text
src/
  merge.ts       # merge implementation
  merge.test.ts  # unit tests
```
