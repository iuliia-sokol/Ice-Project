!function(){!function(){var e={openHeaderMobileBtn:document.querySelector("[data-header-mobile-open]"),openHeaderModalBtn:document.querySelector("[data-header-modal-open]"),closeHeaderModalBtn:document.querySelector("[data-header-modal-close]"),headerModal:document.querySelector("[data-header-modal]")};function t(){document.body.classList.toggle("modal-header-open"),e.headerModal.classList.toggle("is-hidden")}e.openHeaderMobileBtn.addEventListener("click",t),e.openHeaderModalBtn.addEventListener("click",t),e.closeHeaderModalBtn.addEventListener("click",t)}(),function(){var e={openHeaderMenuBtn:document.querySelector(".header-menu__toggle-open"),closeHeaderMenuBtn:document.querySelector(".header-menu__toggle-close"),headerMenu:document.querySelector(".header-menu"),headerMenuList:document.querySelector(".header-menu__nav-list")};function t(){document.body.classList.toggle("no-scroll"),e.headerMenu.classList.toggle("is-hidden")}e.openHeaderMenuBtn.addEventListener("click",t),e.closeHeaderMenuBtn.addEventListener("click",t),e.headerMenuList.addEventListener("click",(function(){e.headerMenu.classList.add("is-hidden"),document.body.classList.remove("no-scroll")}))}();var e=document.querySelector(".products-btn-1"),t=document.querySelector(".products-close-btn-1"),i=document.querySelector(".products-backdrop-1"),a=document.querySelector(".products-modal-1"),n=document.querySelector(".products-form-1"),s=document.querySelector(".products__form-title"),o=document.querySelector(".products__form-wrap-img"),d=document.querySelector(".products__form-img"),c=document.querySelector(".products__form-mcrlmnt-list"),r=document.querySelector(".products__description-list"),l=document.querySelector(".products__description-title"),u=document.querySelector(".products__form-field"),m=document.querySelector(".products__form-mcrlmnt-text"),L=document.querySelector(".circle-1"),g=document.querySelector(".circle-2"),p=document.querySelector(".circle-3"),f=document.querySelector(".circle-4");e.addEventListener("click",(function(){i.classList.remove("is-hidden"),s.classList.add("animation-fade-in"),o.classList.add("animation-fade-in"),d.classList.add("animation-ping-pong"),c.classList.add("animation-fade-in"),r.classList.add("animation-fade-in"),l.classList.add("animation-fade-in"),u.classList.add("animation-fade-in"),m.classList.add("animation-rotate"),L.classList.add("animation-rotate"),g.classList.add("animation-rotate"),p.classList.add("animation-rotate"),f.classList.add("animation-rotate")})),t.addEventListener("click",(function(){i.classList.toggle("is-hidden"),s.classList.toggle("animation-fade-in"),o.classList.toggle("animation-fade-in"),d.classList.toggle("animation-ping-pong"),c.classList.toggle("animation-fade-in"),r.classList.toggle("animation-fade-in"),l.classList.toggle("animation-fade-in"),u.classList.toggle("animation-fade-in"),m.classList.toggle("animation-rotate"),L.classList.remove("animation-rotate"),g.classList.remove("animation-rotate"),p.classList.remove("animation-rotate"),f.classList.remove("animation-rotate"),n.reset()})),i.addEventListener("click",(function(e){e.composedPath().includes(a)||(i.classList.add("is-hidden"),s.classList.toggle("animation-fade-in"),o.classList.toggle("animation-fade-in"),d.classList.toggle("animation-ping-pong"),c.classList.toggle("animation-fade-in"),r.classList.toggle("animation-fade-in"),l.classList.toggle("animation-fade-in"),u.classList.toggle("animation-fade-in"),m.classList.toggle("animation-rotate"),L.classList.remove("animation-rotate"),g.classList.remove("animation-rotate"),p.classList.remove("animation-rotate"),f.classList.remove("animation-rotate"),n.reset())})),document.addEventListener("keydown",(function(e){"Escape"===e.key&&(i.classList.add("is-hidden"),s.classList.toggle("animation-fade-in"),o.classList.toggle("animation-fade-in"),d.classList.toggle("animation-ping-pong"),c.classList.toggle("animation-fade-in"),r.classList.toggle("animation-fade-in"),l.classList.toggle("animation-fade-in"),u.classList.toggle("animation-fade-in"),m.classList.toggle("animation-rotate"),L.classList.remove("animation-rotate"),g.classList.remove("animation-rotate"),p.classList.remove("animation-rotate"),f.classList.remove("animation-rotate"),n.reset())}));var y=document.querySelector(".about-btn"),v=document.querySelector(".about-close-btn"),h=document.querySelector(".about-backdrop"),S=document.querySelector(".about-modal");y.addEventListener("click",(function(){h.classList.remove("is-hidden")})),v.addEventListener("click",(function(){h.classList.toggle("is-hidden")})),h.addEventListener("click",(function(e){e.composedPath().includes(S)||h.classList.add("is-hidden")})),document.addEventListener("keydown",(function(e){"Escape"===e.key&&h.classList.add("is-hidden")}));new Swiper(".gallerySwiper",{effect:"fade",speed:1200,slidesPerView:1,rewind:!0,grabCursor:!0,simulateTouch:!0,initialSlide:1,keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{sensitivity:1,eventsTarget:".swiper-slide"},autoplay:{stopOnLastSlide:!1,disableOnInteraction:!1}});var q=new Swiper(".reviewsSwiper",{effect:"coverflow",speed:1500,spaceBetween:113,slidesPerView:1,rewind:!0,grabCursor:!0,simulateTouch:!0,initialSlide:1,autoplay:{delay:1300,stopOnLastSlide:!1},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{sensitivity:1,eventsTarget:".swiper-slide"},a11y:{enabled:!0,prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide"}}),b=document.querySelector(".reviewsSwiper");b.addEventListener("mouseleave",(function(e){q.params.autoplay.disableOnInteraction=!1,q.params.autoplay.delay=1300,q.autoplay.start()})),b.addEventListener("mouseenter",(function(e){q.autoplay.stop()}));var k=document.querySelector(".footer-franchisee-open-btn"),E=document.querySelector(".footer-franchisee__close-btn"),w=document.querySelector(".footer-franchisee-overlay"),_=document.querySelector(".footer-franchisee"),M=document.querySelector(".franchisee-form");k.addEventListener("click",(function(){w.classList.remove("is-hidden")})),E.addEventListener("click",(function(){w.classList.toggle("is-hidden"),M.reset()})),w.addEventListener("click",(function(e){e.composedPath().includes(_)||(w.classList.add("is-hidden"),M.reset())})),document.addEventListener("keydown",(function(e){"Escape"===e.key&&(w.classList.add("is-hidden"),M.reset())}));var B=document.querySelector(".footer-map-open-btn"),H=document.querySelector(".footer-map__close-btn"),P=document.querySelector(".footer-map-overlay"),T=document.querySelector(".footer-map");B.addEventListener("click",(function(){P.classList.remove("is-hidden")})),H.addEventListener("click",(function(){P.classList.toggle("is-hidden")})),P.addEventListener("click",(function(e){e.composedPath().includes(T)||P.classList.add("is-hidden")})),document.addEventListener("keydown",(function(e){"Escape"===e.key&&P.classList.add("is-hidden")}))}();
//# sourceMappingURL=index.b59d878e.js.map