"use strict";

//pseudo code//
/*

//per manuel in class need to make timer and inlude logic so that will go through array that has ogjects. and the objects have the questions and array aof possible answers, key that tell you what answer is right.





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

//making an array to store question objects that will themselves store the question, chpices and the correct answer

var questionsBankArray = [
    {
        question: "what does git pull origin main do?",
        multipleChoiceOptions: ["downloads content from remote repository and updates local repository", "this command does nothing", "it uploads content from local repository to a remote repository", "it 'pulls' your remote repository, thus deleting it"],
        indexOfAnswer:0
    },
    {
        question: "what array method puts all the elements of an array into a string?",
        multipleChoiceOptions: ["fill()", "includes()", "copyWithin()", "join()"],
        indexOfAnswer:3
    },
    {
        question: "what method converts an object ot an array?",
        multipleChoiceOptions: ["isArray()", "join()", "entries()", "from()"],
        indexOfAnswer:3
    },
    {
        question: "What method can add or remove elements from an array?",
        multipleChoiceOptions: ["slice()", "unshift()", "splice()", "ammend()"],
        indexOfAnswer:2
    },
    {
        question: "what method sorts elements of an array?",
        multipleChoiceOptions: ["pop()", "length()", "sort()", "shift()"],
        indexOfAnswer:2
    }

]

// 1. making timer
//select timer elemnet query selector and store in a varible so we can get timer to stop at 0. also store

var timerElement = document.querySelector(".countdown-timer");
var timer;
var timerCount;

function startTiming() {
  timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount === 0) {
      clearInterval(timer);
      quizComplete();
    }
      if ()
  }, 1000);
}

function quizComplete() {}


function beginGame() { }
