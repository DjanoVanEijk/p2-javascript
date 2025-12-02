let leeftijd = prompt("Hoe oud ben je?");

function agecheck() {

if (leeftijd >= 65) {
document.getElementById("id").innerHTML = "Welkom, senior bezoeker!"
document.getElementById("id").style.color = "green"
} else {

if (leeftijd >= 18) {
document.getElementById("id").innerHTML = "Welkom, volwassen bezoeker!"
document.getElementById("id").style.color = "green"
} else {
document.getElementById("id").innerHTML = "Je mag hier nog niet naar binnen."
document.getElementById("id").style.color = "red"
}

}

}

agecheck()
