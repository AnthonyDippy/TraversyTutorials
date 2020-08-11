# jsDOM-crash-course

Traversy Media JS DOM Tutorial - https://youtu.be/mPd2aJXCZ2g

***

## Notes

### Document Object Model (DOM)

* tree of nodes/elements created by the browser
* JavaScript can be used to read/write/manipulate to the DOM
  * change HTML elements
  * change HTML attributes
  * change CSS styles
  * remove HTML elements/attributes
  * add new HTML elements/attributes
  * react to existing HTML events
  * create new HTML events
* object oriented representation
* standard object model and programming interface for HTML
* defines:
  * HTML elements as objects
  * properties of HTML elements
  * methods to access HTML elements
  * events for HTML elements
* many operations here used to be strictly done with jQuery

![DOM Tree](https://www.w3schools.com/js/pic_htmltree.gif "Example HTML DOM Tree")

### Code

`console.dir(object)`

display interactive list of object properties

#### Document Properties

* Strings
  * .domain
  * .url
  * .title
  * .doctype
* HTML Elements
  * .head
  * .body
* HTML Collections
  * .all
  * .forms
  * .links
  * .images
  * etc

#### Document Selectors

* `.getElementById('id')`
  * returns single HTML element with given id
* `.getElementsByClassName('class')`
  * returns HTML Collection of elements with given class
* `.getElementsByTagName('tag')`
  * returns HTML Collection of elements with given tag
* `.querySelector(selector)`
  * returns first HTML element matching given selector
* `.querySelectorAll(selector)`
  * returns Node List of elements matching given selector

#### Element Properties

* `.attribute`
  * read/write the value of an attribute
    * .value
    * .attr
    * etc
* `.id`
  * element id
* `.className` 
  * string of all classes separated by spaces
* `.classList`
  * DOM Token List of classes
* `.textContent`
  * read/write content of all elements (including script and style elements)
  * does not care about style and will return text of hidden elements
  * does not care about CSS styling so it will not trigger a reflow
* `.innerText`
  * read/write content
  * aware of style and will not return text of hidden elements
  * aware of CSS styling so it will trigger a reflow
* `.innerHTML`
  * read/write HTML inside tag
  * do not use this unless you specifically intend to insert HTML within an element
* `.style.property`
  * read/write CSS style properties
  * property must be in camel case (can not use dashes)
    * borderBottom vs border-bottom
  * or use bracket notation instead
    * `.style['property-with-dashes']`

#### Selectors

* tag
  * tag selector
* .class
  * class selector
* #id
  * id selector
* "*"
  * universal selector
* []
  * attribute selector
    * `[attr]`
      * presence of attribute
    * `[attr=val]`
      * value matches
    * `[attr~=val]`
      * value contains val as one word of a space separated list of words
    * `[attr^=val]`
      * value starts with val
    * `[attr$=val]`
      * value ends with val
    * `[attr~=val]`
      * value contains the substring val
* pseudo class
  * selector:keyword
    * keyword added to the end of a selector to style selected element only when it is in a certain state
      * :not
      * :active
      * :checked
      * :first-child
      * :nth-child(pattern)
* pseudo elements
  * selector::keyword
    * keyword added to the end of a selector to select a certain part of an element
      * ::after
      * ::before
      * ::first-letter
      * ::first-line
      * ::selection
* combinator
  * A, B
    * selector list
      * elements matching A and/or B
      * (not a combinator)
  * A B
    * descendant
      * elements matching B that is a descendant of an element matching A (a child or a child of a child etc.)
  * A > B
    * child
      * elements matching B that are direct children of an element matching A
  * A + B
    * adjacent sibling
      * elements matching B that are the next siblings of an element matching A (the next child of the same parent)
  * A ~ B
    * general sibling
      * elements matching B that are one of the next siblings of an element matching A (one of the next children of the same parent)

#### Traversing the DOM

* parent
  * .parentNode
    * gets parent
  * .parentElement
    * gets parent, must be an element or null
* child
  * .childNodes
    * returns Node List of children
    * causes problems with considering line breaks as text nodes
  * .children
    * returns HTML Collection of child elements
  * .firstChild
    * returns first child node
    * causes problems with considering line breaks as text nodes
  * .firstElementChild
    * returns first child element or null otherwise
  * .lastChild
  * .lastElementChild
* sibling
  * .nextSibling
  * .nextElementSibling
  * .previousSibling
  * .previousElementSibling

#### Creating and Inserting Elements

* document.createElement(tag)
  * creates new element with given tag
* document.createTextNode(text)
  * creates new test node with given text
* read/write properties of element
  * element.id
  * element.className (string of all classes separated by spaces)
  * element.classList (DOM Token List)
  * element.setAttribute(attr, value)
* element.appendChild(el)
* element.removeChild(el)
* element.remove();
* parent.insertBefore(newChild, refChild)

#### Events

Given function:

```JavaScript
function buttonClick() {
  console.log('Button clicked');
}
```

HTML Method (not practical)

```HTML
<button onclick="buttonClick()" class="btn btn-dark btn-block" id="button">Click Here</button>
```

Current JS Method

```JavaScript
var button = document
  .getElementById('button')
  .addEventListener('click', buttonClick);
```

* target.addEventListener('type', listener)
  * register an event listener
  * sets up a function that will be called whenever the specified event is delivered to the target
  * type is a case-sensitive string representing an event type
  * listener is either an object implementing EventListener or a function
    * EventListener's handleEvent() method or the passed function would serve as the callback function
    * callback function accepts single Event object parameter
  * allows adding more than a single handler for an event
  * fine-grained control of the phase when listener is activated (capturing vs bubbling)
  * works on any DOM element (not just HTML elements)
  * duplicate event listeners with same parameters are discarded (will not call EventListener more than once)
    * exception is anonymous functions
  * this
    * refers to target element normally
    * if arrow function will use one level higher scope

##### Event Object

* properties
  * .target
    * returns target element
    * .value
      * read/write value attribute of element
  * .type
    * returns name of event
  * mouse
    * clientX/clientY
      * from the window
    * offsetX/offsetY
      * from the element itself
    * altKey/ctrlKey/shiftKey
      * booleans
* methods
  * .preventDefault()
    * default action that belongs to the event will not occur
    * uses
      * clicking on a submit button (prevent it from submitting a form)
      * clicking on a link (prevent the link from following the URL)

##### Event Types

* mouse
  * click
  * dblclick
  * mousemove
  * mousedown
  * mouseup
  * mouseenter
  * mouseleave
  * mouseover
  * mouseout
* key
  * input
  * keydown
  * keyup
  * keypress
  * focus
  * blur
  * cut
  * paste
* select
  * input
  * change
* submit
  * use e.preventDefault()