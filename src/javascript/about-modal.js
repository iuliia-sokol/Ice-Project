const openAboutModalBtn = document.querySelector('.about-btn');
const closeAboutModalBtn = document.querySelector('.about-close-btn');
const aboutModal = document.querySelector('.about-backdrop');
const aboutModalWindow = document.querySelector('.about-modal');

openAboutModalBtn.addEventListener('click', function () {
  aboutModal.classList.remove('is-hidden');
});

closeAboutModalBtn.addEventListener('click', function () {
  aboutModal.classList.toggle('is-hidden');
});

aboutModal.addEventListener('click', e => {
  const closeAboutModal = e.composedPath().includes(aboutModalWindow);
  if (!closeAboutModal) {
    aboutModal.classList.add('is-hidden');
  }
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    aboutModal.classList.add('is-hidden');
  }
});
