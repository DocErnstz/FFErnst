$.ScrollBar = function (Section, steps, visitedSteps) {
  this.lastPos = 0;
  this.comingBack = false;
  this.Section = Section;
  this.steps = steps;
  this.visitedSteps = visitedSteps;
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
var scrollbar = new $.ScrollBar(
  $("#mainBar"),
  {
    450: "#AboutMe",
    950: "#title",
    1150: "#Project1",
    1550: "#Project2",
    1950: "#Project3",
    2350: "#Project4",
    2550: "#titleMore1",
    2650: "#titleMore2",
    3150: "line 1",
    3450: "line 2",
    3850: "line 3",
  },
  []
);

scrollbar.Section.on("scroll", function () {
  scrollbar.checkComing();
  scrollbar.setLastPos();
  Object.keys(scrollbar.steps).forEach((step) => {
    if (
      scrollbar.Section.scrollTop() > step &&
      scrollbar.steps[step].split(" ").length > 1 &&
      !scrollbar.visitedSteps.includes(scrollbar.steps[step].split(" ")[1])
    ) {
      $(
        `.sideprojects > li:nth-child(${
          (parseInt(scrollbar.steps[step].split(" ")[1]) - 1) * 3 + 1
        }`
      ).addClass("showUp");
      $(
        `.sideprojects > li:nth-child(${
          (parseInt(scrollbar.steps[step].split(" ")[1]) - 1) * 3 + 2
        })`
      ).addClass("showUp");

      $(
        `.sideprojects > li:nth-child(${
          (parseInt(scrollbar.steps[step].split(" ")[1]) - 1) * 3 + 3
        })`
      ).addClass("showUp");
      scrollbar.visitedSteps.push(scrollbar.steps[step].split(" ")[1]);
    } else if (
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

$(".sideprojects > li").mouseover(function () {
  $(this).removeClass("showUp");
  $(this).css({ opacity: "1" });
});
