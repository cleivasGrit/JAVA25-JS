const url = 'https://dog.ceo/api/breeds/image/random';


fetch(url)
    .then( handleResponse)
    .then( displayImage )
    .catch( displayError);

function handleResponse(res){
    console.log(res);
    if(res.ok) return res.json();
    else{
        throw new Error('Something went wrong.')
    }
}

function displayError({message}){
    const h1 = document.createElement('h1');
    h1.innerText = message;
    document.body.append(h1);
}

function displayImage({message}){
    console.log(message);
    const img = document.createElement('img');
    img.src = message;
    document.body.append(img);
}

// const fetchPromise = fetch(url);
// console.log(fetchPromise)

// const responsePromise = fetchPromise.then( response => response.json());

// console.log(responsePromise)

// console.log('sist i koden');