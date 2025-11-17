export const parsePath = (pathname: string) => {
  const parts = pathname.split('/') // ['', 'ru', 'map']

  const locale = parts[1] || 'ru'
  const page = '/' + (parts[2] ?? '') // '/' если undefined

  return { locale, page }
}
