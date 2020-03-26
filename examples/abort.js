const $fetch = require('node-fetch')
const { json, pipeP, abortable } = require('../dist/index')

const log = console.log.bind(console)

const fetchJSON = json($fetch)

const { signal, abort } = abortable()
fetchJSON({ url: 'https://example.com/api', signal }).then(log).catch(log)
abort() // immediately

// one signal can be passed to many fetch requests
// and therefore they can aborted at once
const { signal, abort } = abortable()
fetchJSON({ url: 'https://example.com/api/1', signal }).then(log).catch(log)
fetchJSON({ url: 'https://example.com/api/2', signal }).then(log).catch(log)
fetchJSON({ url: 'https://example.com/api/3', signal }).then(log).catch(log)
abort() // all those 3 requests
