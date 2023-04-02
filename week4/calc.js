let buttons = document.querySelectorAll('button');
let result = document.querySelector('#display');
let calculation = '';
buttons.forEach(button => {
  button.addEventListener('click', () => {
    let buttonValue = button.value;
    if (buttonValue == 'C') {
      calculation = '';
      result.value = '';
    }
    else if (buttonValue === '=') {
      try {
        const finalresult = eval(calculation);
        calculation = finalresult;
        result.value = finalresult;
      } catch (err) {
        result.value = 'Error';
        calculation = '';
      }
    }
    else {
      calculation += buttonValue;
      result.value = calculation;
    }
  });
});
