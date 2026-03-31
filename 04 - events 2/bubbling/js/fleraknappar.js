const div = document.querySelector('div');

div.addEventListener('click', event => {

    // console.log(event.target);
    if(event.target.tagName === 'BUTTON'){
        console.log('button')
        const h1 = document.querySelector('h1');
        h1.innerText  = event.target.innerText;
    }

})