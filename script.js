let screen = document.getElementById("screen");
let input = ""; 
let result = null; 

function insertNumber(number) {
  input += number;
  screen.value = input;
}

function insertOperator(operator) {
  if (!input) return;

  if (operator === '.') {
  
    if (input.includes('.')) {
      return;
    }
  }

  input += operator;
  screen.value = input;
}

function calculate() {

  if (!input) return;

  try {
    result = eval(input);
  } catch (error) {
    clearScreen();
    screen.value = 'Error';
    return;
  }

 
  screen.value = result;
  input = result.toString();
}

function clearScreen() {
  input = "";
  screen.value = "";
}