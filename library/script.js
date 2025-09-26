const myLibrary = [];
const libraryContainer = document.querySelector(".container");

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

Book.prototype.toggleReadStatus = function () {
  this.read = !this.read;
};

function addBookToLibrary(title, author, pages) {
  const newBook = new Book(title, author, pages);
  myLibrary.push(newBook);
}

function createBookElement(el, content) {
  const element = document.createElement(el);
  element.textContent = content;
  return element;
}

function createBookCard() {
  libraryContainer.textContent = "";

  myLibrary.forEach((book) => {
    // Create Card
    const bookCard = document.createElement("div");
    bookCard.setAttribute("class", "book-card");

    // Add Title to Card
    bookCard.appendChild(createBookElement("h3", `Book Title: ${book.title}`));

    // Add Details to Card
    const bookDetails = document.createElement("div");
    bookCard.setAttribute("class", "book-details");

    bookDetails.appendChild(createBookElement("h4", `Book ID: ${book.ID}`));
    bookDetails.appendChild(
      createBookElement("h4", `Book Author: ${book.author}`)
    );
    bookDetails.appendChild(
      createBookElement("h4", `Book Pages: ${book.pages}`)
    );
    bookCard.appendChild(bookDetails);

    // Create buttons
    const bookButtons = document.createElement("div");
    bookButtons.setAttribute("class", "book-btn");

    bookButtons.appendChild(
      createBookElement("button", book.isRead ? "Read" : "Unread").setAttribute(
        "class",
        book.isRead ? "book-read-btn toggle" : "book-unread-btn toggle"
      )
    );
    bookButtons.appendChild(
      createBookElement("button", "Delete Button").setAttribute(
        "class",
        "book-delete-btn"
      )
    );

    // Give buttons function
    document.querySelector(".toggle").addEventListener("click", (e) => {
      book.toggleReadStatus();
      e.target.textContent = book.isRead ? "Read" : "Unread";
    });
    document.querySelector(".book-delete-btn").addEventListener("click", () => {
      const index = myLibrary.findIndex((b) => b.id === book.id);
      myLibrary.splice(index, 1);
    });
  });
}

const dialog = document.querySelector("dialog");
const addBookBtn = document.querySelector(".book-new-btn");
const submitBookBtn = document.querySelector(".form-submit-btn");
const cancelBookBtn = document.querySelector(".form-cancel-btn");

addBookBtn.addEventListener("click", () => {
  dialog.showModal();
});
cancelBookBtn.addEventListener("click", () => {
  dialog.close();
});

submitBookBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let title = document.querySelector("#book-title-input").value;
  let author = document.querySelector("#book-author-input").value;
  let pages = document.querySelector("#book-pages-input").value;

  addBookToLibrary(title, author, pages);
  dialog.close();
  document.querySelector("#book-form").reset();
});

function displayBooks() {
  if (myLibrary.length === 0) {
    libraryContainer.textContent = "";
    libraryContainer.appendChild(
      createBookElement("h2", "Your library is currently empty")
    );
  } else {
    createBookCard();
  }
}

displayBooks();
