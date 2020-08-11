// examine the document object (properties)
// console.dir(document);

// Document Properties //

console.info('Properties');

// Strings

console.log(document.domain);

console.log(document.URL);

console.log(document.title);

// not read only, can write too

console.log(document.doctype);

// HTML Elements

console.log(document.head);

console.log(document.body);

// HTML Collections (not arrays)

console.log(document.all);

console.log(document.all[10]); // not the correct way to select elements

console.log(document.forms);

console.log(document.links);

console.log(document.images);

// Document Selectors //

console.info('Selectors');

// getElementById()

console.log(document.getElementById('header-title'));

// getElementsByClassName()
var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'Hello 2';
items[1].style.fontWeight = 'bold';

// Gives error
// items.style.backgroundColor = '#f4f4f4';

for (let i = 0; i < items.length; i++) {
  items[i].style.backgroundColor = '#f4f4f4';
}

// getElementsByTagName()
var li = document.getElementsByTagName('li');
console.log(li);

for (let i = 0; i < items.length; i++) {
  li[i].style.fontStyle = 'italic';
}

// querySelector()
var header = document.querySelector('#main-header');
// document.querySelector is equivalent to jQuery $
header.style.borderTop = 'solid 4px #f00';

// grabbed first instance by default
var input = document.querySelector('input');
input.value = 'Hello World';

var submit = document.querySelector('input[type="submit"]');
submit.value = 'SEND';

var item = document.querySelector('.list-group-item');
item.style.color = 'red';

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';

var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.color = 'coral';

// querySelectorAll()
// returns NodeList (similar to Collection but can run array functions)
var titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = 'Title 1';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even');

for (let k = 0; k < odd.length; k++) {
  odd[k].style.backgroundColor = '#f4f4f4';
}
for (let k = 0; k < even.length; k++) {
  even[k].style.backgroundColor = '#ccc';
}

// Other Methods/Properties //

var headerTitle = document.getElementById('header-title');
console.dir(headerTitle);

// .textContent and .innerText are very similar
// minor differences though
headerTitle.textContent = 'Hello';
headerTitle.innerText = 'Goodbye';

headerTitle.innerHTML = '<h3>Hello</h3>';

var header = document.getElementById('main-header');
// must use camel case with .style
// even though css properties use dashes (border-bottom)
// header.style.borderBottom = 'solid 3px #000';
// or use bracket notation
header.style['border-bottom'] = 'solid 3px #000';
