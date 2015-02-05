$(function() {
  $('.carousel').carousel({
      interval: false 
  }).on('slide.bs.carousel', function (e) {
      var nextHeight = $(e.relatedTarget).height();
      $(this).find('.active').parent().animate({ height: nextHeight }, 500);
  });
  // $('#boucerVideo').play();
});
