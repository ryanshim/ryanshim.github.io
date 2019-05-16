$(document).ready(function() {
  var nav_height = $("nav").height();


  $("#main-btn").click(function() {
    var scroll_pos = $("#trgt-main").offset().top - nav_height;
    $('html, body').animate({
      scrollTop: scroll_pos
    }, 600);
  });

  $("#edu-btn").click(function() {scroll("target-edu", nav_height);});

  /*
  $("#edu-btn").click(function() {
    var scroll_pos = $("#trgt-edu").offset().top - nav_height;
    $('html, body').animate({
      scrollTop: scroll_pos
    }, 600);
  });
  */

  $("#exp-btn").click(function() {
    var scroll_pos = $("#trgt-exp").offset().top - nav_height;
    $('html, body').animate({
      scrollTop: scroll_pos 
    }, 600);
  });

  $("#prj-btn").click(function() {
    var scroll_pos = $("#trgt-prj").offset().top - nav_height;
    $('html, body').animate({
      scrollTop: scroll_pos
    }, 600);
  });

  $("#contact-btn").click(function() {
    var scroll_pos = $("#trgt-contact").offset.top - nav_height;
    $('html, body').animate({
      scrollTop: scroll_pos
    }, 600);
  });
});

function scroll(target, nheight) {
  var scroll_pos = $(target).offset().top - nheight;
  $('html, body').animate({
    scrollTop: scroll_pos
  }, 600);
}
