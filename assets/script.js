var startButton = document.querySelector("#startbutton");
var timerElement = document.querySelector("#timer");
var highScores = document.querySelector("#highscores");
var questionContainer = document.querySelector("#questionsection")
var questionsElement = document.querySelector("#question");
var answersElement = document.querySelector(".choices");
var nextButton = document.querySelector("#countinuebutton")
var startingBox = document.querySelector(".startingbox");
var quizBox = document.querySelector("#quizbox");
var answerButton = document.querySelector("#answer-button");
var finishButton =document.querySelector("#finished")

var shuffleQ 
var currentQuestionIndex

startButton.addEventListener("click", startsQuiz)
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    goesToNextQ()
})

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
    startingBox.classList.add("deletes")
    shuffleQ = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    quizBox.classList.remove("deletes")
    goesToNextQ()
    startTimer()
}

function goesToNextQ() {
    cleanSlate()
    displayQuestion(shuffleQ[currentQuestionIndex])   
}

function displayQuestion(question) {
questionsElement.innerText = question.question
question.answers.forEach(answers => {
    var button = document.createElement("button")
    button.innerText = answers.text
    button.classList.add("btn")
    if (answers.correct) {
        button.dataset.correct = answers.correct
    }
    button.addEventListener("click", selectsAnswer)
    answerButton.appendChild(button)
})
}

function selectsAnswer() {
  
    if (shuffleQ.length > currentQuestionIndex + 1) {
        nextButton.classList.remove("deletes")
    }
       return finishButton;
    }

var questions = [{
    question: "Which of the following is not a popup box in Javascript?",
    answers: [
        { text: "prompt", correct: false },
        { text: "array", correct: true },
        { text: "alert", correct: false },
        { text: "confirm", correct: false }
    ]
  },
    {
    question: "Which of the following is a tag?",
    answers: [
        { text: "div", correct: true },
        { text: "array", correct: false },
        { text: "alert", correct: false },
        { text: "scope", correct: false }
    ]
  }, 
    {  
  question: "Which of the following is used to style a webpage?",
    answers: [
        { text: "emojis", correct: true },
        { text: "functions", correct: false },
        { text: "methods", correct: false },
        { text: "CSS", correct: false }
    ]
  }   
]  


function cleanSlate() {
    nextButton.classList.add("deletes")
    while (answerButton.firstChild) {
        answerButton.removeChild
        (answerButton.firstChild)
    }
}