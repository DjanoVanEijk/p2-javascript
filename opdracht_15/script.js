let counter = 0;

function plus() {
  counter = counter + 1;
}

function min() {
  counter = counter - 1;
}

function reset() {
  counter = 0;
}


function update(){
if (counter < 0){
counter = counter + 1;
}

if (counter >= 3){
document.getElementById("id").innerHTML = counter + " Red Bulls, dat zijn er best veel…"
document.getElementById("id").style.color = "orange"
}

if (counter >= 5){
document.getElementById("id").innerHTML = counter + " Red Bulls, Pauze? Water is ook lekker"
document.getElementById("id").style.color = "red"
}

if (counter < 3){
document.getElementById("id").innerHTML = counter + " Red Bulls"
document.getElementById("id").style.color = "green"
}
}
