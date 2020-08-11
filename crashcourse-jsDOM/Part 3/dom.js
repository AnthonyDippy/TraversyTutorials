// Events //

// embed event listener in HTML
// <button onclick="buttonClick()" class="btn btn-dark btn-block" id="button">Click Here</button>

// add event listener with JS
// var button = document
//   .getElementById('button')
//   .addEventListener('click', buttonClick);

// button

var button = document.getElementById('button');

button.addEventListener('click', buttonClick);
// button.addEventListener('dblclick', buttonClick);
// button.addEventListener('mousedown', buttonClick);
// button.addEventListener('mouseup', buttonClick);

function buttonClick(e) {
  console.log('Button clicked');
  document.getElementById('header-title').textContent = 'Changed';
  document.querySelector('#main').style.backgroundColor = '#f4f4f4';

  console.log(e);
  console.log(e.target);
  console.log(e.target.id);
  console.log(e.target.className);
  // DOM Token List
  console.log(e.target.classList);
  var output = document.getElementById('output');
  output.innerHTML = `<h3>${e.target.id}</h3>`;

  console.log(e.type);

  // from the window
  console.log(e.clientX);
  console.log(e.clientY);

  // from the element itself
  console.log(e.offsetX);
  console.log(e.offsetY);

  // check if a key was held
  console.log(e.altKey);
  console.log(e.ctrlKey);
  console.log(e.shiftKey);
}

// box

var box = document.getElementById('box');

box.addEventListener('mousemove', boxEvent);

// box.addEventListener('mouseenter', boxEvent);
// box.addEventListener('mouseleave', boxEvent);

// box.addEventListener('mouseover', boxEvent);
// box.addEventListener('mouseout', boxEvent);

function boxEvent(e) {
  console.log('EVENT TYPE: ' + e.type);
  output.innerHTML =
    '<h3>MouseX: ' + e.offsetX + '</h3><h3>MouseY: ' + e.offsetY + '</h3>';
  box.style.backgroundColor = `
  rgb(${e.offsetX},${e.offsetY}, 125)
  `;
  document.body.style.backgroundColor = `
  rgb(${e.offsetX},${e.offsetY}, 125)  
  `;
}

// text input

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');

itemInput.addEventListener('keydown', textEvent);
// itemInput.addEventListener('keyup', textEvent);
// itemInput.addEventListener('keypress', textEvent);

// itemInput.addEventListener('focus', textEvent);
// itemInput.addEventListener('blur', textEvent);

// itemInput.addEventListener('cut', textEvent);
// itemInput.addEventListener('paste', textEvent);

// itemInput.addEventListener('input', textEvent);

function textEvent(e) {
  console.log('EVENT TYPE: ' + e.type);
  console.log(e.target.value);
  output.innerHTML = `<h3>${e.target.value}</h3>`;
}

// select

var select = document.querySelector('select');

select.addEventListener('change', selectEvent);
// select.addEventListener('input', selectEvent);

function selectEvent(e) {
  console.log('EVENT TYPE: ' + e.type);
  console.log(e.target.value);
}

// submit

form.addEventListener('submit', runSubmit);

function runSubmit(e) {
  e.preventDefault();
  console.log('EVENT TYPE: ' + e.type);
  console.log(e.target.value);
}
