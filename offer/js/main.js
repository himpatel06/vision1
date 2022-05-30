$(document).ready(function () {
  $(".go_toform").click(function () {
    $("html, body").animate(
      { scrollTop: $("#order_form").offset().top - 300 },
      1500
    );
    return false;
  });
  $(".review-slider").lightSlider({
    item: 3,
    controls: false,
    enableDrag: false,
    responsive: [
      { breakpoint: 1000, settings: { item: 1, enableDrag: false } },
    ],
  });
});
