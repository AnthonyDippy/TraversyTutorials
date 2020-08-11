// Book Class
// represents a book
class Book {
  constructor(name, author, isbn) {
    this.name = name;
    this.author = author;
    this.isbn = isbn;
  }
}

// UI Class
// handle UI tasks
class UI {
  static displayBooks() {
    const books = Store.getBooks();
    // books.forEach(function(book) {
    //   UI.addBookToList(book);
    // });
    books.forEach(book => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector('#book-list');
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${book.name}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
    `;
    list.appendChild(row);
  }

  static deleteBook(el) {
    // delete tr when link contains class delete
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }

  static showAlert(message, className) {
    // <div class="alert alert-danger">Message</div>
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    container.insertBefore(div, form);
    // vanish in 3 seconds
    setTimeout(() => document.querySelector('.alert').remove(), 3000);
  }

  static clearFields() {
    // clear all input fields
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
  }
}

// Store Class
// handles storage
// can not store objects in local storage
// must stringify the objects
// and parse the string
class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(isbn) {
    const books = Store.getBooks();
    books.forEach((book, index) => {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
  }
}

// Events

// Event: display books

// add event listener to display the books when DOM is ready
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: add a book

// add event listener to add book when form is submitted
document.querySelector('#book-form').addEventListener('submit', e => {
  // prevent actual submit
  e.preventDefault();

  // get form values
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const isbn = document.querySelector('#isbn').value;

  // validate
  if (title === '' || author === '' || isbn === '') {
    // report error message
    UI.showAlert('Please fill in all fields', 'danger');
  } else {
    // instantiate book
    const book = new Book(title, author, isbn);

    // add book to UI
    UI.addBookToList(book);

    // add book to store
    Store.addBook(book);

    // report success message
    UI.showAlert('Book added', 'success');

    // clear fields
    UI.clearFields();
  }
});

// Event: remove a book

// add event listener to delete book when delete link is clicked
// utilize event propagation by adding listener to entire list
document.querySelector('#book-list').addEventListener('click', e => {
  // remove book from UI
  UI.deleteBook(e.target);

  // remove book from store
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

  // report success message
  UI.showAlert('Book removed', 'success');
});
