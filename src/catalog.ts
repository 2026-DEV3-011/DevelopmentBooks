export interface Book {
  id: string
  title: string
  author: string
  year: number
}

export const books: Book[] = [
  { id: 'clean-code', title: 'Clean Code', author: 'Robert Martin', year: 2008 },
  {
    id: 'clean-coder',
    title: 'The Clean Coder',
    author: 'Robert Martin',
    year: 2011,
  },
  {
    id: 'clean-architecture',
    title: 'Clean Architecture',
    author: 'Robert Martin',
    year: 2017,
  },
  {
    id: 'tdd-by-example',
    title: 'Test Driven Development by Example',
    author: 'Kent Beck',
    year: 2003,
  },
  {
    id: 'legacy-code',
    title: 'Working Effectively With Legacy Code',
    author: 'Michael C. Feathers',
    year: 2004,
  },
]

export function findBook(id: string): Book | undefined {
  return books.find((book) => book.id === id)
}
