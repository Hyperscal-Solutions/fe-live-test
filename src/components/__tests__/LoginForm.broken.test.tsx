import { render, screen, fireEvent } from '@testing-library/react'
import LoginForm from '../LoginForm'

test('BROKEN: shows welcome on successful login', () => {
  render(<LoginForm />)

  fireEvent.change(screen.getByLabelText(/username/i), { target: { value: 'admin' } })
  fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'secret' } })
  fireEvent.click(screen.getByRole('button', { name: /log in/i }))

  expect(screen.getByText(/welcome, admin/i)).toBeInTheDocument()
})