//create list of words and pull random word to the page.
var potentialWords = ['hedwig', 'horcrux', 'patronus', 'snape', 'dumbledore', 'scabbers'];
var chosenWord = potentialWords[Math.floor(Math.random()* potentialWords.length)]; 
console.log(chosenWord);

//split up chosenWord into an array.
var wordArr = chosenWord.split('');
console.log(wordArr);

//generate dashes to display number of characters in the chosenWord 
var displayHTML = '';

for (var i = 0; i < wordArr.length; i++){
  displayHTML += '_ ';
}
console.log(displayHTML);

var displayDashes = document.querySelector('#empty');
  displayDashes.innerHTML = displayHTML;

// set up new count of lives for new word & display on screen
var countLives = 10;
var displayLives = document.querySelector('#lives');
displayLives.innerHTML = countLives;

// //This function is run whenever the user inputs a key as long as adequate lives remain.
while (countLives > 0){  

  //something to listen for user key input or prompt
  var letter1 = prompt ('Enter a letter.');
  debugger;

  //compare inputted letters to letters in array
  if (wordArr.includes(letter1)) {
      var correct1 = letter1.toUpperCase();
      var displayCorrect = document.querySelector('#correct');
      displayCorrect.innerText = correct1;
    }

  else {
      var incorrect1 = letter1.toUpperCase();
      var displayIncorrect = document.querySelector('#incorrect');
      displayIncorrect.innerText = incorrect1;

      countLives--; //remove a life
      var displayLives = document.querySelector('#lives');
      displayLives.innerText = countLives;
    }
  
}






// //if complete, go to next word

// if incomplete, repeat cycle