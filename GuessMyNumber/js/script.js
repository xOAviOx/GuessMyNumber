'use strict';
// import { gsap } from 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.1/gsap.min.js';

const audio1 = new Audio('assets/click.mp3');
const audio2 = new Audio('assets/victory.mp3');
const audio3 = new Audio('assets/victory2.mp3');
const error = new Audio('assets/error.mp3');
const lost = new Audio('assets/lose.mp3');
let messageEl = document.querySelector('.message');
let scoreEl = document.querySelector('.score');
const check = document.querySelector('.check');
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let numberEl = document.querySelector('.number');
// numberEl.textContent = secretNumber;
let highScore = 0;
let score = 20;
let intervalId;

check.addEventListener('click', function () {
  audio1.play();
  let guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    messageEl.textContent = 'No guess, Try to guess😒';
    error.play();
  } else if (guess === secretNumber) {
    // console.log('it is equal');
    messageEl.textContent = 'You Won The Game Sir🥳!';
    numberEl.style.width = '30rem';
    document.querySelector('body').style.backgroundColor = '#60b347';
    audio2.play();
    numberEl.textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = score;
    }
    audio2.addEventListener('ended', function () {
      audio3.play();
      //confetti
      confetti({
        particleCount: 200,
        spread: 70,
        origin: { y: 0.6 },
      });
    });
  } else if (guess !== secretNumber) {
    if (score > 1) {
      messageEl.textContent =
        guess > secretNumber ? 'Too High, Sir🤔' : 'Too Low, Sir😢';
      score--;
      scoreEl.textContent = score;
    } else {
      document.querySelector('.highscore').textContent = 0;
      messageEl.textContent = 'You Lost The Game Sir😫';
      scoreEl.textContent = '0';
      numberEl.textContent = secretNumber;
      lost.play();
      document.querySelector('body').style.backgroundColor = '#880808';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  scoreEl.textContent = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  numberEl.textContent = '?';
  messageEl.textContent = 'Start Guessing Sir...😊';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  numberEl.style.width = '15rem';
});
