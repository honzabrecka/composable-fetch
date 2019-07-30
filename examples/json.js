const { composableFetch, pipeP } = require('../dist/index')

const log = console.log.bind(console)

const fetchJSON = composableFetch.json()

fetchJSON({ url: 'https://example.com/api' }).then(log).catch(log)
