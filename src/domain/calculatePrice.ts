const BOOK_PRICE = 50

const DISCOUNT_BY_SET_SIZE: Record<number, number> = {
  1: 0,
  2: 0.05,
  3: 0.1,
  4: 0.2,
  5: 0.25,
}

export function calculatePrice(bookIds: string[]): number {
  return minPrice(countByTitle(bookIds))
}

function minPrice(counts: number[]): number {
  const piles = counts.filter((c) => c > 0)
  if (piles.length === 0) return 0

  let best = Infinity  
  for (let size = 1; size <= piles.length; size++) {
    const remaining = removeOneFromLargest(piles, size)
    best = Math.min(best, priceForSet(size) + minPrice(remaining))
  }
  return best
}

function removeOneFromLargest(piles: number[], size: number): number[] {
  const sorted = [...piles].sort((a, b) => b - a)
  for (let i = 0; i < size; i++) sorted[i]--
  return sorted
}

function countByTitle(bookIds: string[]): number[] {
  const counts = new Map<string, number>()
  for (const id of bookIds) {
    counts.set(id, (counts.get(id) ?? 0) + 1)
  }
  return [...counts.values()]
}

function priceForSet(size: number): number {
  return size * BOOK_PRICE * (1 - DISCOUNT_BY_SET_SIZE[size])
}
