//create global variables
var question = document.querySelector(".question");
var li1 = document.querySelector("#option-1");
var li2 = document.querySelector("#option-2");
var li3 = document.querySelector("#option-3");
var li4 = document.querySelector("#option-4");
var timeLeft = document.querySelector("time-left");
let score = timeLeft
var startQuiz = document.querySelector("#start-btn")

//start quiz function
function questionPromt() {
    question.textContent= "hello World"
    console.log(question)
}







//quiz timer function
var startTimer = function() {

}


//highscore funtion


//quiz screen function


//subnit user info


//final page


//add event listeners
startQuiz.addEventListener("click", questionPromt)