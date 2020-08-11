'use strict';

// promise object
// used for deferred and asynchronous computations
// represent an operation that hasn't completed yet
// but is expected in the future

// immediately resolved
var myPromise1 = Promise.resolve('Foo');

myPromise1.then(res => console.log(res));

// with timeout and resolve/reject function
// function with resolve/reject is standard constructor
var myPromise2 = new Promise(function(resolve, reject) {
  // setTimeout ( function, time)
  setTimeout(() => resolve(4), 2000);
});

myPromise2.then(res => {
  res += 3;
  console.log(res);
});

// returns a promise
function getData(method, url) {
  return new Promise(function(resolve, reject) {
    // ajax with XHR
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = function() {
      // status if everything is okay
      if (this.status >= 200 && this.status < 300) {
        // resolve the response
        resolve(xhr.response);
      } else {
        // reject with error object
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      }
    };
    xhr.onerror = function() {
      // reject with error object
      reject({
        status: this.status,
        statusText: xhr.statusText
      });
    };
    xhr.send();
  });
}

// call function with known API
getData('GET', 'http://jsonplaceholder.typicode.com/todos')
  // use .then on returned promise and add function
  .then(data => {
    // JSON.parse the data into an object
    let todos = JSON.parse(data);
    let output = '';
    // for of loop to iterate through todos (an array of objects)
    for (let todo of todos) {
      // template string
      output += `
      <li>
        <h3>${todo.title}</h3>
        <p>Completed: ${todo.completed}</p>
      </li>
      `;
    }
    document.getElementById('template').innerHTML = output;
  })
  // catch error
  .catch(err => console.log(err));
