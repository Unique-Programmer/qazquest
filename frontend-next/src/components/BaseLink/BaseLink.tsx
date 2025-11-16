'use client'

import Link, { LinkProps } from 'next/link'
import { useParams } from 'next/navigation'
import { ReactNode } from 'react'

interface LocaleLinkProps extends LinkProps {
  children: ReactNode
  className?: string
}

export function BaseLink({ href, children, className, ...rest }: LocaleLinkProps) {
  const { locale } = useParams() as { locale?: string }
  const prefix = locale ? `/${locale}` : ''

  // нормализуем путь — чтобы не получилось //ru//profile
  const path =
    typeof href === 'string'
      ? href.startsWith('/') ? `${prefix}${href}` : `${prefix}/${href}`
      : href

  return (
    <Link href={path} className={className} {...rest}>
      {children}
    </Link>
  )
}
