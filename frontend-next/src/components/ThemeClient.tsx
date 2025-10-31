'use client'

import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'

export function ThemeClient() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const stored =
      document.documentElement.dataset.theme ||
      localStorage.getItem('theme') ||
      'light'

    // ✅ проверяем, что значение корректное
    if (stored === 'light' || stored === 'dark') {
      setTheme(stored)
    } else {
      setTheme('light')
    }
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
    Cookies.set('theme', theme, { path: '/' })
  }, [theme])

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="fixed bottom-4 right-4 px-3 py-2 bg-gray-800 text-white rounded shadow"
    >
      Theme: {theme}
    </button>
  )
}
