'use client'

import { useState } from 'react'
import styles from './DrawerMenu.module.scss'
import { BaseLink } from '@/components/BaseLink/BaseLink'
import { Drawer, IconButton, Button } from '@material-tailwind/react'
import { Menu, X } from 'lucide-react'
import { LanguageSwitch } from '../LanguageSwitch'

export function DrawerMenu() {
  const [open, setOpen] = useState(false)
  const toggleDrawer = () => setOpen((v) => !v)

  const menuItems = [
    { href: '/', label: '🏠 Главная' },
    { href: '/map', label: '🗺 Карта' },
    { href: '/profile', label: '👤 Профиль' },
    { href: '/login', label: '🔐 Войти' },
    { href: '/about', label: 'ℹ️ О сайте' },
  ]

  return (
    <>
      {/* Mobile trigger */}
      <div className={styles['drawer-menu-trigger']}>
        <IconButton
          variant="text"
          size="lg"
          onClick={toggleDrawer}
          className={styles['drawer-menu-trigger__button']}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </IconButton>
      </div>

      {/* Drawer */}
      <Drawer
        open={open}
        onClose={toggleDrawer}
        placement="left"
        className={styles['drawer-menu']}
      >
        <div className={styles['drawer-menu__header']}>
          <h2 className={styles['drawer-menu__title']}>KazQuest</h2>
          <IconButton variant="text" onClick={toggleDrawer}>
            <X size={20} />
          </IconButton>
        </div>

        <nav className={styles['drawer-menu__nav']}>
          {menuItems.map((item) => (
            <BaseLink
              key={item.href}
              href={item.href}
              onClick={toggleDrawer}
              className={styles['drawer-menu__nav-item']}
            >
              {item.label}
            </BaseLink>
          ))}
        </nav>

        <div className={styles['drawer-menu__footer']}>
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
