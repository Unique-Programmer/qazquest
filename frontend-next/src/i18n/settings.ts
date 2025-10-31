export const languages = ['ru', 'en', 'kz'] as const
export type Language = (typeof languages)[number]
export const defaultLocale: Language = 'ru'
