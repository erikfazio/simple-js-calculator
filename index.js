let input = "";
let result = "";
let currentOperator = "";

const calcButtonList = document.querySelectorAll(".calc-button");
const inputElement = document.querySelector(".screen");

function saveInput(text) {
  input += text;
  inputElement.value += text;
}

function operation(a, b, operator) {
  console.log(a, b, operator);
  if (operator === "+") {
    return a + b;
  } else if (operator === "-") {
    return a - b;
  } else if (operator === "x") {
    return a * b;
  } else if (operator === "/") {
    return a / b;
  } else return 0;
}

function clear() {
  input = 0;
  inputElement.value = "";
  currentOperator = "";
}

function updateScreen(text) {
  console.log(text);
  if (
    text === "1" ||
    text === "2" ||
    text === "3" ||
    text === "4" ||
    text === "5" ||
    text === "6" ||
    text === "7" ||
    text === "8" ||
    text === "9" ||
    text === "0"
  ) {
    inputElement.value += text;
    if (currentOperator !== "") {
      result += text;
    }
  } else if (text === "+" || text === "x" || text === "-" || text === "/") {
    input = inputElement.value;
    currentOperator = text;
    inputElement.value = "";
  } else if (text === "C") {
    clear();
  } else if (text === "=") {
    const newValue = operation(Number(input), Number(result), currentOperator);
    input = newValue;
    inputElement.value = newValue;
    result = "";
    currentOperator = "";
  }
}

for (let index = 0; index < calcButtonList.length; index++) {
  const element = calcButtonList[index];
  element.addEventListener("click", (event) =>
    updateScreen(event.target.innerHTML)
  );
}
