let loadingbar = ["Loading. 10%", "Loading.. 20%", "Loading... 30%", "Loading. 40%", "Loading.. 50%", "Loading... 60%", "Loading. 70%", "Loading.. 80%", "Loading... 90%"];

let teller = 0;

let timer;

timer = setInterval(test, 1000)

function test(){
    if(teller === 8){
        clearInterval(timer);
        document.getElementById("id").innerHTML = "Loading complete!"
    }
    else{
    teller = teller + 1
    document.getElementById("id").innerHTML = loadingbar[teller]
    }
}