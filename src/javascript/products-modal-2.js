const openProductModalBtn2 = document.querySelector('.products-btn-2');
const closeProductModalBtn2 = document.querySelector('.products-close-btn-2');
const productModal2 = document.querySelector('.products-backdrop-2');
const productModalWindow2 = document.querySelector('.products-modal-2');
const productModalForm2 = document.querySelector('.products-form-2');
const animateElement2_1 = document.querySelector('.products__form-title-2');
const animateElement2_2 = document.querySelector('.products__form-wrap-img-2');
const animateElement2_3 = document.querySelector('.products__form-img-2');
const animateElement2_4 = document.querySelector(
  '.products__form-mcrlmnt-list-2'
);
const animateElement2_5 = document.querySelector(
  '.products__description-list-2'
);
const animateElement2_6 = document.querySelector(
  '.products__description-title-2'
);
const animateElement2_7 = document.querySelector('.products-form-2');
const animateElement2_8 = document.querySelector(
  '.products__form-mcrlmnt-text-2'
);
const animateElement2_9 = document.querySelector('.circle2_1');
const animateElement2_10 = document.querySelector('.circle2_2');
const animateElement2_11 = document.querySelector('.circle2_3');
const animateElement2_12 = document.querySelector('.circle2_4');

openProductModalBtn2.addEventListener('click', function () {
  productModal2.classList.remove('is-hidden');
  animateElement2_1.classList.add('animation-fade-in');
  animateElement2_2.classList.add('animation-fade-in');
  animateElement2_3.classList.add('animation-ping-pong');
  animateElement2_4.classList.add('animation-fade-in');
  animateElement2_5.classList.add('animation-fade-in');
  animateElement2_6.classList.add('animation-fade-in');
  animateElement2_7.classList.add('animation-fade-in');
  animateElement2_8.classList.add('animation-rotate');
  animateElement2_9.classList.add('animation-rotate');
  animateElement2_10.classList.add('animation-rotate');
  animateElement2_11.classList.add('animation-rotate');
  animateElement2_12.classList.add('animation-rotate');
});

closeProductModalBtn2.addEventListener('click', function () {
  productModal2.classList.toggle('is-hidden');
  animateElement2_1.classList.toggle('animation-fade-in');
  animateElement2_2.classList.toggle('animation-fade-in');
  animateElement2_3.classList.toggle('animation-ping-pong');
  animateElement2_4.classList.toggle('animation-fade-in');
  animateElement2_5.classList.toggle('animation-fade-in');
  animateElement2_6.classList.toggle('animation-fade-in');
  animateElement2_7.classList.remove('animation-fade-in');
  animateElement2_8.classList.toggle('animation-rotate');
  animateElement2_9.classList.remove('animation-rotate');
  animateElement2_10.classList.remove('animation-rotate');
  animateElement2_11.classList.remove('animation-rotate');
  animateElement2_12.classList.remove('animation-rotate');
  productModalForm2.reset();
});

productModal2.addEventListener('click', e => {
  const closeProductModal2 = e.composedPath().includes(productModalWindow2);
  if (!closeProductModal2) {
    productModal2.classList.add('is-hidden');
    animateElement2_1.classList.toggle('animation-fade-in');
    animateElement2_2.classList.toggle('animation-fade-in');
    animateElement2_3.classList.toggle('animation-ping-pong');
    animateElement2_4.classList.toggle('animation-fade-in');
    animateElement2_5.classList.toggle('animation-fade-in');
    animateElement2_6.classList.toggle('animation-fade-in');
    animateElement2_7.classList.remove('animation-fade-in');
    animateElement2_8.classList.toggle('animation-rotate');
    animateElement2_9.classList.remove('animation-rotate');
    animateElement2_10.classList.remove('animation-rotate');
    animateElement2_11.classList.remove('animation-rotate');
    animateElement2_12.classList.remove('animation-rotate');
    productModalForm2.reset();
  }
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    productModal2.classList.add('is-hidden');
    animateElement2_1.classList.toggle('animation-fade-in');
    animateElement2_2.classList.toggle('animation-fade-in');
    animateElement2_3.classList.toggle('animation-ping-pong');
    animateElement2_4.classList.toggle('animation-fade-in');
    animateElement2_5.classList.toggle('animation-fade-in');
    animateElement2_6.classList.toggle('animation-fade-in');
    animateElement2_7.classList.toggle('animation-fade-in');
    animateElement2_8.classList.toggle('animation-rotate');
    animateElement2_9.classList.remove('animation-rotate');
    animateElement2_10.classList.remove('animation-rotate');
    animateElement2_11.classList.remove('animation-rotate');
    animateElement2_12.classList.remove('animation-rotate');
    productModalForm2.reset();
  }
});
