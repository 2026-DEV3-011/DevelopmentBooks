import { useState, type ReactNode } from 'react'

import { BasketContext } from './BasketContext'
import { addItem, removeItem, type BasketItems } from './basketItems'

export function BasketProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<BasketItems>({})

  const add = (bookId: string) => {
    setItems((current) => addItem(current, bookId))
  }

  const remove = (bookId: string) => {
    setItems((current) => removeItem(current, bookId))
  }

  return (
    <BasketContext.Provider value={{ items, add, remove }}>
      {children}
    </BasketContext.Provider>
  )
}
