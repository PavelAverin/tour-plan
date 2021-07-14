const hotelSLider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },

  // Keyboard navigation
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

const reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },

  // Keyboard navigation
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

// Подключение Яндекс API   
ymaps.ready(init);
    function init(){
        var myMap = new ymaps.Map("map", {
            center: [7.890741, 98.294690],
            zoom: 17
        });

      var myPlacemark = new ymaps.Placemark([7.890741, 98.294690]);

      myMap.geoObjects.add(myPlacemark);
    };


