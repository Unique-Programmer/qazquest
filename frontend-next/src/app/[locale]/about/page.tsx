'use client'

import { AppClientProviders } from '@/components/AppClientProviders'
import { BasePageProps } from '@/types/global'
import { use } from 'react'
import { useTranslation } from 'react-i18next'

export default function AboutPage({ params }: BasePageProps) {
  const { locale } = use(params)

  const { t } = useTranslation('common')

  return (
    <AppClientProviders locale={locale}>
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">{t('welcome')}</h2>
        <p>{t('content')}</p>
      </div>
    </AppClientProviders>
  )
}
