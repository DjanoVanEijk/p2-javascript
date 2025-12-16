let emoji = ["😍", "😘", "😊", "💕", "🌹", "❤️"];

let button = document.getElementById("buttonid");

button.addEventListener("click", emoticon);

function emoticon(){
let randomIndex = Math.floor(Math.random() * emoji.length);
let randomEmoji = emoji[randomIndex];

document.getElementById("id").innerHTML = randomEmoji
}