const user = {
    name: 'Superwoman',
    age: 1000,
    isStrong: true
}

// const name = user.name;
// const age = user.age;
const {name, age} = user;

console.log(user)
console.log(name, age)

// Destructad parameter eftersom vi alltid förväntar oss ett objekt som innehåller egenskapen age
function isMyndig({age}){

    if(age) return age>=18;
    else return 'NaN'
}

console.log(isMyndig(user))

const arr = [1, 2, 3];
const [a, b] = arr;
console.log(a, b)

const newObj = {a, b};

console.log(newObj);

arr[1];