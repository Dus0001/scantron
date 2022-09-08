//create global variables
let questionAndAnswers = [
    {
        question: "What is the 3rd largest city in America?",
        option1: "Denver", 
        option2: "Seattle",
        option3: "Houston",
        option4: "Chicago",
        answer: "Houston",
        
    },
    {
        question: "Who's the best sports teams in the state of Texas?",
        option1: "Cowboys", 
        option2: "Astros",
        option3: "Spurs",
        option4: "Dynamo",
        answer: "Astros",
        
    },
    {
        question: "What is the human body largest organ? ",
        option1: "Stomach", 
        option2: "Brain",
        option3: "Heart",
        option4: "Skin",
        answer: "Skin",
        
    }

];
var question = document.querySelector(".question");
var quiz = document.querySelector(".quiz")
var li1 = document.querySelector("#option-1");
var li2 = document.querySelector("#option-2");
var li3 = document.querySelector("#option-3");
var li4 = document.querySelector("#option-4");
var timeDisplay = document.querySelector("time-left");
optionEl = document.querySelectorAll(".options");


//let score = timeLeft
var startQuizBtn = document.querySelector("#start-btn")
let quizDisplayed = 0


//start quiz function
function questionPrompt(){
    
    console.log ("clicked");
    
        const quizInfo = questionAndAnswers[quizDisplayed];

        question.innerHTML = quizInfo.question
        li1.textContent = quizInfo.option1;
        li2.textContent = quizInfo.option2;
        li3.textContent = quizInfo.option3;
        li4.textContent = quizInfo.option4;

};



// function fot option selected

function optionSelected() {

let correct = undefined;

optionEl.forEach( li => {
    if(li.checked) {
      correct = li.value;  
    }
});
 return correct
};




//quiz timer function
var startTimer = function() {

}


//highscore funtion


//quiz screen function

//submit user info
var submitBtn = document.querySelector(".submit-btn")

submitBtn.addEventListener("click", () => {

    var userInput = document.querySelector("#user-info");

    var userInfo = {
        user: userInput.value.trim(),
    };
    
    //send user info to local storage
    localStorage.setItem("userInfo", JSON.stringify(user));
    console.log("saved")
});
  


//final page


//add event listeners
startQuizBtn.addEventListener("click",() => questionPrompt());

const answerClicked = optionSelected 

//add event listener to the li elements
optionEl.forEach(li => {
    li.addEventListener("click", () => {
        let answerClicked = optionSelected 
    
        if (answerClicked === questionAndAnswers[quizDisplayed].answer) {
            console.log ("Correct!")
    
        } else (answerClicked === !questionAndAnswers[quizDisplayed].answer) 
        quizDisplayed++;
        console.log(quizDisplayed)
    
        if (quizDisplayed < questionAndAnswers.length) {
            questionPrompt();
        }else {
            // submit getUserInfo ()
            console.log ("get user info");
        }
    });
})

