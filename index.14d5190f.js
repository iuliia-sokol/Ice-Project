!function(){var e=document.querySelector(".products-btn-1"),t=document.querySelector(".products-close-btn-1"),i=document.querySelector(".products-backdrop-1"),s=document.querySelector(".products-modal-1"),a=document.querySelector(".products-form-1"),n=document.querySelector(".products__form-title"),o=document.querySelector(".products__form-wrap-img"),c=document.querySelector(".products__form-img"),d=document.querySelector(".products__form-mcrlmnt-list"),r=document.querySelector(".products__description-list"),l=document.querySelector(".products__description-title"),m=document.querySelector(".products__form-field"),u=document.querySelector(".products__form-mcrlmnt-text"),L=document.querySelector(".circle-1"),g=document.querySelector(".circle-2"),f=document.querySelector(".circle-3"),p=document.querySelector(".circle-4");e.addEventListener("click",(function(){i.classList.remove("is-hidden"),n.classList.add("animation-fade-in"),o.classList.add("animation-fade-in"),c.classList.add("animation-ping-pong"),d.classList.add("animation-fade-in"),r.classList.add("animation-fade-in"),l.classList.add("animation-fade-in"),m.classList.add("animation-fade-in"),u.classList.add("animation-rotate"),L.classList.add("animation-rotate"),g.classList.add("animation-rotate"),f.classList.add("animation-rotate"),p.classList.add("animation-rotate")})),t.addEventListener("click",(function(){i.classList.toggle("is-hidden"),n.classList.toggle("animation-fade-in"),o.classList.toggle("animation-fade-in"),c.classList.toggle("animation-ping-pong"),d.classList.toggle("animation-fade-in"),r.classList.toggle("animation-fade-in"),l.classList.toggle("animation-fade-in"),m.classList.toggle("animation-fade-in"),u.classList.toggle("animation-rotate"),L.classList.remove("animation-rotate"),g.classList.remove("animation-rotate"),f.classList.remove("animation-rotate"),p.classList.remove("animation-rotate"),a.reset()})),i.addEventListener("click",(function(e){e.composedPath().includes(s)||(i.classList.add("is-hidden"),n.classList.toggle("animation-fade-in"),o.classList.toggle("animation-fade-in"),c.classList.toggle("animation-ping-pong"),d.classList.toggle("animation-fade-in"),r.classList.toggle("animation-fade-in"),l.classList.toggle("animation-fade-in"),m.classList.toggle("animation-fade-in"),u.classList.toggle("animation-rotate"),L.classList.remove("animation-rotate"),g.classList.remove("animation-rotate"),f.classList.remove("animation-rotate"),p.classList.remove("animation-rotate"),a.reset())})),document.addEventListener("keydown",(function(e){"Escape"===e.key&&(i.classList.add("is-hidden"),n.classList.toggle("animation-fade-in"),o.classList.toggle("animation-fade-in"),c.classList.toggle("animation-ping-pong"),d.classList.toggle("animation-fade-in"),r.classList.toggle("animation-fade-in"),l.classList.toggle("animation-fade-in"),m.classList.toggle("animation-fade-in"),u.classList.toggle("animation-rotate"),L.classList.remove("animation-rotate"),g.classList.remove("animation-rotate"),f.classList.remove("animation-rotate"),p.classList.remove("animation-rotate"),a.reset())}));var y=document.querySelector(".about-btn"),v=document.querySelector(".about-close-btn"),S=document.querySelector(".about-backdrop"),h=document.querySelector(".about-modal");y.addEventListener("click",(function(){S.classList.remove("is-hidden")})),v.addEventListener("click",(function(){S.classList.toggle("is-hidden")})),S.addEventListener("click",(function(e){e.composedPath().includes(h)||S.classList.add("is-hidden")})),document.addEventListener("keydown",(function(e){"Escape"===e.key&&S.classList.add("is-hidden")}));new Swiper(".gallerySwiper",{effect:"fade",speed:1200,slidesPerView:1,rewind:!0,grabCursor:!0,simulateTouch:!0,initialSlide:1,keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{sensitivity:1,eventsTarget:".swiper-slide"},autoplay:{stopOnLastSlide:!1,disableOnInteraction:!1}});var q=new Swiper(".reviewsSwiper",{effect:"coverflow",speed:1500,spaceBetween:113,slidesPerView:1,rewind:!0,grabCursor:!0,simulateTouch:!0,initialSlide:1,autoplay:{delay:1300,stopOnLastSlide:!1},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{sensitivity:1,eventsTarget:".swiper-slide"},a11y:{enabled:!0,prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide"}}),w=document.querySelector(".reviewsSwiper");w.addEventListener("mouseleave",(function(e){q.params.autoplay.disableOnInteraction=!1,q.params.autoplay.delay=1300,q.autoplay.start()})),w.addEventListener("mouseenter",(function(e){q.autoplay.stop()}));var b=document.querySelector(".footer-franchisee-open-btn"),k=document.querySelector(".footer-franchisee__close-btn"),E=document.querySelector(".footer-franchisee-overlay"),_=document.querySelector(".footer-franchisee"),P=document.querySelector(".franchisee-form");b.addEventListener("click",(function(){E.classList.remove("is-hidden")})),k.addEventListener("click",(function(){E.classList.toggle("is-hidden"),P.reset()})),E.addEventListener("click",(function(e){e.composedPath().includes(_)||(E.classList.add("is-hidden"),P.reset())})),document.addEventListener("keydown",(function(e){"Escape"===e.key&&(E.classList.add("is-hidden"),P.reset())}));var T=document.querySelector(".footer-map-open-btn"),x=document.querySelector(".footer-map__close-btn"),I=document.querySelector(".footer-map-overlay"),M=document.querySelector(".footer-map");T.addEventListener("click",(function(){I.classList.remove("is-hidden")})),x.addEventListener("click",(function(){I.classList.toggle("is-hidden")})),I.addEventListener("click",(function(e){e.composedPath().includes(M)||I.classList.add("is-hidden")})),document.addEventListener("keydown",(function(e){"Escape"===e.key&&I.classList.add("is-hidden")}))}();
//# sourceMappingURL=index.14d5190f.js.map
