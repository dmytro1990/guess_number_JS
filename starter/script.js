'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct number🏆!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score ').textContent = 10;

// document.querySelector('.guess ').value = 23;
// console.log(document.querySelector('.guess ' ).value);
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //NO INPUT SCENARIO
  if (!guess) {
    displayMessage('No number 🤷‍♂️!');
    // document.querySelector('.message').textContent = 'No number 🤷‍♂️!';
    // WHEN PLAYER WINS
  } else if (guess === secretNumber) {
    displayMessage('Correct number 🙌!');
    // document.querySelector('.message').textContent = 'Correct number 🙌!';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore ').textContent = highscore;
    }
    //WHEN GUESS IS WRONG
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber
      //       ? 'Number is too high 📈!'
      //       : 'Number is too low 📉!';
      displayMessage(
        guess > secretNumber
          ? 'Number is too high 📈!'
          : 'Number is too low 📉!'
      );
      score--;
      document.querySelector('.score ').textContent = score;
    } else {
      displayMessage('GAME OVER!');
      //   document.querySelector('.message').textContent = 'GAME OVER!';
      document.querySelector('.score').textContent = 0;
    }
  }

  //   //GUESS IS TO HIGH
  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Number is too high 📈!';
  //       score--;
  //       document.querySelector('.score ').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'GAME OVER!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //     //GUESS IS TOO LOW
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Number is too low 📉!';
  //       score--;
  //       document.querySelector('.score ').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'GAME OVER!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
  // });

  // AGAIN CLICKED
  document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start guessing...');
    // document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score ').textContent = score;
    document.querySelector('.number ').textContent = '?';
    document.querySelector('.guess ').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });
});
