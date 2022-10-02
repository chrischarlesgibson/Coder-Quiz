"use strict";

//pseudo code//
/*





-go to page and you will see start page with button that says take quiz. :there should be a 'view highscores" links at top left and timer at top right.)



-click start quiz button and the graphics on the main page disappear and a page showing a multiple choice question shows up. also the click event will start the timer countdown

-multiple choice question will have 4 buttons for the 4 options you can select.

-if you select wrong answer, message shows up saying "wrong" and a certain ammount of time is taking off the timer.then it autmatically goes to next question


- if you select  correct answer,
message shows up saying "correct" and a no time is taken off timer. then it autmatically goes to next question

-when all questions are answered or timer runs out. text disapeears and new text appears says 'all done" and tells you your score and lets you enter you intials so that you can store your highscore. 



-once enter initals, new display shows with high scores listed and intials.on this page there should be a button to (optional but maybe need it:clear highscores and a button to go back to start page). it should store your highscore so dont necessaryily need it to show other peoples highscores.





*/
// -go to page and you will see start page with button that says take quiz. :there should be a 'view highscores" links at top left and timer at top right.)

//------------------------start code here_----------

//making an array to store question objects that will themselves store the question, chpices and the correct answer

var questionsBankArray = [
  {
    question: "what does git pull origin main do?",
    multipleChoiceOptions: [
      "downloads content from remote repository and updates local repository",
      "this command does nothing",
      "it uploads content from local repository to a remote repository",
      "it 'pulls' your remote repository, thus deleting it",
    ],
    indexOfAnswer: 0,
  },
  {
    question:
      "what array method puts all the elements of an array into a string?",
    multipleChoiceOptions: ["fill()", "includes()", "copyWithin()", "join()"],
    indexOfAnswer: 3,
  },
  {
    question: "what method converts an object ot an array?",
    multipleChoiceOptions: ["isArray()", "join()", "entries()", "from()"],
    indexOfAnswer: 3,
  },
  {
    question: "What method can add or remove elements from an array?",
    multipleChoiceOptions: ["slice()", "unshift()", "splice()", "ammend()"],
    indexOfAnswer: 2,
  },
  {
    question: "what method sorts elements of an array?",
    multipleChoiceOptions: ["pop()", "length()", "sort()", "shift()"],
    indexOfAnswer: 2,
  },
];

//select timer elemnet query selector and store in a varible so we can get timer to stop at 0. also store
var timerElement = document.querySelector(".countdown-timer");
var ViewHighscoresElement = document.querySelector(".view-highscores");
var startQuizButtonElement = document.querySelector(".start-quiz-button");
var button1 = document.querySelector(".answer1");
var button2 = document.querySelector(".answer2");
var button3 = document.querySelector(".answer3");
var button4 = document.querySelector(".answer4");
var submitHighscore = document.querySelector(".highscore-input-text");
var clearHighscore = document.querySelector(".clear-highscores");
var playAgainBTN = document.querySelector(".go-back-to-startpage");

var secondsLeft = 60;

//event listener for clicking start button
startQuizButtonElement.addEventListener("click");

//event listener for listening for any clisks with the class of answerChoice. so if user selects one of the for answers something happpens
answerChoice.addEventListener("click");

//start timing function to be called when start button is clicked, but will be called within the startquiz function
function startTiming() {
  var timer = setInterval(function () {
    secondsLeft--;
    timerElement.textContent = secondsLeft;
    if (secondsLeft === 0) {
      clearInterval(timer);
      quizComplete();
    }
  }, 1000);
}

//function to be called when start button clicked
function startQuiz() {}

//function that randomly selects a question and displays it . is called on within the startquiz function
function displayQuestions() {}

//function called when you select correct answser
function correctAnswerSelected() {}

//function called when you select correct answser
function wrongAnswerSelected() {}

//the quizcomplete function is called when you answer all questions or time runs out
function quizComplete() {}

//function that enter your initals into local storage
function enterHighscore() {}

//function where you can get stored highscore data from local storage and display it
function displayHighscores() {}

//called on when you click play agaiin
function playAgain() {}
