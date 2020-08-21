// NON-SELECTOR VARIABLES
let numSquares = 6;
let colors = [];
let pickedColor;

// SELECTOR VARIABLES
const squares = document.querySelectorAll(".square");
const colorDisplay = document.getElementById("color-display");
const messageDisplay = document.querySelector("#message");
const h1 = document.querySelector("h1");
const resetButton = document.querySelector("#reset");
const modeButton = document.querySelectorAll(".mode");

init();

function init(){
  // SELECT BETWEEN HARD AND EASY MODE
  setUpModeButtons();
  // LOGIC FOR WINNING OR LOSING
  setUpSquares();
  reset();
}

// SET THE GAME MODE BUTTONS EASY/HARD
function setUpModeButtons(){
  for (let i = 0; i < modeButton.length; i++){
    modeButton[i].addEventListener("click", function(){
      modeButton[0].classList.remove("selected");
      modeButton[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
      reset();
    });
  }
}

// SET UP SQUARES FOR THE GAME
function setUpSquares(){
  for(let i = 0; i < squares.length; i++){
    //click listeners to squares
    squares[i].addEventListener("click", function(){
      //grab color of picked square
      const clickedColor = this.style.backgroundColor;
      //compare color of picked square to pickedColor variable
      if(clickedColor === pickedColor){
        messageDisplay.textContent = "Correct!!";
        resetButton.textContent = "Play Again?";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again :(";
      }
    });
  }
}

// RESET FUNCTION
function reset(){
  // generate all new colors
  colors = generateRandomColors(numSquares);
  // pick a new random color from array
  pickedColor = pickColor();
  // change colorDisplay to match picked colors
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors"
  messageDisplay.textContent = "";
  // change colors of squares
  for(let i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }

  }
  h1.style.backgroundColor = "steelblue";
}

// // EASY BUTTON LOGIC
// easyBtn.addEventListener("click", function(){
//   hardBtn.classList.remove("selected");
//   easyBtn.classList.add("selected");
//   numSquares = 3;
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for (let i = 0; i < squares.length; i++){
//     if(colors[i]){
//       squares[i].style.backgroundColor = colors[i];
//     } else {
//       squares[i].style.display = "none";
//     }
//   }
// });
//
// // HARD BUTTON LOGIC
// hardBtn.addEventListener("click", function(){
//   hardBtn.classList.add("selected");
//   easyBtn.classList.remove("selected");
//   numSquares = 6;
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for (let i = 0; i < squares.length; i++){
//       squares[i].style.backgroundColor = colors[i];
//       squares[i].style.display = "block";
//     }
//   }
// );



// RESET BUTTON LOGIC
resetButton.addEventListener("click", function(){
  reset();
})



//GAME FUNCTIONS
// COLOR CHANGER
function changeColors(color){
  //loop throuah all squares
  for(let i = 0; i < squares.length; i++){
    //change each color to match given color
    squares[i].style.backgroundColor = color;
  }
}

//COLOR PICKER
function pickColor(){
  const randomNumber = Math.floor(Math.random() * colors.length);
  return colors[randomNumber];
}

// RANDOM COLOR GENRATOR
function generateRandomColors(num){
  // make an array
    let arr = []
  // repeat num times
    for(let i = 0; i < num; i++){
      // get random color and push into array
      arr.push(randomColor())
    }
  // return that array
    return arr;
}

// RGB GENERATOR
function randomColor() {
  // pick a red from 0-255
  const r = Math.floor(Math.random() * 256);
  // pick a green from 0-255
  const g = Math.floor(Math.random() * 256);
  // pick a blue from 0-255
  const b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
