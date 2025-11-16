'use client'

import { I18nProvider } from "@/i18n/provider"
import dynamic from "next/dynamic";

const DrawerMenu = dynamic(() => 
  import('@/components/DrawerMenu/DrawerMenu'), { ssr: false });

export function AppClientProviders({ children, locale }: {
  children: React.ReactNode
  locale: string
}) {
  return (
    <I18nProvider locale={locale}>
      <DrawerMenu />
      {children}
    </I18nProvider>
  )
}
