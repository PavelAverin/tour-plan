$(document).ready(function () {
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
  
  $('.parallax-window').parallax({
    imageSrc: './img/newsletter-bg.jpg',
    speed: 0.6,
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
  

  // скрипт разворачивания мобильного меню и смены кнопки на крестик
  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener('click', function () {
    document.querySelector(".navbar-bottom").classList.toggle("navbar-bottom--visible");
    document.querySelector(".navbar-top__menu-button").classList.toggle("menu__button--hidden");
    document.querySelector(".close").classList.toggle("close--visible");
  });
  

  // скрипт сворачивания мобильного меню и смены кнопки на бургер
  var menuClose = document.querySelector(".close");
  menuClose.addEventListener('click', function () {
    document.querySelector(".close").classList.toggle("close--visible");
    document.querySelector(".navbar-top__menu-button").classList.toggle("menu__button--hidden");
    document.querySelector(".navbar-bottom").classList.toggle("navbar-bottom--visible");
  });


  // скрипт для модального окна
  var modalButton = $('[data-toggle=modal]');
  var closeModalButton = $(".modal__close");


  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);
  

  // функция для открытия модального окна
  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");

    modalOverlay.addClass('modal__overlay--visible');
    modalDialog.addClass('modal__dialog--visible');
  };

  // функция для закрытия модального окна
  function closeModal(event) {
    event.preventDefault();

    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");

    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
  };

  // функция для закрытия модального окна при нажатии Escape
  $(document).keyup(function(e) {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    if (e.key === "Escape") {      
      modalOverlay.removeClass('modal__overlay--visible');
      modalDialog.removeClass('modal__dialog--visible');
    };
  });

  // функция для закрытия модального окна при нажатии на overlay
  $(document).mouseup(function (e) {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    if (!modalDialog.is(e.target) && modalDialog.has(e.target).length === 0) {
      modalOverlay.removeClass('modal__overlay--visible');
      modalDialog.removeClass('modal__dialog--visible');
    };
  });
});