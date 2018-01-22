//potential words
var potentialWords = ['hedwig', 'horcrux', 'patronus', 'snape', 'dumbledore', 'scabbers'];

//chooses a word from the array
var chosenWord = potentialWords[Math.floor(Math.random()* potentialWords.length)]; 
console.log(chosenWord);

//split up chosenWord into an array
var wordArr = chosenWord.split('');
console.log(wordArr);

//generate dashes to display number of characters in the chosenWord 
var displayBlanks = [];
  for (var i = 0; i < wordArr.length; i++){
    displayBlanks.push('_ ');
  }
var displayDashes = document.querySelector('#empty');
  displayDashes.innerHTML = displayBlanks;

//RESET GAME
var countLives = 10;

//NEW GUESS FUNCTION
document.addEventListener('keyup', logLetter);

function logLetter(event){
  var letter1 = event.key;
  console.log(letter1);
}

  //only run if there are lives remaining
  if (countLives > 0) {
    var displayLives = document.querySelector('#lives');
    displayLives.innerHTML = countLives;
  
  for (var i = 0; i < wordArr.length; i++){
      //MATCH
      if (letter1 === wordArr[i]){
        displayBlanks[i]= letter1;
        for (var i = 0; i < wordArr.length; i++) {
          wordArr[i].innerText = correct1;
        }

      //NO MATCH
      } else {
      var incorrect1 = letter1.toUpperCase();
      var displayIncorrect = document.querySelector('#incorrect');
      displayIncorrect.innerText = incorrect1;
      countLives--; //deducts life and displays number remaining
    }
  }
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


    
 
     