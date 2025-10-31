'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { languages, defaultLocale } from '@/i18n/settings'

export function LanguageSwitch() {
  const pathname = usePathname()
  const router = useRouter()
  const [current, setCurrent] = useState<string | null>(null) // ← нет SSR-значения

  // безопасно определяем язык только на клиенте
  useEffect(() => {
    const lng = pathname.split('/')[1] || defaultLocale
    setCurrent(lng)
  }, [pathname])

  const change = (lng: string) => {
    Cookies.set('lang', lng, { path: '/', expires: 365 })
    localStorage.setItem('lang', lng)

    const parts = pathname.split('/')
    parts[1] = lng
    const newPath = parts.join('/')
    setCurrent(lng)
    router.push(newPath)
  }

  // пока не определён язык — ничего не рендерим (во время SSR)
  if (!current) return null

  return (
    <select
      value={current}
      onChange={(e) => change(e.target.value)}
      className="mt-4 block w-full rounded border px-2 py-1 text-sm bg-transparent text-gray-800 dark:text-gray-200"
    >
      {languages.map((lng) => (
        <option key={lng} value={lng}>
          {lng.toUpperCase()}
        </option>
      ))}
    </select>
  )
}
