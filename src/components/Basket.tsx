import { useBasket } from '../basket/BasketContext'
import { basketTotal } from '../basket/basketItems'
import { findBook } from '../catalog'

export function Basket() {
  const { items } = useBasket()
  const lines = Object.entries(items)
  const total = basketTotal(items)

  return (
    <aside className="basket">
      <h2>Basket</h2>
      {lines.length === 0 ? (
        <p>Your basket is empty.</p>
      ) : (
        <ul>
          {lines.map(([id, quantity]) => (
            <li key={id}>
              {quantity} × {findBook(id)?.title ?? id}
            </li>
          ))}
        </ul>
      )}
      <p>
        <strong>Total: {total.toFixed(2)} EUR</strong>
      </p>
    </aside>
  )
}
