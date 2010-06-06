$(function(){
  // SUPER BG IMAGE
  // Options for SuperBGImage
  $.fn.superbgimage.options = {
    randomtransition: 0, // 0-none, 1-use random transition (0-7)
    slideshow: 0, // 0-none, 1-autostart slideshow
    slide_interval: 1000, // interval for the slideshow
    randomimage: 0, // 0-none, 1-random image
    showimage: 1,
    speed: 0 // 'fast' // animation speed
  };
 
  // initialize SuperBGImage
  $('#bg').superbgimage().hide();


  // WIRE CLICK HANDLERS for nav
  $("ul.nav a").click(function(){
   scrollToSection( $(this).text().toLowerCase() );
   return false;
  });
  
});

function scrollToSection( id ){

	var target_offset = $("#"+id+"_section").offset();
	var target_top = target_offset.top;	
  if ( id == "about" ) target_top = 0;
	
  $('html, body').animate({scrollTop:(target_top-30)}, 900, 'swing');
}
