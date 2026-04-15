/**
Rest Countries 2 - https://restcountries.com/ 
Hämta alla länder. Användaren ska alltså inte söka på någonting först.
- För varje land ska du visa flaggan och ett form med en text-input där användaren kan gissa på vilket land flaggan tillhör. 
 */

import { fetchAllCountries } from "./modules/restcountriesapi.js";
import { Flag } from "./modules/Flag.js";

fetchAllCountries()
    .then( countries =>{
        const wrapper = document.getElementById('wrapper');

        for(const {name, flags} of countries){
            const country = new Flag(name.common, flags.svg);
            country.render(wrapper)
        }
    })