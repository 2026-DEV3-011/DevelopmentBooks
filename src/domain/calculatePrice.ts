const BOOK_PRICE = 50

const DISCOUNT_BY_DISTINCT_COUNT: Record<number, number> = {
  2: 0.05,
  3: 0.1,
  4: 0.2,
  5: 0.25,
}

export function calculatePrice(bookIds: string[]): number {
  const distinctCount = new Set(bookIds).size
  const discount = DISCOUNT_BY_DISTINCT_COUNT[distinctCount] ?? 0

  return bookIds.length * BOOK_PRICE * (1 - discount)
}
