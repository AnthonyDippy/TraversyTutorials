'use strict';

// with regular quotes
// must use string concatenation for multiple lines
// can not include variables with + symbols
// let template =
//   '<h1>Hello</h1>' + '<p>This is a simple template in JavaScript</p>';

let name = 'John';

function makeUppercase(word) {
  return word.toUpperCase();
}

// with backticks
// multiple lines allowed
// add in functions, expressions and variables with ${}
let template =
  `<h1>${makeUppercase('Hello')}, ${name}</h1>
  <p>This is a simple template in JavaScript</p>`;


document.getElementById('template').innerHTML = template;
