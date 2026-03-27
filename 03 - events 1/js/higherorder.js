function firstFunction(x){
    console.log('first', x);
}

function secondFunction(x = 10){
    console.log('second', x)
}

function higherOrder(callback){
    console.log('higher order');
    callback('test');
}

console.log( firstFunction )

higherOrder( secondFunction )
higherOrder( firstFunction )
higherOrder( function(){console.log('anonym')} )

// Arrowfunktion
// function double(x){
//     return x+x;
// }

// const double = function(x){
//     return x+x;
// }

// const double = (x)=>{
//     return x+x;
// }
// const double = x =>{
//     return x+x;
// }
const double = x => x+x;

higherOrder( () => console.log('arrow') )


// Ett lite mer praktiskt exempel
// Den här funktionen har i uppgift att loopa igenom en array med nummer, utföra en uträkning på varje nummer och returnera resultaten i en ny array.
function map(numberArr, calcFunction){
    const results = [];
    let i = 0;

    for(const num of numberArr){
        results[i] = calcFunction(num);
        i++;
    }
    return results;
};

const arr = [3, 14, 55, 8, 4, 34, 82, 3];

// Genom att calcFunction går att byta ut går det att använda map på flera olika sätt
console.log( map(arr, x=>x*x));
console.log( map(arr, x=>x*2));
console.log( map(arr, x=>x/100));
console.log( map(arr, x=>x*x*x));

