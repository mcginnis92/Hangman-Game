//Top of Page
//setup DOM manipulation variables and put all variables here to represent different page IDs.
var displayDashes = document.querySelector('#empty');
var displayLives = document.querySelector('#lives');
var displayIncorrect = document.querySelector('#incorrect');
var wrongAnswers = [];       
      

//Start game 
    var potentialWords = ['hedwig', 'horcrux', 'patronus', 'snape', 'dumbledore'];
    var chosenWord = potentialWords[Math.floor(Math.random()* potentialWords.length)]; 
    var wordArr = chosenWord.split('');
    console.log(wordArr);

        //generate dashes to display number of characters in the chosenWord 
        var displayArray = '';
            for (var i = 0; i < wordArr.length; i++){
            displayArray += '_ ';
            }
        displayDashes.innerHTML = displayArray;

    //set up number of letters that must be guessed for word to be complete
    var unguessedLetters = chosenWord.length;
    console.log("remaining letters", unguessedLetters);

    //set up 10 lives for each turn
    countLives = 10;
    displayLives.innerText = countLives;

    
var guess = function (event){
    var letter1 = event.key;
    console.log("user guess", letter1);

    
        if (wordArr.includes(letter1)){
            alert('you have a match!');

            for (var j = 0; j < wordArr.length; j++){
                displayArray[j] = letter1;
            }
        }
        else {
            countLives--;           
            displayLives.innerText = countLives;

            letter1 = letter1.toUpperCase();
            displayIncorrect.innerText += ' ' + letter1;
        }
}

document.addEventListener('keyup', guess);
