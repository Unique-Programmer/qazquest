import { TransitionOverlay } from '@/components/PageTransition/TransitionOverlay'
import { ThemeClient } from '@/components/ThemeClient'

export async function generateStaticParams() {
  return [{ locale: 'ru' }, { locale: 'en' }, { locale: 'kz' }]
}

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  return (
    <>
      <ThemeClient />
      {/* <TransitionOverlay /> */}
      <main className="min-h-screen">{children}</main>
    </>
  )
}
