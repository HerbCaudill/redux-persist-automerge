# Automerge storage provider for `redux-persist`

Storage adaptor to use [Automerge](https://github.com/automerge/automerge) with [redux-persist](https://github.com/rt2zz/redux-persist) or [Apollo Client](https://github.com/apollographql/apollo-client), by implementing the needed methods: `setItem`, `getItem`, `removeItem` and `getAllKeys`.

This wraps another storage provider with the same API.

## Install

```bash
yarn add redux-persist-automerge
```

or

```bash
npm install --save redux-persist-automerge
```

## Usage with Apollo Client

This has been tested with Apollo Client 2.5.

```javascript
import { AutomergeStorage } from 'redux-persist-node-storage'

async function start() {
  const cache = new InMemoryCache()

  const docSet = automerge.init()

  // storage can be any provider on this list https://github.com/rt2zz/redux-persist#storage-engines
  const storage = new AutomergeStorage(docSet, window.localStorage)

  // Wire up the in-memory cache to persistent storage
  await persistCache({ cache, storage })

  const client = new ApolloClient({ cache, resolvers, typeDefs })
}

start()
```

## Usage with redux-persist

```javascript
import { AutomergeStorage } from 'redux-persist-node-storage'
import { persistStore, autoRehydrate } from 'redux-persist'
const store = createStore(reducer, undefined, autoRehydrate())

persistStore(store, { storage: new AutomergeStorage('/tmp/storageDir') })
```
