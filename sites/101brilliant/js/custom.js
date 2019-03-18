/*=================================================
                SERVICES
=================================================*/
$(function(){

    //animate on scroll
    new WOW().init();


});

/*=================================================
                WORK
=================================================*/
$(function() {
  //work is the id name
  $("#work").magnificPopup({
      delegate: 'a', //item selector, clicking and popup will open
      type: 'image',
      gallery:{
    enabled: true
    }
  });

});
/*=================================================
                TEAM
=================================================*/
$(function() {
    $("#team-members").owlCarousel({
      items: 3,
      autoplay: true,
      smartSpeed: 700,
      loop: true,
      autoplayHoverPause: true,
      responsive :  {
        //breakpoint from 0 upto
        0  : {
            items: 1
              },
        //breakpoint from 480 upto
        480 : {
          items: 2
              },
        //breakpoint from 768 upto
        768 : {
            items: 3
              }
        //breakpoint from 992 upto
      }
    });
  });

  /*=================================================
                  Testimonials
  =================================================*/
$(function() {
  $("#customers-testimonials").owlCarousel({
    items: 1,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true
    });
  });

/*=================================================
                Stats
=================================================*/
$(function() {
  $('.counter').counterUp({
    delay: 10,
    time: 2000
    });
});
/*=================================================
              Client
=================================================*/
$(function() {
  $("#clients-list").owlCarousel({
      items: 6,
      autoplay: true,
      smartSpeed: 700,
      loop: true,
      autoplayHoverPause: true,
      responsive :  {
        //breakpoint from 0 upto
        0  : {
            items: 1
              },
        //breakpoint from 480 upto
        480 : {
          items: 3
              },
        //breakpoint from 768 upto
        768 : {
            items: 5
              },
        //breakpoint from 992 upto
        992 : {
            items: 6
              }
      }
      });


});
/*=================================================
              Navigation
=================================================*/
$(function () {

    $(window).scroll(function () {

        if ($(this).scrollTop() < 50) {
            // hide nav
            $("nav").removeClass("brilli-top-nav");
            $("#back-to-top").fadeOut();

        } else {
            // show nav
            $("nav").addClass("brilli-top-nav");
            $("#back-to-top").fadeIn();
        }
    });
});

// Smooth scrolling
$(function () {

    $('a.smooth-scroll').click(function(event) {

        event.preventDefault();

        // get/return id like #about, #work, #team and etc
        var section=$(this).attr('href');

        $('html, body').animate({
            scrollTop: $(section).offset().top - 64
        }, 1250, "easeInOutExpo");
    });
});

//close mobile menu on clicking
$(function() {
//selecting aelement only--can also be written as ul.navbar-nav
  $(".navbar-collapse ul li a").on("click touch",function() {
    $(".navbar-toggle").click(); //when user clicks or touches a sub menu option, the nav bar collapses automatically
  });
  });
