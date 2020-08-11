# es6-crash-course

Traversy Media ES6 Tutorial - https://www.youtube.com/watch?v=2LeqilIw-28&feature=youtu.be&ab_channel=TraversyMedia

***

## Intro

### ES6 (ES2015)

* ECMAScript - language standard and specification (JavaScript, Jscript, ActionScript)
* Most recent version of ECMAScript/JavaScript
* Last was ES5 (2009)

### Objectives

* Fix issues from ES5
* Backward Compatibility
* Modern syntax
* Better scaling & for big applications
* Additions to standard library

### New Features

* let and const declarations
* destructuring assignment
* classes & inheritance
* template strings (literals)
* string features
* math/number features
* data structures
* iterators
* generators
* promises & asynchronous data
* arrow functions

***

## Babel

* JavaScript compiler
* Tool mainly used to convert ES6 into backwards compatible versions of JavaScript for older browsers
* Setup to compile ES6 to ES5
* Added package.json file: `$ npm init`
* Installed Babel dependencies with: `$ npm install babel-cli babel-preset-es2015 --save-dev`
* Changed package.json file scripts to include two different build scripts (with src and destination folders)
* Created .babelrc file and added es2015 as a preset
* Build with: `$ npm run build`
* See documentation for more details **(this is slightly inconsistent with current documentation)**

***

## Let_Const

scope - where variables are available for use

hoisting - where variables and function declarations are moved to the top of their scope before code execution

### var

* var - globally scoped or function/locally scoped
* difference between declaring it outside a function or within a function
* can be re-declared and updated (within the same scope as well)
* hoisted to the top of scope and initialized as undefined
* global scope (not block scope) might cause lots of bugs

### let

* new declaration in ES6
* preferred for variable declaration now
* let is set to replace var
* let is block scoped
* block means chunk of code bounded by {}
* can be updated but not re-declared
* same variable declared in different scopes is allowed (both instances are treated as different variables)
* hoisted to the top of scope and uninitialized (will give reference errors)

### const

* new declaration in ES6
* maintain constant values
* const is block scoped
* can not be updated or re-declared
* must be initialized at time of declaration
* const object properties can be updated
* hoisted to the top of scope and uninitialized (will give reference errors)

***

## Classes

### class

* define with 'class' keyword
* instantiate with 'new' keyword
* constructor method called when object is instantiated
* define object properties (this.???)
* define object (instance) methods (called with InstanceName.???)
* define class static methods (called with ClassName.???)

### inheritance

* inheritance when a new class 'extends' an old class
* use super() method to call parent constructor
* access to parents classes methods

***

## Template

* substitute backticks (``) for quotes ('' or "") in strings
* allows multiple lines and variables/expressions without string concatenation (+)
* use ${code} to include variables/expressions in strings

***

## String_Number_Methods

### String

* startsWith()
* endsWith()
* includes()

### Number

* Hex (0x)
* Binary (0b)
* Octal (0o)
* Number.isFinite()
* Number.isNaN() - NaN means not a number
* Number.isInteger()

***

## Default_Params_Spread

### Default Params

* function parameters default to undefined
* often useful to set parameters to a different default value
* in the past - test parameter values in function body and assign value if undefined
* now - set parameter equal to a default value in the function definition (header)
* works the same as other languages

### Spread

* expands expression in places where multiple arguments expected
* allows iterable (array expression or string) to be expanded in places where zero or more arguments (function calls) or elements (array literals) are expected
* object expression to be expanded in places where zero or more key-value pairs (object literals) are expected

***

## Set_Map

### Set

* stores unique values of any type (primitive or object references)
* can include a variety of data types at once

### Map

* stores key-value pairs

### WeakSet

* objects only

### WeakMap

* keys are objects only, values can be arbitrary

weak references mean that garbage collector might destroy objects if there are no other references to that object

***

## Arrows

* syntactically compact alternative to a regular function expression
* does not have its own bindings to this, arguments, super, or new.target keywords
* you don't need to rename "this" to "that"
* ill suited as (object) methods and cannot be used as constructors
* until arrow functions, every new function defined its own this value based on how the function was called
* an arrow function does not have its own this. The this value of the enclosing lexical scope is used

***

## Promises

* object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value
* a returned object to which you attach callbacks, instead of passing callbacks into a function
* three different states
  * pending - initial state
  * fulfilled - operation completed successfully
  * rejected - operation failed

```JavaScript
new Promise(executor);
// where executor is a function that is passed argument resolve and reject (functions)
```

callback (call-after) function is executable code that is passed as an argument to other code that is expected to call back (execute) the argument at a given time

synchronous callback - execution is immediate

asynchronous callback - execution occurs at a later time

```JavaScript
createAudioFileAsync(audioSettings).then(successCallback, failureCallback);

const promise = createAudioFileAsync(audioSettings);
promise.then(successCallback, failureCallback);
```

* multiple callbacks may be added by calling then() several times
* each callback executed one after another in the insertion order
* chain asynchronous operations back to back, so each subsequent operation starts when the previous operation succeeds
* then() function returns a new promise every time (each promise represents a step in the chain)
* catch() function to catch errors (can be propagated)

```JavaScript
doSomething()
.then(function(result) {
  return doSomethingElse(result);
})
.then(function(newResult) {
  return doThirdThing(newResult);
})
.then(function(finalResult) {
  console.log('Got the final result: ' + finalResult);
})
.catch(failureCallback);
```

```JavaScript
doSomething()
.then(result => doSomethingElse(result))
.then(newResult => doThirdThing(newResult))
.then(finalResult => {
  console.log(`Got the final result: ${finalResult}`);
})
.catch(failureCallback);
```

***

## Generators

* functions that can be paused and resumed (unlimited times)
* at each pause it can return a value back
* denoted by * appended to end of function keyword
* steps in generator denoted by `yield 'message';`
* next() function to step through generator
* next() executes code and returns object with value of yield message