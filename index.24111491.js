!function(){var e=document.querySelector(".products-btn-1"),t=document.querySelector(".products-close-btn-1"),s=document.querySelector(".products-backdrop-1"),i=document.querySelector(".products-modal-1"),n=document.querySelector(".products-form-1");e.addEventListener("click",(function(){s.classList.remove("is-hidden")})),t.addEventListener("click",(function(){s.classList.toggle("is-hidden"),n.reset()})),s.addEventListener("click",(function(e){e.composedPath().includes(i)||(s.classList.add("is-hidden"),n.reset())})),document.addEventListener("keydown",(function(e){"Escape"===e.key&&(s.classList.add("is-hidden"),n.reset())}));var d=document.querySelector(".about-btn"),a=document.querySelector(".about-close-btn"),o=document.querySelector(".about-backdrop"),r=document.querySelector(".about-modal");d.addEventListener("click",(function(){o.classList.remove("is-hidden")})),a.addEventListener("click",(function(){o.classList.toggle("is-hidden")})),o.addEventListener("click",(function(e){e.composedPath().includes(r)||o.classList.add("is-hidden")})),document.addEventListener("keydown",(function(e){"Escape"===e.key&&o.classList.add("is-hidden")}));new Swiper(".gallerySwiper",{effect:"fade",speed:1200,slidesPerView:1,rewind:!0,grabCursor:!0,simulateTouch:!0,initialSlide:1,keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{sensitivity:1,eventsTarget:".swiper-slide"},autoplay:{stopOnLastSlide:!1,disableOnInteraction:!1}});var l=new Swiper(".reviewsSwiper",{effect:"coverflow",speed:1500,spaceBetween:113,slidesPerView:1,rewind:!0,grabCursor:!0,simulateTouch:!0,initialSlide:1,autoplay:{delay:1300,stopOnLastSlide:!1},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{sensitivity:1,eventsTarget:".swiper-slide"},a11y:{enabled:!0,prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide"}}),c=document.querySelector(".reviewsSwiper");c.addEventListener("mouseleave",(function(e){l.params.autoplay.disableOnInteraction=!1,l.params.autoplay.delay=1300,l.autoplay.start()})),c.addEventListener("mouseenter",(function(e){l.autoplay.stop()}))}();
//# sourceMappingURL=index.24111491.js.map
