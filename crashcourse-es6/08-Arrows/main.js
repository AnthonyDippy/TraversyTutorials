'use strict';

// ES6 arrow functions
// shorter syntax
// bind "this" lexically (don't need to rename this to that)

// function Prefixer(prefix) {
//   this.prefix = prefix;
// }

// Prefixer.prototype.prefixArray = function(arr) {
//   let that = this; // or use self
//   return arr.map(function(x) {
//     console.log(that.prefix + x);
//   });
// };

// let pre = new Prefixer('Hello ');
// pre.prefixArray(['Brad', 'Jeff']);

function Prefixer(prefix) {
  this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function(arr) {
  return arr.map(x => console.log(this.prefix + x));
};

let pre = new Prefixer('Hello ');
pre.prefixArray(['Brad', 'Jeff']);

// next example

// let add = function(a, b) {
//   let sum = a + b;
//   console.log(sum);
//   return false;
// };

// add(2, 2);

let add = (a, b) => {
  let sum = a + b;
  console.log(sum);
  return false;
};

add(2, 2);
