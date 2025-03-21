let num1 = '';
let operator = null;
let num2 = '';
let equation = '';

const btns = document.querySelectorAll('.btn');
const operators = document.querySelectorAll('.operator');
const display = document.getElementById('display');
const sum = document.getElementById('sum');

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

function operate(num1, num2, op) {
  switch (op) {
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
        clear();
      }
    });
  });
}

function clear() {
  display.innerHTML = '';
  equation = '';
  num1 = '';
  num2 = '';
  operator = '';
  splitUp = [];
}

function calculator() {
  populateDisplay();

  sum.addEventListener('click', () => {
    //equation is my expression

    let splitUp = equation.match(/[^\d()]+|[\d.]+/g);
    display.innerHTML = '';

    //store values into variables

    num1 = parseInt(splitUp[0]);
    operator = splitUp[1];
    num2 = parseInt(splitUp[2]);

    //display answer
    display.innerHTML = operate(num1, num2, operator);
  });
}

calculator();
