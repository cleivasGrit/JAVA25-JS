const multiply = x => y => z => x*y*z;

// function multiply(x){
//     return function(y){
//         return function(z){
//             return x*y*z;
//         }
//     }
// }

console.log( multiply(2)(10)(3));

const timesTen = multiply(10);
console.log(timesTen(10)(10));

async function getCountries(){
    const url = `https://restcountries.com/v3.1/all?fields=name,population,fifa,region,subregion,startOfWeek`;

    const res = await fetch(url);
    // console.log(res)
    const countries = await res.json();
    return countries;
}


function render(countries){
    const wrapper = document.querySelector('#countryWrapper')
    wrapper.innerHTML = '';
    
    countries.forEach( ({name, population}) => {
        const card = document.createElement('div')
        const titelEl = document.createElement('h3');
        const popEl = document.createElement('p');
        
        titelEl.innerText = name.common;
        popEl.innerText = population;
        
        card.append(titelEl, popEl);
        wrapper.append(card);
    })
}


// function filter(field){
//     return function(value){
//         return function(arr){
//             return arr.filter(function(el){
//                 console.log(el[field], value)
//                 return el[field].toLowerCase() == value.toLowerCase();
//             })
//         }
//     }
// }

const filter = field => value => arr => arr.filter(el => el[field].toLowerCase() === value.toLowerCase());


const filterbyRegion = filter('region');
const filterbyAfrica = filter('region')('africa');

getCountries()
    .then( countries =>{
        // const filtered = filter('startOfWeek')('sunday')(countries);
        // const filtered = filterbyRegion('europe')(countries)
        const filtered = filterbyAfrica(countries);
        render(filtered);
    });