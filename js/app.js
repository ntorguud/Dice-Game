//Toglogchiin eeljiig hadgalah var. Player1 = 0, player2 = 1;
var activePlayer = 0;

//Toglogchiin tsugluulsan onoog hadgalah var
var scores = [0, 0];

//Toglogchiin eeljindee tsugluulj bga onoog hadgalah var
var roundScore = 0;

/* <div class="player-score" id="score-0">43</div> */
// window.document.querySelector('#score-0').textContent = diceNumber; //window global uchir zaawal bichih shaardlagagaui

//Program ehlehed beltgey
/* <img src="images/dice-5.png" alt="Dice" class="dice"></img> */
var diceDom = document.querySelector('.dice');
diceDom.style.display ='none';

document.getElementById('score-0').textContent = '0'; document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

//Roll Dice tovchoo ajilladag bolgoh event-listener
/* <button class="btn-roll"><i class="ion-ios-loop"></i>Roll dice</button> */
document.querySelector('.btn-roll').addEventListener('click', function() { //this is a callback function
    //Shoonii ali talaaraa buusniig hadgalah var, random 1-6 values should be kept in this var
    var diceNumber = Math.ceil(Math.random() * 6); //Why 0.88977 garch irj bna ve?

    //Dice-nii zurgiig web deer gargaj irne.
    diceDom.style.display ='block';

    //Random number-n dice-iin zurgiig gargaj irne.
    diceDom.src = 'images/dice-' + diceNumber + '.png';

    //Shidsen toog active playeriin onoon deer nemeh event-listener, except 1. 
    if(diceNumber !== 1) {
        //Add that number as a score to an active player.
        roundScore = roundScore + diceNumber;
        document.getElementById('current-' + activePlayer).textContent = roundScore;
    } else {
        //1 gedeg number can change players' turn and make score 0. in the screen.

        //We still need to make score 0 in the saved container, which is roundScore
        roundScore = 0;
        document.getElementById('current-' + activePlayer).textContent = 0; //activePlayer soligdohoos umnu 1 onoo avsan player-iin onoo 0 boloh estoi tul condition shalgahaas umnu bichih estoi.

        if(activePlayer === 0) {
            activePlayer = 1;
        } else {
            activePlayer = 0;
        }
    }
} //It can be anonymous function, cuz it's used only once
);
//===deerh if/else code-toi adilhan: activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

//Red dot-iig shiljuuleh code bichiy
document.querySelector('.player-0-panel').classList.toggle('active');

document.querySelector('.player-1-panel').classList.toggle('active');

//Player hoorond shiljih ued dice-iig tur alga bolgoy
diceDom.style.display ='none';
