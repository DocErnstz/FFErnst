$("#mainBar").on("scroll", function () {
  var scrollPos = $("#mainBar").scrollTop();
  if (scrollPos > 40) {
    $(".navbar").addClass("shadownav");
  } else {
    $(".navbar").removeClass("shadownav");
  }
});
