/**
Rest Countries 2 - https://restcountries.com/ 
Hämta alla länder. Användaren ska alltså inte söka på någonting först.
- För varje land ska du visa flaggan och ett form med en text-input där användaren kan gissa på vilket land flaggan tillhör. 
 */

import { fetchAllCountries } from "./modules/restcountriesapi.js";
import { Flag } from "./modules/Flag.js";
import { sortFlags, filterFlags } from "./modules/sort.js";

const wrapper = document.getElementById('wrapper');
const sortSelect = document.querySelector('#sort')
const filterSelect = document.querySelector('#filter')
const flagsArray = [];

fetchAllCountries()
    .then(countries => {

        for (const { name, flags, region } of countries) {
            const country = new Flag(name.common, flags.svg, region);
            country.render(wrapper);
            flagsArray.push(country)
        }
    })

filterSelect.addEventListener('change', () => {

    const filteredFlags = filterFlags(flagsArray, filterSelect.value);
    const sortedFlags = sortFlags(filteredFlags, sortSelect.value);

    wrapper.innerHTML = '';
    for (const flag of sortedFlags) {
        flag.reRender(wrapper);
    }

})

sortSelect.addEventListener('change', () => {
    console.log(sortSelect.value)

    
    const filteredFlags = filterFlags(flagsArray, filterSelect.value);
    const sortedFlags = sortFlags(filteredFlags, sortSelect.value);

    wrapper.innerHTML = '';
    for (const flag of sortedFlags) {
        flag.reRender(wrapper);
    }

})