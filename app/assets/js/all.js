$(document).ready(() => {
  //手機搜尋
  $('#m-search').click(function(event) {
        event.preventDefault();
        $('#search-nav').removeClass('hidden');
        $('#search-nav').addClass('flex');
        $('#h1').toggleClass('hidden');
        $('#m-search-list').removeClass('flex');
        $('#m-search-list').addClass('hidden');
    });
    $('#search-pre').click(function(event) {
      event.preventDefault();
      $('#search-nav').removeClass('flex');
      $('#search-nav').addClass('hidden');
      $('#h1').toggleClass('hidden');
      $('#m-search-list').removeClass('hidden');
      $('#m-search-list').addClass('flex');
    });

    //手機選單
    $('#m-menu').click(function(event) {
        event.preventDefault();
        $(this).toggleClass('hidden');
        $('#close').toggleClass('hidden');
        $('#m-menu-list').slideToggle();
    });
    $('#close').click(function(event) {
        event.preventDefault();
        $(this).toggleClass('hidden');
        $('#m-menu').toggleClass('hidden');
        $('#m-menu-list').slideToggle();
    });

    //modal
    $('#wallet').on('click',function(event) {
      $('#modal-bg').removeClass('hidden');
    });
    $('#m-wallet').on('click',function(event) {
      $('#modal-bg').removeClass('hidden');
    });
    $('#wallet-close').on('click',function(event) {
      $('#modal-bg').addClass('hidden');
    });
    $('#wallet-link').on('click',function(event) {
      $('#modal-bg').addClass('hidden');
    });

    //wallet
    $('#wallet-check-meta').click(function(event) {
      event.preventDefault();
      $(this).toggleClass('border-orange');
      $(this).find('span').toggleClass('text-orange');
    });
    $('#wallet-check-coin').click(function(event) {
      event.preventDefault();
      $(this).toggleClass('border-orange');
      $(this).find('span').toggleClass('text-orange');
    });
    $('#wallet-check-connect').click(function(event) {
      event.preventDefault();
      $(this).toggleClass('border-orange');
      $(this).find('span').toggleClass('text-orange');
    });
    $('#wallet-check-phan').click(function(event) {
      event.preventDefault();
      $(this).toggleClass('border-orange');
      $(this).find('span').toggleClass('text-orange');
    });
    $('#wallet-check-glow').click(function(event) {
      event.preventDefault();
      $(this).toggleClass('border-orange');
      $(this).find('span').toggleClass('text-orange');
    });
    $('#wallet-check-fart').click(function(event) {
      event.preventDefault();
      $(this).toggleClass('border-orange');
      $(this).find('span').toggleClass('text-orange');
    });


    //關閉取消選擇的錢包
    $('#wallet-close').on('click',function(event) {
      $('#wallet-check-meta').removeClass('border-orange').find('span').removeClass('text-orange');
      $('#wallet-check-coin').removeClass('border-orange').find('span').removeClass('text-orange');
      $('#wallet-check-connect').removeClass('border-orange').find('span').removeClass('text-orange');
      $('#wallet-check-phan').removeClass('border-orange').find('span').removeClass('text-orange');
      $('#wallet-check-glow').removeClass('border-orange').find('span').removeClass('text-orange');
      $('#wallet-check-fart').removeClass('border-orange').find('span').removeClass('text-orange');
    });
    $('#wallet-link').on('click',function(event) {
      $('#wallet-check-meta').removeClass('border-orange').find('span').removeClass('text-orange');
      $('#wallet-check-coin').removeClass('border-orange').find('span').removeClass('text-orange');
      $('#wallet-check-connect').removeClass('border-orange').find('span').removeClass('text-orange');
      $('#wallet-check-phan').removeClass('border-orange').find('span').removeClass('text-orange');
      $('#wallet-check-glow').removeClass('border-orange').find('span').removeClass('text-orange');
      $('#wallet-check-fart').removeClass('border-orange').find('span').removeClass('text-orange');
    });

    //table
    $('#add-1').on('click',function(event) {
      event.preventDefault();
      $(this).toggleClass('hidden');
      $('#remove-1').toggleClass('hidden');
      $('#black-trian-1').toggleClass('orange-trian-border');
      $('#tr-1').toggleClass('hidden');
    });
    $('#remove-1').on('click',function(event) {
      event.preventDefault();
      $(this).toggleClass('hidden');
      $('#add-1').toggleClass('hidden');
      $('#black-trian-1').toggleClass('orange-trian-border');
      $('#tr-1').toggleClass('hidden');
    });

    $('#add-2').on('click',function(event) {
      event.preventDefault();
      $(this).toggleClass('hidden');
      $('#remove-2').toggleClass('hidden');
      $('#black-trian-2').toggleClass('orange-trian-border');
      $('#tr-2').toggleClass('hidden');
    });
    $('#remove-2').on('click',function(event) {
      event.preventDefault();
      $(this).toggleClass('hidden');
      $('#add-2').toggleClass('hidden');
      $('#black-trian-2').toggleClass('orange-trian-border');
      $('#tr-2').toggleClass('hidden');
    });

    $('#add-3').on('click',function(event) {
      event.preventDefault();
      $(this).toggleClass('hidden');
      $('#remove-3').toggleClass('hidden');
      $('#black-trian-3').toggleClass('orange-trian-border');
      $('#tr-3').toggleClass('hidden');
    });
    $('#remove-3').on('click',function(event) {
      event.preventDefault();
      $(this).toggleClass('hidden');
      $('#add-3').toggleClass('hidden');
      $('#black-trian-3').toggleClass('orange-trian-border');
      $('#tr-3').toggleClass('hidden');
    });

    $('#add-4').on('click',function(event) {
      event.preventDefault();
      $(this).toggleClass('hidden');
      $('#remove-4').toggleClass('hidden');
      $('#black-trian-4').toggleClass('orange-trian-border');
      $('#tr-4').toggleClass('hidden');
    });
    $('#remove-4').on('click',function(event) {
      event.preventDefault();
      $(this).toggleClass('hidden');
      $('#add-4').toggleClass('hidden');
      $('#black-trian-4').toggleClass('orange-trian-border');
      $('#tr-4').toggleClass('hidden');
    });

    $('#add-5').on('click',function(event) {
      event.preventDefault();
      $(this).toggleClass('hidden');
      $('#remove-5').toggleClass('hidden');
      $('#black-trian-5').toggleClass('orange-trian-border');
      $('#tr-5').toggleClass('hidden');
    });
    $('#remove-5').on('click',function(event) {
      event.preventDefault();
      $(this).toggleClass('hidden');
      $('#add-5').toggleClass('hidden');
      $('#black-trian-5').toggleClass('orange-trian-border');
      $('#tr-5').toggleClass('hidden');
    });

    $('#add-6').on('click',function(event) {
      event.preventDefault();
      $(this).toggleClass('hidden');
      $('#remove-6').toggleClass('hidden');
      $('#black-trian-6').toggleClass('orange-trian-border');
      $('#tr-6').toggleClass('hidden');
    });
    $('#remove-6').on('click',function(event) {
      event.preventDefault();
      $(this).toggleClass('hidden');
      $('#add-6').toggleClass('hidden');
      $('#black-trian-6').toggleClass('orange-trian-border');
      $('#tr-6').toggleClass('hidden');
    });

    $('#add-7').on('click',function(event) {
      event.preventDefault();
      $(this).toggleClass('hidden');
      $('#remove-7').toggleClass('hidden');
      $('#black-trian-7').toggleClass('orange-trian-border');
      $('#tr-7').toggleClass('hidden');
    });
    $('#remove-7').on('click',function(event) {
      event.preventDefault();
      $(this).toggleClass('hidden');
      $('#add-7').toggleClass('hidden');
      $('#black-trian-7').toggleClass('orange-trian-border');
      $('#tr-7').toggleClass('hidden');
    });

    $('#add-8').on('click',function(event) {
      event.preventDefault();
      $(this).toggleClass('hidden');
      $('#remove-8').toggleClass('hidden');
      $('#black-trian-8').toggleClass('orange-trian-border');
      $('#tr-8').toggleClass('hidden');
    });
    $('#remove-8').on('click',function(event) {
      event.preventDefault();
      $(this).toggleClass('hidden');
      $('#add-8').toggleClass('hidden');
      $('#black-trian-8').toggleClass('orange-trian-border');
      $('#tr-8').toggleClass('hidden');
    });

    $('#add-9').on('click',function(event) {
      event.preventDefault();
      $(this).toggleClass('hidden');
      $('#remove-9').toggleClass('hidden');
      $('#black-trian-9').toggleClass('orange-trian-border');
      $('#tr-9').toggleClass('hidden');
    });
    $('#remove-9').on('click',function(event) {
      event.preventDefault();
      $(this).toggleClass('hidden');
      $('#add-9').toggleClass('hidden');
      $('#black-trian-9').toggleClass('orange-trian-border');
      $('#tr-9').toggleClass('hidden');
    });

    $('#add-10').on('click',function(event) {
      event.preventDefault();
      $(this).toggleClass('hidden');
      $('#remove-10').toggleClass('hidden');
      $('#black-trian-10').toggleClass('orange-trian-border');
      $('#tr-10').toggleClass('hidden');
    });
    $('#remove-10').on('click',function(event) {
      event.preventDefault();
      $(this).toggleClass('hidden');
      $('#add-10').toggleClass('hidden');
      $('#black-trian-10').toggleClass('orange-trian-border');
      $('#tr-10').toggleClass('hidden');
    });

    //explore nav
    $('#internet').on('click',function(event) {
      event.preventDefault();
      $(this).find('span').toggleClass('hidden');
      $('#internet-list').slideToggle();
    });
      $('#state').on('click',function(event) {
      event.preventDefault();
      $(this).find('span').toggleClass('hidden');
      $('#state-list').slideToggle();
    });
    $('#price').on('click',function(event) {
      event.preventDefault();
      $(this).find('span').toggleClass('hidden');
      $('#price-list').slideToggle();
    });
    $('#variety').on('click',function(event) {
      event.preventDefault();
      $(this).find('span').toggleClass('hidden');
      $('#variety-list').slideToggle();
    });



    //modal explore nav
    $('#modal-internet').on('click',function(event) {
      event.preventDefault();
      $(this).find('span').toggleClass('hidden');
      $('#modal-internet-list').slideToggle();
    });
      $('#modal-state').on('click',function(event) {
      event.preventDefault();
      $(this).find('span').toggleClass('hidden');
      $('#modal-state-list').slideToggle();
    });
    $('#modal-price').on('click',function(event) {
      event.preventDefault();
      $(this).find('span').toggleClass('hidden');
      $('#modal-price-list').slideToggle();
    });
    $('#modal-variety').on('click',function(event) {
      event.preventDefault();
      $(this).find('span').toggleClass('hidden');
      $('#modal-variety-list').slideToggle();
    });

    //love-each-other
    $('#attribute').on('click',function(event) {
      event.preventDefault();
      $(this).parent().toggleClass('border-b');
      $(this).find('span').toggleClass('hidden');
      $('#attribute-list').slideToggle();
    });
    $('#sell').on('click',function(event) {
      event.preventDefault();
      $(this).parent().toggleClass('border-b');
      $(this).find('span').toggleClass('hidden');
      $('#sell-list').slideToggle();
    });
    $('#base').on('click',function(event) {
      event.preventDefault();
      $(this).parent().toggleClass('border-b');
      $(this).find('span').toggleClass('hidden');
      $('#base-list').slideToggle();
    });
    $('#trade').on('click',function(event) {
      event.preventDefault();
      $(this).parent().toggleClass('border-b');
      $(this).find('span').toggleClass('hidden');
      $('#trade-list').slideToggle();
    });

    
    //swiper
    var swiper = new Swiper('.swiper-artist', {
      breakpoints: { 
        1440:{
          slidesPerView: 3,
        },
      },
      initialSlide :1,
      spaceBetween: 30,
      centeredSlides: true,
      loop: true,
      speed:1000,
      autoplay: {
        delay:2000,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    });
        //swiper
    var swiper = new Swiper('.swiper-other', {

      slidesPerView: 1,
      initialSlide :1,
      spaceBetween: 30,
      centeredSlides: true,
      loop: true,
      speed:1000,
      autoplay: {
        delay:2000,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    });
    //滑鼠移過去停止撥動
	  swiper.el.onmouseover = function(){
		swiper.autoplay.stop();
	  }

	  //滑鼠移開自動撥放
	  swiper.el.onmouseout = function(){
    swiper.autoplay.start();
	  }

    

});