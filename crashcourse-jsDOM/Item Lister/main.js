const form = document.getElementById('addForm');
const itemList = document.getElementById('items');
const filter = document.getElementById('filter');

// form submit event
form.addEventListener('submit', addItem);
// delete item event
itemList.addEventListener('click', deleteItem);
// filter event
filter.addEventListener('keyup', filterItems);

// add item
function addItem(e) {
  e.preventDefault();

  // get input value
  const item = document.getElementById('item');
  const newItem = item.value;

  // create new li element
  const li = document.createElement('li');
  li.className = 'list-group-item';
  li.appendChild(document.createTextNode(newItem));

  // create new delete button element
  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  deleteBtn.appendChild(document.createTextNode('X'));

  // append button to li
  li.appendChild(deleteBtn);

  // append li to list
  itemList.appendChild(li);
}

// delete item
function deleteItem(e) {
  // if (e.target.className.includes('delete')) {
  //   e.target.parentElement.remove();
  // }
  if (e.target.classList.contains('delete')) {
    // if (confirm('Are You Sure?')) {
    //   let li = e.target.parentElement;
    //   itemList.removeChild(li);
    // }
    e.target.parentElement.remove();
  }
}

// filterItems
function filterItems(e) {
  // get lowercase serach text
  const text = e.target.value.toLowerCase();
  // get HTML collection of li children
  const items = itemList.getElementsByTagName('li');
  Array.from(items).forEach(item => {
    const itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().includes(text)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
