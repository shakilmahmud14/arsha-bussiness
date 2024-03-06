jQuery(document).ready(function() {

   jQuery(".accordion ul li a").click(function(){
        jQuery(this).next().slideToggle('slow').siblings("#accordion-content").slideUp('slow');
        jQuery(".accordion ul li").toggleClass("accordion-active").siblings(".accordion ul li").removeClass("accordion-active");
   });

    // lineprogress bar js start hare

     var offsetTop = $('#skills').offset().top;
    $(window).scroll(function() {
      var height = $(window).height();
      if($(window).scrollTop()+height > offsetTop) {
        jQuery('.skillbar').each(function(){
          jQuery(this).find('.skillbar-bar').animate({
            width:jQuery(this).attr('data-percent')
          },2000);
        });
      }
  });

    // linepogressbar js end hare









});