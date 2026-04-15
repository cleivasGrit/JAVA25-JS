export class Book{
    #title;
    #author;
    #id;

    constructor(title, author){
        this.#title = title;
        this.#author = author;
        this.#id = this.#generateID();
        return Object.seal(this);
    }

    #generateID(){
        return Math.round(Math.random()*1000000);
    }

    logInfo(){
        console.log(this.#title, this.#author)
    }
    getID(){
        return this.#id;
    }
    getTitle(){
        return this.#title;
    }
    getAuthor(){
        return this.#author;
    }
    setID(newID){
        this.#id = newID;
    }
}

const ob = {
    egenskap: 10,
    loggaEgenskap(){
        console.log(this.egenskap)
    }
}