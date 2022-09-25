const openAboutModalBtn = document.querySelector('.about-btn');
const closeAboutModalBtn = document.querySelector('.about-close-btn');
const aboutModal = document.querySelector('.about-backdrop');
const aboutModalWindow = document.querySelector('.about-modal');
// const modalForm = document.querySelector('.call-form');

openAboutModalBtn.addEventListener('click', function () {
  aboutModal.classList.remove('is-hidden');
});

closeAboutModalBtn.addEventListener('click', function () {
  aboutModal.classList.toggle('is-hidden');
  // modalForm.reset();
});

aboutModal.addEventListener('click', e => {
  const closeAboutModal = e.composedPath().includes(aboutModalWindow);
  if (!closeAboutModal) {
    aboutModal.classList.add('is-hidden');
    // modalForm.reset();
  }
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    aboutModal.classList.add('is-hidden');
    // modalForm.reset();
  }
});

// const form = document.getElementById("myForm");

// form.addEventListener("submit", (e) => {
//   // действия с данными
//   e.preventDefault();
//   e.target.reset(); // очищаем форму
// });
