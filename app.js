// ---Calculator state variables---
let num1 = null,
  operator = null,
  num2 = null,
  equation = '',
  lastResult = null;

// ---Select DOM elements---
const btns = document.querySelectorAll('.btn');
const display = document.getElementById('display');
const sum = document.getElementById('sum');
const oprtr = document.querySelectorAll('.operator');
// ---Arithmetic functions---
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return b === 0 ? 'ERROR' : a / b;
  }
  return a / b;
}

// ---Determines which operation to perform---
function operate(num1, num2, op) {
  switch (op) {
    case '+':
      return add(num1, num2);
    case '-':
      return subtract(num1, num2);
    case '*':
      return multiply(num1, num2);
    case '/':
      return Math.round(divide(num1, num2) * 100) / 100;
  }
}

// ---Clears calculator values---
function clear(keepDisplay = false) {
  equation = '';
  num1 = null;
  num2 = null;
  operator = null;

  if (!keepDisplay) {
    display.innerHTML = '';
  }
}

// ---Updates display with button presses---
function populateDisplay() {
  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const value = btn.innerHTML;
      if (btn.innerHTML === 'C') {
        clear();
        return;
      }

      // ✅ Handle cases where lastResult exists
      if (lastResult !== null) {
        if (!isNaN(value)) {
          // ✅ If a number is clicked, reset equation with new number
          equation = value;
        } else {
          // ✅ If an operator is clicked, continue using lastResult
          equation = lastResult + value;
        }
        lastResult = null; // ✅ Reset lastResult after using it
      } else {
        equation += value;
      }
      display.innerHTML = equation;
    });
  });
}

// ---Main calculator logic---
function calculator() {
  populateDisplay();

  sum.addEventListener('click', () => {
    //equation is my expression
    let splitUp = equation.match(/[^\d()]+|[\d.]+/g);
    display.innerHTML = '';

    if (!splitUp || splitUp.length < 3) {
      display.innerHTML = 'ERROR'; // Prevents incorrect calculations
      clear(true);
      return;
    }

    console.log('Array Length: ' + splitUp.length);
    console.log(splitUp);
    //store values into variables

    num1 = parseFloat(splitUp[0]); // assign num1 as the first array val (non operation)

    //loop through the expression hadnling one operation at a time
    for (let i = 1; i < splitUp.length - 1; i += 2) {
      // iterate i by 2 each time so i lands on operators
      operator = splitUp[i];
      num2 = parseFloat(splitUp[i + 1]);

      // if num1 or num2 aren't numbers return error
      if (isNaN(num1) || isNaN(num2) || isNaN(splitUp[splitUp.length - 1])) {
        display.innerHTML = 'ERROR';
        clear(true);
        console.log('empty: ' + splitUp); // pass 'true' to keep error message on display
        return;
      }

      num1 = operate(num1, num2, operator); // perform calculation

      console.log(num1);
    }
    lastResult = num1;
    display.innerHTML = num1;
  });
}

calculator();
