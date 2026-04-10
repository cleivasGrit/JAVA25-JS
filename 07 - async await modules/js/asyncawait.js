// async function test(){

//     return 'Bara för att testa'
// }
// test().then( par => console.log(par))

// console.log('sist i koden');

async function getDogImage(breed) {
    const url = `https://dog.ceo/api/breed/${breed}/images/random`;

    const response = await fetch(url);
    console.log(response);
    if (response.ok) {
        const info = await response.json();
        console.log(info);

        return info.message;
    }
    else {
        if(response.status === 404) throw new Error('No image found, please check your spelling');
        else throw new Error('Something went wrong.')
    }
}

console.log('innan getDogImage anropas');

getDogImage('pomenian')
    .then(dogImage => console.log(dogImage))
    .catch(error => console.log(error));

console.log('Efter getDogImage anropas');