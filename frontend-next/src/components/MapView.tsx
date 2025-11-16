// src/components/MapView.tsx
'use client'

import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
// import { useTranslation } from 'react-i18next'

export default function MapView() {
  const { t } = useTranslation()

  useEffect(() => {
    console.log('🌍 MapView loaded (здесь будет MapLibre)')
  }, [])

  return (
    <div className="w-full h-[80vh] bg-blue-50 dark:bg-gray-800 flex items-center justify-center text-gray-500">
      {t('map.title')}
    </div>
  )
}
