let budget = prompt("Wat is jouw budget?", "100");
let product = prompt("Hoeveel kost jouw product?", "60");
geld = (budget - product)

function geldcheck() {

if (geld >= 0) {
document.getElementById("id").innerHTML = "U heeft genoeg geld!"
} else {
document.getElementById("id").innerHTML = "Helaas, te weinig geld"
}

}