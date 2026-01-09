let kleur = ["#FF0000", "#FFA500", "#FFFF00", "#008000", "#0000FF", "#800080"];

let timer;

timer = setInterval(test, 2000)

function test(){
let randomIndex = Math.floor(Math.random() * kleur.length);
let randomKleur = kleur[randomIndex];
document.getElementById("id").innerHTML = randomKleur
document.body.style.backgroundColor = randomKleur
}
