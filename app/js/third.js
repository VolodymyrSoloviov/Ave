var third = (function () {
  var init = function () {
      console.log('works third');
    },
    warn = function () {
      console.info('Ахтунг !!!');
    };

    $(function () {
			var productImgCarousel = $('.product__img-list').owlCarousel({
				items : 1,
				loop: true,
				dots: false
			});

			$('.product__img-arrow_link-right').on('click', function(e) {
				e.preventDefault();
    		productImgCarousel.trigger('next.owl.carousel');
			});

			$('.product__img-arrow_link-left').on('click', function(e) {
				e.preventDefault();
    		productImgCarousel.trigger('prev.owl.carousel');
			});

		});

  return {init: init, warn: warn};
})();