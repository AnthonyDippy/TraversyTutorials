# jsAJAX-crash-course

Traversy Media JS AJAX Tutorial - https://youtu.be/82hnvUYY6QA

***

## Notes

### AJAX

- Asynchronous JavaScript & XML
- Set of web technologies
- Send & receive data data asynchronously
- All happens behind the scenes without explicitly reloading the web page
- Does not interfere with current web page
- JSON has replaced XML for the most part

### XmlHttpRequest (XHR) Object

- API in the form of an object
- Provided by the browser's JS environment
- Methods transfer data between client/server
- Can be used with other protocols than HTTP
- Can work with data other than XML (JSON, plain text)

[XMLHttpRequest object documentation](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)

### Libraries & Other Methods

- jQuery
- Axios
- Superagent
- Fetch API
- Prototype
- Node HTTP

### States and Statuses

#### readyState values

- 0: request not initialized
- 1: server connection established
- 2: request received
- 3: processing request
- 4: request finished and response is ready

#### HTTP statuses

- 200: OK
- 403: Forbidden
- 404: Not Found

### Properties and Methods

#### Properties

- Status
  - `.status`
    - status of the response of the request
  - `.readyState`
    - state of the request
- EventHandler
  - `.onload`
    - EventHandler called whenever the response is ready
  - `.onreadystatechange` (old)
    - EventHandler called whenever the readyState attribute changes
  - `.onerror`
    - EventHandler called whenever the request couldn't be made
  - `.onprogress`
    - EventHandler called periodically during the processing of the request
- Response
  - `.response`
    - JS object, ArrayBuffer, Blob, DOMString, etc.
  - `.responseText`
    - DOMString of response or null
  - `.responseType`
    - enumerated type value

All of the EventHandlers have events that can be listened for using .addEventListener() (load, error, progress, etc.).

#### Methods

- `.open()`
  - initialize a request
- `.send(params)`
  - send the request (returns if async)
- `.setRequestHeader()`
  - set value of HTTP request header (after open() before send())
- `.getResponseHeader()`
  - returns string containing the text of the specified header or null

### Making a Request

Typical

```JavaScript
    function loadText() {
      // Construct XHR Object
      var xhr = new XMLHttpRequest();
      // Initialize request (request type, url/file, async)
      xhr.open('GET', 'sample.txt', true);
      // Loading Handler
      xhr.onprogress = function() {
        // do load things
      }
      // Success handler
      xhr.onload = function() {
        // check status and do things
      }
      // Error handler
      xhr.onerror = function() {
        // do error things
      }
      // Send request
      xhr.send();
    }
```

New Method (utilizing xhr.onload)

```JavaScript
      xhr.onload = function() {
        if (this.status == 200) {
          // do things
        } else if (this.status == 404) {
          // do error things
        }
      }
```

Old Method (utilizing xhr.onreadystatechange)

```JavaScript
      xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          // do things
        }
      }
```

Example from [W3C website](https://www.w3schools.com/xml/xml_http.asp)

```JavaScript
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       document.getElementById("demo").innerHTML = xhttp.responseText;
    }
};
xhttp.open("GET", "filename", true);
xhttp.send();
```

[How to use XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)