const screenDisplay = document.querySelector(".screen");
const buttons = document.querySelectorAll("button");

let calculation = [];
var accumulativeCAlculation;

function calculate(button) {
  const value = button.textContent;
  if (value === "CLEAR") {
    calculation = [];
    screenDisplay.textContent = ".";
  } else if (value === "=") {
    console.log(accumulativeCAlculation);
    screenDisplay.textContent = eval(accumulativeCAlculation);
  } else {
    calculation.push(value);
    accumulativeCAlculation = calculation.join("");
    screenDisplay.textContent = accumulativeCAlculation;
  }
}

buttons.forEach((button) =>
  button.addEventListener("click", () => calculate(button))
);
