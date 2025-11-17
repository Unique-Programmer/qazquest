'use client'

import { I18nProvider } from "@/i18n/provider"
import dynamic from "next/dynamic";
import { PageTransition } from "./PageTransition/PageTransition";
import { useEffect } from "react";
import { useTransitionStore } from "./PageTransition/transition.store";

const DrawerMenu = dynamic(() =>
  import('@/components/DrawerMenu/DrawerMenu'), { ssr: false });

export function AppClientProviders({ children, locale }: {
  children: React.ReactNode
  locale: string
}) {
  const { setFirstAppLoading } = useTransitionStore()

  useEffect(() => setFirstAppLoading(), []);

  return (
    <I18nProvider locale={locale}>
      <DrawerMenu />
      <PageTransition>
        {children}
      </PageTransition>
    </I18nProvider>
  )
}
