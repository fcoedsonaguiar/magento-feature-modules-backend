(function($){
	
	$( document ).ready( function () {
		showHideCart();
		displayCheckout();
	})

	function showHideCart() {
		var buttonShowContentCart = $('.cart-btn');
		var buttonHideContentCart = $('.buttonHide');

		$(buttonShowContentCart).click(function(){
			$(this).next().removeClass('hideCart');
			$(this).next().addClass('showCart');
		});

		$(buttonHideContentCart).click(function(){			
			$(this).parents('#hover-cart').removeClass('showCart');
			$(this).parents('#hover-cart').addClass('hideCart');
		});
	}

	function displayCheckout() {
		if ($('.product .col-item-1').is(":visible")) {
			$('.checkout').css("display","flex");
			$('#hover-cart .content').css("overflow-y","scroll");
		}
	}

})(jQuery);