# composability

composable-fetch is based on composition, it means that functions can be composed together via [pipes - pipeP function](#pipeP).

All the functions provided by the composable-fetch are composable. To be able to do that, there's a concept called piping.

## pipeP

Performs left-to-right function composition. Each function in composition must be unary. If any function in pipe returns promise, then `pipeP` waits to its resolution before it calls next function in chain. It always returns promise.

```js
const inc = n => n + 1
const dup = n => [n, n]
await pipeP(inc, dup)(1) // -> [2, 2]
```

## request

### encoding

#### custom encoder

```js

```

## fetch

composable-fetch comes with [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch) as a dependency and exposes it as wrapped, unary `fetch` (`retryableFetch` respectively) function that works in the browser as well as on the server.

## response

### decoding

#### custom decoder


