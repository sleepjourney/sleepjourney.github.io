$(document).ready(function() {

  $("#navbar").css("opacity", "0");
  $("#navbar").css("top", "-5.5vh");
  $("#content").css("opacity", "0");

  $(window).scroll(function() {

    var scroll = $(window).scrollTop();

    var object = $("#content");

    var position = object.offset().top;

    if (scroll > position) {
      $("#navbar").css("top", "0");
      $("#navbar").css("opacity", "0.8");
      $("#content").css("animation-name", "fade-in-bottom");
    } else {
      $("#navbar").css("top", "-5.5vh");
      $("#navbar").css("opacity", "0");
    }

  });
});
