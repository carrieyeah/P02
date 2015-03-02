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