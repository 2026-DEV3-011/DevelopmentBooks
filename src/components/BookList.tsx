import type { Book } from '../catalog'
import { BookCard } from './BookCard'

export function BookList({ books }: { books: Book[] }) {
  return (
    <ul className="catalog">
      {books.map((book) => (
        <li key={book.id}>
          <BookCard book={book} />
        </li>
      ))}
    </ul>
  )
}
