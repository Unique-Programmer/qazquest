'use client'

import { useEffect, useState } from 'react'

export default function ProfilePage() {
  const [user, setUser] = useState<{ name: string } | null>(null)

  useEffect(() => {
    fetch('/api/me').then(async (res) => setUser(await res.json()))
  }, [])

  if (!user) return <div className="p-8">Loading...</div>

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Привет, {user.name}!</h1>
    </div>
  )
}
