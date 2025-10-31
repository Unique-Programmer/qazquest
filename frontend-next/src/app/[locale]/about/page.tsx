'use client'

import { useTranslation } from 'react-i18next'

export default function AboutPage() {
  const { t } = useTranslation('common')

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">{t('welcome')}</h2>
      <p>{t('content')}</p>
    </div>
  )
}
