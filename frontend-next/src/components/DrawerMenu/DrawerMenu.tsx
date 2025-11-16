'use client'

import { useState } from 'react'
import { Menu } from 'lucide-react'
import { IconButton } from '@material-tailwind/react'
import { DrawerContent } from './DrawerContent'
import styles from './DrawerMenu.module.scss'

export default function DrawerMenu() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className={styles.mobileTrigger}>
        <IconButton variant="text" size="lg" onClick={() => setOpen(true)}>
          <Menu size={22} />
        </IconButton>
      </div>

      <DrawerContent open={open} onClose={() => setOpen(false)} />
    </>
  )
}
