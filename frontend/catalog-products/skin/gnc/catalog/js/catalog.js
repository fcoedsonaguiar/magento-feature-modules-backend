(function ($) {
    $(document).ready(function () {
        $('a#ajax-purchase').click(function () {
            let id = $(this).attr("data-id");
            addProductToCart(id);
        });
        function addProductToCart(id) {
            $.ajax({
                url : '/minicart/index/getCartToAddProduct/id/' + id,
                dataType: 'json',
                success : function (response) {

                    $('.checkout').css("display","flex");
                    $('.content').html(response);
                },
                error : function () {
                    console.log ('error');
                }

            });














//             $('.cart-template').hide();
//             var date = new Date();
//             var timestamp = date.getTime();
//
//             $.ajax({
//                 type: "POST",
//                 // url : '/minicart/minicart/add/id/' + id + '?=' +timestamp,
//                 // url : "<?php echo $this->getUrl('minicart/index/add');?>",
//                 dataType: 'json',
//                 async: false,
//                 cache: false,
//                 success : function(response) {
//
//                 // $('.cart-template').show();
//                     //
//                     $(".cart-template").clone().insertAfter(".msg-no-products").addClass("cart-template-" + id).show();
//                     $('.msg-no-products').hide();
//                     $('.checkout').css("display","flex");
//                     $('.cart-template-' + id + ' .col-item-1 .name').html(response.name);
//                     $('.cart-template-' + id + ' .col-item-2 .image .product-image').attr('src', response.productImage);
//                     $('.cart-template-' + id + ' .col-item-3 .qty-btn .input-text').val(response.itemQty);
//                     $('.cart-template-' + id + ' .col-item-3 .prices .regular-price-cart').html(response.price);
//                     $('.cart-template-' + id + ' .col-item-3 .prices .price-promotion').html(response.finalPrice);
//
//
// console.log(response.name);
// console.log(response.price);
// console.log(response.finalPrice);
// console.log(response.itemQty);
// console.log(response.productImage);
//                 },
//                 error: function(req, err) {
//                     console.log('deu ruim = ' + err);
//                 }
//             });
//             return false;
        }
    });
})(jQuery);