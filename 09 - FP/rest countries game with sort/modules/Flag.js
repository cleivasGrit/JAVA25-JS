export class Flag{
    #name;
    #region;
    #flagURL;
    #card;

    constructor(name, flagURL, region){
        this.#name = name;
        this.#flagURL = flagURL;
        this.#region = region;
        this.#card = document.createElement('div');
    }
    getRegion(){
        return this.#region;
    }
    getName(){
        return this.#name;
    }
    render(wrapper){
        const img = document.createElement('img');
        const form = document.createElement('form');

        this.#card.classList.add('flag-card')
        img.src = this.#flagURL;
        form.innerHTML = `
        <input type="text" placeholder="Sweden">
        <button>Guess</button>`;
        
        // Metoden handleGuess anropas när eventet triggas
        //För att this ska referera till rätt object när metoden anropas behöver vi binda this (klassens this) till metoden.
        form.addEventListener('submit', this.#handleGuess.bind(this));

        this.#card.append(img, form);
        wrapper.append(this.#card);
    };

    reRender(wrapper){
        wrapper.append(this.#card);
    }

    #handleGuess(event){
        event.preventDefault();
        
        const h2 = document.createElement('h2');
        const guess = event.target.querySelector('input').value.trim().toLowerCase();

        
        this.#card.append(h2);
        this.#card.classList.add('done');
        event.target.remove(); //ta bort formelementet
        
        if(guess === this.#name.toLowerCase()) {
            h2.innerText = this.#name + ' ✅';
        }
        else{
            h2.innerText = this.#name + ' ❌';
        }
        // console.log(guess, this.#name)
    }
}