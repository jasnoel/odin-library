let myLibrary = [];

function Book(title, author, bookLenght) {
    this.title = title;
    this.author = author;
    this.bookLenght = bookLenght;
    this.read = false;
}

Book.prototype.infos = function() {
    return `${this.title} by ${this.author}, ${this.bookLenght}, ${this.read ? "read":"not read yet"}`
}

function addBookToLibrary() {
    let title = prompt("Title");
    let author = prompt("Author");
    let bookLenght = prompt("Number of pages")
    let newBook = new Book(title, author, bookLenght);
    myLibrary.push(newBook);
}