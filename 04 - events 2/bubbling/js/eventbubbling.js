const divs = document.querySelectorAll('div');

for(let i=0; i<divs.length; i++){
    divs[i].addEventListener('click', event =>{
        const num = i+1;
        alert('Div ' + num);

        if(num == 5 || num == 4) event.stopPropagation();
    })
}

