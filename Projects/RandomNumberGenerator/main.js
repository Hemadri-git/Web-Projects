const button = document.getElementById("myButton");

const dice1 =  document.getElementById("p1"); 
const dice2 =  document.getElementById("p2");

let min = 1;
let max = 6;

let randomNum1;
let randomNum2;

button.onclick = function(){
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;

    dice1.textContent = randomNum1;
    dice2.textContent = randomNum2;
}