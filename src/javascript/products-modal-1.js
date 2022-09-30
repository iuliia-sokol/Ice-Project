const openProductModalBtn = document.querySelector('.products-btn-1');
const closeProductModalBtn = document.querySelector('.products-close-btn-1');
const productModal = document.querySelector('.products-backdrop-1');
const productModalWindow = document.querySelector('.products-modal-1');
const productModalForm = document.querySelector('.products-form-1');
const animateElement1 = document.querySelector('.products__form-title-1');
const animateElement2 = document.querySelector('.products__form-wrap-img-1');
const animateElement3 = document.querySelector('.products__form-img-1');
const animateElement4 = document.querySelector(
  '.products__form-mcrlmnt-list-1'
);
const animateElement5 = document.querySelector('.products__description-list-1');
const animateElement6 = document.querySelector(
  '.products__description-title-1'
);
const animateElement7 = document.querySelector('.products__form-field-1');
const animateElement8 = document.querySelector(
  '.products__form-mcrlmnt-text-1'
);
const animateElement9 = document.querySelector('.circle1_1');
const animateElement10 = document.querySelector('.circle1_2');
const animateElement11 = document.querySelector('.circle1_3');
const animateElement12 = document.querySelector('.circle1_4');

openProductModalBtn.addEventListener('click', function () {
  productModal.classList.remove('is-hidden');
  animateElement1.classList.add('animation-fade-in');
  animateElement2.classList.add('animation-fade-in');
  animateElement3.classList.add('animation-ping-pong');
  animateElement4.classList.add('animation-fade-in');
  animateElement5.classList.add('animation-fade-in');
  animateElement6.classList.add('animation-fade-in');
  animateElement7.classList.add('animation-fade-in');
  animateElement8.classList.add('animation-rotate');
  animateElement9.classList.add('animation-rotate');
  animateElement10.classList.add('animation-rotate');
  animateElement11.classList.add('animation-rotate');
  animateElement12.classList.add('animation-rotate');
});

closeProductModalBtn.addEventListener('click', function () {
  productModal.classList.toggle('is-hidden');
  animateElement1.classList.toggle('animation-fade-in');
  animateElement2.classList.toggle('animation-fade-in');
  animateElement3.classList.toggle('animation-ping-pong');
  animateElement4.classList.toggle('animation-fade-in');
  animateElement5.classList.toggle('animation-fade-in');
  animateElement6.classList.toggle('animation-fade-in');
  animateElement7.classList.toggle('animation-fade-in');
  animateElement8.classList.toggle('animation-rotate');
  animateElement9.classList.remove('animation-rotate');
  animateElement10.classList.remove('animation-rotate');
  animateElement11.classList.remove('animation-rotate');
  animateElement12.classList.remove('animation-rotate');
  productModalForm.reset();
});

productModal.addEventListener('click', e => {
  const closeProductModal = e.composedPath().includes(productModalWindow);
  if (!closeProductModal) {
    productModal.classList.add('is-hidden');
    animateElement1.classList.toggle('animation-fade-in');
    animateElement2.classList.toggle('animation-fade-in');
    animateElement3.classList.toggle('animation-ping-pong');
    animateElement4.classList.toggle('animation-fade-in');
    animateElement5.classList.toggle('animation-fade-in');
    animateElement6.classList.toggle('animation-fade-in');
    animateElement7.classList.toggle('animation-fade-in');
    animateElement8.classList.toggle('animation-rotate');
    animateElement9.classList.remove('animation-rotate');
    animateElement10.classList.remove('animation-rotate');
    animateElement11.classList.remove('animation-rotate');
    animateElement12.classList.remove('animation-rotate');
    productModalForm.reset();
  }
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    productModal.classList.add('is-hidden');
    animateElement1.classList.toggle('animation-fade-in');
    animateElement2.classList.toggle('animation-fade-in');
    animateElement3.classList.toggle('animation-ping-pong');
    animateElement4.classList.toggle('animation-fade-in');
    animateElement5.classList.toggle('animation-fade-in');
    animateElement6.classList.toggle('animation-fade-in');
    animateElement7.classList.toggle('animation-fade-in');
    animateElement8.classList.toggle('animation-rotate');
    animateElement9.classList.remove('animation-rotate');
    animateElement10.classList.remove('animation-rotate');
    animateElement11.classList.remove('animation-rotate');
    animateElement12.classList.remove('animation-rotate');
    productModalForm.reset();
  }
});
