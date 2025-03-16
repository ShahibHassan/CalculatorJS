let num1;
let operator;
let num2;

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

console.log(add(10, 2));
console.log(subtract(10, 2));
console.log(multiply(10, 2));
console.log(divide(10, 2));

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
  const btns = document.querySelectorAll('.btn');
}
