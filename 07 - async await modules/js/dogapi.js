export async function getDogImage(breed) {
    const url = `https://dog.ceo/api/breed/${breed}/images/random`;

    const response = await fetch(url);
    if (response.ok) {
        const info = await response.json();
        return info.message;
    }
    else {
        if(response.status === 404) throw new Error('No image found, please check your spelling');
        else throw new Error('Something went wrong.')
    }
}

console.log('dog api mdulen')
// export {getDogImage};