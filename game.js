//potential words
var potentialWords = ['hedwig', 'horcrux', 'patronus', 'snape', 'dumbledore', 'scabbers'];

//chooses a word from the array
var chosenWord = potentialWords[Math.floor(Math.random()* potentialWords.length)]; 
console.log(chosenWord);

//split up chosenWord into an array
var wordArr = chosenWord.split('');
console.log(wordArr);

//generate dashes to display number of characters in the chosenWord 
var displayHTML = [];

for (var i = 0; i < wordArr.length; i++){
  displayHTML.push('_');
}
console.log(displayHTML);

var displayDashes = document.querySelector('#empty');
  displayDashes.innerHTML = displayHTML;

//set countLives to 10
var countLives = 10;

//new loop to update the wordArr with the correct text
var updateArray = function (correct1) {
  wordArr.innerText = correct1;
  for (var i = 0; i < wordArr.length; i++) {
  wordArr[i].innerText = correct1;
  }
}

//user inputs a key
var logLetter = function(event){
  var letter1 = event.key;
  if (countLives > 0) {
    var displayLives = document.querySelector('#lives');
    displayLives.innerHTML = countLives;
    var match = false;
      
    if (wordArr.includes(letter1)) {
      var correct1 = letter1.toUpperCase();
      console.log = correct1;
     
      match = true;
      document.querySelector('#correct').innerText += letter1;
      
      //add new code to rebuild the word array here
      wordArr = ['s', 'n', 'a', 'p', 'e']
      for (var i = 0; i< wordArr.length; i++){
        if (letter1 === wordArr[i]){
          displayHTML[i]= letter1;
        }

    else {
      var incorrect1 = letter1.toUpperCase();
      var displayIncorrect = document.querySelector('#incorrect');
      displayIncorrect.innerText = incorrect1;
      
      countLives--;
      var displayLives = document.querySelector('#lives');
      displayLives.innerText = countLives;
    }
  }
 }


    
 
     