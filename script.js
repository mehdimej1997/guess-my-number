'use strict';
let score = 20;
let heightScore = 0;
let secretNumber = Math.round(Math.random() * 19 + 1);
const win = '🎉 Correct number';
const saveScore = document.querySelector('.highscore');
const body = document.querySelector('body');
const again = document.querySelector('.again');
const checkButton = document.querySelector('.check');
const input = document.querySelector('.guess');
const checkedNumber = document.querySelector('.number');
const message = document.querySelector('.message');

checkButton.addEventListener('click', function () {
  const guess = Number(input.value);

  //THERE IS NO SCORE
  if (score > 0) {
    //NO INPUT
    if (!guess) {
      message.textContent = '⛔ No number!!!';
    }
    // CORRECT GUESS
    else if (secretNumber == guess) {
      message.textContent = win;
      checkedNumber.textContent = secretNumber;
      body.style.backgroundColor = '#60b347';
      checkedNumber.style.width = '30rem';
      secretNumber = Math.round(Math.random() * 19 + 1);
      if (score > heightScore) {
        heightScore = score;
        saveScore.textContent = heightScore;
      }
    }

    // WRONG GUESSES
    else if (secretNumber != guess) {
      score--;
      document.querySelector('.score').textContent = score;
      message.textContent =
        secretNumber > guess ? '🔽 Too low!' : '🔼 Too high!';
    }
  } else {
    message.textContent = '🤷‍♂️ You lost the game!';
    body.style.backgroundColor = '#f03e3e';
  }
});

again.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.round(Math.random() * 19 + 1);
  body.style.backgroundColor = '#222';
  checkedNumber.style.width = '15rem';
  checkedNumber.textContent = '?';
  document.querySelector('.score').textContent = score;
  message.textContent = 'Start guessing...';
  input.value = null;
});
