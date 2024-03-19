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