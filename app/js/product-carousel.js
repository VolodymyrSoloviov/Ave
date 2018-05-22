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
