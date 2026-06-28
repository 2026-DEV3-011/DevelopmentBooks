const BOOK_PRICE = 50

const DISCOUNT_BY_SET_SIZE: Record<number, number> = {
  1: 0,
  2: 0.05,
  3: 0.1,
  4: 0.2,
  5: 0.25,
}

export function calculatePrice(bookIds: string[]): number {
  const counts = countByTitle(bookIds)
  let total = 0

  while (counts.some((n) => n > 0)) {
    const setSize = counts.filter((n) => n > 0).length
    total += setSize * BOOK_PRICE * (1 - DISCOUNT_BY_SET_SIZE[setSize])
    for (let i = 0; i < counts.length; i++) {
      if (counts[i] > 0) counts[i]--
    }
  }

  return total
}

function countByTitle(bookIds: string[]): number[] {
  const counts = new Map<string, number>()
  for (const id of bookIds) {
    counts.set(id, (counts.get(id) ?? 0) + 1)
  }
  return [...counts.values()]
}
