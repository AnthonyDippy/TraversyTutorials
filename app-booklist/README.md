# js-booklist-app

Traversy Media JavaScript BookList App - https://youtu.be/JaMCxVWtW58

***

Tracks a localStorage list of the user's favorite books.

## Design

* Classes
  * Book
    * represents a book
      * name
      * author
      * isbn
  * UI
    * handle UI tasks
      * displayBooks
      * addBooksToList
      * deleteBook
      * showAlert
      * clearFields
  * Store
    * handle storage
      * getBooks
      * addBook
      * removeBook
* Events
  * display books
  * add a book
  * remove a book
  * (event propagation - placing listeners on parents of desired elements and checking e.target)

## Notes

### localStorage/sessionStorage

* save key/value pairs in web browser
* keys and values are **always strings**
  * .setItem('key','value')
  * .getItem('key')
  * .removeItem('key')
  * .clear()
* localStorage - stores data with no expiration date
* sessionStorage - stores data for one session (data lost when page closed)

### DOM

* document.querySelector(selector)
* document.createElement(tagName)
* document.createTextNode(text)
* list.appendChild(child)
* container.insertBefore(newChild, refChild)
* el.remove()
* div.className
* el.parentElement
* el.classList

### HTML

* form element
  * series of divs
    * each with a label and input tag
  * ending with a submit input tag
* tabel element
  * thead
    * tr
      * th
  * tbody
    * tr
      * td
* i element
  * a range of text that is set off from the normal text for some reason

### Miscellaneous

* JSON
  * .parse('string')
    * converts a JavaScript Object Notation (JSON) string into an object (array of objects)
  * .stringify()
    * converts a JavaScript value to a JavaScript Object Notation (JSON) string
* setTimeout(function, delay)
  * sets a timer which executes function once timer expires
  * delay in milliseconds
* e.preventDefault();
  * prevent default action for submit button on input