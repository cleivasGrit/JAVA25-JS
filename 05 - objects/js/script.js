let x = 1;
let y = x;
x = 9;

console.log(x, y)

const obj = {p: 1};
const objCopy = obj;
obj.p = 9;
console.log(obj, objCopy)

const orgArr = [2, 4, 2, 5, 7];

function getProcessedData(data){
    // const newArr = data;
    const newArr = [...data];
    for(let i=0; i<newArr.length; i++){
        newArr[i]*=2;
    }
    return newArr;
}
function getProcessedData2(data){
    // const newArr = data;
    const newArr = [...data];
    for(let i=0; i<newArr.length; i++){
        newArr[i]/=2;
    }
    return newArr;
}

const processed = getProcessedData(orgArr);
const processed2 = getProcessedData2(orgArr)

console.log(processed)
console.log(processed2)
console.log(orgArr)

// Spread
console.log(1, 3, 5)
console.log(...orgArr)

console.log(Math.max(...orgArr))

const obj2 = {
    a:1,
    b:2,
    c:3
}

const obj2Copy = {...obj2} //skapar en klon
obj2.a = 9;
console.log(obj2Copy)

// console.log(Math.max(...obj2)) //Funkar ej eftersom det är key value pairs

const obj3 = {
  p1: 'från objekt 1',
}


const obj4 = {
  p2: 'från objekt 2',
  p3: 'också från objekt 2'
}


const obj5 = {...obj3, ...obj4};
console.log(obj5) //Innehåller egenskaperna p1, p2, p3