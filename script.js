"use strict";

//making an array to store question objects that will themselves store the question, chpices and the correct answer

//add event listener for eahc button. and add conditional statennts to see if wrong and if wrong take off time.

var questionsBankArray = [
  {
    title: "what does git pull origin main do?",
    multipleChoiceOptions: [
      "downloads content from remote repository and updates local repository",
      "this command does nothing",
      "it uploads content from local repository to a remote repository",
      "it 'pulls' your remote repository, thus deleting it",
    ],
    answer: 0,
  },
  {
    title: "what array method puts all the elements of an array into a string?",
    multipleChoiceOptions: ["fill()", "includes()", "copyWithin()", "join()"],
    answer: 2,
  },
  {
    title: "what method converts an object ot an array?",
    multipleChoiceOptions: ["isArray()", "join()", "entries()", "from()"],
    answer: 2,
  },
  {
    title: "What method can add or remove elements from an array?",
    multipleChoiceOptions: ["slice()", "unshift()", "splice()", "ammend()"],
    answer: 2,
  },
  {
    title: "what method sorts elements of an array?",
    multipleChoiceOptions: ["pop()", "length()", "sort()", "shift()"],
    answer: 2,
  },
];

//select timer elemnet query selector and store in a varible
var timerEl = document.querySelector(".countdown-timer-number");
var ViewHighscoresEl = document.querySelector(".view-highscores");

//start quiz
var startQuizButtonEl = document.querySelector(".start-quiz-button");
var questionBoxesEl = document.querySelector(".question-boxes");
var questionTitleEl = document.getElementById("questionHeader");
var button1El = document.querySelector(".choice1");
var button2El = document.querySelector(".choice2");
var button3El = document.querySelector(".choice3");
var button4El = document.querySelector(".choice4");
var submitHighscoreEl = document.querySelector(".highscore-input-text");
var clearHighscoreEl = document.querySelector(".clear-highscores");
var playAgainBTN = document.querySelector(".go-back-to-startpage");
var startPageBoxEl = document.querySelector(".startpage-content-box");
var startPageScreenEl = document.getElementById("start-screen");
var questionScreenEl = document.querySelector(".question-screen");
var allDoneScreenEl = document.getElementById("all-done-screen");
var highscoreScreenEl = document.getElementById("highscore-screen");

var timer;
var index = 0;
var secondsLeft = 60;
var randomQuestion = "";
var selectedAnswer = "";
// var questionsAlreadyAnswered = []
var currentQuestionIndex = 0;

//event listener for listening for any clisks with the class of answerChoice. so if user selects one of the for answers then the check answer function is called
//event listener for clicking start button
startQuizButtonEl.addEventListener("click", startQuiz);

//start timing function to be called when start button is clicked, but will be called within the startquiz function
function startTiming() {
  var timer = setInterval(function () {
    --secondsLeft;
    timerEl.textContent = secondsLeft + "s";
    if (secondsLeft <= 0) {
      clearInterval(timer);
      AllDone();
    }
  }, 1000);
}

//function to be called when start button clicked. will call on the message display function to display a random question and will also call on the startTiming function to start the timer at 60 seconds
function startQuiz() {
  displayQuestions();
  startTiming();
}

//function that  selects a question and displays it . is called on within the startquiz function

function displayQuestions() {
  startPageScreenEl.setAttribute("class", "hide");
  questionScreenEl.removeAttribute("class");
}

//function to set logic for displaying questions and answers cycling

// function questionCycler() {
//     if
// }

//   var currentQuestion = questionsBankArray[currentQuestionIndex];
//   questionTitleEl.textContent = currentQuestion.title;

//   var questionIndex = currentQuestion.multipleChoiceOptions;
//   for (var currentQuestionIndex = 0; i < questionsBankArray.length; i++) {
//     //build in logic that causes for loop to go to next question after the previous question is answered
//     var buttonEl = document.createElement("button");
//     buttonEl.setAttribute("class", "choice");
//     buttonEl.setAttribute(
//       "value",
//       currentQuestion.multipleChoiceOptions[currentQuestionIndex]
//     );
//     button1El.addEventListener("click", checkAnswer);
//   }
// }
// function checkAnswer(event) {
//     var selection = event.target;
//     if(selection.matches(".answerChoice1"))
// }
// function to check if picked answer is corect of wrong

//the quizcomplete function is called when you answer all questions or time runs out
// function AllDone() {
//   clearInterval(timer);
// }

// //function that enter your initals into local storage
// function enterHighscore() {}

// //function where you can get stored highscore data from local storage and display it
// function displayHighscores() {}

// //called on when you click play agaiin
// function playAgain() {}
