
const bigBtn = document.querySelector('#big');
const mediumBtn = document.querySelector('#medium');
const smallBtn = document.querySelector('#small');

// bigBtn.addEventListener('click', ()=>{
//     const h1 = document.querySelector('h1');
//     h1.style.fontSize = '4rem';
// });


const changeSize = size =>{
    return ()=>{
        const h1 = document.querySelector('h1');
        h1.style.fontSize = size;
    }
};
bigBtn.addEventListener('click', changeSize('4rem'));
mediumBtn.addEventListener('click', changeSize('2rem'));
smallBtn.addEventListener('click', changeSize('.5rem'));






const createCounter = (container) => {
    const btn = document.createElement('button');
    let count = 0;

    btn.innerText = count;
    container.append(btn);

    btn.addEventListener('click', ()=>{
        count++;
        btn.innerText = count;
    })
};

createCounter(document.body);
createCounter(document.body);
createCounter(document.body);
createCounter(document.body);
createCounter(document.body);

const counter = start =>{
    let count = start;
    return ()=>{
        count++;
        return count;
    }
}

const counter1 = counter(100);
console.log(counter1())
console.log(counter1())
console.log(counter1())
console.log(counter1())
console.log(counter1())

const counter2 = counter(2);
console.log('counter 2')
console.log(counter2())