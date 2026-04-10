import { getDogImage } from "./dogapi.js";
import { renderError, renderImage } from "./render.js";

const button = document.querySelector('button');
button.addEventListener('click', async ()=>{
    try{
        const imgUrl = await getDogImage('pomeranian');
        renderImage(imgUrl);
    }
    catch(error){
        renderError(error);
    }
});

getDogImage('pomeranian')
    .then(renderImage)
    .catch(renderError);

console.log('mainfilen')


// Från demomodulen
import {a as c, b} from './moduledemo.js';
import defaultFunc from './moduledemo.js';
import * as allExports from './moduledemo.js'
console.log('-----------')

console.log(c, b);
defaultFunc();

console.log(allExports);
allExports.default();
