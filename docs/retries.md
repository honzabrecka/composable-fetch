# retries

## delays



```js
composableFetch.withRetry({ delay: delays.constant() })
// retries after 1 sec, then again after 1 sec, then again after 1 sec, ...

composableFetch.withRetry({ delay: delays.linear() })
// retries after 1 sec, then after 2 secs, then after 3 secs

composableFetch.withRetry({ delay: delays.exponential() })
// retries after 1 sec, then after 4 secs, then after 9 secs, ...
```

###

```js
composableFetch.withRetry({ max: 6, delay: delays.limited(3, delays.linear()) })
// retries after 1 sec, then 2 secs, 3 secs, then 1 sec, 2 secs, 3 secs
```

