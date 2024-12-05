const audio1 = new Audio('assets/click.mp3');
const Btns = document.querySelectorAll('.btn');
//selecting buttons and modals in variables
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalbtn = document.querySelector('.close-modal');
const showModalbtn = document.querySelector('.show-modal');

//turning those in functions
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//button functionalities
showModalbtn.addEventListener('click', openModal);
closeModalbtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
// play Audio button functionality
const audio = document.getElementById('background-audio');
document.querySelector('.play-audio').addEventListener('click', () => {
  document.querySelector('.play-audio').textContent = 'Pause Audio🔈';
  // play the audio
  if (audio.paused) {
    audio.play();
  } // pause the audio if already playing
  else {
    audio.pause();
    document.querySelector('.play-audio').textContent = 'Play Audio🔊';
  }
});

//start button audio

Btns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    audio1.play();
  });
});
