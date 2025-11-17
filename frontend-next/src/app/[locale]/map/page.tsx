// src/app/[locale]/map/page.tsx
'use client'

import { AppClientProviders } from '@/components/AppClientProviders'
import { BasePageProps } from '@/types/global'
import dynamic from 'next/dynamic'
import { use } from 'react'
const MapView = dynamic(() => import('@/components/MapView'), { ssr: false })

export default function MapPage({ params }: BasePageProps) {
  const { locale } = use(params)

  return (
    <AppClientProviders locale={locale}>
      <div className="w-full h-[calc(100vh-64px)]">
        <MapView /> { /* анимация не сработает из-за dynamic, нужна отдельная внутри */ }
      </div>
    </AppClientProviders>
  )
}
