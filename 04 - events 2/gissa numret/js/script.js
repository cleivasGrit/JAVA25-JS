let rand = Math.floor(Math.random()*100)+1;
let counter = 0;

const form = document.querySelector('form');
const resetBtn = document.querySelector('#reset');
const messageEl = document.querySelector('#message');


const handleGuess = event => {
    event.preventDefault();

    const guess = form.querySelector('input').value;

    counter++;
    // console.log(counter);

    if(rand<guess) messageEl.innerText = 'Gissningen var för hög.';
    else if(rand>guess) messageEl.innerText = 'Gissningen var för låg.';
    else{
        messageEl.innerText = `Grattis! Du gissade rätt på ${counter} gissningar.`;
        resetBtn.classList.remove('no-show');
    }

    form.reset();
};

const handleReset = ()=>{
    rand = Math.floor(Math.random()*100)+1;
    // console.log(rand)
    counter=0;
    messageEl.innerText = '';
    resetBtn.classList.add('no-show');
}

// console.log(rand)
form.addEventListener('submit', handleGuess);
resetBtn.addEventListener('click', handleReset);

