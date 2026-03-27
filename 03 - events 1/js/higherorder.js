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