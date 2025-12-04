let inpt = document.getElementById("wachtwoord");
let counter = 0;

inpt.addEventListener("keyup", toets);

function toets() {
    counter = counter + 1

    document.getElementById("tekst2").innerHTML = "Je hebt nu " + counter + " tekens ingevoerd."

    if (counter < 6){
    document.getElementById("tekst").innerHTML = "Wachtwoord te kort"
    document.getElementById("tekst").style.color = "red"
    }

    else{
    document.getElementById("tekst").innerHTML = "Sterk wachtwoord!"
    document.getElementById("tekst").style.color = "green"
    }
}