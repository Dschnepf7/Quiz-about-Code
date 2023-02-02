//click button to start
//event listener
//a timer will start
//user is presented with a question
//user selects one multiple choice answer
//IF answer is wrong, decrement the timer
//Display that the user choice was incorrect, then move to next question
//IF answer is correct
//Display that the user choice was correct(textContent)
//Increment the score++
//FOR loop to loop through the questions array
//When timer hits 0 OR no more questions in array
//THEN clear interval
//THEN allow user to input initials
//THEN link to highscores page(two separate HTML pages, index.html and hiscores.html)
//Save data to local storage(setItem, getItem)

//startQuiz() function changes content
//hide the start screen
//unhide the questions section
//start the timer
//show the starting time
//call getQuestion()
//getQuestion() function get current question object from questions array
//change content of the page
//getElementbyId, change textContent
//loop over choices create a button for each choice
//after creating all the elements we appendChild
//questionClick() function that checks choice user clicked
//first we check that the event.target matches an answer choice
//check event.target.value matches the questions[currentIndex].answer
var startButton = document.querySelector(".startButton");
var timerElement = document.querySelector(".timer-count");
var questionSpace = document.querySelector(".questionSpace");
var buttonSpace = document.querySelector(".buttonSpace");
var startScreen = document.querySelector(".start-screen");
var quizContainer = document.querySelector(".container");
var timer;
var timerCount = 10;
var questionNumber = 0;
var score = 0;
var endScreen = document.querySelector(".endGame");
var correctOrWrong = document.querySelector(".correctOrWrong");
var nextButton = document.querySelector(".nextQuestion");

startButton.addEventListener('click', startQuiz);
// buttonSpace.addEventListener('click', correctOrWrong);
nextButton.addEventListener('click', nextScreen)

var questions = [
    {
        question: "What does HTML stand for?",
        choices: ["Hyper text Martian language", "Hyper text markup language"],
        answer: "Hyper text markup language",
    },
    {
        question: "What does CSS stand for?",
        choices: ["Cats stay sleeping", "Cascading style sheets"],
        answer: "Cascading style sheets",
    },
    {
        question: "Which of the following function of Array object removes the last element from an array and returns that element?",
        choices: ["pop()", "push()", "join()", "map()"],
        answer: "pop()"
    },
    {
        question: "Which snippet of CSS is commonly used to center a website horizontally?",
        choices: ["site-align: center;", "margin: center;", "margin: auto 0;", "margin: 0 auto;"],
        answer: "margin: 0 auto;"
    },
    {
        question: "Which of the follwing is not an HTML element?",
        choices: ["header", "main", "blink", "section"],
        answer: "blink"
    }
]
function startQuiz() {

    startTimer();
    hideStartScreen();
    showQuestion();

};

function startTimer() {
    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount <= 0) {
            clearInterval(timer);
        }
    }, 1000);
};

function showQuestion() {
    //     if(questionSpace.style.display === "none") {
    //         questionSpace.style.display = "block";
    //     } else {
    //         questionSpace.style.display = "none";
    //     }
    //     if(buttonSpace.style.display === "none"){
    //         buttonSpace.style.display ="block";
    //     } else {buttonSpace.style.display = "none";

    questionSpace.textContent = questions[questionNumber].question;
    buttonSpace.innerHTML = "";
    for (let i = 0; i < questions[questionNumber].choices.length; i++) {
        const element = questions[questionNumber].choices[i];
        var btn = document.createElement("button")
        btn.textContent = element;
        btn.onclick = checkAnswer;
        buttonSpace.append(btn);
    }
}
function checkAnswer(){
    // display "correct" or "wrong"
    console.log("check answer");
    if(this.textContent === questions[questionNumber].answer){
        score++;
        correctOrWrong.classList.remove("hide");
        correctOrWrong.textContent = "Correct! "+"Your score is: " + score;
    } else {
        correctOrWrong.textContent = "Wrong!";
    };
    // questionNumber++;
    // if(questions.length === questionNumber){
    //     endQuiz();
    // } else {showQuestion()};

}
    
function nextScreen(){
    questionNumber++;
    if(questions.length === questionNumber){
        endQuiz();
    } else {showQuestion()};
}
    

function hideStartScreen() {
    // if(startScreen.style.display === "block"){
    //     startScreen.style.display = "none";
    // } else {
    //    startScreen.style.display = "block";
    // }
    startScreen.classList.add("hide");
    quizContainer.classList.remove("hide");

}
function endQuiz() {
    clearInterval(timer);
endScreen.classList.remove("hide");
startScreen.classList.add("hide");
questionSpace.classList.add("hide");
buttonSpace.classList.add("hide");
}





