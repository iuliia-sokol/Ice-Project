const openProductModalBtn3 = document.querySelector('.products-btn-3');
const closeProductModalBtn3 = document.querySelector('.products-close-btn-3');
const productModal3 = document.querySelector('.products-backdrop-3');
const productModalWindow3 = document.querySelector('.products-modal-3');
const productModalForm3 = document.querySelector('.products-form-3');
const animateElement3_1 = document.querySelector('.products__form-title-3');
const animateElement3_2 = document.querySelector('.products__form-wrap-img-3');
const animateElement3_3 = document.querySelector('.products__form-img-3');
const animateElement3_4 = document.querySelector(
  '.products__form-mcrlmnt-list-3'
);
const animateElement3_5 = document.querySelector(
  '.products__description-list-3'
);
const animateElement3_6 = document.querySelector(
  '.products__description-title-3'
);
const animateElement3_7 = document.querySelector('.products__form-field-3');
const animateElement3_8 = document.querySelector(
  '.products__form-mcrlmnt-text-3'
);
const animateElement3_9 = document.querySelector('.circle3_1');
const animateElement3_10 = document.querySelector('.circle3_2');
const animateElement3_11 = document.querySelector('.circle3_3');
const animateElement3_12 = document.querySelector('.circle3_4');

openProductModalBtn3.addEventListener('click', function () {
  productModal3.classList.remove('is-hidden');
  animateElement3_1.classList.add('animation-fade-in');
  animateElement3_2.classList.add('animation-fade-in');
  animateElement3_3.classList.add('animation-ping-pong');
  animateElement3_4.classList.add('animation-fade-in');
  animateElement3_5.classList.add('animation-fade-in');
  animateElement3_6.classList.add('animation-fade-in');
  animateElement3_7.classList.add('animation-fade-in');
  animateElement3_8.classList.add('animation-rotate');
  animateElement3_9.classList.add('animation-rotate');
  animateElement3_10.classList.add('animation-rotate');
  animateElement3_11.classList.add('animation-rotate');
  animateElement3_12.classList.add('animation-rotate');
});

closeProductModalBtn3.addEventListener('click', function () {
  productModal3.classList.toggle('is-hidden');
  animateElement3_1.classList.toggle('animation-fade-in');
  animateElement3_2.classList.toggle('animation-fade-in');
  animateElement3_3.classList.toggle('animation-ping-pong');
  animateElement3_4.classList.toggle('animation-fade-in');
  animateElement3_5.classList.toggle('animation-fade-in');
  animateElement3_6.classList.toggle('animation-fade-in');
  animateElement3_7.classList.toggle('animation-fade-in');
  animateElement3_8.classList.toggle('animation-rotate');
  animateElement3_9.classList.remove('animation-rotate');
  animateElement3_10.classList.remove('animation-rotate');
  animateElement3_11.classList.remove('animation-rotate');
  animateElement3_12.classList.remove('animation-rotate');
  productModalForm3.reset();
});

productModal3.addEventListener('click', e => {
  const closeProductModal3 = e.composedPath().includes(productModalWindow3);
  if (!closeProductModal3) {
    productModal3.classList.add('is-hidden');
    animateElement3_1.classList.toggle('animation-fade-in');
    animateElement3_2.classList.toggle('animation-fade-in');
    animateElement3_3.classList.toggle('animation-ping-pong');
    animateElement3_4.classList.toggle('animation-fade-in');
    animateElement3_5.classList.toggle('animation-fade-in');
    animateElement3_6.classList.toggle('animation-fade-in');
    animateElement3_7.classList.toggle('animation-fade-in');
    animateElement3_8.classList.toggle('animation-rotate');
    animateElement3_9.classList.remove('animation-rotate');
    animateElement3_10.classList.remove('animation-rotate');
    animateElement3_11.classList.remove('animation-rotate');
    animateElement3_12.classList.remove('animation-rotate');
    productModalForm3.reset();
  }
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    productModal3.classList.add('is-hidden');
    animateElement3_1.classList.toggle('animation-fade-in');
    animateElement3_2.classList.toggle('animation-fade-in');
    animateElement3_3.classList.toggle('animation-ping-pong');
    animateElement3_4.classList.toggle('animation-fade-in');
    animateElement3_5.classList.toggle('animation-fade-in');
    animateElement3_6.classList.toggle('animation-fade-in');
    animateElement3_7.classList.toggle('animation-fade-in');
    animateElement3_8.classList.toggle('animation-rotate');
    animateElement3_9.classList.remove('animation-rotate');
    animateElement3_10.classList.remove('animation-rotate');
    animateElement3_11.classList.remove('animation-rotate');
    animateElement3_12.classList.remove('animation-rotate');
    productModalForm3.reset();
  }
});
