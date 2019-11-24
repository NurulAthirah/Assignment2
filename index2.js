let turns = 0;
const position =[{name: "Player 1", pos: 0}, // 2D array
                {name: "Player 2", pos: 0}];



function rollDice(){

  var diceVal = Math.floor(Math.random() * 6) + 1;
  var move = document.querySelector('.move');   // text for position movement
  var dice = document.querySelector('.dice');     // text for position dice rolling
  var next = document.querySelector('.next');   // text for next player

  dice.textContent = position[turns].name + " rolled " + diceVal;
  position[turns].pos += diceVal;

  switch(position[turns].pos){
    //ladders
    case 8: alert(position[turns].name + " found a ladder! Advance to square 15.");
            position[turns].pos = 15; break;
    case 19: alert(position[turns].name + " found a ladder! Advance to square 24.");
            position[turns].pos = 24; break;

    //snakes
    case 15: alert(position[turns].name + " gulped by a snake! Back to square 5.");
            position[turns].pos = 5; break;
    case 23: alert(position[turns].name + " gulped by a snake! Back to square 16.");
            position[turns].pos = 16; break;
  }
  move.textContent = position[turns].name + "'s position is at " + position[turns].pos;

  if (position[turns].pos >= 25){
    alert("Congratulation " + position[turns].name + "! You won the game.");
    setGameOver();
}

turns++;
next.textContent = ("Player 2, you're next!");
if (turns >= position.length) {
  turns = 0;
  next.textContent = ("Player 1, you're next!");
 }

}


function setGameOver()
  {
window.location.reload();                   // refresh or reload game once finish
  }
