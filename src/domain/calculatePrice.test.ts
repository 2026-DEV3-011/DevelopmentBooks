import { describe, it, expect } from 'vitest'

import { calculatePrice } from './calculatePrice'

describe('calculatePrice', () => {
  it('charges nothing for an empty basket', () => {
    expect(calculatePrice([])).toBe(0)
  })

  it('does not discount multiple copies of the same title', () => {
    expect(calculatePrice(['clean-code', 'clean-code'])).toBe(100)
  })

  it('applies a 5% discount for two distinct titles', () => {
    expect(calculatePrice(['clean-code', 'clean-coder'])).toBe(95)
  })

  it('applies a 10% discount for three distinct titles', () => {
    expect(
      calculatePrice(['clean-code', 'clean-coder', 'clean-architecture']),
    ).toBe(135)
  })

  it('applies a 20% discount for four distinct titles', () => {
    expect(
      calculatePrice(['clean-code', 'clean-coder', 'clean-architecture', 'tdd']),
    ).toBe(160)
  })

  it('applies a 25% discount for five distinct titles', () => {
    expect(
      calculatePrice([
        'clean-code',
        'clean-coder',
        'clean-architecture',
        'tdd',
        'legacy',
      ]),
    ).toBe(187.5)
  })
})
