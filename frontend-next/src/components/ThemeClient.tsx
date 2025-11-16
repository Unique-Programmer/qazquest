'use client'

import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'

export function ThemeClient() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [mounted, setMounted] = useState(false)

  // Выполняется только на клиенте — можно читать document
  useEffect(() => {
    const current =
      document.documentElement.dataset.theme || 'light'

    setTheme(current as 'light' | 'dark')
    setMounted(true)
  }, [])

  // Переключение темы
  const toggle = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)

    document.documentElement.dataset.theme = next
    localStorage.setItem('theme', next)
    Cookies.set('theme', next, { path: '/' })
  }

  // Пока не смонтировался — ничего не показываем (чтобы не мигало)
  if (!mounted) return null

  return (
    <button
      onClick={toggle}
      className="fixed bottom-4 right-4 px-3 py-2 bg-gray-800 text-white rounded shadow"
    >
      Theme: {theme}
    </button>
  )
}
