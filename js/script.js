/* Psuedo Coding - Gary

// I have a bunch of quiz questions to ask. What is the best way to store all those questions, PLUS the correct answer for each one?
// For each question in the quiz:
   // The question itself
   // The possible answers 
   // Which answer is correct 

// Have a process where:
  // When the game starts, a countdown begins
  // A wquestion is selected from the collection
  // All the elements are added to the DOM 
  // The user will click on one of the answers 
  // Detect that click and determine if the user clicked on the right answer 
     // If yes, add some points 
     // If no, subtract 5 or 10 seconds from the time remaining
     // Go the next question

// After all questions OR after time runs out, show the user their score
// High score tracking

CLOSE */

/* Psuedo Coding - Bret

    - start page function builds intro page w/ appendChild

*/

// SELECTORS
// ...
var mainContent = document.getElementById("mainContent");
var countDownTimer = document.getElementById("timerValue");
var addHighscoreBtn;

// GLOBAL VARIABLES
// declare title text variable, paragraph text variable, and timer start value
var titleEl = "";
var paragraphEl = "";
var buttonEl = "";

var startQuestion = 0;
var i = "";

var finalScore;
var highscores;
var initial;
var score;

var timerStartValue = 75;
var secondsLeft;

var timerInterval;

// questions array of objects
var questions = [
  {
    question: "Commonly used data types DO NOT include:",
    option1: "1. strings",
    option2: "2. booleans",
    option3: "3. alerts",
    option4: "4. numbers",
    answer: "3. alerts",
  },
  {
    question:
      "The condition in an if / else statement is enclosed within ____.",
    option1: "1. quotes",
    option2: "2. curly brackets",
    option3: "3. parentheses",
    option4: "4. square brackets",
    answer: "2. curly brackets",
  },
  {
    question: "Arrays in Javascript can be used to store ____.",
    option1: "1. numbers and strings",
    option2: "2. curly brackets",
    option3: "3. quotes",
    option4: "4. parentheses",
    answer: "1. numbers and strings",
  },
  {
    question:
      "String values must ne enclosed within ____ when being assigned to variables.",
    option1: "1. commas",
    option2: "2. curly brackets",
    option3: "3. quotes",
    option4: "4. parentheses",
    answer: "3. quotes",
  },
  {
    question:
      "A very useful tool used during developement and debugging for printing content to the debugger is:",
    option1: "1. JavaScript",
    option2: "2. terminal / bash",
    option3: "3. for loops",
    option4: "4. console.log",
    answer: "4. console.log",
  },
];
// var questions = [question1, question2, question3, question4, question5];

// FUNCTIONS

function setTime() {
  // start quiz
  startQuiz();
  // Sets interval in variable
  secondsLeft = timerStartValue;
  timerInterval = setInterval(function () {
    countDownTimer.textContent = secondsLeft;
    finalScore = secondsLeft;
    secondsLeft--;

    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      window.alert("Time is up. You lose!");
    }
  }, 1000);
}

// clear <main> elements
function clearStage() {
  // ...
  mainContent.innerHTML = "";
  // check progress w/ console log
  console.log("Stage was cleared");
}

function gatherHighscores() {
  console.log("gatherHighscores function has been entered");
  // Check to see if there are highscores in the browsers local storage
  if (highscores !== null) {
    console.log("highscores !== null");
  }
}

function addHighscore() {
  console.log("addHighScore function has been entered");
  var thisHighscore = {
    initial: initial,
    score: score,
  };
  console.log(thisHighscore);
  // localStorage.setItem("studentGrade", JSON.stringify(studentGrade));
  // renderMessage();
}

// check if answer is correct or incorrect
function checkAnswer(answerPressed, answer) {
  console.log("You have entered function checkAnswer1");
  console.log("answerPressed: " + answerPressed);
  console.log("answer: " + answer);
  if (answerPressed === answer) {
    console.log("You are a winner");
    var alertWinLose = document.createElement("h2");
    alertWinLose.textContent = "You Win!";
    mainContent.appendChild(alertWinLose);
    i++;
    setTimeout(function () {
      startQuiz();
    }, 1000);
  } else {
    console.log("You are a loser");
    var alertWinLose = document.createElement("h2");
    alertWinLose.textContent = "You Lose!";
    secondsLeft = secondsLeft - 10;
    mainContent.appendChild(alertWinLose);
    i++;
    setTimeout(function () {
      startQuiz();
    }, 1000);
  }
}

// build intro page with H1, P, and button
function buildIntro() {
  // function variables
  var titleEl = "";
  var paragraphEl = "";
  var buttonEl = "";

  // gather highscores
  gatherHighscores();

  // check your progress
  console.log("Build intro function entered");
  console.log(mainContent);

  // make H1, assign it text, and append it to main tag
  titleEl = document.createElement("h1");
  titleEl.textContent = "Coding Quiz Challenge";
  mainContent.appendChild(titleEl);

  // do the same for the paragraph
  paragraphEl = document.createElement("p");
  paragraphEl.textContent =
    "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
  mainContent.appendChild(paragraphEl);

  // do the same for the button
  buttonEl = document.createElement("button");
  buttonEl.textContent = "Start Quiz";
  buttonEl.setAttribute("id", "generate");
  mainContent.appendChild(buttonEl);

  i = startQuestion;

  // now that button is on page, create a way to select it, and add click event to it
  var generateBtn = document.querySelector("#generate");
  generateBtn.addEventListener("click", setTime);
}

// build intro page with H1, P, and button
function buildAllDone() {
  // function variables
  var titleEl = "";
  var paragraphEl = "";
  var formEl = "";

  // check your progress
  console.log("buildAllDone function entered");
  console.log(mainContent);

  // make H1, assign it text, and append it to main tag
  titleEl = document.createElement("h1");
  titleEl.textContent = "All done!";
  mainContent.appendChild(titleEl);

  // do the same for the paragraph
  paragraphEl = document.createElement("p");
  paragraphEl.textContent = "Your final score is " + finalScore;
  mainContent.appendChild(paragraphEl);

  // do the same for the form field

  formEl = document.createElement("form");
  formEl.innerHTML =
    // '<form><p><label for="initials">Enter initials:</label><input name="initials" id="initials" type="text" placeholder="X.X." /><button id="add" type="button">Submit</button></p>';
    '<form style="display: flex;"><label>Enter initials</label><!-- <textarea id="msg" name="comments"></textarea> --><input id="initials" name="initials"></textarea><button id="save">SAVE</button></form>';
  // buttonEl.textContent = "Start Quiz";
  // buttonEl.setAttribute("id", "generate");

  // initial = initial.value;

  mainContent.appendChild(formEl);
  score = finalScore;
  addHighscoreBtn = document.getElementById("save");
  initial = document.getElementById("initials");

  addHighscoreBtn.addEventListener("click", function (event) {
    event.preventDefault();

    var highscore = {
      initial: initial.value,
      score: score,
    };

    localStorage.setItem("highscore", JSON.stringify(highscore));
    window.location.href = "highScore.html";
  });
}

function startQuiz() {
  // remove items from DOM
  clearStage();

  if (i === 5) {
    console.log("move to your score screen");
    var stopTimer = true;
    clearInterval(timerInterval);
    buildAllDone();
    return;
  }

  // declare variables for answers text and answer
  var answerButton1El = "";
  var answerButton2El = "";
  var answerButton3El = "";
  var answerButton4El = "";
  var answerPressed = "";

  var answer = questions[i].answer;

  // set and push question to page
  titleEl = document.createElement("h1");
  titleEl.textContent = questions[i].question;
  mainContent.appendChild(titleEl);

  // build answer buttons
  answerButton1El = document.createElement("button");
  answerButton1El.addEventListener("click", function () {
    console.log("Pressed 1");
    answerPressed = questions[i].option1;
    checkAnswer(answerPressed, answer);
  });
  answerButton1El.textContent = questions[i].option1;
  mainContent.appendChild(answerButton1El);

  answerButton2El = document.createElement("button");
  answerButton2El.addEventListener("click", function () {
    console.log("Pressed 2");
    answerPressed = questions[i].option2;
    checkAnswer(answerPressed, answer);
  });
  answerButton2El.textContent = questions[i].option2;
  mainContent.appendChild(answerButton2El);

  answerButton3El = document.createElement("button");
  answerButton3El.addEventListener("click", function () {
    console.log("Pressed 3");
    answerPressed = questions[i].option3;
    checkAnswer(answerPressed, answer);
  });
  answerButton3El.textContent = questions[i].option3;
  mainContent.appendChild(answerButton3El);

  answerButton4El = document.createElement("button");
  answerButton4El.addEventListener("click", function () {
    console.log("Pressed 4");
    answerPressed = questions[i].option4;
    checkAnswer(answerPressed, answer);
  });
  answerButton4El.textContent = questions[i].option4;
  mainContent.appendChild(answerButton4El);
}

// this kicks off the process
buildIntro();
console.log(questions);

// Template START //

// selectors
// var firstChildUl = document.getElementById("first-child-ul");

// global variables
// var myName = "Bret";

// functions
// function doSomethign() {}

// Template END //

// - EXAMPLES - //

// Declaring a variable - this is an example
// var studentName;

// Uses assignment operator(=) to assign a value
// var studentName = "Abdul";

// To re-assign a variable, use only the variable's name
// studentName = "Tonya";

// To access a value stored in a variable, use the variable's name
// console.log(studentName);

//To combine the message with a variable value use the concatenation operator(+)
//Logs "My name is "
// console.log("My name is ");

// Logs "My name is Tonya"
// console.log("My name is " + studentName);
