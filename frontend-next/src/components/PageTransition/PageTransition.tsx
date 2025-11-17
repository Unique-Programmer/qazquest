'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useTransitionStore } from './transition.store'
import { useEffect, useLayoutEffect } from 'react'

export function PageTransition({ children }: { children: React.ReactNode }) {
  const { isAnimating, afterFisrtAppLoading, finish } = useTransitionStore()

  const pathname = usePathname()

  useLayoutEffect(() => {
    finish();
  }, [])

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isAnimating ? 0 : 1 }}
        transition={{ duration: 0.28, ease: 'easeOut' }}
        style={{ height: '100%' }}
      >
        <motion.div
          key={pathname}
          initial={{ opacity: afterFisrtAppLoading ? 0 : 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          style={{ height: '100%' }}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
