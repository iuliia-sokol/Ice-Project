const swiper = new Swiper('.gallerySwiper', {
  effect: 'fade',
  speed: 1200,
  slidesPerView: 1,
  rewind: true,
  grabCursor: true,
  simulateTouch: true,
  initialSlide: 1,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  mousewheel: {
    sensitivity: 1,
    eventsTarget: '.swiper-slide',
  },
  autoplay: {
    // delay: 1500,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },
});

const swiper2 = new Swiper('.reviewsSwiper', {
  effect: 'coverflow',
  speed: 1500,
  spaceBetween: 113,
  slidesPerView: 1,
  // slidesPerGroup: 1,
  rewind: true,
  // watchOverflow: true,
  grabCursor: true,
  simulateTouch: true,
  initialSlide: 1,
  autoplay: {
    delay: 1300,
    stopOnLastSlide: false,
    // disableOnInteraction: false,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  mousewheel: {
    sensitivity: 1,
    eventsTarget: '.swiper-slide',
  },

  a11y: {
    enabled: true,
    prevSlideMessage: 'Previous slide',
    nextSlideMessage: 'Next slide',
    firstSlideMessage: 'This is the first slide',
    lastSlideMessage: 'This is the last slide',
  },
});

// СЛАЙДЕР ПОЧНЕ РУХАТИСЬ ПРИ НАВЕДЕННІ МИШІ

// let sliderBlock = document.querySelector('.reviewsSwiper');
// sliderBlock.addEventListener('mouseenter', function (e) {
//   swiper2.params.autoplay.disableOnInteraction = false;
//   swiper2.params.autoplay.delay = 1200;
//   swiper2.autoplay.start();
// });
// sliderBlock.addEventListener('mouseleave', function (e) {
//   swiper2.autoplay.stop();
// });

// СЛАЙДЕР ЗУПИНЯЄТЬСЯ ПРИ НАВЕДЕННІ МИШІ

let sliderBlock = document.querySelector('.reviewsSwiper');
sliderBlock.addEventListener('mouseleave', function (e) {
  swiper2.params.autoplay.disableOnInteraction = false;
  swiper2.params.autoplay.delay = 1300;
  swiper2.autoplay.start();
});
sliderBlock.addEventListener('mouseenter', function (e) {
  swiper2.autoplay.stop();
});
