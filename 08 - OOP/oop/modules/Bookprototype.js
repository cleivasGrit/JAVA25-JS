export function Book(title, author, pages){
    this.title = title; 
    this.author = author;
    this.pages = pages;
}

Book.prototype.getInfo = function(){
    console.log(this.author, this.title);
}