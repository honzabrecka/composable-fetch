const { json, pipeP } = require('../dist/index')

const log = console.log.bind(console)

const fetchJSON = json()

fetchJSON({ url: 'https://example.com/api' }).then(log).catch(log)
