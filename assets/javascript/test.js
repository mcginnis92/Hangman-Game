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



//This function is run whenever the user inputs a key as long as adequate lives remain.
if (countLives > 0){  

//adds event listener for user to press a key
document.addEventListener("keyup", userGuess);


    var userGuess = function (event) {
    var letter1 = event.key;
    console.log(letter1);

    var countLives = 10;
    var displayLives = document.querySelector('#lives');
    displayLives.innerHTML = countLives;




    }


    //compare inputted letters to letters in array
    

}


//if lives have run out, display full word. start over.
else {

}





// //if complete, go to next word

// if incomplete, repeat cycle