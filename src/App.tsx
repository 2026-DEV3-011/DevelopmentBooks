import { books } from './catalog'
import { BookList } from './components/BookList'
import { Basket } from './components/Basket'

function App() {
  return (
    <main>
      <h1>Development Books</h1>
      <div className="layout">
        <BookList books={books} />
        <Basket />
      </div>
    </main>
  )
}

export default App
