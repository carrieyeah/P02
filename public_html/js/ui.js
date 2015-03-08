$(document).ready( function() {


  var width = $(window).width();


  if (width < 350) {
    $("#navToggle").css("display","block"); // Setting #navToggle to display: block;
    $("nav").hide();    // Setting nav to display: none;
  }

  $("#navToggle").click( function() { 
    // The .slideToggle method slides the 'nav' open/closed over 500ms
    $("nav").slideToggle(500);
  });




});