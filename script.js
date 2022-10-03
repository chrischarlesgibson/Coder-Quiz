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
    answer:
      "downloads content from remote repository and updates local repository",
  },
  {
    title: "what array method puts all the elements of an array into a string?",
    multipleChoiceOptions: ["fill()", "includes()", "copyWithin()", "join()"],
    answer: "fill()",
  },
  {
    title: "what method converts an object ot an array?",
    multipleChoiceOptions: ["isArray()", "join()", "entries()", "from()"],
    answer: "fill()",
  },
  {
    title: "What method can add or remove elements from an array?",
    multipleChoiceOptions: ["slice()", "unshift()", "splice()", "ammend()"],
    answer: "fill()",
  },
  {
    title: "what method sorts elements of an array?",
    multipleChoiceOptions: ["pop()", "length()", "sort()", "shift()"],
    answer: "fill()",
  },
];

//select timer elemnet query selector and store in a varible so we can get timer to stop at 0. also store
var timerEl = document.querySelector(".countdown-timer-number");
var ViewHighscoresEl = document.querySelector(".view-highscores");
var startQuizButtonEl = document.querySelector(".start-quiz-button");
var questionBoxesEl = document.querySelector(".question-boxes");
var questionTitleEl = document.getElementById("question");
var button1El = document.querySelector(".answerChoice1");
var button2El = document.querySelector(".answerChoice2");
var button3El = document.querySelector(".answerChoice3");
var button4El = document.querySelector(".answerChoice4");
var submitHighscoreEl = document.querySelector(".highscore-input-text");
var clearHighscoreEl = document.querySelector(".clear-highscores");
var playAgainBTN = document.querySelector(".go-back-to-startpage");
var startPageBoxEl = document.querySelector(".startpage-content-box");
var startPageScreenEl = document.getElementById("start-screen");
var questionScreenEl = document.querySelector(".question-screen");
var allDoneScreenEl = document.getElementById("all-done-screen");
var highscoreScreenEl = document.getElementById("highscore-screen");

var index = 0;
var secondsLeft = 60;
var randomQuestion = "";
var selectedAnswer = "";
// var questionsAlreadyAnswered = []
var currentQuestionIndex = 0;

console.log(button1El);
//event listener for listening for any clisks with the class of answerChoice. so if user selects one of the for answers then the check answer function is called
;


//event listener for clicking start button
startQuizButtonEl.addEventListener("click", startQuiz);

//start timing function to be called when start button is clicked, but will be called within the startquiz function
function startTiming() {
  var timer = setInterval(function () {
    --secondsLeft;
    timerEl.textContent = secondsLeft + "s";
    console.log(secondsLeft);
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

//function that randomly selects a question and displays it . is called on within the startquiz function

function displayQuestions() {
  startPageScreenEl.classList.add("hide");
  questionScreenEl.removeAttribute("class");

  var currentQuestion = questionsBankArray[currentQuestionIndex];
  // randomQuestion =
  //     questionsBankArray[Math.floor(Math.random() * questionsBankArray.length)];
  // questionsAlreadyAnswered.push(questionsBankArray[i])
  // questionsBankArray.splice(randomQuestion,1)
  questionTitleEl.textContent = currentQuestion.title;
  //   console.log(currentQuestion.multipleChoiceOptions[0]);
  //   console.log(currentQuestion.title);

  var questionIndex = currentQuestion.multipleChoiceOptions;
  for (var currentQuestionIndex = 0; i < questionsBankArray.length; i++) {
    //build in logic that causes for loop to go to next question after the previous question is answered
    var buttonEl = document.createElement("button");
    buttonEl.setAttribute("class", "choice");
    buttonEl.setAttribute(
      "value",
      currentQuestion.multipleChoiceOptions[currentQuestionIndex]
    );
    button1El.addEventListener("click", checkAnswer)
  }
}

function checkAnswer
// function to check if picked answer is corect of wrong
// function checkAnswer(answer) {
//     var isCorrectAnswer = false;
//     for (var i = 0; i < questionsBankArray.length; i++){
//         if (selectedAnswer)
//     }

//     isCorrectAnswer = true;

// }

//the quizcomplete function is called when you answer all questions or time runs out
function AllDone() {}

//function that enter your initals into local storage
function enterHighscore() {}

//function where you can get stored highscore data from local storage and display it
function displayHighscores() {}

//called on when you click play agaiin
function playAgain() {}
