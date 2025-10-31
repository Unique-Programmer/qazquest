import { use } from 'react'
import { I18nProvider } from '@/i18n/provider'
import { ThemeClient } from '@/components/ThemeClient'
import { DrawerMenu } from '@/components/DrawerMenu'

export async function generateStaticParams() {
  return [{ locale: 'ru' }, { locale: 'en' }, { locale: 'kz' }]
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = use(params)

  return (
    <I18nProvider locale={locale}>
      <ThemeClient />
      <DrawerMenu />
      <main className="min-h-screen">{children}</main>
    </I18nProvider>
  )
}
