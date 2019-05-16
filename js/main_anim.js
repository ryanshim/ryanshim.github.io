

$(document).ready(function() {
  var nav_height = $("nav").height();

  function scroll(target) {
    var scroll_pos = $(target).offset().top - nav_height;
    $('html, body').animate({
      scrollTop: scroll_pos
    }, 600);
  }

  $("#main-btn").click(function() {
    var scroll_pos = $("#trgt-main").offset().top - nav_height;
    $('html, body').animate({
      scrollTop: scroll_pos
    }, 600);
  });

  $("#edu-btn").click(scroll("target-edu"));

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
