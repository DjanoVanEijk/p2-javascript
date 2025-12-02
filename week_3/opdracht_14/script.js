    let antwoord = prompt("Wat wil je drinken? (cola, water of koffie)");
 
    if (antwoord === "cola") {
      document.getElementById("id").innerHTML = "Je krijgt een blikje cola 🥤";
      document.getElementById("id").style.color = "red";
    } 
    else if (antwoord === "water") {
      document.getElementById("id").innerHTML = "Goed bezig, lekker gezond 💧";
      document.getElementById("id").style.color = "blue";
    } 
    else if (antwoord === "koffie") {
      document.getElementById("id").innerHTML = "Energie incoming ☕";
      document.getElementById("id").style.color = "brown";
    } 
    else {
      document.getElementById("id").innerHTML = "Dat drankje is helaas op";
      document.getElementById("id").style.color = "black";
    }

drinken()

