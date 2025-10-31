import { use } from 'react'

export default function LocalePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = use(params)
  return <div>Locale page content — {locale}</div>
}
