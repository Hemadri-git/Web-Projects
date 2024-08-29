const dec = document.getElementById("decrement");
const inc = document.getElementById("increment");
const reset = document.getElementById("reset");
const counter = document.getElementById("counter");
let count = 0;

dec.onclick = function(){
    if(count<=0){
        alert("It should be greater than zero");
    }
    else{
        count--;
        counter.textContent = count;  
    }
  
}

inc.onclick = function(){
    count++;
    counter.textContent = count;
}

reset.onclick = function(){
    count = 0;
    counter.textContent = count;
}