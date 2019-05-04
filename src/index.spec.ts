import { AutomergeStorage } from './index'
import { DocSet } from 'automerge'

let docSet = new DocSet()
let provider = window.localStorage
let adaptor = new AutomergeStorage({ docSet, provider })

describe('AutomergeStorage', () => {
  test('get and set item', async () => {
    await adaptor.setItem('key', 'value')
    const value = await adaptor.getItem('key')
    expect(value).toEqual('value')
  })
})
