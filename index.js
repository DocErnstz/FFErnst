$.ScrollBar = function (Section, steps) {
  this.lastPos = 0;
  this.comingBack = false;
  this.Section = Section;
  this.steps = steps;
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
var scrollbar = new $.ScrollBar($("#mainBar"), {
  450: "#AboutMe",
  950: "#title",
  1150: "#Project1",
  1550: "#Project2",
  1950: "#Project3",
  2350: "#Project4",
});

$("#mainBar").on("scroll", function () {
  scrollbar.checkComing();
  scrollbar.setLastPos();
  Object.keys(scrollbar.steps).forEach((step) => {
    if (
      scrollbar.Section.scrollTop() > step &&
      !$(scrollbar.steps[step]).hasClass("showUp")
    ) {
      $(scrollbar.steps[step]).addClass("showUp");
    }
  });

  if (scrollbar.Section.scrollTop() > 40) {
    $(".navbar").addClass("shadownav");
  } else {
    $(".navbar").removeClass("shadownav");
  }
  if (scrollbar.comingBack) {
    $(".navbar").removeClass("shadownav");
    $(".navbar").addClass("comeback");
  } else {
    $(".navbar").removeClass("comeback");
  }
});
