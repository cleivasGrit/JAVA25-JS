import { Book } from "./modules/Bookprototype.js";
import {Book as Bookclass} from './modules/Bookclass.js'
import { ComicBook } from "./modules/Comicbook.js";

const book1 = new Book('Harry Potter', 'JK Rowling', 300);
const book2 = new Book('Bamse', 'Rune Andreasson', 30);


console.log(book1)
console.log(book2)
book1.getInfo()

console.log(Object.getPrototypeOf(book1))

const book3 = new Bookclass('The descent of man', 'Charles Darwin')

console.log(book3);

console.log(book3.getID())

book3.logInfo()
// book3.genereateID(); //privat
// Object.seal(book3)

// book3.id = 400;
console.log(book3)

const book4 = new Bookclass('Dune', 'Någon');
// book4.id = 500; 

book4.setID(3)
console.log(book4)

const comicBook = new ComicBook('Demon slayer', 'vet ej', 200);

console.log(comicBook)
comicBook.logInfo();