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

// ...
// var generateBtn = document.querySelector("#generate");

// GLOBAL VARIABLES

// declare title text variable, paragraph text variable, and timer start value
var titleEl = "";
var paragraphEl = "";
var buttonEl = "";
var timerStartValue = 75;

// FUNCTIONS

// build intro page with H1, P, and button
function buildIntro() {
  // check your progress
  console.log("Build intro function entered");
  console.log(mainContent);

  // make H1, assign it text, and append it to main tag
  titleEl = document.createElement("h1");
  titleEl.textContent = "Can you handle the timed quiz?";
  mainContent.appendChild(titleEl);

  // do the same for the paragraph
  paragraphEl = document.createElement("p");
  paragraphEl.textContent =
    "This is a timed quiz. Once you hit start a timer will begin. You will be given questions to answer.";
  mainContent.appendChild(paragraphEl);

  // do the same for the button
  buttonEl = document.createElement("button");
  buttonEl.textContent = "Start Quiz!";
  buttonEl.setAttribute("style", "padding: 8px 16px;");
  buttonEl.setAttribute("id", "generate");
  mainContent.appendChild(buttonEl);

  // now that button is on page, create a way to select it, and add click event to it
  var generateBtn = document.querySelector("#generate");
  generateBtn.addEventListener("click", startQuiz);
}

function startQuiz() {
  // check your progress
  console.log("Start quiz function entered");

  // make H1, assign it text, and append it to main tag
  titleEl = document.createElement("h1");
  titleEl.textContent = "Question 1";
  mainContent.appendChild(titleEl);

  // do the same for the paragraph
  paragraphEl = document.createElement("p");
  paragraphEl.textContent = "The question";
  mainContent.appendChild(paragraphEl);

  // do the same for the button
  buttonEl = document.createElement("button");
  buttonEl.textContent = "Answer #1!";
  buttonEl.setAttribute("style", "padding: 8px 16px;");
  buttonEl.setAttribute("id", "generate");
  mainContent.appendChild(buttonEl);

  // now that button is on page, create a way to select it, and add click event to it
  var generateBtn = document.querySelector("#generate");
  generateBtn.addEventListener("click", startQuiz);
}

// this kicks off the process
buildIntro();

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
