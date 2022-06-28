var startButton = document.getElementById("startbutton")
var timerElement = document.querySelector(".timer");

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
    
    goesToNextQ();
    startTimer();
}

function goesToNextQ() {
    
}

function selectsAnswer() {

}

var question1 = [
  {
    question: "Which of the following is not a popup box in Javascript?",
    answers: [
        { text: "prompt", incorrect: false },
        { text: "array", incorrect: true },
        { text: "alert", incorrect: false },
        { text: "confirm", incorrect: false },
    ]
  },   
  {
    question: "Which of the following is a tag?",
    answers: [
        { text: "div", incorrect: true },
        { text: "array", incorrect: false },
        { text: "alert", incorrect: false },
        { text: "scope", incorrect: false },
    ]
  }, 
  {  
  question: "Which of the following is used to style a webpage?",
    answers: [
        { text: "emojis", incorrect: true },
        { text: "functions", incorrect: false },
        { text: "methods", incorrect: false },
        { text: "CSS", incorrect: false },
    ]
  }   
]