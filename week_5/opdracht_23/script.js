let snacks = [];

let input = document.getElementById("inputid");

let button = document.getElementById("buttonid");

button.addEventListener("click", iets);

function iets(){
snacks.push(input.value);
document.getElementById("id2").innerHTML = snacks
}