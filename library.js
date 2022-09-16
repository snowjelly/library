let library = [];
const libraryDiv = document.querySelector('.library');

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.readStatus = function() {
  if (this.read == 'true') return 'read';
  return 'not read yet';
}

function addBookToLibrary(event) {
  const newBook = Object.create(Book.prototype);
  newBook.title = event.target.form[0].value;
  newBook.author = event.target.form[1].value;
  newBook.pages = event.target.form[2].value;
  newBook.read = event.target.form[3].value;

  const newBookDiv = document.createElement('div');
  newBookDiv.setAttribute('class', 'book');
  libraryDiv.appendChild(newBookDiv);

  const newBookTitle = document.createElement('h4');
  newBookTitle.setAttribute('class', 'book-title');
  newBookTitle.textContent = newBook.title;
  newBookDiv.appendChild(newBookTitle);

  const newBookAuthor = document.createElement('h5');
  newBookAuthor.setAttribute('class', 'author');
  newBookAuthor.textContent = newBook.author;
  newBookDiv.appendChild(newBookAuthor);

  const newBookPages = document.createElement('p');
  newBookPages.setAttribute('class', 'pages');
  newBookPages.textContent = newBook.pages + 'p.g';
  newBookDiv.appendChild(newBookPages);

  const newBookRead = document.createElement('p');
  newBookRead.setAttribute('class', 'read');
  newBookRead.textContent = newBook.readStatus();
  newBookDiv.appendChild(newBookRead);


  library.push(newBook);
}

const submitBtn = document.querySelector("button[type='button']");
submitBtn.addEventListener('click', addBookToLibrary);

const addBtn = document.querySelector('.add');
addBtn.addEventListener('click', (event) => {
  const form = document.querySelector('#form');
  form.removeAttribute('class', 'collapse');
  const forum = document.querySelector('.forum');
  forum.setAttribute('class', 'forum add-forum-bg');
  addBtn.remove();
});