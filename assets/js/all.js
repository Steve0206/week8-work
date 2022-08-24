"use strict";

$(document).ready(function () {
  //手機搜尋
  $('#m-search').click(function (event) {
    event.preventDefault();
    $('#search-nav').removeClass('hidden');
    $('#search-nav').addClass('flex');
    $('#h1').toggleClass('hidden');
    $('#m-search-list').removeClass('flex');
    $('#m-search-list').addClass('hidden');
  });
  $('#search-pre').click(function (event) {
    event.preventDefault();
    $('#search-nav').removeClass('flex');
    $('#search-nav').addClass('hidden');
    $('#h1').toggleClass('hidden');
    $('#m-search-list').removeClass('hidden');
    $('#m-search-list').addClass('flex');
  }); //手機選單

  $('#m-menu').click(function (event) {
    event.preventDefault();
    $(this).toggleClass('hidden');
    $('#close').toggleClass('hidden');
    $('#m-menu-list').slideToggle();
  });
  $('#close').click(function (event) {
    event.preventDefault();
    $(this).toggleClass('hidden');
    $('#m-menu').toggleClass('hidden');
    $('#m-menu-list').slideToggle();
  }); //modal

  $('#wallet').on('click', function (event) {
    $('#modal-bg').removeClass('hidden');
  });
  $('#wallet-link').on('click', function (event) {
    $('#modal-bg').addClass('hidden');
  }); //wallet

  $('#wallet-check-meta').click(function (event) {
    event.preventDefault();
    $(this).toggleClass('border-orange');
    $(this).find('span').toggleClass('text-orange');
  });
  $('#wallet-check-coin').click(function (event) {
    event.preventDefault();
    $(this).toggleClass('border-orange');
    $(this).find('span').toggleClass('text-orange');
  });
  $('#wallet-check-connect').click(function (event) {
    event.preventDefault();
    $(this).toggleClass('border-orange');
    $(this).find('span').toggleClass('text-orange');
  });
  $('#wallet-check-phan').click(function (event) {
    event.preventDefault();
    $(this).toggleClass('border-orange');
    $(this).find('span').toggleClass('text-orange');
  });
  $('#wallet-check-glow').click(function (event) {
    event.preventDefault();
    $(this).toggleClass('border-orange');
    $(this).find('span').toggleClass('text-orange');
  });
  $('#wallet-check-fart').click(function (event) {
    event.preventDefault();
    $(this).toggleClass('border-orange');
    $(this).find('span').toggleClass('text-orange');
  }); //swiper

  var swiper = new Swiper('.swiper-container', {
    breakpoints: {
      1440: {
        slidesPerView: 3
      }
    },
    initialSlide: 1,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 2000
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  }); //滑鼠移過去停止撥動

  swiper.el.onmouseover = function () {
    swiper.autoplay.stop();
  }; //滑鼠移開自動撥放


  swiper.el.onmouseout = function () {
    swiper.autoplay.start();
  };
});
//# sourceMappingURL=all.js.map
