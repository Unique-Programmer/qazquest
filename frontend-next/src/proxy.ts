import { NextRequest, NextResponse } from 'next/server'
import { languages, defaultLocale } from './i18n/settings'

export default function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl

  const isLocalePath = languages.some((lng) => pathname.startsWith(`/${lng}`))
  if (isLocalePath) return NextResponse.next()

  const cookieLang = req.cookies.get('lang')?.value
  const locale =
    cookieLang && languages.includes(cookieLang as any)
      ? cookieLang
      : defaultLocale

  const url = new URL(`/${locale}${pathname}`, req.url)
  return NextResponse.redirect(url)
}

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)'],
}
