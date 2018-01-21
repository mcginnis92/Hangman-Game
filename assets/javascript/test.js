var word = "hedwig";
var wordArr = word.split("");
var countLives = 10;
var hasMatch = false;
var letter1 = prompt('Enter a letter.');

document.querySelector('#correct');
var correctGuesses = document.querySelector('#correct');

document.querySelector('#incorrect');
var incorrectGuesses = document.querySelector('#incorrect');

for (var i = 0; i < wordArr.length; i++) {
    correctGuesses += ',' + wordArr[i];
}

//insert the string of interest li tags inside of the #interests element
var interestElem = document.querySelector('#interests');
interestElem.innerHTML = interestHTML;




if (wordArr.includes(letter1)) {
    correctGuesses.innerText = letter1;
}

else {
    countLives--;
    incorrectGuesses.innerText = letter1;
}


