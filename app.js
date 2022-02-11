let plusplayer1 = document.getElementById("forplayer1");
let plusplayer2 = document.getElementById("forplayer2");
let forReset = document.getElementById("forReset");

let scorePlayer1 = document.getElementById("player1");
let scorePlayer2 = document.getElementById("player2");

let toWinScore0 = document.querySelector("input[type=number]");

console.log(typeof +(scorePlayer1.innerHTML));

toWinScore0.addEventListener("change", ()=> {
    toWinScore0 = toWinScore0;
    scorePlayer1.innerHTML = +0;
    scorePlayer2.innerHTML = +0;

});


forReset.addEventListener("click", ()=> {
    toWinScore0.value = +5;
    scorePlayer1.innerHTML = +0;
    scorePlayer2.innerHTML = +0;
    plusplayer1.disabled = false;
    plusplayer2.disabled =false;
    scorePlayer1.style.color = 'Black';
    scorePlayer2.style.color = 'Black';
})

plusplayer1.addEventListener("click", () =>{
    scorePlayer1.innerHTML = (+scorePlayer1.innerHTML)+1;
    if (toWinScore0.value == +(scorePlayer1.innerHTML) ){
        plusplayer1.disabled = true;
        plusplayer2.disabled =true;
        scorePlayer1.style.color = 'Green';
        scorePlayer2.style.color = 'Red';

        alert("player1 win")
    };
    
    
});

plusplayer2.addEventListener("click", () =>{
    scorePlayer2.innerHTML = (+scorePlayer2.innerHTML)+1;
    if (toWinScore0.value == +(scorePlayer2.innerHTML) ){
        plusplayer1.disabled = true;
        plusplayer2.disabled =true;
        scorePlayer2.style.color = 'Green';
        scorePlayer1.style.color = 'Red';
        alert("player2 win")

    }
});





