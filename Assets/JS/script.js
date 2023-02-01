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
    var startScreen = document.querySelector(".start-screen");
    var timer;
    var timerCount;

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
        }
    ]

    function startQuiz(){
        timerCount = 60;
        startTimer();
        hideStartScreen();
        showQuestion();
        
        
    };

    function startTimer(){
        timer = setInterval(function(){
            timerCount--;
            timerElement.textContent = timerCount;
            if(timerCount >=0){
                clearInterval(timer);
            }
        }, 1000);
    };

    function showQuestion(){
        if(questionSpace.style.display === "none"){
            questionSpace.style.display = "block";
        } else {
            questionSpace.style.display = "none";
        }
    }

    function hideStartScreen(){
        if(startScreen.style.display === "block"){
            startScreen.style.display = "none";
        } else {
            startScreen.style.display = "block";
        }
    }
       
        
    
        

    startButton.addEventListener('click', startQuiz);