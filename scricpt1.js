let buttons = document.querySelectorAll('.button');
let inputbox = document.querySelector('#input');
let allClearButton = document.querySelector('#allclear');
let deleteButton = document.querySelector('#delete');
let equalButton = document.querySelector('.equal');
let currentInput = "";
let currentOperator = "";
let firstOperand = "";
let secondOperand = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.classList.contains('operators')) {
            if (button.innerText === '=') {
                // Ignore equal button here
                return;
            }
            if (button.innerText === '÷') {
                currentOperator = '/';
            } else if (button.innerText === '×') {
                currentOperator = '*';
            } else {
                currentOperator = button.innerText;
            }
            firstOperand = currentInput;
            currentInput = "";
        } else {
            currentInput += button.innerText;
        }
        inputbox.innerText = firstOperand + " " + currentOperator + " " + currentInput;
    });
});

allClearButton.addEventListener("click", () => {
    currentInput = "";
    currentOperator = "";
    firstOperand = "";
    secondOperand = "";
    inputbox.innerText = "";
});

deleteButton.addEventListener("click", () => {
    currentInput = currentInput.slice(0, -1);
    inputbox.innerText = firstOperand + " " + currentOperator + " " + currentInput;
});

equalButton.addEventListener("click", () => {
    secondOperand = currentInput;
    let result;
    switch (currentOperator) {
        case '+':
            result = parseFloat(firstOperand) + parseFloat(secondOperand);
            break;
        case '-':
            result = parseFloat(firstOperand) - parseFloat(secondOperand);
            break;
        case '*':
            result = parseFloat(firstOperand) * parseFloat(secondOperand);
            break;
        case '/':
            result = parseFloat(firstOperand) / parseFloat(secondOperand);
            break;
        default:
            result = "Error";
    }
    inputbox.innerText = result;
    currentInput = result;
    currentOperator = "";
    firstOperand = "";
    secondOperand = "";
});
