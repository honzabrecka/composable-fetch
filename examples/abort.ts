import { abortable, json } from '../src/index.ts'

const log = console.log.bind(console)

const fetchJSON = json(fetch)

{
  const { signal, abort } = abortable()
  fetchJSON({ url: 'https://jsonplaceholder.typicode.com/todos/1', signal })
    .then(log)
    .catch(log)
  abort() // immediately
}

{
  // one signal can be passed to many fetch requests
  // and therefore they can be aborted at once
  const { signal, abort } = abortable()
  for (const id of [1, 2, 3])
    fetchJSON({
      url: `https://jsonplaceholder.typicode.com/todos/${id}`,
      signal,
    })
      .then(log)
      .catch(log)
  abort() // all those 3 requests
}
