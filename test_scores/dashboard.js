'use strict';
$('.dash-body').hide();
$('.dash-content').each(function () {
  if (!$(this).text()) {
    $(this).html('<em>none</em>');
  }
});
$('.dash-header').on('click keypress', function () { $(this).next().toggle(); });
$('.dash-header').on('mouseover focusin', function () {
  $(this).parent().addClass('dash-ic');
});
$('.dash-header').on('mouseout focusout', function () {
  $(this).parent().removeClass('dash-ic');
});
$('.dash-header').on('mousedown', function () {
  $(this).parent().addClass('dash-tl');
});
$('.dash-header').on('mouseup', function () {
  $(this).parent().removeClass('dash-tl');
});
