// Here are the 100 most popular words in English, as totally
// stolen from here: https://gist.github.com/gravitymonkey/2406023
var hangmanWords = [
"the","of","and","a","to","in","is","you","that","it","he",
"was","for","on","are","as","with","his","they","I","at","be",
"this","have","from","or","one","had","by","word","but","not",
"what","all","were","we","when","your","can","said","there",
"use","an","each","which","she","do","how","their","if","will",
"up","other","about","out","many","then","them","these","so",
"some","her","would","make","like","him","into","time","has",
"look","two","more","write","go","see","number","no","way",
"could","people","my","than","first","water","been","call",
"who","oil","its","now","find","long","down","day","did","get",
"come","made","may","part"
];

var userLetter;
var incorrectResult = []
var textInput = document.getElementById("text-input");


//Create pool of words with 3 or more characters
var gameWords = hangmanWords.filter(wordLength);

function wordLength (word) {
  return word.length >= 3;
}

//Pull random word from pool of 3 words or more
var randomWord = getRandomWord();

function getRandomWord() {
  return gameWords[Math.floor(Math.random() * gameWords.length)];
}


//Update number of tries user has left with message
var triesRemaining = 6;
var triesMessage = "The stick dude has " + triesRemaining + " breaths left until he drowns!";

var updateTries = function() {
  if (triesRemaining >= 1) {
    document.querySelector('.remaining-guesses').textContent = triesMessage;
  }

  if (triesRemaining === 0) {
    document.querySelector('.remaining-guesses').textContent = "He was too young to die :'(";
  }
};

updateTries();


//To display computer generated word as hidden, dashed word
var displayWord = randomWord.split("");
var dashedWord = displayWord.map(function(ch) {
  return "_";
});

var finalDisplay = dashedWord.join(' ');

var updateDisplay = function() {
    document.querySelector('.random-word').textContent = finalDisplay;
};

updateDisplay();


function setGuess(guessValue) {
  userLetter = guessValue;
}


function checkGuess() {
  var correct = false

  for(i = 0; i < randomWord.length; i++) {
    if (userLetter === randomWord[i]) {
      dashedWord[i] = userLetter;
      correct = true;
      textInput.value = "";
    }
  }

    if (correct === false) {
      triesRemaining = --triesRemaining;
      triesMessage = "The stick dude has " + triesRemaining + " breaths left until he drowns!";
      updateTries();
      var incorrectLetter = userLetter;
      incorrectResult.push(incorrectLetter + " ");
      document.querySelector('.incorrect-letters').textContent = incorrectResult;
      textInput.value = "";
        if (triesRemaining === 0) {
          document.querySelector('.incorrect-letters').textContent = "";
        }
    }

      finalDisplay = dashedWord.join(' ');

      updateDisplay();

      updateTries();
}
