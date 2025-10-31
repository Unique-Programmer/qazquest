'use client'

import i18n from 'i18next'
import { I18nextProvider, initReactI18next } from 'react-i18next'
import HttpBackend from 'i18next-http-backend'
import { defaultLocale, languages } from './settings'

if (!i18n.isInitialized) {
  i18n
    .use(HttpBackend)
    .use(initReactI18next)
    .init({
      lng: defaultLocale,
      fallbackLng: defaultLocale,
      supportedLngs: languages,
      ns: ['common'],
      defaultNS: 'common',
      backend: {
        loadPath: '/locales/{{lng}}/{{ns}}.json',
      },
      interpolation: { escapeValue: false },
    })
}

export function I18nProvider({
  children,
  locale,
}: {
  children: React.ReactNode
  locale: string
}) {
  if (i18n.language !== locale) i18n.changeLanguage(locale)
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}
