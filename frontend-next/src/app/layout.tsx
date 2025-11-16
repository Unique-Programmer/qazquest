import { IBM_Plex_Sans } from 'next/font/google'
import './globals.css'
import { getServerTheme } from '@/lib/theme'
import { ThemeScript } from '@/components/ThemeScript'

const ibm = IBM_Plex_Sans({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-ibm',
  display: 'swap',
})

export const metadata = {
  title: 'KazQuest',
  description: 'Интерактивная карта Казахстана',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const theme = await getServerTheme()

  return (
    <html data-theme={theme} lang="ru" className={ibm.variable}>
      <head>
        <ThemeScript />
      </head>
      <body>{children}</body>
    </html>
  )
}
