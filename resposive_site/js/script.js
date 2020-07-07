function open_menu() {
  if($('#menu').is(':hidden')) {
    $('#menu').slideDown(1000, function() {});
  }
  else {
    hide_menu();
  }
}

function hide_menu() {
  $('#menu').slideUp(1000, function() {});
}
