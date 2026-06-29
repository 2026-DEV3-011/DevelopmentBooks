// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import App from './App'
import { BasketProvider } from './basket/BasketProvider'

function renderApp() {
  return render(
    <BasketProvider>
      <App />
    </BasketProvider>,
  )
}

describe('App', () => {
  it('lists books from the catalog', () => {
    renderApp()

    expect(screen.getByText('Clean Code')).toBeInTheDocument()
    expect(screen.getByText('The Clean Coder')).toBeInTheDocument()
  })

  it('shows the discounted total after adding two distinct books', async () => {
    const user = userEvent.setup()
    renderApp()

    await user.click(screen.getByRole('button', { name: 'Add one Clean Code' }))
    await user.click(
      screen.getByRole('button', { name: 'Add one The Clean Coder' }),
    )

    expect(screen.getByTestId('basket-total')).toHaveTextContent('95.00 EUR')
  })

  it('removes a book and updates the total', async () => {
    const user = userEvent.setup()
    renderApp()

    await user.click(screen.getByRole('button', { name: 'Add one Clean Code' }))
    await user.click(
      screen.getByRole('button', { name: 'Remove one Clean Code' }),
    )

    expect(screen.getByTestId('basket-total')).toHaveTextContent('0.00 EUR')
  })
})
