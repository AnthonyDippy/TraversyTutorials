'use strict';

// generators
// functions that can be paused and resumed (unlimited times)
// at each pause it can return a value back
// denoted by * appended to end of function keyword
function* g1() {
  console.log('Hello');
  yield 'Yield 1 Ran...';
  console.log('World');
  yield 'Yield 2 Ran...';
  return 'Returned';
}

var a = g1();

// .next() executes function until yield
// returns yield object with
// value: 'message'
// done: boolean, true when function has returned
// (returned value goes to the value property)

console.log(a.next());
console.log(a.next().value);
console.log(a.next());

function* g2() {
  console.log('Hello');
  yield 'Yield 1 Ran...';
  console.log('World');
  yield 'Yield 2 Ran...';
  return 'Returned';
}

var b = g2();

// iterate with for of loop
for (let val of b) {
  console.log(val);
  // does not give returned value;
}
