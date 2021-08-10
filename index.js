$.ScrollBar = function (Section) {
  this.lastPos = 0;
  this.comingBack = false;
  this.Section = Section;
};
$.ScrollBar.prototype = {
  checkComing: function () {
    if (
      this.lastPos > this.Section.scrollTop() &&
      this.Section.scrollTop() != 0
    ) {
      this.comingBack = true;
    } else {
      this.comingBack = false;
    }
  },
  setLastPos: function () {
    this.lastPos = this.Section.scrollTop();
  },
};
var scrollbar = new $.ScrollBar($("#mainBar"));

$("#mainBar").on("scroll", function () {
  scrollbar.checkComing();
  scrollbar.setLastPos();

  if (scrollbar.Section.scrollTop() > 40) {
    $(".navbar").addClass("shadownav");
  } else {
    $(".navbar").removeClass("shadownav");
  }
  if (scrollbar.comingBack) {
    console.log("0");
    $(".navbar").removeClass("shadownav");
    $(".navbar").addClass("comeback");
  } else {
    $(".navbar").removeClass("comeback");
  }
});
