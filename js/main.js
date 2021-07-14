const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
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
        var point = new YMaps.GeoPoint(7.890741, 98.294690);
        var placemark = new YMaps.Placemark(point);
        map.addOverlay(placemark);
    }