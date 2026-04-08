
const form = document.querySelector('form');
const breedSelect = document.querySelector('#breedSelect');

// Populate the select with breed options
fetch('https://dog.ceo/api/breeds/list/all')
    .then(handleResponse)
    .then(populateSelect)
    .catch(displayError);


breedSelect.addEventListener('change', event => {
    const breed = breedSelect.value;
    const url = `https://dog.ceo/api/breed/${breed}/images/random/5`;
    console.log(url)

    fetch(url)
        .then(handleResponse)
        .then( displayImages )
        .catch(displayError);
});


form.addEventListener('submit', event => {
    event.preventDefault();
    
    const breed = form.querySelector('input').value.trim().toLocaleLowerCase();
    
    const url = `https://dog.ceo/api/breed/${breed}/images/random/5`;
    console.log(url);

    fetch(url)
        .then(handleResponse)
        .then( displayImages )
        .catch(displayError);
});

function populateSelect({message}){
    // console.log(message)
    for(const key in message){
        // console.log(key)
        const option = document.createElement('option');
        option.innerText = key;
        option.value = key;
        breedSelect.append(option);
    }
}

function handleResponse(res){
    console.log(res);
    if(res.ok) return res.json();
    else{
        throw new Error('Something went wrong.')
    }
}

function displayError({message}){
    const wrapper = document.querySelector('#imgWrapper');
    const h1 = document.createElement('h1');
    h1.innerText = message;

    wrapper.innerHTML = '';
    wrapper.append(h1);
}

function displayImages({message}){
    console.log(message);
    const wrapper = document.querySelector('#imgWrapper');
    wrapper.innerHTML = '';

    message.forEach(imgURL => {
        const img = document.createElement('img');
        img.src = imgURL;
        wrapper.append(img);
    });
}
