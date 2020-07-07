function initial() {
  $('.body').fadeOut(500, function() {}).fadeIn(500, function() {});
}

function open_menu() {
  if($('.menu').is(':hidden')) {
    $('.menu').slideDown(500, function() {});
  }
  else {
    $('.menu').slideUp(500, function() {});
  }
}
