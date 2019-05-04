export type Provider<T> = AsyncStorageProvider<T> | StorageProvider<T>
import { DocSet } from 'automerge'

export interface AutomergeStorageOptions<T> {
  docSet: DocSet<T>
  provider: Provider<T>
}

export class AutomergeStorage<T> {
  private provider: Provider<T>
  private docSet: DocSet<T>

  constructor({ docSet, provider }: AutomergeStorageOptions<T>) {
    this.docSet = docSet
    this.provider = provider
  }

  async getItem(key: string) {
    return this.docSet.getDoc(key)
    //return this.provider.getItem(key)
  }

  async setItem(key: string, value: T) {
    await this.docSet.setDoc(key, value)
    // await this.provider.setItem(key, value)
  }

  async removeItem(key: string) {
    await this.provider.removeItem(key)
  }

  async getAllKeys() {
    if (typeof this.provider.getAllKeys === 'function') {
      return await this.provider.getAllKeys()
    } else {
      throw `getAllKeys is not implemented on ${typeof this.provider}`
    }
  }
}
