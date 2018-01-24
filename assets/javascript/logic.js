//Top of Page
//setup DOM manipulation variables and put all variables here to represent different page IDs.
var displayEmpty = document.querySelector('#empty');
var displayLives = document.querySelector('#lives');
var displayIncorrect = document.querySelector('#incorrect');
var wrongAnswers = [];       
      

//Start game 
    var potentialWords = ['hedwig', 'horcrux', 'patronus', 'snape', 'dumbledore'];
    var chosenWord = potentialWords[Math.floor(Math.random()* potentialWords.length)]; 
    chosenWord = chosenWord.split('');
    console.log(chosenWord);
    
    var wordArr = [];
        for (var i = 0; i < chosenWord.length; i++){
            wordArr[i] = '_';
        }
    displayEmpty.innerText = (wordArr.join(' '));

    //set up number of letters that must be guessed for word to be complete
    var unguessedLetters = chosenWord.length;
    console.log("remaining letters", unguessedLetters);

    //set up new life count
    countLives = 10;
    displayLives.innerText = countLives;


//logGuess runs every time a key is entered
   
    var logGuess = function (event){
        var letter1 = event.key;
        console.log("user guessed", letter1);

        for (var j = 0; j < chosenWord.length; j++){
            if (chosenWord[j] === letter1) {
                console.log(letter1);
                wordArr[j] = letter1;
              
            }
        
            else {
                alert ('wrong');
                countLives--;           
                displayLives.innerText = countLives;
              
                letter1 = letter1.toUpperCase();
                displayIncorrect.innerText = letter1;
            }
        }
    }

    //if (unguessedLetters > 0 && countLives > 0)
// {
//     alert('Game over! The word was '+ chosenWord + '.');



document.addEventListener('keyup', logGuess);
