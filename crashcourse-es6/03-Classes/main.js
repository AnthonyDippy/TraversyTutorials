'use strict';

// essential to object-oriented programming (OOP)
class User {
  // constructor method (called when class is instantiated)
  constructor(username, email, password) {
    // define class properties
    this.username = username;
    this.email = email;
    this.password = password;
  }

  // static method (same no matter what aka not dynamic)
  static countUsers() {
    console.log('There are 50 users');
  }

  // define method (function that belongs to class)
  register() {
    console.log(this.username + ' is now registered');
  }
}

// instantiate User object
let bob = new User('bob', 'bob@email.com', '12345');

// call object method
bob.register();

// call static method (with class name)
// no instantiation necessary
User.countUsers();

// extend a User class to show inheritance
class Member extends User {
  constructor(username, email, password, memberPackage) {
    // this.username = username;
    // this.email = email;
    // this.password = password;

    // calls parent constructor
    super(username, email, password);

    this.package = memberPackage;
  }

  getPackage() {
    console.log(
      this.username + ' is subscribed to the ' + this.package + ' package'
    );
  }
}

// instantiate Member object
let mike = new Member('mike', 'mike@email.com', '123', 'Standard');

// call new method from extended class
mike.getPackage();

// call method from parent class
mike.register();
