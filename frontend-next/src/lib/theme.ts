import { cookies } from 'next/headers'

export async function getServerTheme(): Promise<'light' | 'dark'> {
  const store = await cookies()
  const value = store.get('theme')?.value
  return value === 'dark' ? 'dark' : 'light'
}
