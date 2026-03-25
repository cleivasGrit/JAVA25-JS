// Hämta element
const firstH2 = document.querySelector('h2');
console.log(firstH2);

const thirdArticle = document.querySelector('.art-3');
console.log(thirdArticle);

const allA = document.querySelectorAll('a');
console.log(allA);

//Ändra på element
firstH2.innerText = 'Nytt textinnehåll';

thirdArticle.innerHTML = '<h1>En rubrik</h1>';
// thirdArticle.innerText = '<h1>En rubrik</h1>';

// allA[0].style.color = 'blue';
for(const a of allA){
    // Vi måste ändra på ett element i taget
    // a.style.color = 'blue'; //inline styling

    a.classList.add('blue');
}

// Där det står fire, gör texten större och orange
const secondH3 = document.querySelector('.art-2 h3');
secondH3.style.color = 'orange';
secondH3.style.fontSize = '32px';