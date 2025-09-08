import { useState } from 'react'
import { login } from '../api/auth'

export default function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [welcome, setWelcome] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setWelcome(null)

    if (!username || !password) {
      setError('Username and password are required')
      return
    }

    setLoading(true)
    try {
      await login(username, password)
      setWelcome(`Welcome, ${username}!`)
    } catch (err: any) {
      setError(err?.message ?? 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit} aria-label="login form">
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type="submit" disabled={loading}>
        {loading ? 'Logging in…' : 'Log in'}
      </button>

      {error && <div role="alert">{error}</div>}
      {welcome && <p>{welcome}</p>}
    </form>
  )
}