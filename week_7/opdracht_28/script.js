
var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

let input = document.getElementById("inputid");

let button = document.getElementById("buttonid");

button.addEventListener("click", agecheck);

function agecheck(){
if (input.value < 18){
document.getElementById("id").innerHTML= "Je bent te jong"
document.body.style.backgroundColor = "red"
document.body.style.color = "white"
modal.style.display = "none";
btn.style.display = "none"

}
else{
window.location = "http://www.youtube.com";

}
}
