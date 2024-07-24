let buttons = document.querySelectorAll('.button');
let inputbox = document.querySelector('#input');
let outputbox = document.querySelector('.outputcontainer');
let allClearButton = document.querySelector('#allclear');
let deleteButton = document.querySelector('#delete');
buttons.forEach(button => {
    button.addEventListener("click", ()=>{
        console.log("button was clicked");
        inputbox.innerText = inputbox.innerText + button.innerText;

    })
});

allClearButton.addEventListener("click",()=>{
    inputbox.innerText = "";
})

deleteButton.addEventListener("click", ()=>{
    let num = parseInt(inputbox.innerText);
    num = num/10;
    inputbox.innerText = num;
})