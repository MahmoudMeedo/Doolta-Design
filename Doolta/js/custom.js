$(function () {
    "use strict";

    // Caching Variables
    var htmlAndBody   = $('html, body'),
        sidebarLinks  = $('#sidebar ul li a'),
        scrollButton  = $("header .upper-bar .scrollTopButton"),
        buttunScroll  = $(".scroll"),
        panelGroup    = $('.panel-group');
    // Remove The Animation Of The Loader
    $(window).on("load", function () {
  		$(".overpage").fadeOut(1000);
  	});

    // Calculating The Dimensions Of The Header
    $("header .content .row").height($("header").height() - $("header .upper-bar").height());

    // Trigger NiceScroll

    $(function () {
      $("body").niceScroll({
        cursorcolor: "#F00",
        mousescrollstep: 50,
        scrollspeed: 100

      });
    });

    // Moving Links To Sections

    sidebarLinks.click(function () {
  		$(this).addClass("active").siblings("li").removeClass("active");
  	});

  	sidebarLinks.on("click", function () {
  		htmlAndBody.animate({
  			scrollTop: $('.' + $(this).data('name')).offset().top
  		}, 1000);
  	});

    // Make Scroll Button Visible And Make Scroll To Top

    $(window).on("scroll", function(){
      if($(window).scrollTop() >= 400){
        scrollButton.removeClass("d-none");
      }else{
        scrollButton.addClass("d-none");
      }
    });

    scrollButton.on("click", function(){
      htmlAndBody.animate({
        scrollTop: 0
      }, 1000);
    });

    //Check to see the window scroll

  	$(window).scroll(function () {
  		if ($(this).scrollTop() >= 600) {
  			buttunScroll.fadeIn(1000);
  		} else {
  			buttunScroll.fadeOut(1000);
  		}
  	});

    // Making Navbar Visible
    $("#toggle-btn").on("click", function () {
        $(this).toggleClass("active");
        $("#sidebar").toggleClass("active");
    });

  //Trigger Typeit Plugin
    $("#typing-it").typeIt({
        strings: ['We Are A Creative Organisation, Your Success is Our Aim.'],
        speed: 100,
        loopDelay: 1000,
        deleteSpeed: 100,
        breakLines: true,
        autoStart: true,
        loop: true
    });

    // Accordion Code

    $(".accordion .cont-acc h3").on("click", function () {
        $(this).next().slideToggle(500);
        $(".accordion .cont-acc .content").not($(this).next()).slideUp(500);
    });

  function toggleIcon(e) {
    $(e.target).prev('.panel-heading').find(".fa-plus").toggleClass('fa-minus');
  }
  panelGroup.on('hidden.bs.collapse', toggleIcon);
  panelGroup.on('shown.bs.collapse', toggleIcon);

    // Animted Skills Bar
    var skills = {
      bs: 93,
      ap: 97,
      sp: 90,
      so: 88,
      sg: 94
    };

    $.each(skills, function(key, value) {
      var skillbar = $("." + key);
      skillbar.animate(
        {
          width: value + "%"
        },
        3000,
        function() {
          $(".speech-bubble").fadeIn();
        }
      );
    });

    // Trigger Testimonials Auto Slider
    (function autoSlider(){
      $(".slider .t-active").each(function(){
        if (!$(this).is(":last-child")) {
          $(this).delay(5000).fadeOut(1000, function(){
            $(this).removeClass("t-active").next().addClass("t-active").fadeIn();
            autoSlider();
          });
        } else {
          $(this).delay(5000).fadeOut(1000, function(){
            $(this).removeClass("t-active");
            $(".slider div").eq(0).addClass("t-active").fadeIn();
            autoSlider();
          });
        }
      });
    }());

});
