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
  
});

