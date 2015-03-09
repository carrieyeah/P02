$(document).ready( function() {


  var width = $(window).width();


  if (width < 500) {
    $("#navToggle").css("display","block"); // Setting #navToggle to display: block;
    $("nav").hide();    // Setting nav to display: none;
  }

  $("#navToggle").click( function() { 
    // The .slideToggle method slides the 'nav' open/closed over 500ms
    $("nav").slideToggle(500);
  });

$('.days li').click(function(){
    $(this).toggleClass('active');
});

$('.bundle-item-1 img').click(function(){
    $(this).toggleClass('active');
});

     $( ".numpeople_text input" )
  .keyup(function() {
    var value = $( this ).val();
    $( ".numpeople" ).text( value );
  })
  .keyup();


      $( ".month" )
        .change(function () {
          var str = "";
          $( ".month select option:selected" ).each(function() {
            str += $( this ).text() + " ";
          });
          $( ".month_text" ).text( str );
        })
        .change();



        $( ".days li" ).click(function() {
            var text = $( this ).text();
            $( ".month_text" ).text( str );
          }); 
        
        $( ".image image_1a" ).click(function() {
          var text = $( this ).text();
          $( ".bundles" ).val( text );
        });

   



        $( ".time1, .time2" )
        .change(function () {
          var str = "";
          $( ".time1 select option:selected, .time2 select option:selected" ).each(function() {
            str += $( this ).text() + " ";
          });
          $( ".time" ).text( str );
        })
        .change();




      $( ".hour" )
        .change(function () {
          var str = "";
          $( ".hour select option:selected " ).each(function() {
            str += $( this ).text() + " ";
          });
          $( ".hours" ).text( str );
        })
        .change();


    
// BUNDLE IMAGES AND CLICK AND CHOOSE THE BUNDLE AND SHOW IN DESCIPTION

    $( ".image_1a img" ).click(function() {
      var imageId = $( ".image_1a img" ).attr("alt");
      $( ".bundles_text input" ).val( imageId );

    });
    $( ".image_1b img" ).click(function() {
      var imageId2 = $( ".image_1b img" ).attr("alt");
      $( ".bundles_text input" ).val( imageId2 );

    });
    $( ".image_1c img" ).click(function() {
      var imageId3 = $( ".image_1c img" ).attr("alt");
      $( ".bundles_text input" ).val( imageId3 );

    });









});