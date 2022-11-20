const refs = {
  openProductModalBtn: document.querySelectorAll('.js-open-product-modal'),

  closeProductModalBtn: document.querySelectorAll('.js-close-product-modal'),

  productModal: document.querySelectorAll('.js-product-backdrop'),

  productModalWindow: document.querySelectorAll('.js-product-window'),

  productModalForm: document.querySelectorAll('.js-products-form'),

  productFormHeaders: document.querySelectorAll('.js-product-header'),

  productFormWrapImg: document.querySelectorAll('.js-form-wrap-img'),

  productFormImg: document.querySelectorAll('.js-product-form-img'),

  productFormList: document.querySelectorAll('.js-product-form-list'),

  productFormDescriptionList: document.querySelectorAll(
    '.js-product-description-list'
  ),

  productFormDescriptionHeader: document.querySelectorAll(
    '.js-product-description-title'
  ),

  productFormIndicatorText: document.querySelectorAll('.js-product-form-text'),
  productFormIndicatorCircles: document.querySelectorAll('.js-circle'),
};

const openBtns = [...refs.openProductModalBtn];
const backdrops = [...refs.productModal];
const closeBtns = [...refs.closeProductModalBtn];
const productWindows = [...refs.productModalWindow];
const productForms = [...refs.productModalForm];
const productTitles = [...refs.productFormHeaders];
const productWrapImgs = [...refs.productFormWrapImg];
const productImgs = [...refs.productFormImg];
const productFormList = [...refs.productFormList];
const productDescrList = [...refs.productFormDescriptionList];
const productDescrTitle = [...refs.productFormDescriptionHeader];
const productIndicatorText = [...refs.productFormIndicatorText];
const productIndicatorCircles = [...refs.productFormIndicatorCircles];

refs.openProductModalBtn.forEach(btn =>
  btn.addEventListener('click', onProductModalOpen)
);

function onProductModalOpen(event) {
  const targetBtn = event.currentTarget;
  const index = openBtns.indexOf(targetBtn);

  closeBtns[index].addEventListener('click', onProductModalClose);
  backdrops[index].addEventListener('click', onBackdropClick);
  document.addEventListener('keydown', onEscPress);

  backdrops[index].classList.remove('is-hidden');
  backdrops[index].classList.add('opened');
  productTitles[index].classList.add('animation-fade-in');
  productWrapImgs[index].classList.add('animation-fade-in');
  productImgs[index].classList.add('animation-ping-pong');
  productFormList[index].classList.add('animation-fade-in');
  productDescrList[index].classList.add('animation-fade-in');
  productDescrTitle[index].classList.add('animation-fade-in');
  productForms[index].classList.add('animation-fade-in');

  const filteredText = productIndicatorText.filter(
    el =>
      productIndicatorText.indexOf(el) >= index * 8 &&
      productIndicatorText.indexOf(el) < index * 8 + 8
  );
  filteredText.forEach(el => el.classList.add('animation-rotate'));

  const filteredCircles = productIndicatorCircles.filter(
    el =>
      productIndicatorCircles.indexOf(el) >= index * 4 &&
      productIndicatorCircles.indexOf(el) < index * 4 + 4
  );
  filteredCircles.forEach(el => el.classList.add('animation-rotate'));
}

function onProductModalClose(event) {
  const openedBackdrop = backdrops.find(el => el.classList.contains('opened'));
  const index = backdrops.indexOf(openedBackdrop);

  backdrops[index].classList.toggle('is-hidden');
  backdrops[index].classList.toggle('opened');
  productTitles[index].classList.toggle('animation-fade-in');
  productWrapImgs[index].classList.toggle('animation-fade-in');
  productImgs[index].classList.toggle('animation-ping-pong');
  productFormList[index].classList.toggle('animation-fade-in');

  productDescrList[index].classList.toggle('animation-fade-in');
  productDescrTitle[index].classList.toggle('animation-fade-in');
  productForms[index].classList.toggle('animation-fade-in');

  const filteredText = productIndicatorText.filter(
    el =>
      productIndicatorText.indexOf(el) >= index * 8 &&
      productIndicatorText.indexOf(el) < index * 8 + 8
  );
  filteredText.forEach(el => el.classList.remove('animation-rotate'));

  const filteredCircles = productIndicatorCircles.filter(
    el =>
      productIndicatorCircles.indexOf(el) >= index * 4 &&
      productIndicatorCircles.indexOf(el) < index * 4 + 4
  );
  filteredCircles.forEach(el => el.classList.remove('animation-rotate'));

  closeBtns[index].removeEventListener('click', onProductModalClose);
  backdrops[index].removeEventListener('click', onBackdropClick);
  document.removeEventListener('keydown', onEscPress);

  productForms[index].reset();
}

function onBackdropClick(e) {
  const closeProductModal = e.composedPath().includes(refs.productModalWindow);
  if (!closeProductModal) {
    onProductModalClose();
  }
  return;
}

function onEscPress(event) {
  if (event.key === 'Escape') {
    onProductModalClose();
    return;
  }
  return;
}
