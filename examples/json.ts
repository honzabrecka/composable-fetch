import { json } from '../src/index.ts'

const log = console.log.bind(console)

const fetchJSON = json(fetch)

fetchJSON({ url: 'https://jsonplaceholder.typicode.com/todos/1' })
  .then((res: any) => log(res.data))
  .catch(log)
