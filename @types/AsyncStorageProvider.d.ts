declare interface AsyncStorageProvider<T = any> {
  getItem: (key: string) => Promise<T>
  setItem: (key: string, value: T) => Promise<void>
  removeItem: (key: string) => Promise<void>
  getAllKeys?: () => Promise<string[]>
}
