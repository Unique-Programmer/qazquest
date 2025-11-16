'use client'

import { useTranslation } from 'react-i18next'
import styles from './DrawerMenu.module.scss'
import { menuConfig } from './config'
import { BaseLink } from '../BaseLink/BaseLink'

export function Sidebar() {
  const { t } = useTranslation()

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebar__header}>
        <h2 className={styles.sidebar__title}>{t('menu.title')}</h2>
      </div>

      <nav className={styles.sidebar__nav}>
        {menuConfig.map(item => (
          <BaseLink
            key={item.id}
            href={item.path}
            className={styles.sidebar__navItem}
          >
            {item.icon} {t(`menu.${item.id}`)}
          </BaseLink>
        ))}
      </nav>
    </aside>
  )
}
