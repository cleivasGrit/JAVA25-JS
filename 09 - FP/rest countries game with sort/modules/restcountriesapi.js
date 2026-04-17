export const fetchAllCountries = async ()=>{
    const url = 'https://restcountries.com/v3.1/all?fields=name,flags,region';
    const response = await fetch(url);
    const countries = await response.json();
    // console.log(countries)
    return countries;
};