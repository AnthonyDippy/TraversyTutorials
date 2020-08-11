"use strict";

// let

var a = "Test1";
let b = "Test2";
console.log(a);
console.log(b);

function testVar() {
  // set a to 30 on outer scope
  var a = 30;
  if (true) {
    // set a to 50 (changes outer scoped a)
    var a = 50;
    console.log(a);
  }
  console.log(a);
}
testVar();
// 50 50

function testLet() {
  // set a to 30 on outer scope
  let a = 30;
  if (true) {
    // set a to 50 on inner scope
    let a = 50;
    console.log(a);
  }
  console.log(a);
}
testLet();
// 50 30

let greeting = "say Hi";
if (true) {
  let greeting = "say Hello instead";
  console.log(greeting); //"say Hello instead"
}
console.log(greeting); //"say Hi"

for (var i = 0; i < 10; i++) {
  console.log(i);
}
console.log(i);
// 1 - 10

for (let j = 0; j < 10; j++) {
  console.log(j);
}
console.log(j);
// 1 - 9 and error: j not defined

// const (constant)

const colors = [];

// colors can be pushed to
colors.push("red");
colors.push("blue");

// colors can not be reassigned (throws error)
colors = "Green";

console.log(colors);
