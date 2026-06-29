import { calculatePrice } from '../domain/calculatePrice'

export type BasketItems = Record<string, number>

export function addItem(items: BasketItems, bookId: string): BasketItems {
  return { ...items, [bookId]: (items[bookId] ?? 0) + 1 }
}

export function removeItem(items: BasketItems, bookId: string): BasketItems {
  const quantity = (items[bookId] ?? 0) - 1
  const next = { ...items }
  if (quantity > 0) next[bookId] = quantity
  else delete next[bookId]
  return next
}

export function basketTotal(items: BasketItems): number {
  const bookIds = Object.entries(items).flatMap(([id, quantity]) =>
    Array<string>(quantity).fill(id),
  )
  return calculatePrice(bookIds)
}
