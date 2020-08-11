# js-fetch/async-crash-course

[Traversy Media Fetch Tutorial](https://www.youtube.com/watch?v=Oive66jrwBs&ab_channel=TraversyMedia)

[Traversy Media Async JS Tutorial](https://www.youtube.com/watch?v=PoRJizFvM7s&ab_channel=TraversyMedia)

***

## Notes

### Promise

[Promise Object documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value

Simple Example

```JavaScript
var promise1 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve('foo');
  }, 300);
});

promise1.then(function(value) {
  console.log(value);
  // expected output: "foo"
});

console.log(promise1);
// expected output: [object Promise]
```

```JavaScript
const myFirstPromise = new Promise((resolve, reject) => {
  // do something asynchronous which eventually calls either:
  //
  //   resolve(someValue); // fulfilled
  // or
  //   reject("failure reason"); // rejected
});
```

- proxy for a value not necessarily known when the promise is created
- associate handlers with an asynchronous action's eventual sucess value or failure reason
- instead of immediately returning the final value (synchronous), it returns a *promise* to supply the value at some point in the future
- no race condition between an asynchronous operation completing and its handlers being attached

States:

- pending
  - initial state, neither fulfilled nor rejected
- fulfilled
  - operation completed succesfully with a *value*
- rejected
  - operation failed with a *reason* (error)

.then()

- appends fulfillment (and rejection) handlers to the promise, and returns a new promise resolving to the return value of the called handler

.catch()

- appends a rejection handler callback to the promise, and returns a new promise resolving to the return value of the callback

### Fetch

[Fetch API documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

interface for accessing and manipulating parts of the HTTP pipeline (requests and responses)

#### fetch(resource, init)

[fetch() method documentation](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch)

- global method
- easy, logical way to fetch resources asynchronously across the network
- better alternative to XMLHttpRequest
- single logical place to define other HTTP-related concepts (CORS and extensions)

- path to resource
  - only mandatory argument
- init options object
  - second argument (Request)
  - won't send or receive any cookies from the server by default
- returns a Promise that resolves to the Response to the request
  - methods to define what the body conent is
  - methods to define how body conent should be handled
  - Promise won't reject on HTTP error status (ok status set to false)
    - will only reject on network failure

[How to use Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

Basic fetch request

```JavaScript
fetch('http://example.com/movies.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  })
  .catch(function(err) {
    console.log(err));
  });
```

Basic fetch request (with ES6)

```JavaScript
  fetch('http://example.com/movies.json')
    .then(response => response.text())
    .then(myData => console.log(myData))
    .catch(err => console.log(err));
```

Post request implementation

```JavaScript
postData(`http://example.com/answer`, {answer: 42})
  .then(data => console.log(JSON.stringdify(data))) // JSON-string from `response.json()` call
  .catch(error => console.error(error));

function postData(url = ``, data = {}) {
  // Default options are marked with *
    return fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    .then(response => response.json()); // parses JSON response into native Javascript objects 
}
```

### async/await

[Asynchronous Function documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

```JavaScript
async function myFunction() {
  console.log('calling');
  var result = await resolveAfter2Seconds();
  console.log(result);
}
```

- an asynchronous function which operates asynchronously via the event loop 
- uses an implicit Promise to return its result
- simplifies the behavior of using promises synchronously
- `await` pauses execution of async function and waits for the passed Promises resolution
- similar to combining generators and promises

Promise chain

```JavaScript
function getProcessedData(url) {
  return downloadData(url) // returns a promise
    .catch(e => {
      return downloadFallbackData(url)  // returns a promise
    })
    .then(v => {
      return processDataInWorker(v); // returns a promise
    });
}
```

Async function

```JavaScript
async function getProcessedData(url) {
  let v;
  try {
    v = await downloadData(url); 
  } catch(e) {
    v = await downloadFallbackData(url);
  }
  return processDataInWorker(v);
}
```