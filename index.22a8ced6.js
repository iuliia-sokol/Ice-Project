const e=document.querySelector(".about-btn"),t=document.querySelector(".about-close-btn"),i=document.querySelector(".about-backdrop"),s=document.querySelector(".about-modal");e.addEventListener("click",(function(){i.classList.remove("is-hidden")})),t.addEventListener("click",(function(){i.classList.toggle("is-hidden")})),i.addEventListener("click",(e=>{e.composedPath().includes(s)||i.classList.add("is-hidden")})),document.addEventListener("keydown",(function(e){"Escape"===e.key&&i.classList.add("is-hidden")}));new Swiper(".gallerySwiper",{effect:"fade",speed:1200,slidesPerView:1,rewind:!0,grabCursor:!0,simulateTouch:!0,initialSlide:1,keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{sensitivity:1,eventsTarget:".swiper-slide"},autoplay:{stopOnLastSlide:!1,disableOnInteraction:!1}});const a=new Swiper(".reviewsSwiper",{effect:"coverflow",speed:1500,spaceBetween:113,slidesPerView:1,rewind:!0,grabCursor:!0,simulateTouch:!0,initialSlide:1,autoplay:{delay:1300,stopOnLastSlide:!1},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{sensitivity:1,eventsTarget:".swiper-slide"},a11y:{enabled:!0,prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide"}});let n=document.querySelector(".reviewsSwiper");n.addEventListener("mouseleave",(function(e){a.params.autoplay.disableOnInteraction=!1,a.params.autoplay.delay=1300,a.autoplay.start()})),n.addEventListener("mouseenter",(function(e){a.autoplay.stop()}));
//# sourceMappingURL=index.22a8ced6.js.map
