$(document).ready(function () {
  new WOW().init();
  console.log("start");
  $("#btn-menu-responsive").click(function () {
    $(".m-menu").toggleClass("active");
    $("body").toggleClass("no-scroll");
  });
});
