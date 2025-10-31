const path = require('path')

module.exports = {
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'en', 'kz'],
  },
  localePath: path.resolve('./public/locales'),
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  fallbackLng: 'ru',
  defaultNS: 'common',
}
