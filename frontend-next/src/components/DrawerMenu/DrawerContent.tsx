'use client'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import styles from './DrawerMenu.module.scss'
import { menuConfig } from './config'
import { BaseLink } from '../BaseLink/BaseLink'
import { LanguageSwitch } from '../LanguageSwitch/LanguageSwitch'
import { DrawerToggleButton } from './DrawerToggleButton'
import { openingDuration } from './constants'

export function DrawerContent({
  open,
  onClick,
  onNavigate,
}: {
  open: boolean
  onClick: () => void
  onNavigate: (path: string) => void
}) {
  const { t } = useTranslation()

  return (
    <>
      {/* Backdrop — только когда open */}
      <motion.div
        className={styles.drawer__backdrop}
        initial={{ opacity: 0 }}
        animate={{ opacity: open ? 0.35 : 0 }}
        transition={{ duration: openingDuration }}
        style={{ pointerEvents: open ? 'auto' : 'none' }}
        onClick={onClick}
      />

      {/* Drawer – всегда в DOM */}
      <motion.div
        className={styles.drawer}
        initial={false}
        animate={{ x: open ? 0 : -230 }} // ← смещение drawer
        transition={{
          type: 'spring',
          stiffness: 230,
          damping: 25,
        }}
      >
        <DrawerToggleButton open={open} onClick={onClick} />

        <div className={styles.drawer__header}>
          <h2 className={styles.drawer__title}>{t('menu.title')}</h2>
        </div>

        <nav className={styles.drawer__nav}>
          {menuConfig.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.path)}
              className={styles.drawer__navItem}
            >
              {item.icon} {t(`menu.${item.id}`)}
            </button>
          ))}
        </nav>

        <LanguageSwitch />
      </motion.div>
    </>
  )
}
