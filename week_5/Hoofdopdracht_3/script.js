let fortune = ["Ja", "Nee", "Nooit", "Zoiezo", "Nah", "Yup", "Geen kans", "100%", "Mischien" ,"Weet ik veel"];

let input = document.getElementById("inputid");

let button = document.getElementById("buttonid");

button.addEventListener("click", iets);

function iets(){
if (input.value === ""){
document.getElementById("id").innerHTML = "Vul iets in"
}
else{
let randomIndex = Math.floor(Math.random() * fortune.length);
let randomFortune = fortune[randomIndex];
document.getElementById("id").innerHTML = randomFortune
}
}
    