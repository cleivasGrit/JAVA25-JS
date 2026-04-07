const user = {
    name: 'Superwoman',
    age: 1000,
    isStrong: true
};

const arrObj = {
  0: 'zero',
  1: 'one',
  2: 'two'
};

console.log(arrObj[2])

console.log(user.name)
console.log(user['name'])

function logProp(obj, prop){
    console.log(obj[prop])
}

logProp(user, 'name');
logProp(user, 'age');

const character = {
    name: 'Gandalf',
    type: 'Wizard',
    hobby: 'Smoke',
    age: 2000,
    // metod(){
    //     console.log('detta är en metod')
    // },
    // obj: {a:10}
}


for(const key in character){
    console.log(key, character[key]);
    
    const p = document.createElement('p');
    p.innerText=character[key];
    document.body.append(p);
}