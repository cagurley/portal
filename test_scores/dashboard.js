'use strict';
$('.dash-content').each(function () {
  if (!$(this).text()) {
    $(this).html('<em>none</em>');
  }
});
$('.dash-header').click(function () { $(this).next().toggle(); });
$('.dash-header').on('mouseover mouseout', function () {
  $(this).parent().toggleClass('dash-ic');
});
$('.dash-header').on('mousedown mouseup', function () {
  $(this).parent().toggleClass('dash-tl');
});
$('#dash-recdet .dash-body').hide();
if (window.matchMedia('(max-width: 575px)').matches) {
  var re = /^\/manage\/lookup\/message\?cmd=compose&person=.+?&recipient=(.+?)(&.+)?$/;
  $('.dash-popph').each(function () {
    var matches = $(this).attr('data-href').match(re);
    if (matches[1]) {
      $(this).removeAttr('onclick');
      $(this).attr('href', 'tel:' + matches[1]);
      $(this).removeAttr('data-href');
    }
  });
  $('.dash-popem').each(function () {
    var matches = $(this).attr('data-href').match(re);
    if (matches[1]) {
      $(this).removeAttr('onclick');
      $(this).attr('href', 'mailto:' + matches[1]);
      $(this).removeAttr('data-href');
    }
  });
} else if ($('#dash-tp').text().toLowerCase() !== 'yes') {
  $('#dash-mob').html($('#dash-mob').text());
}
