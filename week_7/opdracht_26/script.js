let nummers=[
    {
        titel: "titel",
        artiest: "artiest",
        duur: "duur"

    },
    
    {
        titel: "titel2",
        artiest: "artiest2",
        duur: "duur2"

    },

    {
        titel: "titel3",
        artiest: "artiest3",
        duur: "duur3"

    },

    {
        titel: "titel4",
        artiest: "artiest4",
        duur: "duur4"

    },

    {
        titel: "titel5",
        artiest: "artiest5",
        duur: "duur5"

    }
]

for (nummer of nummers){
    document.getElementById("id").innerHTML += nummer.titel + " - " + nummer.artiest + " (" + nummer.duur + ") " + "<br>"
}