import type { Book } from '../catalog'

export function BookCard({ book }: { book: Book }) {
  return (
    <article>
      <h2>{book.title}</h2>
      <p>
        {book.author} · {book.year}
      </p>
    </article>
  )
}
