'use client'

import { localizedPath } from '@/i18n/localizedPath'
import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

import styles from './BaseLink.module.scss';

interface Props extends LinkProps {
  href: string
  children: ReactNode
  className?: string
  onClick?: () => void
}

export function BaseLink({ href, children, className, onClick, ...rest }: Props) {
  const pathname = usePathname()
  const locale = pathname.split('/')[1] || 'ru'

  // 1) Внешние ссылки не локализуем: http://, https://, mailto:, tel:
  if (/^(https?:\/\/|mailto:|tel:)/.test(href)) {
    return (
      <a href={href} className={className} onClick={onClick} {...rest}>
        {children}
      </a>
    )
  }

  // 2) Генерируем локализованный URL
  const url = localizedPath(href, locale)

  return (
    <Link href={url} className={clsx(styles.baseLink, className)} onClick={onClick} {...rest}>
      {children}
    </Link>
  )
}
