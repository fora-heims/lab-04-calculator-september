// import functions 
import { add, subtract, multiply, divide, intDiv } from './calculations.js';
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
    const addResult = add(value1, value2);
    const subtractResult = subtract(value1, value2);
    const multiplyResult = multiply(value1, value2);
    const divideResult = divide(value1, value2);
    const intDivResult = intDiv(value1, value2);
    // update DOM to reflect the new state
    if (calcSelect.value === 'add') {
        answer.textContent = addResult;
    } else if (calcSelect.value === 'subtract') {
        answer.textContent = subtractResult;
    } else if (calcSelect.value === 'multiply') {
        answer.textContent = multiplyResult;
    } else if (calcSelect.value === 'divide') {
        answer.textContent = divideResult;
    } else if (calcSelect.value === 'int-div') {
        answer.textContent = intDivResult;
    } else {
        answer.textContent = 'lol';
    }
});
