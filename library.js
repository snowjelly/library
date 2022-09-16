let library = [];
document.querySelector()

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    if (read === true) {
      read = 'read';
    } else {
      read = 'not read yet';
    }
    return title + ' by ' + author + ', ' + pages + ' pages, ' + read;
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
  const newBookTitle = document.createElement('h4');
  newBookTitle.setAttribute('class', 'book-title');
  newBookTitle.textContent = newBook.title;

  library.push(newBook);
}
addBookToLibrary();