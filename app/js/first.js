var first = (function () {
  var init = function () {
    console.log('works First');
  }

  $(function () {
  	$('.menu').fancybox({
  		type : 'inline',
  		padding : 0
  	});

    $('.menu-burger__close').on('click', function(e) {
      e.preventDefault();
      $.fancybox.close();
    });
  });

  return {init: init};
})();
