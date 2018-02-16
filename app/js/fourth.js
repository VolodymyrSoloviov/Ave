$(function() {
  $("#tabs").tabs();

  $(".product__item").click(function() {
	$(".product__item").removeClass("product__item_active").eq($(this).index()).addClass("product__item_active");
	});
	
});