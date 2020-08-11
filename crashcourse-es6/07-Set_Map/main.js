'use strict';

// Set - stores unique values of any type (primitive or object references)

let myArray = [11, 22, 34, 65, 34];

let mySet = new Set(myArray);

// add, delete, clear
mySet.add('100');
mySet.add({ a: 1, b: 2 });
mySet.delete(22);

console.log(mySet);

mySet.clear();
mySet.add(50);
mySet.add(25);

console.log(mySet);

// .size is not a function
console.log(mySet.size);

// mySet.forEach(function(val) {
//   console.log(val);
// });

mySet.forEach(val => console.log(val));

// Map - stores key value pairs

let myMap = new Map([['a1', 'Hello'], ['b2', 'Goodbye']]);

console.log(myMap);

// set, delete
myMap.set('c3', 'foo');
myMap.delete('a1');

// has
console.log(myMap.has('c3'));

// get
console.log(myMap.get('c3'));

// .size is not a function
console.log(myMap.size);

// WeakSet - objects only

let carWeakSet = new WeakSet();
let car1 = {
  make: 'Honda',
  model: 'Civic'
};

carWeakSet.add(car1);

let car2 = {
  make: 'Toyota',
  model: 'Camry'
};

carWeakSet.add(car2);

carWeakSet.delete(car1);

console.log(carWeakSet);

// WeakMap - keys are objects only, values can be arbitrary

let carWeakMap = new WeakMap();

let key1 = {
  id: 1
};

let carA1 = {
  make: 'Honda',
  model: 'Civic'
};

carWeakMap.set(key1, carA1);

let key2 = {
  id: 2
};

let carA2 = {
  make: 'Toyota',
  model: 'Camry'
};

carWeakMap.set(key2, carA2);

carWeakMap.delete(key1);

console.log(carWeakMap);
