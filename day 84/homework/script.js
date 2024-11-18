function Book(name, pages, author){
    this.name = name;
    this.pages = pages;
    this.author = author;
};

const Book1 = new Book("pepa", 200, "shakespiere")

console.log(Book1)