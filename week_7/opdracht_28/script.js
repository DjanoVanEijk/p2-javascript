const broth = [
  { naam: "Kip", emoji: "🍗", points: 40 },
  { naam: "Rund", emoji: "🥩", points: 50 },
  { naam: "Miso", emoji: "🍜", points: 45 },
  { naam: "Groente", emoji: "🥕", points: 30 },
  { naam: "Tonkotsu", emoji: "🐖", points: 55 }
];

const noodles = [
  { naam: "Ramen", emoji: "🍜", points: 50 },
  { naam: "Udon", emoji: "➿", points: 40 },
  { naam: "Soba", emoji: "🌾", points: 45 },
  { naam: "Rijstnoedels", emoji: "🍚", points: 35 },
  { naam: "Glasnoedels", emoji: "🔍", points: 30 }
];

const toppings = [
  { naam: "Gekookt ei", emoji: "🥚", points: 25 },
  { naam: "Bosui", emoji: "🌱", points: 15 },
  { naam: "Nori", emoji: "🌊", points: 20 },
  { naam: "Shiitake", emoji: "🍄", points: 30 },
  { naam: "Tofu", emoji: "⬜", points: 20 }
];

const spicelevel = [
  { naam: "Geen pit", emoji: "🙂", points: 0 },
  { naam: "Lichte pit", emoji: "🌶", points: 10 },
  { naam: "Medium pit", emoji: "🔥", points: 20 },
  { naam: "Extra pit", emoji: "🥵", points: 30 },
  { naam: "Chili-olie", emoji: "🛢", points: 25 }
];

button = document.getElementById("buttonid")
button.addEventListener("click", test)

function test(){
let randomIndex = Math.floor(Math.random() * broth.length);
let randomBroth = broth[randomIndex];
let randomNoodles = noodles[randomIndex];
let randomToppings = toppings[randomIndex];
let randomSpice = spicelevel[randomIndex];
ramenscore = (randomBroth.points + randomNoodles.points + randomToppings.points + randomSpice.points)
rating = Math.floor(10 / 165 * ramenscore)

document.getElementById("id").innerHTML = "Jouw random ramen-combo is: " +  randomBroth.naam +  " met " + randomNoodles.naam + ", " + randomToppings.naam + " en " + randomSpice.naam + "."
document.getElementById("id2").innerHTML = "Ramenscore: " + ramenscore + " Rating:" + rating + "/10"
document.getElementById("id3").innerHTML = randomBroth.emoji + randomNoodles.emoji + randomToppings.emoji + randomSpice.emoji
}


