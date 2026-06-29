import { books } from './catalog'
import { BookList } from './components/BookList'

function App() {
  return (
    <main>
      <h1>Development Books</h1>
      <BookList books={books} />
    </main>
  )
}

export default App
