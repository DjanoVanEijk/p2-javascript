let input = document.getElementById("inputid");

let button = document.getElementById("buttonid");

button.addEventListener("click", begroet);

function begroet(){
document.getElementById("id").innerHTML = "Hallo, " +  input.value
}