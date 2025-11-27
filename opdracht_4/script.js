let geboortejaar = prompt("In welk jaar ben je geboren");

let x = "2025";
let y = geboortejaar;

document.getElementById("leeftijd").innerHTML = "Je bent ongeveer " + (x - y) + " jaar oud."

console.log(x - y);