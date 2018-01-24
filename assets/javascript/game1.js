//Top of Page
//setup DOM manipulation variables and put all variables here to represent different page IDs.
var displayDashes = document.querySelector('#empty');
var displayLives = document.querySelector('#lives');
var displayIncorrect = document.querySelector('#incorrect');
var wrongAnswers = [];   
var correctLetters = [];    
      

//Start game 
    // //choose random photo
    // var photoArray = ['../images/hermharry.jpg', '../images/hogwarts.jpg', '../images/patronus.jpg', '../images/quidditch.jpg', '../images/ron.jpg'];
    // var randomPhoto = Math.floor(Math.random() * photoArray.length);
    // document.querySelector('#picture').src = photoArray[randomPhoto];

    //choose random word
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

//This is the function that runs the game
var guess = function (event){
    var letter1 = (event.key).toLowerCase();
    displayArray = "";

    for (var i = 0; i< wordArr.length; i++){
        if ((letter1 === wordArr[i]) && !correctLetters.includes(letter1)){
            correctLetters.push(letter1);
        }
    }
    console.log("correct letters:", correctLetters);
    console.log(letter1, "the letter guessed");

    for(var i = 0; i < wordArr.length; i++){
        if(correctLetters.includes(wordArr[i])){
            displayArray += " " + wordArr[i];
        }else{
            displayArray += " _"
        }
    }

    console.log(displayArray)

    displayDashes.innerHTML = displayArray;





    // LINES 51-64 DO WORK
    //     if (wordArr.includes(letter1)){
    //         alert('you have a match!');

    //         for (var j = 0; j < wordArr.length; j++){
    //             displayArray[j] = letter1;
    //         }
    //     }
    //     else {
    //         countLives--;           
    //         displayLives.innerText = countLives;

    //         letter1 = letter1.toUpperCase();
    //         displayIncorrect.innerText += ' ' + letter1;
    //     }
}



document.addEventListener('keyup', guess);
