let counter = 0;
const redBullCounter = document.getElementById("id");

function plus() {
  counter++;
  update();
}

function min() {
  counter = Math.max(0, counter - 1);
  update();
}


function reset() {
  counter = 0;
  update();
}

function update() {
  let message = counter;
  let color = "green";

  if (counter >= 5) {
    message = `${counter}, Pauze? Water is ook lekker`;
    color = "red";
  } else if (counter >= 3) {
    message = `${counter}, dat zijn er best veel…`;
    color = "orange";
  }

  redBullCounter.innerHTML = message;
  redBullCounter.style.color = color;
}
