//Toglogchiin eeljiig hadgalah var. Player1 = 0, player2 = 1;
var activePlayer = 1;

//Toglogchiin tsugluulsan onoog hadgalah var
var scores = [0, 0];

//Toglogchiin eeljindee tsugluulj bga onoog hadgalah var
var roundScore = 0;


/* <div class="player-score" id="score-0">43</div> */
// window.document.querySelector('#score-0').textContent = diceNumber; //window global uchir zaawal bichih shaardlagagaui

// document.querySelector('#score-1').innerHTML = dice;



//Program ehlehed beltgey
/* <img src="images/dice-5.png" alt="Dice" class="dice"></img> */
var diceDom = document.querySelector('.dice');

diceDom.style.display ='none';

document.getElementById('score-0').textContent = '0'; document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

//Roll Dice tovchoo ajilladag bolgoh event-listener
/* <button class="btn-roll"><i class="ion-ios-loop"></i>Roll dice</button> */
document.querySelector('.btn-roll').addEventListener('click', rollDice //It can be anonymous function, cuz it's used only once
);

function rollDice() { //this is a callback function
    //Shoonii ali talaaraa buusniig hadgalah var, random 1-6 values should be kept in this var
    var diceNumber = Math.ceil(Math.random() * 6); //Why 0.88977 garch irj bna ve?

    //Dice-nii zurgiig web deer gargaj irne.
    diceDom.style.display ='block';

    //Random number-n dice-iin zurgiig gargaj irne.
    diceDom.src = 'images/dice-' + diceNumber + '.png';

    //Shidsen toog active playeriin onoon deer nemeh event-listener, except 1. Number one makes score 0.
    if(diceNumber !== 1) {
        //Add that number as a score to an active player.
        roundScore = roundScore + diceNumber;
        document.getElementById('current-' + activePlayer).textContent = roundScore;
    } else {
        //Change players' turn

    }
}
