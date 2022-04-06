let myLibrary = [];

myLibrary.push({
    title: "Les Fleurs du mal",
    author: "Charles Baudelaire",
    bookLenght: 680,
})
myLibrary.push({
    title: "Beato Book v4",
    author: "Rick Beato",
    bookLenght: 200,
})

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
    myLibrary.unshift(newBook);
}

function displayLibrary() {
    const ul = document.querySelector(".book-list");
    ul.innerHTML = "";
    for (bookIndex in myLibrary) {
        const book = myLibrary[bookIndex];
        const item = document.createElement("li");
        item.classList.add("book");
        ul.appendChild(item);
        
        const img = document.createElement("img");
        img.src = "baudelaire.png";
        img.alt = book.title;
        item.appendChild(img);

        const descriptionDiv = document.createElement("div");
        descriptionDiv.classList.add("description");
        item.appendChild(descriptionDiv);

        let div = document.createElement("div");
        const h3 = document.createElement("h3");
        h3.textContent = book.title;
        const h4 = document.createElement("h4");
        h4.textContent = book.author;
        descriptionDiv.appendChild(div);
        div.appendChild(h3);
        div.appendChild(h4);

        div = document.createElement("div");
        const readDiv = document.createElement("div");
        readDiv.classList.add("read");
        readDiv.textContent = "Read:";
        const switchContainer = document.createElement("div");
        switchContainer.classList.add("switch");
        switchContainer.classList.add(book.read ? "on" : "off");
        const switchDiv = document.createElement("div");

        switchContainer.appendChild(switchDiv);
        readDiv.appendChild(switchContainer);
        div.appendChild(readDiv);

        const p = document.createElement("p");
        p.textContent = book.bookLenght;
        div.appendChild(p);
        descriptionDiv.appendChild(div);
    }
}

const addBook = document.querySelector('#add-book');
addBook.addEventListener('click', () => {
    addBookToLibrary();
    displayLibrary();
});

displayLibrary();