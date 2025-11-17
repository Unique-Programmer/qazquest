'use client'

import { motion } from 'framer-motion'
import styles from './DrawerMenu.module.scss'

export function DrawerToggleButton({
  open,
  onClick,
}: {
  open: boolean
  onClick: () => void
}) {
  return (
    <div className={styles.toggle} onClick={onClick}>
        <motion.span
          className={styles.line}
          animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 2 }}
          transition={{ duration: 0.25 }}
        />
        <motion.span
          className={styles.line}
          animate={open ? { opacity: 0 } : { opacity: 1, y: 2 }}
          transition={{ duration: 0.2 }}
        />
        <motion.span
          className={styles.line}
          animate={open ? { rotate: -45, y: -4 } : { rotate: 0, y: 2 }}
          transition={{ duration: 0.25 }}
        />
    </div>
  )
}
