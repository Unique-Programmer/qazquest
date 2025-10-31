export function ThemeScript({ defaultTheme }: { defaultTheme: string }) {
  const script = `
    try {
      const t = localStorage.getItem('theme') || '${defaultTheme}'
      document.documentElement.dataset.theme = t
    } catch (e) {}
  `
  return <script dangerouslySetInnerHTML={{ __html: script }} />
}
