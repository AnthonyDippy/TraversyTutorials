'use strict';

// default params
function greet(greeting = 'Hello World') {
  console.log(greeting);
}

// console log Hello
greet('Hello');

// will normally console log undefined
// now will console log Hello World as a default parameter
greet();

// spread operator ...
// expands expression in places were multiple arguments are expected
let args1 = [1, 2, 3];
let args2 = [4, 5, 6];

function test() {
  console.log(args1 + ',' + args2);
}

test.apply(null, args1);

test(...args1, ...args2);
