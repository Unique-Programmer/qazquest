import { use } from 'react'
import { BasePageProps } from '@/types/global'
import { AppClientProviders } from '@/components/AppClientProviders'

export default function LocalePage({
  params,
}: BasePageProps) {
  const { locale } = use(params)

  return (
    <AppClientProviders locale={locale}>
      <div>Locale page content — {locale}</div>
    </AppClientProviders>
  )
}
