'use client'

import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import styles from './LanguageSwitch.module.scss'

const LANGS = [
  { code: 'ru', flag: '/flags/ru.svg', label: 'Рус' },
  { code: 'en', flag: '/flags/en.svg', label: 'Eng' },
  { code: 'kz', flag: '/flags/kz.svg', label: 'Қаз' }
]

export function LanguageSwitch() {
  const pathname = usePathname()
  const router = useRouter()

  const current = pathname.split('/')[1]

  const changeLang = (lng: string) => {
    const parts = pathname.split('/')
    parts[1] = lng
    router.push(parts.join('/'))
  }

  return (
    <div className={styles.switch}>
      {LANGS.map((lng) => (
        <button
          key={lng.code}
          className={`${styles.btn} ${current === lng.code ? styles.active : ''}`}
          onClick={() => changeLang(lng.code)}
        >
          <Image src={lng.flag} width={22} height={22} alt="" />
        </button>
      ))}
    </div>
  )
}
