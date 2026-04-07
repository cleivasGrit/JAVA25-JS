const arr1 = [];
arr1.push('ett')
arr1.push('två', 'tre', 'fyra', 'sjutton');
console.log(arr1)

// const el = arr1.pop();
// console.log(arr1, el)

// Används när du vill loopa igenom en array, göra någonting för varje element, men inte ändra arrayen eller skapa en ny array
arr1.forEach( (element, index) => {
    const p = document.createElement('p');
    p.innerText = element + ' ' + index;
    document.body.append(p);
} )

// När du vill filtrera ut en del av en array, genom att ställa upp ett test som blir sant eller falskt
const filteredArr = arr1.filter( el => el.length > 3);
console.log(filteredArr)

// Används när du vill göra en beräkning på varje element i en array och spara ner i en ny array
const mapped = arr1.map( el => el.toUpperCase());
console.log(mapped)