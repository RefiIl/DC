$(document).ready(function () {
    $(".scroll").click(function () {
      $("html, body").animate(
        {
          scrollTop: $($(this).attr("href")).offset().top - 150,
        },
        600
      );
      return false;
    });
    $(".product-trigger").click(function () {
      $(".product-trigger").removeClass("active"), $(".products").removeClass("active"), $(this).addClass("active");
      $(".products."+$(this).attr("for")).addClass("active");
    });
    $(".navbar-in").removeClass("ln")
    if ($(window).scrollTop() > 0) {
      $('.navbar').addClass('fixed');
    } else {
      $('.navbar').removeClass('fixed');
    }
    $(window).bind('scroll', function () {
      if ($(window).scrollTop() > 0) {
          $('.navbar').addClass('fixed');
      } else {
          $('.navbar').removeClass('fixed');
      }
  });
    $(".reviews-in").owlCarousel({
      loop: true,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1
        },
        670: {
          items: 1
        },
        1000: {
          items: 3,
          margin: 40,
        }
      }
    });
    $(".mobile-menu > i, .mobile-link").click(function(){
      $(".mobile-menu > i").toggleClass("active");
      $("body").toggleClass("navopen");
    });
    AOS.init({
     once: true
  });
  });