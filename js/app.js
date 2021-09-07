//Toglogchiin eeljiig hadgalah var. Player1 = 0, player2 = 1;
var activePlayer = 1;

//Toglogchiin tsugluulsan onoog hadgalah var
var scores = [0, 0];

//Toglogchiin eeljindee tsugluulj bga onoog hadgalah var
var roundScore = 0;

//Shoonii ali talaaraa buusniig hadgalah var, random 1-6 values should be kept in this var
var dice = Math.ceil(Math.random() * 6); //Why 0.88977 garch irj bna ve?

/* <div class="player-score" id="score-0">43</div> */
window.document.querySelector('#score-0').textContent = '100';

console.log('Shoo : ' + dice); 