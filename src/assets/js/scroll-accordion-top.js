$(".ScrollTopAccordion").on("up.zf.accordion", function(event) {
  setTimeout(function(){
    $('html,body').animate({scrollTop: $('.is-active').offset().top - 80}, 'fast');
  }, 250); //Adjust to match slideSpeed
}); 