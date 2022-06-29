var startButton = document.querySelector("#startbutton");
var timerElement = document.querySelector("#timer");
var highScores = document.querySelector("#highscores");
var questionContainer = document.querySelector("#questionsection")
var questionsElement = document.querySelector("#question");
var answersElement = document.querySelector("#answerbuttons");
var nextButton = document.querySelector("#countinuebutton")
var startingBox = document.querySelector(".startingbox");
var quizBox = document.querySelector("#quizbox");

let shuffleQ, currentQuestionIndex

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
    goesToNextQ();
    startTimer();
}


function goesToNextQ() {
    cleanSlate()
    displayQuestion(shuffleQ[currentQuestionIndex])   
}

function displayQuestion(question) {
questionsElement.innerText = question.question
question.answers.forEach(answer => {
    var button = document.createElement("button")
    button.innerText = answer.text
    button.classList.add("choicebutton")
    if (answer.correct) {
        button.dataset.correct = answer.correct
    }
    button.addEventListener("click", selectsAnswer)
    answersElement.appendChild(button)

})
}
function cleanSlate() {
    nextButton.classList.add("deletes")
    while (answersElement.firstChild) {
        answersElement.removeChild
        (answersElement.firstChild)
    }
} 

function selectsAnswer(e) {
    var choiceButton = e.target
    var correct = choiceButton.dataset.correct

}
if (shuffleQ.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("deletes")
} else {
    startButton.innerText = "Restart"
    startButton.classList.remove("deletes")
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
    answer: [
        { text: "div", correct: true },
        { text: "array", correct: false },
        { text: "alert", correct: false },
        { text: "scope", correct: false }
    ]
  }, 
    {  
  question: "Which of the following is used to style a webpage?",
    answer: [
        { text: "emojis", correct: true },
        { text: "functions", correct: false },
        { text: "methods", correct: false },
        { text: "CSS", correct: false }
    ]
  }   
]  
  
  
  
  










/*function shuffleQ(myQuestion) {
    currentIndex = array.length, randomIndex;
    while (currentIndex !=0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
       [myQuestions[currentIndex], myQuestions[randomIndex]] =
       [myQuestions[randomIndex], myQuestions[currentIndex]]; 
    }
    return myQuestions; */