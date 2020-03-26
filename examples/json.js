const $fetch = require('node-fetch')
const { json, pipeP } = require('../dist/index')

const log = console.log.bind(console)

const fetchJSON = json($fetch)

fetchJSON({ url: 'https://example.com/api' }).then(log).catch(log)
