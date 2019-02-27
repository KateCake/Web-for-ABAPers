function Book(title, author, year, publisher, format, language) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.publisher = publisher;
    this.format = format;
    this.language = language;
    this.getTitle = function() {
        return this.title;
    }
    this.getAuthor = function() {
        return this.author;
    }
    this.getYear = function() {
        return this.year;
    }
    this.getPublisher = function() {
        return this.publisher;
    }
    this.getFormat = function() {
        return this.format;
    }
    this.getLanguage = function() {
        return this.language;
    }
    this.setTitle = function (title){
        this.title = title;
    }

}

function Audiobook(title, author, year, publisher, format, language, length) {
    Book.call(this, title, author, year, publisher, format, language);    
    this.length = length;
    this.getLength = function () {
        return this.length;
    }
    this.setLength = function (length){
        this.length = length;
    }
}

function Textbook(title, author, year, publisher, format, language, pages) {
    Book.call(this, title, author, year, publisher, format, language);
    this.pages = pages;
    this.getPages = function () {
        return this.pages;
    }
    this.setPages = function (pages){
        this.pages = pages;
    }
}

var audiobook = new Audiobook("t1", 'a1', '2019', 'p1', 'f1', 'eng', '2h');
console.log(audiobook);
console.log(audiobook.getTitle());
audiobook.setTitle('New Title');
console.log('New title of the book: ' + audiobook.title);
var textbook = new Textbook('t2', 'a2', '2018', 'p2', 'f2', 'ru', '250');
console.log(textbook);
console.log(textbook.getPages());
textbook.setPages('1000');
console.log('New number of pages: ' + textbook.pages);