declare module 'dompurify' {
  interface DOMPurifyI {
    sanitize(input: string | Node): string
  }

  const DOMPurify: DOMPurifyI
  export default DOMPurify
}
