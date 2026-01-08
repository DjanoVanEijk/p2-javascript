let emoji = ["😍", "😘", "😊", "💕", "🌹", "❤️"];

let teller = 0;

let timer;

button = document.getElementById("buttonid")

button.addEventListener("click", test)

function test(){
    document.getElementById("buttonid").style.display = "none"
    if(teller === 5){
        teller = (0 - 1)
        clearInterval(timer);
       timer = setInterval(test, 1000)
    }
    else{
        teller = teller + 1
        document.getElementById("id").innerHTML = emoji[teller]
        clearInterval(timer);
        timer = setInterval(test, 1000)
    }
}