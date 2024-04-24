declare module 'dompurify' {
  interface DOMPurifyI {
    //  eslint-disable-next-line
    sanitize(input: string | Node): string
  }

  const DOMPurify: DOMPurifyI
  export default DOMPurify
}
