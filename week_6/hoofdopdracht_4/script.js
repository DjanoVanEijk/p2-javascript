let tijd = 1500;
let timer;

function formatTijd(seconden) {
  let min = Math.floor(seconden / 60);
  let sec = seconden % 60;
  if (min < 10) min = "0" + min;
  if (sec < 10) sec = "0" + sec;
  return min + ":" + sec;
}

function update() {
  let display = document.getElementById("timer");
  display.innerHTML = formatTijd(tijd);
}

function telAf() {
  tijd--;
  update();
  
  if (tijd === 0) {
    clearInterval(timer);
    alert("Klaar!");
  }
}

function start() {
  timer = setInterval(telAf, 1000);
}

function pause() {
  clearInterval(timer);
}

function reset() {
  clearInterval(timer);
  tijd = 1500;
  update();
}

// Event listeners
document.getElementById("startKnop").addEventListener("click", start);
document.getElementById("pauseKnop").addEventListener("click", pause);
document.getElementById("resetKnop").addEventListener("click", reset);