let displayValue = '0';
let pendingValue;
let operator;

const display = document.getElementById('display');

function appendToDisplay(val) {
  if (displayValue === '0' && val !== '.') {
    displayValue = val;
  } else {
    displayValue += val;
  }
  display.textContent = displayValue;
}

function clearDisplay() {
  displayValue = '0';
  pendingValue = undefined;
  operator = undefined;
  display.textContent = displayValue;
}

function calculate() {
  let result;
  const currentValue = parseFloat(displayValue);

  if (operator === '+') {
    result = pendingValue + currentValue;
  } else if (operator === '-') {
    result = pendingValue - currentValue;
  } else if (operator === '*') {
    result = pendingValue * currentValue;
  } else if (operator === '/') {
    result = pendingValue / currentValue;
  }

  displayValue = result.toString(); 
  display.textContent = displayValue;
  pendingValue = result; 
  operator = undefined;
}

function setOperator(op) {
  if (operator !== undefined) {
    calculate();
  }
  pendingValue = parseFloat(displayValue);
  operator = op;
  displayValue = '0';
}
function calculate() {
  var display = document.getElementById('display');
  var result = eval(display.textContent); // Using eval for simplicity (not recommended for production)
  display.textContent = result;
}


