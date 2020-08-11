# json-crash-course

Traversy Media JSON Tutorial - https://youtu.be/wI1CWzNtE-M

***

## Notes

Important Note: JSON is **NOT** the same as JavaScript Objects!

JSON does not utilize single quotes for string syntax. JSON also requires that all keys have have double quotes around them. JSON also can not contain functions and other things possible in JavaScript object literals.

### JSON

* JavaScript Object Notation
* lightweight data-interchange format
* very important for sending data back and forth to a server as text
  * RESTful APIs
* based on a subset of JavaScript
  * JavaScript object literals
* easy to read and write
* often used with AJAX
* arguably replaced XML
* can be used with most modern languages

#### Two Structures

* A collection of name/value pairs. In various languages, this is realized as an object, record, struct, dictionary, hash table, keyed list, or associative array.
  * An object is an unordered set of name/value pairs. An object begins with { (left brace) and ends with } (right brace). Each name is followed by : (colon) and the name/value pairs are separated by , (comma).

`{string: value, string: value}`

* An ordered list of values. In most languages, this is realized as an array, vector, list, or sequence.
  * An array is an ordered collection of values. An array begins with [ (left bracket) and ends with ] (right bracket). Values are separated by , (comma).

`[value, value, value ...]`

### Data Types (Values)

* number
  * no quotes
  * no difference between integer and floats
  * 827
* string
  * double quotes
  * string of Unicode characters
  * "i am a string"
* boolean
  * true or false
* array
  * brackets []
  * ordered list of 0 or more values
* object
  * curly braces {}
  * unordered collection of key/value pairs
  * multi-tiered objects
* null
  * empty value

Standard JavaScript object literals and supersets of JSON may allow other data types.

Example: BSON for MongoDB

### Syntax

* uses key/value pairs
  * {"name":"Brad"}
* uses double quotes around key
  * note: JavaScript object literals do not need quotes around the key, just the values which are strings
  * also: JSON does not use single quotes to represent strings
* must use the specified data types
* key/value pairs separated by commas
* .json file type
* Application/json MIME type
  
```JSON
{
  "name": "Brad Traversy",
  "age": 35,
  "address": {
    "street": "5 Main St",
    "city": "Boston"
  },
  "children": ["Brianna","Nicholas"]
}
```