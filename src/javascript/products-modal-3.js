const openProductModalBtn3 = document.querySelector('.products-btn-3');
const closeProductModalBtn3 = document.querySelector('.products-close-btn-3');
const productModal3 = document.querySelector('.products-backdrop-3');
const productModalWindow3 = document.querySelector('.products-modal-3');
const productModalForm3 = document.querySelector('.products-form-3');
const animateElement1 = document.querySelector('.products__form-title');
const animateElement2 = document.querySelector('.products__form-wrap-img');
const animateElement3 = document.querySelector('.products__form-img');
const animateElement4 = document.querySelector('.products__form-mcrlmnt-list');
const animateElement5 = document.querySelector('.products__description-list');
const animateElement6 = document.querySelector('.products__description-title');
const animateElement7 = document.querySelector('.products__form-field');
const animateElement8 = document.querySelector('.products__form-mcrlmnt-text');
const animateElement9 = document.querySelector('.circle-1');
const animateElement10 = document.querySelector('.circle-2');
const animateElement11 = document.querySelector('.circle-3');
const animateElement12 = document.querySelector('.circle-4');

openProductModalBtn3.addEventListener('click', function () {
  productModal3.classList.remove('is-hidden');
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

closeProductModalBtn3.addEventListener('click', function () {
  productModal3.classList.toggle('is-hidden');
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
  productModalForm3.reset();
});

productModal3.addEventListener('click', e => {
  const closeProductModal3 = e.composedPath().includes(productModalWindow3);
  if (!closeProductModal3) {
    productModal3.classList.add('is-hidden');
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
    productModalForm3.reset();
  }
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    productModal3.classList.add('is-hidden');
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
    productModalForm3.reset();
  }
});
