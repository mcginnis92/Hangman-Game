//potential words
var potentialWords = ['hedwig', 'horcrux', 'patronus', 'snape', 'dumbledore', 'scabbers'];

//chooses a word from the array
var chosenWord = potentialWords[Math.floor(Math.random()* potentialWords.length)]; 
console.log(chosenWord);

//split up chosenWord into an array
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

//function: userGuess (user inputs a key)
    //document.addEventListener("keyup", userGuess);
    //var userGuess = function (event) {
    //console.log(event.key);
    //verify ();
    //closing bracket for userGuess function do not delete 
   //}

//when userGuess is executed, the verify function is called

//current draft of userGuess uses a prompt instead of eventListener
    if (countLives > 0); 
    var letter1 = prompt ('Enter a letter.')
    console.log(letter1);
    var countLives = 10;
    var displayLives = document.querySelector('#lives');
    displayLives.innerHTML = countLives;
    var match = false;

var verify = function () {
    if (wordArr.includes(letter1)) {
      var correct1 = letter1.toUpperCase();
      console.log = correct1;
      match = true;
      document.querySelector('#correct').innerText += letter1;
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
 
     