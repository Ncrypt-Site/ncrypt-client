export const CopyString = (url: string) => {
  document.addEventListener('copy', (e: ClipboardEvent) => {
    if (e.clipboardData) {
      e.clipboardData.setData('text/plain', url)
      e.preventDefault()
      // @ts-ignore
      document.removeEventListener('copy',this)
    }
  })
  document.execCommand('copy')
}
