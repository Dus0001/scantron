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
var timeDisplay = document.querySelector(".time-left");
optionEl = document.querySelectorAll(".options");
var time;
var score = time; 


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
function startTimer(time) {
let count = setInterval(timer, 1000);
function timer(){

    if (time > 1 ) {
        timeDisplay.textContent = "You have" + time + "secs left.";

    timeDisplay.textContent=time;
    time --;
    }
    else if (time < 2) {
        timeDisplay.textContent = ("you have" + time + "sec  left");
        console.log("you have less then 10 sec")

    timeDisplay.textContent=time;
    time --;
    } 
    else if (quizDisplayed < questionAndAnswer.length) {
         
        clearInterval(count);
        //save the final time as score
         score.setItem(time);

         //getUserInfo ();


    timeDisplay.textContent=time;
    time --;
    }
    else if (time === 0) {
        //stop the timer
        clearInterval(setInterval)
        timeDisplay.textContent = "00"
       //getUserInfo ();
        

    timeDisplay.textContent=time;
    time --;
    }
    
}
};


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
    userInfo.setItem("userInfo", JSON.stringify(user));
    console.log("saved")
});
  


//final page

//add event listeners
startQuizBtn.addEventListener("click",() => (questionPrompt(), startTimer(20)));

const answer = optionSelected 

//add event listener to the li elements
optionEl.forEach(li => {
    li.addEventListener("click", () => {
        const answer = optionSelected 
    
        if (answer === questionAndAnswers[quizDisplayed].answer) {
            console.log ("Correct!")
    
        };
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
