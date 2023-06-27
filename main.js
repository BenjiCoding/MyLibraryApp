// Create a Book object
function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = function(){
        console.log("I didn't read it");
    }
}

// Create a list which will contains books
let myBooks = [];

// Add book
function addBook(title, author, pages){
    for(let i = 0; i < 10; i++){
        let book = new Book(title + ' ' + i.toString(), author + ' ' + i.toString(), pages + i);
        myBooks.push(book);
    }
    
    
}
addBook("Title", "Author", 100);
// Delete book
function deleteBook(id){
    myBooks.splice(id, 1);
}
deleteBook(5)
console.log(myBooks);