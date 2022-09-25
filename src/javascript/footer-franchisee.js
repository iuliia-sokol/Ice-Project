const openFranchiseeModalBtn = document.querySelector(
  '.footer-franchisee-open-btn'
);
const closeFranchiseeModalBtn = document.querySelector(
  '.footer-franchisee__close-btn'
);
const franchiseeModal = document.querySelector('.footer-franchisee-overlay');
const franchiseeModalWindow = document.querySelector('.footer-franchisee');
const franchiseeModalForm = document.querySelector('.franchisee-form');

openFranchiseeModalBtn.addEventListener('click', function () {
  franchiseeModal.classList.remove('is-hidden');
});

closeFranchiseeModalBtn.addEventListener('click', function () {
  franchiseeModal.classList.toggle('is-hidden');
  franchiseeModalForm.reset();
});

franchiseeModal.addEventListener('click', e => {
  const closeFranchiseeModal = e.composedPath().includes(franchiseeModalWindow);
  if (!closeFranchiseeModal) {
    franchiseeModal.classList.add('is-hidden');
    franchiseeModalForm.reset();
  }
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    franchiseeModal.classList.add('is-hidden');
    franchiseeModalForm.reset();
  }
});
