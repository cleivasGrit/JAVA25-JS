const ol = document.createElement('ol');
document.body.append(ol);

for(let i=0; i<10; i++){
    const li = document.createElement('li');
    ol.append(li);
}

const lis = document.querySelectorAll('li');
// console.log(lis)

for(let i=0; i<lis.length; i++ ){
    lis[i].style.border = `${1+i*2}px solid black`;
}

