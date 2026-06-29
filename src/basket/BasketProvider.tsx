import { useState, type ReactNode } from 'react'

import { BasketContext, type BasketItems } from './BasketContext'

export function BasketProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<BasketItems>({})

  const add = (bookId: string) => {
    setItems((current) => ({ ...current, [bookId]: (current[bookId] ?? 0) + 1 }))
  }

  const remove = (bookId: string) => {
    setItems((current) => {
      const quantity = (current[bookId] ?? 0) - 1
      const next = { ...current }
      if (quantity > 0) next[bookId] = quantity
      else delete next[bookId]
      return next
    })
  }

  return (
    <BasketContext.Provider value={{ items, add, remove }}>
      {children}
    </BasketContext.Provider>
  )
}
