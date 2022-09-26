(() => {
  const refs = {
    openHeaderMobileBtn: document.querySelector("[data-header-mobile-open]"),
    openHeaderModalBtn: document.querySelector("[data-header-modal-open]"),
    closeHeaderModalBtn: document.querySelector("[data-header-modal-close]"),
    headerModal: document.querySelector("[data-header-modal]"),
  };

  refs.openHeaderMobileBtn.addEventListener("click", toggleHeaderModal);
  refs.openHeaderModalBtn.addEventListener("click", toggleHeaderModal);
  refs.closeHeaderModalBtn.addEventListener("click", toggleHeaderModal);

  function toggleHeaderModal() {
    document.body.classList.toggle("modal-header-open");
    refs.headerModal.classList.toggle("is-hidden");
  }
})();
