// list potential words
var potentialWords = ['hedwig', 'horcrux', 'patronus', 'snape', 'dumbledore'];

//choose a word from the array
var chosenWord = potentialWords[Math.floor(Math.random()* potentialWords.length)]; 
console.log(chosenWord);

//generate dashes to display number of characters in the chosenWord 
var displayBlanks = [];
  for (var i = 0; i < chosenWord.length; i++){
    displayBlanks[i] = '_ ';
  }
  correctGuesses.innerText = (displayBlanks.join(' '));
  
//keep track of how many letters until word is finished
var unguessedLetters = chosenWord.length;
console.log(unguessedLetters);

//users start with 10 lives
countLives = 10;
var displayLives = document.querySelector('#lives');
displayLives.innerText = countLives;

//------ ALL ONE FUNCTION
    function logGuess (event){
    var letter1 = event.key;
    console.log(letter1);

        //While there are still unguessed letters and lives remain, check a guess from the user
        if (unguessedLetters > 0 && countLives > 0){
            
          //CHECK IF GUESS LETTER IS IN THE WORD
          for (var i = 0; i < chosenWord.length; i++){
                if (letter1 === chosenWord[i]){
                    displayBlanks[i].innerText= letter1;
                    unguessedLetters--;
                    console.log(unguessedLetters);
                }
              //NO MATCH
                else {
                  var incorrect1 = letter1.toUpperCase();
                  document.querySelector('#incorrect').innerText = incorrect1;
                  countLives--;
                  console.log(unguessedLetters, "unguessed letters");
                }
          }
        }

        else {
        }
    }
//------ END OF GUESS FUNCTION


//add event listener to get a guess from the user to start the game
document.addEventListener('keyup', logGuess); 
    