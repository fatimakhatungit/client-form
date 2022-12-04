// Quick & dirty toggle to demonstrate modal toggle behavior
$(document).ready(function () {
  $("#start-form").on("click", function (e) {
    e.preventDefault();
    $("#form-overlay").addClass("form-open");
  });

  var swiper = new Swiper('.form-slider', {
    //direction: 'vertical',
    slidesPerView: 1,
    mousewheel: false,
    simulateTouch: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});