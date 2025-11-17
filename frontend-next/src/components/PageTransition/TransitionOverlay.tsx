'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { useTransitionStore } from './transition.store'

export function TransitionOverlay() {
  const router = useRouter()
  const { isAnimating, finish } = useTransitionStore()

  if (!isAnimating) return null

  return (
    <motion.div
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="transition-mask"
    >
      <img src="/svg/eagle-mask.svg" className="transition-eagle" />
    </motion.div>
  )
}
