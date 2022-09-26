(() => {
  const refs = {
    openHeaderMenuBtn: document.querySelector(".header-menu__toggle-open"),
    closeHeaderMenuBtn: document.querySelector(".header-menu__toggle-close"),
    headerMenu: document.querySelector(".header-menu"),
    headerMenuList: document.querySelector(".header-menu__nav-list"),
  };

  refs.openHeaderMenuBtn.addEventListener("click", toggleHeaderMenu);
  refs.closeHeaderMenuBtn.addEventListener("click", toggleHeaderMenu);
  refs.headerMenuList.addEventListener("click", removeHeaderMenu);

  function toggleHeaderMenu() {
    document.body.classList.toggle("no-scroll");
    refs.headerMenu.classList.toggle("is-hidden");
  }

  function removeHeaderMenu() {
    refs.headerMenu.classList.add("is-hidden");
    document.body.classList.remove("no-scroll");
  }
})();
