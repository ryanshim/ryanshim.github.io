$(document).ready(function() {
  var nav_height = $("nav").height();
  $("#main-btn").click(function() {scroll("#trgt-main", nav_height);});
  $("#edu-btn").click(function() {scroll("#trgt-edu", nav_height);});
  $("#exp-btn").click(function() {scroll("#trgt-exp", nav_height);});
  $("#prj-btn").click(function() {scroll("#trgt-prj", nav_height);});
  $("#contact-btn").click(function() {scroll("#trgt-contact", nav_height);});
});

function scroll(target, nheight) {
  var scroll_pos = $(target).offset().top - nheight;
  $('html, body').animate({
    scrollTop: scroll_pos
  }, 600);
}
