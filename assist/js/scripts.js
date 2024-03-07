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
    var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
      forEach(hamburgers, function(hamburger) {
        hamburger.addEventListener("click", function() {
          this.classList.toggle("is-active");
        }, false);
      });
    };
    jQuery(".hamburger").click(function(){
      jQuery(".menu-area").toggleClass("md-menu-active");
    });

    jQuery(window).scroll(function(){
      var menuScroll = jQuery(window).scrollTop();
      jQuery(".test").text(menuScroll);
      if (menuScroll > 100) {
        jQuery(".menu").addClass("menu-scroll");
      } else {
        jQuery(".menu").removeClass("menu-scroll");
      };
    })






});