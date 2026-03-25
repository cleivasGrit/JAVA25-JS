const pEl = document.createElement('p');
console.log(pEl);

document.body.append(pEl);
pEl.innerText = 'Nu kommer jag pausa lite.'

// Skapa en lista = ul element, med tre li element, valfritt textinnehåll, lägg till i bodyn

const textContent = ['ett', 'två', 'tre', 'fyra', 'fem'];
const ulEl = document.createElement('ul');
document.body.append(ulEl);

// ulEl.innerHTML = '<li>ett</li><li>två</li>'

for(const text of textContent){
    const li = document.createElement('li');
    li.id = text;
    li.innerHTML = text;

    ulEl.append(li);
}
// document.querySelector('#fyra').remove();
// ulEl.remove();
console.log(`testa med ny 
    rad`)

for(let i = 0; i<100; i++){
    const h1 = document.createElement('h1');

    const hue = i*5;

    h1.innerText = `The current hue value is ${hue}`;
    h1.style.backgroundColor = `hsl(${hue}, 80%, 80%)`;

    document.body.append(h1);
}