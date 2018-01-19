//set up new array for new word
var hedwig = ['h', 'e', 'd', 'w', 'i', 'g'];

//set up new count of lives for new word
var countLives = 10;

//if number of remaining lives > 0, try again
while (countLives > 0) {
  
  //something to listen for user key input or prompt
  var letter1 = prompt('Input a letter.');
  console.log(letter1);

  //compare inputted letters to letters in array
  if (hedwig.includes(letter1)) {
  
  //IF CORRECT: show letter 1 on the screen
  console.log(letter1);
  }
  
  //IF INCORRECT: remove 1 life
  else {
  countLives--;
  console.log(countLives);
  }
  
}

//is word complete?

//if complete, go to next word

//if incomplete, repeat cycle