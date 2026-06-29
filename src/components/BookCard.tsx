import type { Book } from '../catalog'
import { useBasket } from '../basket/BasketContext'

export function BookCard({ book }: { book: Book }) {
  const { items, add, remove } = useBasket()
  const quantity = items[book.id] ?? 0

  return (
    <article>
      <h2>{book.title}</h2>
      <p>
        {book.author} - {book.year}
      </p>
      <div>
        <button
          type="button"
          onClick={() => remove(book.id)}
          disabled={quantity === 0}
          aria-label={`Remove one ${book.title}`}
        >
          −
        </button>
        <span>{quantity}</span>
        <button
          type="button"
          onClick={() => add(book.id)}
          aria-label={`Add one ${book.title}`}
        >
          +
        </button>
      </div>
    </article>
  )
}
