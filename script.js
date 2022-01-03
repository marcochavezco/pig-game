"use strict";

// Selecting elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const btnNew = document.querySelector(".btn--new");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

// Starting conditions
const score = [0, 0];
let currentScore = 0;
let activePlayer = 0;
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

// Rolling dice functionality
const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

btnRoll.addEventListener("click", () => {
  // Generate a random number
  const diceNumber = Math.trunc(Math.random() * 6) + 1;
  //   console.log(diceNumber);

  //   Display dice
  diceEl.src = `/dice-${diceNumber}.png`;
  diceEl.classList.remove("hidden");

  //   Check for rolled 1
  if (diceNumber !== 1) {
    currentScore += diceNumber;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    //   Switch to next player
    switchPlayer();
  }
});

btnHold.addEventListener("click", () => {
  // Add current score to active player
  score[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    score[activePlayer];
  //  Check if player's score is >= 100
  if (score[activePlayer] >= 100) {
    document.getElementById(`score--${activePlayer}`).textContent =
      activePlayer === 0 ? "Player 1 won!" : "Player 2 won!";
  } else {
    // Switch to next player
    switchPlayer();
  }
});
