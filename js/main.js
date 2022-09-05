$(document).ready(function() {


  // Зацикливание галлереи fancybox

  $("[data-fancybox]").fancybox({
    loop: true
  });


  // Плавный скролл
  
  if ($(window).width() > 992) {
    $('.button__item').on('click', function (e) {
      e.preventDefault();
      smoothScroll('product-card', 150);
    });
  } else {
    $('.button__item').on('click', function (e) {
      e.preventDefault();
      smoothScroll('product-card__form', ($(window).height() - 370));
    });
  }

  function smoothScroll(classOfName, topSmooth) {
    $('html, body').animate({
      scrollTop: $("." + classOfName).offset().top - topSmooth
    }, 1500);
  }


  // Добавление нуля, если число < 10

  function addZero(num) {
    return (num > 9) ? num : '0' + num;
  }


  // Динамическая дата, от сегодняшней + 2 дня с добавлением нулей, если день или месяц меньше 10

  function addDays(days) {
    var result = new Date();
    result.setDate(result.getDate() + days);
    return result;
  }

  $('.sale-date').text(addZero(addDays(2).getDate()) + '.' + (addZero(addDays(2).getMonth() + 1)) + '.' + (addDays(2).getFullYear() - 2000));


  // Выбор звёздочек при написании отзыва

  // function feedbackStar(e) {
  //   const target = e.target;
  //   let index;


  //   $('.feedback-modal__dialog-star').each(function (i, key) {
  //     if (target == key) {
  //       index = i;
  //     }
  //   });

  //   $('.feedback-modal__dialog-star').each(function (i, key) {
  //     $(key).removeClass('feedback-modal__dialog-star--active');

  //     if (i <= index) {
  //       $(key).addClass('feedback-modal__dialog-star--active');
  //     }
  //   });
  // }

  // $('.feedback-modal__dialog-star').on('click', function (e) {
  //   feedbackStar(e);
  // });

  // $('.feedback-modal__dialog-star').on('touchstart', function (e) {
  //   feedbackStar(e);
  // });


  // Скрытие модалки с отзывом, после нажатия кнопки отправить

  // $.fancybox.defaults.closeExisting = true;


  // Инициальизация библиотеки с анимацияи

  // AOS.init();


  // Добавление видео ри клике на кноку Play в секции 'about'

  // var tag = document.createElement('script');

  // tag.src = "https://www.youtube.com/iframe_api";
  // var firstScriptTag = document.getElementsByTagName('script')[0];
  // firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // var player;
  // $('.about-video__button').on('click', function onYouTubeIframeAPIReady() {
  //   var dataVideo = $(this).data("video");
  //   player = new YT.Player('player', {
  //     videoId: dataVideo,
  //     events: {
  //       'onReady': videoPlay,
  //     }
  //   });
  // });

  // function videoPlay(e) {
  //   e.target.playVideo();
  // }
  
});