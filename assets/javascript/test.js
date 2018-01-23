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
  document.querySelector('#empty').innerText = (displayBlanks.join(' '));
  
//keep track of how many letters until word is finished
var unguessedLetters = chosenWord.length;
console.log(unguessedLetters);

//users start with 7 lives
countLives = 10;
var displayLives = document.querySelector('#lives');
displayLives.innerText = countLives;

//While there are still unguessed letters and lives remain, get a guess from the user
while (unguessedLetters > 0 && countLives > 0){

  document.addEventListener('keyup', checkGuess);

    function checkGuess(event){
    var letter1 = event.key;
    console.log(letter1);

      //CHECK IF GUESS LETTER IS IN THE WORD
      for (var l = 0; l < chosenWord.length; l++){
          if (chosenWord[l] === letter1){
          displayBlanks[l].innerText= letter1;
          unguessedLetters--;
          }

        //NO MATCH
          else {
            var incorrect1 = letter1.toUpperCase();
            document.querySelector('#incorrect').innerText += incorrect1;
            countLives--;
          }
        }
      }
  
//should this } go at the very end of the whole game??   
}

//   //if match update the wordArr with the correct text
//   var updateArray = function (correct1) {
//   wordArr.innerText = correct1;
//   for (var i = 0; i < wordArr.length; i++) {
//   wordArr[i].innerText = correct1;
//   }
// }
//     if (wordArr.includes(letter1)) {
//       var correct1 = letter1.toUpperCase();
//       console.log = correct1;
     
//       match = true;
//       document.querySelector('#correct').innerText += letter1;
      
//       //add new code to rebuild the word array here
    
//   }
//  }


    
 
     