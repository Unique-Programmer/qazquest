export function ThemeScript() {
  const script = `
    (function(){
      try {
        var theme = localStorage.getItem('theme') || 'light';
        document.documentElement.dataset.theme = theme;
      } catch(e) {}
    })()
  `
  return <script dangerouslySetInnerHTML={{ __html: script }} />
}
