const openMapModalBtn = document.querySelector('.footer-map-open-btn');
const closeMapModalBtn = document.querySelector('.footer-map__close-btn');
const mapModal = document.querySelector('.footer-map-overlay');
const mapModalWindow = document.querySelector('.footer-map');

openMapModalBtn.addEventListener('click', function () {
  mapModal.classList.remove('is-hidden');
});

closeMapModalBtn.addEventListener('click', function () {
  mapModal.classList.toggle('is-hidden');
});

mapModal.addEventListener('click', e => {
  const closeMapModal = e.composedPath().includes(mapModalWindow);
  if (!closeMapModal) {
    mapModal.classList.add('is-hidden');
  }
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    mapModal.classList.add('is-hidden');
  }
});
