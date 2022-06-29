//created variables to reference html 
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
// created variables to use in order to shuffle questions, to move throughout page
var shuffleQ 
var currentQuestionIndex
//added event listeners in order to call on specfic targets
startButton.addEventListener("click", startsQuiz)
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    goesToNextQ()
})
//tells me what time my timer starts at and counts down from there
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


//used this function to begin quiz and to exit from starting page with rules of quiz
function startsQuiz() {
    console.log("begin")
    startingBox.classList.add("deletes")
    shuffleQ = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    quizBox.classList.remove("deletes")
    goesToNextQ()
    startTimer()
}
//moves us to the next question in quiz
//cleanSlate function removes items from previous question
function goesToNextQ() {
    cleanSlate()
    displayQuestion(shuffleQ[currentQuestionIndex])   
}
//inserts question and answer arrary, in order to display on browser
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
//could not figure out how to successfully display when user selects correct answer 
//or when they select incorrect answer
function selectsAnswer() {
  
    if (shuffleQ.length > currentQuestionIndex + 1) {
        nextButton.classList.remove("deletes")
    }
       return finishButton;
    }
//created a question array
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

//cleans out my previous question
function cleanSlate() {
    nextButton.classList.add("deletes")
    while (answerButton.firstChild) {
        answerButton.removeChild
        (answerButton.firstChild)
    }
}