let tekst = document.getElementById("id");

tekst.addEventListener("click", verander);

let kleur = 0

function verander() {
    if (kleur === 0){
        document.getElementById("id").style.color = "white"
        document.body.style.backgroundColor = "black"
        document.getElementById("id").innerHTML = "Doeg"
        kleur = 1
    }

    else{
        document.getElementById("id").style.color = "black"
        document.body.style.backgroundColor = "white"
        document.getElementById("id").innerHTML = "Hallo"
        kleur = 0
    }
}