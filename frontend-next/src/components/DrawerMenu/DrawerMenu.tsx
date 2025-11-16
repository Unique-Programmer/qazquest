'use client'

import { useState } from 'react'
import { Menu } from 'lucide-react'
import { IconButton } from '@material-tailwind/react'
import { Sidebar } from './Sidebar'
import { MobileDrawer } from './MobileDrawer'
import styles from './DrawerMenu.module.scss'

export function DrawerMenu() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Desktop sidebar */}
      <div className={styles.desktopOnly}>
        <Sidebar />
      </div>

      {/* Mobile trigger */}
      <div className={styles.mobileTrigger}>
        <IconButton variant="text" size="lg" onClick={() => setOpen(true)}>
          <Menu size={22} />
        </IconButton>
      </div>

      {/* Mobile drawer */}
      <MobileDrawer open={open} onClose={() => setOpen(false)} />
    </>
  )
}
