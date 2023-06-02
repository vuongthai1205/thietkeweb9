(function ($) {
  "use strict"; // Start of use strict

  /*-------------------------------------------
  preloader
  --------------------------------------------- */
  $(window).on('load',function () {
    $('#status').fadeOut();
    $('#preloader')
        .delay(350)
        .fadeOut('slow');
    $('body')
        .delay(350)
  });
  /*-------------------------------------------
  Sticky Header
  --------------------------------------------- */
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 80) {
      $("#sticky").addClass("stick");
    } else {
      $("#sticky").removeClass("stick");
    }
  });

    /*-------------------------------------------
    js wow active
    --------------------------------------------- */
    new WOW().init();

    /*---------------------------------
    venobox
    -----------------------------------*/
    $('.venobox').venobox();

    /*---------------------------------
    imagesLoaded activation 
    -----------------------------------*/
    $('.container').imagesLoaded();

    // Video Mouse Move Effect start
    $(document).mousemove(function(event){
      var xPos = (event.clientX/$(window).width())-0.5,
          yPos = (event.clientY/$(window).height())-0.5,
          box = $('.box'),
          coord = $('.coordinates');
     
     TweenLite.to(box, 0.6, {
       rotationY: 5 * xPos, 
       rotationX: 5 * yPos,
       ease: Power1.easeOut,
       transformPerspective: 500,
       transformOrigin: 'center'
     });
   });
    // Video Mouse Move Effect end

    // Home Know Us More Owl Carousel Start
    $('.know-us-items').owlCarousel({
      stagePadding: 200,
      loop: true,
      dots: false,
      autoplayHoverPause: true,
      autoplay: false,
      smartSpeed: 1000,
      margin: 74,
      nav: true,
      navText: [
          "<i class='flaticon-left-arrow'></i>",
          "<i class='flaticon-right-arrow-1'></i>"
      ],
      responsive: {
          0: {
            items: 1,
            stagePadding: 0
          },
          480: {
              items:1,
              stagePadding: 0
          },
          576: {
              items:1,
              stagePadding: 0
          },
          768: {
              items:2,
              stagePadding: 100,
              margin: 15,
          },
          1200: {
              items:3,
              stagePadding: 100,
              margin: 30,
          }
      },
    });

    // Home Know Us More Owl Carousel End

  })(jQuery); // End of use strict