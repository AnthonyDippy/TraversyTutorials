// Traversing the DOM //

// parentNode
var itemList = document.querySelector('#items');
// parent (div with main) of ul
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#f4f4f4';
// parent (div with container) of div with main
console.log(itemList.parentNode.parentNode);

// parentElement
var itemList = document.querySelector('#items');
// parent (div with main) of ul
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';
// parent (div with container) of div with main
console.log(itemList.parentElement.parentElement);

// childNodes
// returns Node List of children
// causes problems with line breaks being considered text nodes
console.log(itemList.childNodes);

// children
// returns HTML Collection of child elements
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'yellow';

// firstChild
// returns first child node
// causes problems with line breaks being considered text nodes
console.log(itemList.firstChild);

// firstElementChild
// returns first child element or null otherwise
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Hello 1';

// lastChild
console.log(itemList.lastChild);
// lastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'Hello 4';

// nextSibling
console.log(itemList.nextSibling);
// nextElementSibling
console.log(itemList.nextElementSibling);

// previousSibling
console.log(itemList.previousSibling);
// previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'green';

// Creating and Inserting Elements //

// createElement
var newDiv = document.createElement('div');
// add class
newDiv.className = 'Hello';
// add id
newDiv.id = 'Hello1';
// add attribute
newDiv.setAttribute('title', 'Hello Div');

// create text node
var newDivText = document.createTextNode('Hello World');
// add text to div
newDiv.appendChild(newDivText);

// get header container
var container = document.querySelector('header .container');
// get header title
var h1 = document.getElementById('header-title');
// insert before header title
container.insertBefore(newDiv, h1);

newDiv.style.fontSize = '30px';

console.log(newDiv);
