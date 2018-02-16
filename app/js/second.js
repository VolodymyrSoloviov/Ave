var second = (function () {
  var init = function () {
    console.log('works Second');
    first.init();
  }

  $(function () {
	$('.awards__list').owlCarousel({
		items : 3,
		loop: true,
		dots: false,
		responsive: {
			0: {
				items : 2
			},
			730: {
				items : 2
			},
			950: {
				items: 2
			},
			1170: {
				items: 3
			}
		}
	});
});

  return {init: init};
})();