let pokemons = [{
photo:'<img src="img/001.png" alt="Bulbasaur" width="300px">',
name:"Bulbasaur",
type:"🍃Gras🍃"
},

{
photo:'<img src="img/004.png" alt="Charmander" width="300px">',
name:"Charmander",
type:"🔥Vuur🔥"
},

{
photo:'<img src="img/007.png" alt="Squirtle" width="300px">',
name:"Squirtle",
type:"💧Water💧"
}
];

button = document.getElementById("buttonid")
button.addEventListener("click", test)

function test(){
let randomIndex = Math.floor(Math.random() * pokemons.length);
let randomPokemon = pokemons[randomIndex];
document.getElementById("id").innerHTML = randomPokemon.photo + "<br>" + randomPokemon.name + "<br>" + randomPokemon.type
}

