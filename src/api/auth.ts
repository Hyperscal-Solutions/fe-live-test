export async function login(username: string, password: string): Promise<{ token: string }> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'admin' && password === 'secret') {
        resolve({ token: 'fake-token' })
      } else {
        reject(new Error('Invalid credentials'))
      }
    }, 200)
  })
}