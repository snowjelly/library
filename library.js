let library = [];
const libraryDiv = document.querySelector('.library');
const $title = document.querySelector('#title');
const $author = document.querySelector("#author");
const $pages = document.querySelector("#pages");
const $read = document.querySelector('#read');
const $form = document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  addBookToLibrary();
});


function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.printReadStatus = function() {
  if (this.read == 'true') return 'Read';
  return 'Unread';
}

Book.prototype.toggleReadStatus = function() {
  if (this.read == 'true') {
    this.read = 'false';
  }
  else if (this.read == 'false') {
    this.read = 'true';
  }
}

function addBookToLibrary() {
  const newBook = Object.create(Book.prototype);
  newBook.title = $title.value;
  newBook.author = $author.value;
  newBook.pages = $pages.value;
  newBook.read = $read.value;
  newBook.id = library.length;

  library.push(newBook);
  displayLibrary();
}

function displayLibrary() {
  clearLibrary();
  for (i = 0; i < library.length; i++) {
    const newBookDiv = document.createElement('div');
    newBookDiv.setAttribute('class', 'book');
    newBookDiv.setAttribute('id', i.toString());
    libraryDiv.appendChild(newBookDiv);

    newBookDiv.innerHTML = `
    <h4 class="book-title">${library[i].title}</h4>
    <h5 class="author">${library[i].author}</h5>
    <p class="pages">${library[i].pages}p.g</p>
    <button class="toggle-read-status-btn ${library[i].printReadStatus()}">${library[i].printReadStatus()}</button>
    <button class="remove-book-btn">Remove</button>
    `;

    const selectBook = document.getElementById(i);
    selectBook.addEventListener('click', (event) => {
      if (event.target.classList.contains('toggle-read-status-btn')) {
        library[event.target.parentElement.id].toggleReadStatus();
        event.target.textContent = library[event.target.parentElement.id].printReadStatus();
        event.target.setAttribute('class', 'toggle-read-status-btn ' + event.target.textContent);
      }
      if (event.target.classList.contains('remove-book-btn')) {
        removeBook(event);
      }
    });
  }
}

function clearLibrary() {
  for (i = 0; i < library.length; i++) {
    const delBook = document.getElementById(i.toString());
    if (delBook === null) break;
    delBook.remove();
  }
}

function removeBook(event) {
  library = library.filter(function (bookObject) { return bookObject.id != event.target.parentElement.id});
  event.target.parentElement.remove();
}

const addBtn = document.querySelector('.add');

addBtn.addEventListener('click', () => {
  const form = document.querySelector('#form');
  form.removeAttribute('class', 'collapse');
  const forum = document.querySelector('.forum');
  forum.setAttribute('class', 'forum add-forum-bg');
  addBtn.remove();
});