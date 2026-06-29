import { createContext, useContext } from 'react'

export type BasketItems = Record<string, number>

export interface BasketContextValue {
  items: BasketItems
  add: (bookId: string) => void
  remove: (bookId: string) => void
}

export const BasketContext = createContext<BasketContextValue | null>(null)

export function useBasket(): BasketContextValue {
  const context = useContext(BasketContext)
  if (!context) {
    throw new Error('useBasket must be used within a BasketProvider')
  }
  return context
}
