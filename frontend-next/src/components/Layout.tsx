'use client'
import { useState } from 'react'
import { Drawer, Button, IconButton } from '@material-tailwind/react'
import { useTheme } from '@/context/ThemeContext'
import { useTranslation } from 'react-i18next'

export default function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const { theme, toggle } = useTheme()
  const { t, i18n } = useTranslation()

  const changeLang = (lng: string) => i18n.changeLanguage(lng)

  return (
    <div className={`min-h-screen flex bg-bgLight dark:bg-bgDark text-slate-900 dark:text-slate-100 transition-colors`}>
      {/* Sidebar для desktop */}
      <aside className="hidden md:flex flex-col w-64 p-6 border-r border-slate-200 dark:border-slate-700">
        <h1 className="text-xl font-bold mb-6 text-accent">KazQuest</h1>
        <nav className="flex flex-col gap-3">
          <a href="/" className="hover:text-accent">{t('home')}</a>
          <a href="/map" className="hover:text-accent">{t('map')}</a>
          <a href="/profile" className="hover:text-accent">{t('profile')}</a>
          <a href="/login" className="hover:text-accent">{t('login')}</a>
        </nav>
        <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-200 dark:border-slate-700">
          <Button size="sm" variant="text" onClick={toggle}>{theme === 'light' ? '🌙' : '☀️'}</Button>
          <select onChange={e=>changeLang(e.target.value)} className="bg-transparent border-none outline-none">
            <option value="ru">🇷🇺</option>
            <option value="en">🇬🇧</option>
            <option value="kz">🇰🇿</option>
          </select>
        </div>
      </aside>

      {/* Mobile header */}
      <header className="md:hidden fixed top-0 left-0 w-full flex justify-between items-center bg-white/80 dark:bg-bgDark/80 backdrop-blur-md px-4 py-3 z-50">
        <IconButton variant="text" onClick={()=>setOpen(true)}>☰</IconButton>
        <div className="flex items-center gap-2">
          <Button size="sm" variant="text" onClick={toggle}>{theme === 'light' ? '🌙' : '☀️'}</Button>
          <select onChange={e=>changeLang(e.target.value)} className="bg-transparent border-none outline-none">
            <option value="ru">RU</option>
            <option value="en">EN</option>
            <option value="kz">KZ</option>
          </select>
        </div>
      </header>

      {/* Drawer для mobile */}
      <Drawer open={open} onClose={()=>setOpen(false)} className="p-6 bg-white dark:bg-bgDark">
        <nav className="flex flex-col gap-4 text-lg">
          <a onClick={()=>setOpen(false)} href="/">{t('home')}</a>
          <a onClick={()=>setOpen(false)} href="/map">{t('map')}</a>
          <a onClick={()=>setOpen(false)} href="/profile">{t('profile')}</a>
          <a onClick={()=>setOpen(false)} href="/login">{t('login')}</a>
        </nav>
      </Drawer>

      <main className="flex-1 p-4 md:ml-64 mt-14 md:mt-0">
        {children}
      </main>
    </div>
  )
}
