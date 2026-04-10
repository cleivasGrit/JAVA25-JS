const wrapper = document.querySelector('#wrapper');

export function renderImage(url){
    console.log(url)
    const img = document.createElement('img');
    img.src = url;

    wrapper.innerHTML = '';
    wrapper.append(img);
}

export function renderError(error){
    const p = document.createElement('p');
    p.innerText = error.message;
    
    wrapper.innerHTML = '';
    wrapper.append(p);
}
console.log('rendermodulen')