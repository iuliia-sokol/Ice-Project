(() => {
  const refs = {
    openHeaderMobileBtn: document.querySelector('[data-header-mobile-open]'),
    openHeaderModalBtn: document.querySelector('[data-header-modal-open]'),
    closeHeaderModalBtn: document.querySelector('[data-header-modal-close]'),
    headerModal: document.querySelector('[data-header-modal]'),
    headerMenu: document.querySelector('.header-menu'),
    headerMenuButton: document.querySelector('.header-menu__buy-btn'),
  };

  refs.openHeaderMobileBtn.addEventListener('click', toggleHeaderModal);
  refs.openHeaderModalBtn.addEventListener('click', toggleHeaderModal);
  refs.closeHeaderModalBtn.addEventListener('click', toggleHeaderModal);
  refs.headerMenuButton.addEventListener('click', removeHeaderMenu);

  function toggleHeaderModal() {
    document.body.classList.toggle('modal-header-open');
    refs.headerModal.classList.toggle('is-hidden');
  }

  function removeHeaderMenu() {
    refs.headerMenu.classList.add('is-hidden');
    document.body.classList.remove('no-scroll');
  }
})();
