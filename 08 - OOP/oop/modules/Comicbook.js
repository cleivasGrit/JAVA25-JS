import { Book } from "./Bookclass.js";

export class ComicBook extends Book{
    #genre;
    constructor(title, author, genre){
        super(title, author);
        this.#genre = genre;
        super.logInfo()
    }
    getGenre(){
        return this.#genre;
    }

}