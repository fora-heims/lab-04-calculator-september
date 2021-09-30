// import functions 
import { add } from './calculations.js';
// grab DOM elements
const input1 = document.getElementById('input-1');
const calcSelect = document.getElementById('calc-select');
const input2 = document.getElementById('input-2');
const buttonCalc = document.getElementById('button-calc');
const answer = document.getElementById('calculation-answer');

// initialize global state


// set event listeners 
buttonCalc.addEventListener('click', ()=>{
    // get user input
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);
    // use user input to update state 
    const result = add(value1, value2);
    // update DOM to reflect the new state
    answer.textContent = result;
    console.log(result);
});
