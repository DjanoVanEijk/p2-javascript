let activiteiten = ["wandelen", "mediteren", "een dutje doen"];
let voorwerpen = ["een kop thee", "je favoriete boek", "geen telefoon"];

let button = document.getElementById("buttonid");

button.addEventListener("click", advies);

function advies(){
let randomIndex = Math.floor(Math.random() * activiteiten.length);
let randomActiviteit = activiteiten[randomIndex];

let randomIndex2 = Math.floor(Math.random() * voorwerpen.length);
let randomVoorwerp = voorwerpen[randomIndex2];

document.getElementById("id").innerHTML = "Vandaag moet jij " + randomActiviteit + " met " + randomVoorwerp
}