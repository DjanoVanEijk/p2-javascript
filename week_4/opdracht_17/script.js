let div = document.getElementById("div");

div.addEventListener("mouseover", hover);
div.addEventListener("mouseout", geenhover);

function hover() {
document.getElementById("div").style.backgroundColor = "blue"
document.getElementById("div").style.color = "white"
document.getElementById("div").innerHTML = "nice hover"
document.getElementById("div").style.width = "250px"
document.getElementById("div").style.height = "250px"
}

function geenhover() {
document.getElementById("div").style.backgroundColor = "red"
document.getElementById("div").style.width = "200px"
document.getElementById("div").style.height = "200px"
}
