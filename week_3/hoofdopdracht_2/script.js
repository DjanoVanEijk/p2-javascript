let counter = 0;
let multiplier = 1;

function addpizza(){
    counter = counter + multiplier;
    if (counter < 0){counter = counter + 1;}
}


function update(){
document.getElementById("pizzacounter").innerHTML = counter + " Pizzas"


if (counter >= 5){
    document.getElementById("text").innerHTML = "Dat begint ergens op te lijken 😋"
}

if (counter >= 10){
    document.getElementById("pizzamenu").style.display = "none"
    document.getElementById("retrynow").style.display = "flex"
}
}

function retry(){
    document.getElementById("pizzamenu").style.display = "flex"
    document.getElementById("retrynow").style.display = "none"
    counter = 0
    document.getElementById("pizzacounter").innerHTML = counter + " Pizzas"
    document.getElementById("text").innerHTML = "Welkom bij pizza clicker!"
}