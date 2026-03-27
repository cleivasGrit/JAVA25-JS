const btn = document.querySelector('button');
const infoEl = document.querySelector('#info');

btn.addEventListener('click', event => {
    console.log('CLICK');
    console.log(event);

    infoEl.classList.toggle('hidden');

    if(btn.innerText === 'Hide') btn.innerText = 'Show';
    else btn.innerText = 'Hide';
});

infoEl.addEventListener('mouseenter', ()=>{
    btn.style.backgroundColor = 'hotpink';
})
infoEl.addEventListener('mouseleave', ()=>{
    btn.style.backgroundColor = '';
})

infoEl.addEventListener('mousemove', event => {
    console.log(event.clientX);

    infoEl.style.backgroundColor = `hsl(${event.clientX/5}, 80%, 80%)`;
})