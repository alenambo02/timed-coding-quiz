var timerElement = document.querySelector(".timer");

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
