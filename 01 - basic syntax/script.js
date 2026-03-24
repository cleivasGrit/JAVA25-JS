console.log("Hello, world!");

const lastName = 'Leivas';
// lastName = 'Något annat'

console.log(lastName)

let age = 100;
console.log(age)
age = 'Testar bara';
console.log(age)

let isRaining = true;
console.log(isRaining)

console.log(typeof age)

const num = 3;
console.log(typeof num);

const arr = [3, 657, [23, 'DataTransfer'], 5];
console.log(arr);

console.log(arr.length)

arr[0] = 'En string'; //Får byta ut innehållet i ett element
console.log(arr)

// arr = 100; //Får ej byta ut innehållet i en const variabel 

console.log('3'== 3);
console.log('3'=== 3);

let val;
// let val = 100;

if(val){ //Räknas som false vid undefined
    console.log('val innehåller ', val)
}
else{
    console.log('val är undefined')
}

// Loops
const trees = ['Oak', 'Bristlecone', 'Birch', 'Redwood'];

for(let i=0; i<trees.length; i++){
    console.log(trees[i])
}

for(const tree of trees){
    console.log(tree)
}

let randomNumber = Math.round( Math.random()*10 );

// Används i situationer när man inte vet på förhand hur många gånger man behöver iterera någonting
while(randomNumber != 3){
    console.log(randomNumber);
    randomNumber = Math.round( Math.random()*10 );
}

console.log('Three!');

// i++;
// i = i+1;

// Funktioner

function multiply(x, y){
    return x*y;
}

console.log( multiply(3, 6))

// Objekt

const student = {
    name: 'Aria',
    class: 'JAVA25',
    graduate(grade){
        console.log('Grattis till examen! Ditt betyg: ', grade);
    },
    method: function(){
        console.log('methof')
    }
};
console.log(student);
console.log(student.name)

student.graduate('MVG')

student.isSnygg = true;
console.log(student);

student.clas = 'FE25';
console.log(student)

student.method();