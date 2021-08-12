$(document).ready(function () {
  console.log("start");
  $("#btn-menu-responsive").click(function () {
    $(".m-menu").toggleClass("active");
    $("body").toggleClass("no-scroll");
  });
});
new WOW().init();
