// let output = document.getElementById("output");

// function appendToOutput(value) {
// 	if (output.value === "Error") {
// 		clearOutput();
// 	}
// 	output.value += value;
// }

// function calculate() {
// 	try {
// 		output.value = eval(output.value);
// 	} catch (error) {
// 		output.value = "Error";
// 	}
// }

// function clearOutput() {
// 	output.value = "";
// }
// Select all the buttons
const buttons = document.querySelectorAll('button');

// Select the display input element
const display = document.querySelector('#display');

// Set an initial value for the current calculation
let currentCalculation = '';

// Loop through all the buttons and attach a click event listener to each one
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonValue = button.value;

    // Handle the C button separately
    if (buttonValue == 'C') {
      currentCalculation = '';
      display.value = '';
    }
    // Handle the = button separately to evaluate the current calculation
    else if (buttonValue === '=') {
      try {
        const result = eval(currentCalculation);
        currentCalculation = result;
        display.value = result;
      } catch (err) {
        display.value = 'Error';
        currentCalculation = '';
      }
    }
    // All other buttons add their value to the current calculation
    else {
      currentCalculation += buttonValue;
      display.value = currentCalculation;
    }
  });
});
// const display = document.getElementById('display');
// const buttons = document.querySelectorAll('.buttons button');

// let currentNum = '';
// let firstNum = null;
// let operator = null;

// function clear() {
//   display.value = '';
//   currentNum = '';
//   firstNum = null;
//   operator = null;
// }

// function calculate() {
//   let result;
//   const secondNum = parseFloat(currentNum);

//   switch(operator) {
//     case '+':
//       result = firstNum + secondNum;
//       break;
//     case '-':
//       result = firstNum - secondNum;
//       break;
//     case '*':
//       result = firstNum * secondNum;
//       break;
//     case '/':
//       result = firstNum / secondNum;
//       break;
//     default:
//       result = secondNum;
//   }

//   display.value = result;
//   currentNum = result.toString();
//   firstNum = null;
//   operator = null;
// }

// buttons.forEach(button => {
//   button.addEventListener('click', () => {
//     const value = button.getAttribute('value');

//     switch(value) {
//       case '+':
//       case '-':
//       case '*':
//       case '/':
//         if (operator !== null) {
//           calculate();
//         }
//         operator = value;
//         firstNum = parseFloat(currentNum);
//         currentNum = '';
//         break;
//       case '=':
//         if (operator !== null) {
//           calculate();
//         }
//         break;
//       case 'C':
//         clear();
//         break;
//       default:
//         currentNum += value;
//         display.value = currentNum;
//     }
//   });
// });

// Define variables
// let display = document.getElementById('display');
// let clearButton = document.getElementById('clearButton');
// let equalsButton = document.getElementById('equalsButton');
// let addButton = document.getElementById('addButton');
// let subtractButton = document.getElementById('subtractButton');
// let multiplyButton = document.getElementById('multiplyButton');
// let divideButton = document.getElementById('divideButton');

// let num1 = '';
// let num2 = '';
// let operator = '';

// // Define functions
// function clearDisplay() {
//   display.value = '';
//   num1 = '';
//   num2 = '';
//   operator = '';
// }

// function handleNumberClick(event) {
//   const number = event.target.value;
//   display.value += number;
//   if (!operator) {
//     num1 += number;
//   } else {
//     num2 += number;
//   }
// }

// function handleOperatorClick(event) {
//   operator = event.target.textContent;
//   display.value = '';
// }

// function handleEqualsClick() {
//   let result;
//   switch (operator) {
//     case '+':
//       result = parseFloat(num1) + parseFloat(num2);
//       break;
//     case '-':
//       result = parseFloat(num1) - parseFloat(num2);
//       break;
//     case '*':
//       result = parseFloat(num1) * parseFloat(num2);
//       break;
//     case '/':
//       if (num2 === '0') {
//         result = 'Error: cannot divide by zero';
//       } else {
//         result = parseFloat(num1) / parseFloat(num2);
//       }
//       break;
//     default:
//       result = '';
//   }
//   display.value = result;
//   num1 = result.toString();
//   num2 = '';
//   operator = '';
// }

// // Add event listeners
// clearButton.addEventListener('click', clearDisplay);
// equalsButton.addEventListener('click', handleEqualsClick);
// addButton.addEventListener('click', handleOperatorClick);
// subtractButton.addEventListener('click', handleOperatorClick);
// multiplyButton.addEventListener('click', handleOperatorClick);
// divideButton.addEventListener('click', handleOperatorClick);

// const numberButtons = document.querySelectorAll('button[id^=button]');
// for (const button of numberButtons) {
//   button.addEventListener('click', handleNumberClick);
// }

// let num1 = '';
// let num2 = '';
// let operator = '';
// let result = '';

// function handleNumberClick(event) {
//   const number = event.target.value;
//   display.value += number;
//   if (!operator) {
//     num1 += number;
//     output.innerHTML = num1;
//   } else {
//     num2 += number;
//     output.innerHTML = `${num1} ${operator} ${num2}`;
//   }
// }

// function handleOperatorClick(event) {
//   operator = event.target.textContent;
//   display.value = '';
// }

// function handleClearClick() {
//   num1 = '';
//   num2 = '';
//   operator = '';
//   result = '';
//   display.value = '';
//   output.innerHTML = '';
// }

// function handleEqualsClick() {
//   if (!operator || !num2) return;
//   const operand1 = parseFloat(num1);
//   const operand2 = parseFloat(num2);
//   switch (operator) {
//     case '+':
//       result = operand1 + operand2;
//       break;
//     case '-':
//       result = operand1 - operand2;
//       break;
//     case '*':
//       result = operand1 * operand2;
//       break;
//     case '/':
//       if (operand2 === 0) {
//         output.innerHTML = 'Error: Cannot divide by zero';
//         return;
//       }
//       result = operand1 / operand2;
//       break;
//   }
//   display.value = result;
//   output.innerHTML = `${num1} ${operator} ${num2} = ${result}`;
//   num1 = result.toString();
//   num2 = '';
//   operator = '';
// }

// const buttons = document.querySelectorAll('button');
// buttons.forEach(button => {
//   if (button.classList.contains('number')) {
//     button.addEventListener('click', handleNumberClick);
//   } else if (button.classList.contains('operator')) {
//     button.addEventListener('click', handleOperatorClick);
//   } else if (button.id === 'clearButton') {
//     button.addEventListener('click', handleClearClick);
//   } else if (button.id === 'equalsButton') {
//     button.addEventListener('click', handleEqualsClick);
//   }
// });
