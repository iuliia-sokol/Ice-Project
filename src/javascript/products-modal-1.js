const openProductModalBtn = document.querySelector('.products-btn-1');
const closeProductModalBtn = document.querySelector('.products-close-btn-1');
const productModal = document.querySelector('.products-backdrop-1');
const productModalWindow = document.querySelector('.products-modal-1');
const productModalForm = document.querySelector('.products-form-1');

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
