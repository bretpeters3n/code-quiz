// selectors
var highscoresDisplay = document.getElementById("highscores");

// variables
var highscores;
var initial;

// functions
function getHighscores() {
  highscores = JSON.parse(localStorage.getItem("highscore"));
  if (highscores === null) {
    console.log("There are no high scores");
    highscoresDisplay.textContent = "";
  } else {
    console.log(highscores);
    highscoresDisplay.textContent = "";
    highscoresDisplay.textContent = highscores.initial + " " + highscores.score;
  }
}

function clearHighscores() {
  localStorage.clear();
  window.location.href = "highScore.html";
}

// the action
getHighscores();

// var initial = document.getElementById("initials");
// var saveButton = document.getElementById("save");

// var score = 69;

// saveButton.addEventListener("click", function (event) {
//   event.preventDefault();

//   var highscore = {
//     initial: initial.value.trim(),
//     score: score,
//   };

//   localStorage.setItem("highscore", JSON.stringify(highscore));
//   renderMessage();
// });

// function renderMessage() {
//   var lastGrade = JSON.parse(localStorage.getItem("highscore"));
//   if (lastGrade !== null) {
//     document.querySelector(".message").textContent =
//       "and here is what else was added: " + lastGrade.initial;
//   }
// }
