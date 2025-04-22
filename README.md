# ct-crash-test
Illustrate problem with CT API + node-fetch (?)

Run `node index.js` to test.

Modify the API URL and Token in `index.js` to test with your own API.

When running against the Commercetools API, it will eventually respond with:

```
file:///home/devin.z/Source/crashtest/node_modules/node-fetch/src/body.js:234
                const error_ = error instanceof FetchBaseError ? error : new FetchError(`Invalid response body while trying to fetch ${data.url}: ${error.message}`, 'system', error);
                                                                         ^

FetchError: Invalid response body while trying to fetch https://api.us-central1.gcp.commercetools.com/purplecom/product-projections?expand=productType: Premature close
    at consumeBody (file:///home/devin.z/Source/crashtest/node_modules/node-fetch/src/body.js:234:60)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async Response.text (file:///home/devin.z/Source/crashtest/node_modules/node-fetch/src/body.js:158:18) {
  type: 'system',
  errno: 'ERR_STREAM_PREMATURE_CLOSE',
  code: 'ERR_STREAM_PREMATURE_CLOSE',
  erroredSysCall: undefined
}

Node.js v18.20.4
```

This is not the case with a number of other public APIs, which respond successfully to all requests.
