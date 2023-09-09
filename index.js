let firstOperand = "";
let secondOperand = "";
let currentOperator = "";

const screen = document.querySelector(".screen");

function updateScreen(value) {
  input += value;
  screen.value += value;
}

function clearScreen() {
  input = 0;
  screen.value = "";
  currentOperator = "";
}

function calculate(a, b, operator) {
  if (operator === "+") {
    return a + b;
  } else if (operator === "-") {
    return a - b;
  } else if (operator === "*") {
    return a * b;
  } else if (operator === "/") {
    return a / b;
  } else return 0;
}

function handleSymbol(value) {
  if (value === "+" || value === "*" || value === "-" || value === "/") {
    currentOperator = value;
    screen.value = "";
  } else if (value === "C") {
    clearScreen();
  } else if (value === "=") {
    const newValue = calculate(
      Number(firstOperand),
      Number(secondOperand),
      currentOperator
    );
    firstOperand = newValue;
    screen.value = newValue;
    secondOperand = "";
    currentOperator = "";
  }
}

function handleNumber(value) {
  if (currentOperator === "") {
    firstOperand += value;
  } else {
    secondOperand += value;
  }
  screen.value += value;
}

function buttonClick(value) {
  if (isNaN(parseInt(value))) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
}

function init() {
  const calcButtonList = document.querySelectorAll(".calc-button");

  calcButtonList.forEach(function (calcButton) {
    calcButton.addEventListener("click", function (event) {
      buttonClick(event.target.innerText);
    });
  });
}

init();
