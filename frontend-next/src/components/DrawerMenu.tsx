'use client'

import { useState } from 'react'
import { BaseLink } from '@/components/BaseLink'
import { Drawer, IconButton, Button } from '@material-tailwind/react'
import { Menu, X } from 'lucide-react'
import { LanguageSwitch } from './LanguageSwitch'

export function DrawerMenu() {
  const [open, setOpen] = useState(false)
  const toggleDrawer = () => setOpen(!open)

  const menuItems = [
    { href: '/', label: '🏠 Главная' },
    { href: '/map', label: '🗺 Карта' },
    { href: '/profile', label: '👤 Профиль' },
    { href: '/login', label: '🔐 Войти' },
    { href: '/about', label: '🔐 О сайте' },
  ]

  return (
    <>
      {/* Кнопка меню */}
      <div className="fixed left-4 top-4 z-50 flex items-center gap-2 md:hidden">
        <IconButton
          variant="text"
          size="lg"
          onClick={toggleDrawer}
          className="text-primary bg-white/70 dark:bg-gray-900/70 backdrop-blur-md"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </IconButton>
      </div>

      {/* Drawer */}
      <Drawer
        open={open}
        onClose={toggleDrawer}
        className="p-4 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700"
        placement="left"
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-primary">KazQuest</h2>
          <IconButton variant="text" onClick={toggleDrawer}>
            <X size={20} />
          </IconButton>
        </div>

        <nav className="flex flex-col gap-2">
          {menuItems.map((item) => (
            <BaseLink
              key={item.href}
              href={item.href}
              onClick={toggleDrawer}
              className="px-3 py-2 rounded-md hover:bg-blue-100 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200 font-medium"
            >
              {item.label}
            </BaseLink>
          ))}
        </nav>

        <div className="mt-auto pt-6 flex justify-center">
          <Button
            size="sm"
            variant="gradient"
            color="blue"
            onClick={() => alert('Профиль')}
          >
            В профиль
          </Button>
        </div>
        <LanguageSwitch />
      </Drawer>
    </>
  )
}
