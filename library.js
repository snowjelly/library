let library = [];
const libraryDiv = document.querySelector('.library');

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.readState = function() {
  this.readState = function() {
    if (read === true) {
      read = 'read';
    } else {
      read = 'not read yet';
    }
    return read;
  }
}

function addBookToLibrary() {
  const newBook = Object.create(Book);
  newBook.title = "Harry Potter";
  newBook.author = 'Hatsune Miku';
  newBook.pages = 420;
  newBook.read = true;


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
  newBookPages.textContent = newBook.pages;
  newBookDiv.appendChild(newBookPages);

  const newBookRead = document.createElement('p');
  newBookRead.setAttribute('class', 'read');
  newBookRead.textContent = Book.prototype.readState();
  newBookDiv.appendChild(newBookRead);

  
  
  

  library.push(newBook);
}
addBookToLibrary();