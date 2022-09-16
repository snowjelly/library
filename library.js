let library = [];

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
  
}