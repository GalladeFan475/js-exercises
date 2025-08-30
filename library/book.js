const myLibrary = [];

function Book(title, author, pages) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = false;
  this.ID = crypto.randomUUID();
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBook(arr) {
  arr.forEach((book, i) =>
    console.log(
      `${i + 1}. ID: ${book.ID}, Title: ${book.title}, Author: ${book.author}`
    )
  );
}
