export function localizedPath(path: string, locale: string) {
  if (!path.startsWith('/')) {
    path = '/' + path
  }
  return `/${locale}${path}`
}
