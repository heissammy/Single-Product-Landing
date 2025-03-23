$(document).ready(function () {
  //   var counter = $(".count-num");
  //   if (counter.length) {
  //     counter.counterUp({
  //       delay: 10,
  //       time: 1000,
  //     });
  //   }
  ("use strict"); //Start of Use Strict
  var menu_bar = $(".navbar-expand-lg");
  var menu_li = $(".navbar-nav li a");
  var collapse = $(".navbar-collapse");
  var top_nav = $("#top-nav");

  //MENU SCROLL
  if (top_nav.length) {
    var x = top_nav.offset().top;
    if (x > 50) {
      top_nav.fadeIn();
    } else {
      top_nav.fadeOut();
    }
    $(document).on("scroll", function () {
      var y = $(this).scrollTop();
      if (y > 50) {
        top_nav.fadeIn();
      } else {
        top_nav.fadeOut();
      }
    });
  }
  $(".navbar-nav a[href*=#]").bind("click", function (e) {
    e.preventDefault(); // prevent hard jump, the default behavior

    var target = $(this).attr("href"); // Set the target as variable

    // perform animated scrolling by getting top-position of target-element and set it as scroll target
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(target).offset().top - 75,
        },
        600
      );

    return false;
  });

  // SCROLL TOP
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 50) {
      $("#return-to-top").fadeIn(200);
    } else {
      $("#return-to-top").fadeOut(200);
    }
  });
  $("#return-to-top").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      500
    );
  });

  $(window)
    .scroll(function () {
      var scrollDistance = $(window).scrollTop();
      $(".section-all").each(function (i) {
        if ($(this).position().top <= scrollDistance) {
          $(".navbar-nav a.active").removeClass("active");
          $(".navbar-nav a").eq(i).addClass("active");
        }
      });
    })
    .scroll();

  //RESPONSIVE MENU SHOW AND HIDE FUNCTION
  if (menu_li.length) {
    menu_li.on("click", function (event) {
      var disp = $(".navbar-toggler").css("display");
      if (!$(".navbar-toggler").hasClass("collapsed")) {
        if (collapse.hasClass("show")) {
          collapse.removeClass("show").slideUp("slow");
        }
      }
    });
  }
});
