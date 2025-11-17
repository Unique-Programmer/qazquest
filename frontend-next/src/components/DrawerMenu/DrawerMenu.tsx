'use client'

import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { DrawerContent } from './DrawerContent'
import { openingDuration } from './constants'
import { useTransitionStore } from '../PageTransition/transition.store'
import { parsePath } from '@/helpers'

export default function DrawerMenu() {
  const { start } = useTransitionStore()

  const pathname = usePathname();

  const [open, setOpen] = useState(false)
  const [pendingRoute, setPendingRoute] = useState<string | null>(null)

  const router = useRouter()

  useEffect(() => {
    if (!open && pendingRoute) {
      setTimeout(() => {
        router.push(pendingRoute)
      }, (openingDuration * 1000) + 100); // мс, для работы анимации закрытия
      setPendingRoute(null)
    }
  }, [open, pendingRoute, router])

  const handleNavigate = (href: string) => {
    const { page } = parsePath(pathname);

    if (page === href) {
      setOpen(false)
      return;
    };

    setPendingRoute(href)
    start();
    setOpen(false)
  }

  return (
    <>
      <DrawerContent open={open} onClick={() => setOpen(!open)} onNavigate={handleNavigate} />
    </>
  )
}
