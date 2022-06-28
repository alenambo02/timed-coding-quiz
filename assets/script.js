var startButton = document.querySelector("#startbutton");
var timerElement = document.querySelector("#timer");
var highScores = document.querySelector("#highscores");
var questionContainer = document.querySelector("#questionsection")
var questions = document.querySelector("#questions");
var answers = document.querySelector("#answers");
var nextButton = document.querySelector("#countinuebutton")
var startingBox = document.querySelector(".startingbox");
var quizBox = document.querySelector("#quizbox");

startButton.addEventListener("click", startsQuiz)

var secondsLeft = 120;

function startTimer() {
    timer = setInterval(function() {
    if (secondsLeft >= 1) {
        secondsLeft--;
    timerElement.textContent = secondsLeft
    } else {
    clearInterval(timer);
    }
 }, 1000);
}

startTimer();



function startsQuiz() {
    console.log("begin")
    startingBox.classList.add("deletes");
    
    goesToNextQ();
    startTimer();
}


function goesToNextQ() {
    quizBox.classList.remove("deletes");
    displayQuestion(questionsArray[0])
    questionClass.innerHTML = questionsArray.question

}

function selectsAnswer() {

}

var questionsArray = [{
    question: "Which of the following is not a popup box in Javascript?",
    answers: [
        { text: "prompt", isCorrect: false },
        { text: "array", isCorrect: true },
        { text: "alert", isCorrect: false },
        { text: "confirm", isCorrect: false }
    ]
  },   
  {
    question: "Which of the following is a tag?",
    answers: [
        { text: "div", isCorrect: true },
        { text: "array", isCorrect: false },
        { text: "alert", isCorrect: false },
        { text: "scope", isCorrect: false }
    ]
  }, 
  {  
  question: "Which of the following is used to style a webpage?",
    answers: [
        { text: "emojis", isCorrect: true },
        { text: "functions", isCorrect: false },
        { text: "methods", isCorrect: false },
        { text: "CSS", isCorrect: false }
    ]
  }   
]