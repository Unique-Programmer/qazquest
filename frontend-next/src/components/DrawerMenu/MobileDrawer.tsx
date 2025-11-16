'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { IconButton } from '@material-tailwind/react'
import { useTranslation } from 'react-i18next'
import styles from './DrawerMenu.module.scss'
import { menuConfig } from './config'
import { BaseLink } from '../BaseLink/BaseLink'

export function MobileDrawer({
  open,
  onClose
}: {
  open: boolean
  onClose: () => void
}) {
  const { t } = useTranslation()

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.35 }}
            exit={{ opacity: 0 }}
            className={styles.drawer__backdrop}
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            key="drawer"
            initial={{ x: -260 }}
            animate={{ x: 0 }}
            exit={{ x: -260 }}
            transition={{ type: 'spring', stiffness: 230, damping: 25 }}
            className={styles.drawer}
          >
            <div className={styles.drawer__header}>
              <h2 className={styles.drawer__title}>{t('menu.title')}</h2>
              <IconButton variant="text" onClick={onClose}>
                <X size={20} />
              </IconButton>
            </div>

            <nav className={styles.drawer__nav}>
              {menuConfig.map(item => (
                <BaseLink
                  key={item.id}
                  href={item.path}
                  onClick={onClose}
                  className={styles.drawer__navItem}
                >
                  {item.icon} {t(`menu.${item.id}`)}
                </BaseLink>
              ))}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
