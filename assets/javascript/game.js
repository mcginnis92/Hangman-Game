//Top of Page
//setup DOM manipulation variables and put all variables here to represent different page IDs.
var displayDashes = document.querySelector('#empty');
var displayLives = document.querySelector('#lives');
var displayIncorrect = document.querySelector('#incorrect');
var wrongAnswers = [];   
var correctLetters = [];    
      

//Start game 

    //choose random word
    var potentialWords = ['hedwig', 'horcrux', 'patronus', 'snape', 'dumbledore', 'hermione', 'potions', 'quidditch', 'slytherin', 'lupin', 'gringotts'];
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

//This is the function that runs the game
var guess = function (event){
    var letter1 = (event.key).toLowerCase();
    console.log(letter1, "the letter guessed");
    displayArray = "";

    if ((unguessedLetters > 0) && (countLives > 0)){

        /////if guess is correct
        if (wordArr.includes(letter1)) {
      
            for (var i = 0; i< wordArr.length; i++){
                if ((letter1 === wordArr[i]) && !correctLetters.includes(letter1)){
                    correctLetters.push(letter1);
                    unguessedLetters--;
                    console.log(unguessedLetters, "letters remain");
                }
            }

            for(var i = 0; i < wordArr.length; i++){
                if(correctLetters.includes(wordArr[i])){
                    displayArray += " " + wordArr[i];
                }else{
                    displayArray += " _";
                }
            }

            if (unguessedLetters === 0) { 
                displayDashes.innerHTML = displayArray;
                alert ('Congratulations! You win.');
                window.location.reload(true);
            }
            else {
            }
            
            displayDashes.innerHTML = displayArray;

        } 
        /////if guess is incorrect
        else {
            countLives--;           
            displayLives.innerText = countLives;

            letter1 = letter1.toUpperCase();
            displayIncorrect.innerText += ' ' + letter1;

            for(var i = 0; i < wordArr.length; i++){
              if(correctLetters.includes(wordArr[i])){
                  displayArray += " " + wordArr[i];
              }else{
                  displayArray += " _";
              }
            }
            if (countLives === 0) {
                alert ('AVADA KEDAVRA! ' + 'The word was ' + chosenWord + '.' );
                window.location.reload(true);
            }
        }

    displayDashes.innerHTML = displayArray;

    }
}

document.addEventListener('keyup', guess);
