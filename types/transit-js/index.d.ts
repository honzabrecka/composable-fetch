declare module 'transit-js' {
  interface Writer {
    write(value: unknown): string
  }
  interface Reader {
    read(value: string): any
  }
  const transit: {
    writer(type: 'json' | 'json-verbose'): Writer
    reader(type: 'json' | 'json-verbose'): Reader
  }
  export default transit
}
