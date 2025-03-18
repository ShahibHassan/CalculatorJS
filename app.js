let num1 = '';
let operator = null;
let num2 = '';
let equation = '';

const btns = document.querySelectorAll('.btn');
const operators = document.querySelectorAll('.operator');
const display = document.getElementById('display');

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
  return a / b;
}

function operate(operator) {
  switch (operator) {
    case '+':
      return add(num1, num2);
      break;
    case '-':
      return subtract(num1, num2);
      break;
    case '*':
      return multiply(num1, num2);
      break;
    case '/':
      return divide(num1, num2);
      break;
  }
}

function populateDisplay() {
  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      equation += btn.innerHTML;
      display.innerHTML = equation;

      if (btn.innerHTML === 'C') {
        clear()
      }
      
      
    });
  });

  
  }
}

function clear() {
  display.innerHTML = '';
}

function calculate() {
  populateDisplay();

  // check to see if clear is clicked
}

calculate();
