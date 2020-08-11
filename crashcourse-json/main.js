// JS object
// not valid JSON
var person = {
  name: 'Brad',
  age: 35,
  email: function() {
    return 'brad@gmail.com';
  }
};
console.log(person);
// person.name
// person.age
// person.email()

var person2 = {
  name: 'Brad',
  age: 35,
  address: {
    street: '5 Main St',
    city: 'Boston'
  },
  children: ['Brianna', 'Nicholas']
};
console.log(person2);

// convert JS value to a valid JSON string
person2 = JSON.stringify(person2);

console.log(person2);

// convert JSON string into an object
person2 = JSON.parse(person2);

console.log(person2);

console.log(person2.children[1]);

var people = [
  {
    name: 'Brad',
    age: 35
  },
  {
    name: 'John',
    age: 40
  },
  {
    name: 'Sara',
    age: 25
  }
];

console.log(people);

console.log(people[1]);

// returns array of objects in JSON format
console.log(JSON.stringify(people));

// display object properties to the screen
const list = document.getElementById('people');
let output = '';
for (let i = 0; i < people.length; i++) {
  output += `
  <li>${people[i].name}</li>
  `;
}
list.innerHTML = output;

// json file
// http request through js
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    // Typical action to be performed when the document is ready:
    // document.getElementById('demo').innerHTML = xhttp.responseText;
    console.log(xhttp.responseText);
    var response = JSON.parse(xhttp.responseText);
    console.log(response.people);
    var peopleJSON = response.people;

    const jsonList = document.getElementById('people-json');
    let output = '';
    for (let i = 0; i < peopleJSON.length; i++) {
      output += `
      <li>${peopleJSON[i].name}</li>
      `;
    }
    jsonList.innerHTML = output;
  }
};
xhttp.open('GET', 'people.json', true);
xhttp.send();
