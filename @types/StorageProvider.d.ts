declare interface StorageProvider<T = any> {
  getItem: (key: string) => T
  setItem: (key: string, value: T) => void
  removeItem: (key: string) => void
  getAllKeys?: () => string[]
}
