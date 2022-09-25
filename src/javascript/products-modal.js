const openProductModalBtn = document.querySelector('.about-btn');
const closeProductModalBtn = document.querySelector('.products__button-close');
const productModal = document.querySelector('.products__backdrop');
const productModalWindow = document.querySelector('.about-modal');
const productModalForm = document.querySelector('.products__form-field');

openProductModalBtn.addEventListener('click', function () {
  productModal.classList.remove('is-hidden');
});

closeProductModalBtn.addEventListener('click', function () {
  productModal.classList.toggle('is-hidden');
  productModalForm.reset();
});

productModal.addEventListener('click', e => {
  const closeProductModal = e.composedPath().includes(productModalWindow);
  if (!closeProductModal) {
    productModal.classList.add('is-hidden');
    productModalForm.reset();
  }
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    productModal.classList.add('is-hidden');
    productModalForm.reset();
  }
});
