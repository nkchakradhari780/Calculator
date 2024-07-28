let inputbox = document.querySelector('#inputbox');
let outputbox = document.querySelector('#outputbox');
let equalbutton = document.querySelector('.equal');
function appendToDisplay(input) {
    inputbox.value += input;
}

function allClear() {
    inputbox.value = "";
    outputbox.value = "";
}

function calculate() {
    let expression = inputbox.value.replace(/÷/g, '/').replace(/×/g, '*');
    outputbox.value = eval(expression);
    if(inputbox.value === ""){
        outputbox.value = "";
    }
}

function deletebtn() {
    inputbox.value = inputbox.value.slice(0, -1);
    
}

function toggleSign() {
    if (inputbox.value) {
        inputbox.value = inputbox.value.charAt(0) === '-' ? inputbox.value.slice(1) : `-${inputbox.value}`;
    }
}

equalbutton.addEventListener('click',()=>{
    inputbox.value = outputbox.value;
    outputbox.value = "";
})