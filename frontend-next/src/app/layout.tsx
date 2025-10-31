import './globals.css'
import { getServerTheme } from '@/lib/theme'
import { ThemeScript } from '@/components/ThemeScript'

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
    <html data-theme={theme} lang="ru">
      <head>
        <ThemeScript defaultTheme={theme} />
      </head>
      <body>{children}</body>
    </html>
  )
}
