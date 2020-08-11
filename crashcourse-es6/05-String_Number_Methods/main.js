'use strict';

// Strings
let theString = 'Hello, my name is Brad and I love JavaScript';

console.log(theString);

// startsWith()
console.log(theString.startsWith('Hell'));

// endsWith()
console.log(theString.endsWith('Script'));

// includes()
console.log(theString.includes('love'));

// Numbers

// Hex (0x)
console.log(0xff);

// Binary (0b)
console.log(0b101);

// Octal (0o)
console.log(0o543);

// Number.isFinite()
console.log(Number.isFinite(3));
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(NaN)); // not a number (NaN)

// Number.isNaN()
console.log(Number.isNaN(NaN));
console.log(Number.isNaN('string'));

// Number.isInteger()
console.log(Number.isInteger(2));
console.log(Number.isInteger(-2));
console.log(Number.isInteger(Infinity));
