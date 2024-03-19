const container = document.querySelector('.container');
const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    let result = this.title + " by " + this.author + ", " + this.pages + " pages, ";
    if(read) {
      result += "finished reading";
    } else {
      result += "not read yet";
    }
    return result;
  }
}

function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read));
}

function displayBooks(myLibrary) {
  myLibrary.forEach(item => {
    const book = document.createElement('div.book');
    // Create areas for book information
    const title = document.createElement('div.title');
    const readStatus = document.createElement('div.read');
    const author = document.createElement('div.author');
    const numPages = document.createElement('div.pages');
    // Set all the necessary book information
    title.textContent = item.title;
    readStatus.textContent = item.read;
    author.textContent = item.author;
    numPages.textContent = item.pages;

    console.log(item.author + " " + item.title);

    book.style.display = 'grid'
    book.style.gridTemplateRows = '4fr 1fr 1fr 1fr';
    book.appendChild(title);
    book.appendChild(author);
    book.appendChild(numPages);
    book.appendChild(readStatus);

    container.appendChild(book);
  }); 
}