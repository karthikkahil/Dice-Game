"use strict";

// Button
const diceBtn = document.querySelector(".diceRoll");
const scoreHoldBtn = document.querySelector(".scoreHold");
const newGame = document.querySelector(".newGame");

// Elements
const diceEl = document.querySelector(".diceRollimage");
const currentScore0El = document.querySelector(".currentScore--0");
const currentScore1El = document.querySelector(".currentScore--1");
const score0Play = document.querySelector(".score--0");
const score1Play = document.querySelector(".score--1");
const bullet0Point = document.querySelector("#activePlayer--0");
const bullet1Point = document.querySelector("#activePlayer--1");
const activePlayer0 = document.querySelector(".player--0");
const activePlayer1 = document.querySelector(".player--1");

let currentScore = 0;
let activePlayer = 0;
let score = [0, 0];
let winner = true;

// Switch function

function switchPlayer() {
  document.querySelector(`.currentScore--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  bullet0Point.classList.toggle("hidden");
  bullet1Point.classList.toggle("hidden");
  activePlayer0.classList.toggle("activeplayer");
  activePlayer1.classList.toggle("activeplayer");
}

// Start game
diceBtn.addEventListener("click", () => {
  if (winner) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    diceEl.src = `images/dice_${dice}.png`;

    //   Image show
    diceEl.classList.remove("hidden");

    // Current score
    currentScore = currentScore + dice;

    if (dice !== 1) {
      document.querySelector(`.currentScore--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

// Score holding

scoreHoldBtn.addEventListener("click", () => {
  if (winner) {
    score[activePlayer] += currentScore;
    console.log(score);
    document.querySelector(`.score--${activePlayer}`).textContent =
      score[activePlayer];

    if (score[activePlayer] >= 20) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("gameWinner");
      console.log(`Won ${activePlayer}`);
      winner = false;
    }
    switchPlayer();
  }
});

// New Game

newGame.addEventListener("click", () => {
  let currentScore = 0;
  let activePlayer = 0;
  let score = [0, 0];
  let winner = true;
  bullet0Point.classList.remove("hidden");
  bullet1Point.classList.add("hidden");
  activePlayer0.classList.add("activeplayer");
  activePlayer1.classList.remove("activeplayer");
  diceEl.classList.add("hidden");

  document.querySelector(`.currentScore--0`).textContent = 0;
  document.querySelector(`.currentScore--1`).textContent = 0;
  document.querySelector(`.score--0`).textContent = 0;
  document.querySelector(`.score--1`).textContent = 0;
});
