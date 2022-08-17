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
});