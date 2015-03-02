$(document).ready( 
	function(){
		var width = $(window).width();
		$("title").html(width);

	}
);


$(document).ready( function() {




$('.booking_button').click(function(){
    $(this).toggleClass('active');
});


});


jQuery(function($){
  $('.cc-number').payment('formatCardNumber');
  $('.cc-exp').payment('formatCardExpiry');
  $('.cc-cvc').payment('formatCardCVC');

  $('form').submit(function(e){
    e.preventDefault();
    $('input').removeClass('invalid');
    $('.validation').removeClass('passed failed');

    var cardType = $.payment.cardType($('.cc-number').val());

    $('.cc-number').toggleClass('invalid', !$.payment.validateCardNumber($('.cc-number').val()));
    $('.cc-exp').toggleClass('invalid', !$.payment.validateCardExpiry($('.cc-exp').payment('cardExpiryVal')));
    $('.cc-cvc').toggleClass('invalid', !$.payment.validateCardCVC($('.cc-cvc').val(), cardType));

    if ( $('input.invalid').length ) {
      $('.validation').addClass('failed');
    } else {
      $('.validation').addClass('passed');
    }
  });
});