// src/components/MapView.tsx
'use client'

import { useEffect } from 'react'

export default function MapView() {
  useEffect(() => {
    console.log('🌍 MapView loaded (здесь будет MapLibre)')
  }, [])

  return (
    <div className="w-full h-[80vh] bg-blue-50 dark:bg-gray-800 flex items-center justify-center text-gray-500">
      🗺 Карта Казахстана (MapLibre)
    </div>
  )
}
