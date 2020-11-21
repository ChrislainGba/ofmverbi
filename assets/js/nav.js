var width = $(window).width();

// $(window).resize(function () {
//   if ($(window).width() > 770) {
//     $("#navTrigger").css("display", "none");
//     $("#navTriggerClose").css("display", "none");
//     $("#mySidepanel").css("width", 0);
//     console.log(width);
//     width = $(window).width();
//   } else {
//     $("#navTrigger").css("display", "block");
//   }
// });

$(window).scroll(function () {
  if ($(document).scrollTop() > 50) {
    $(".nav").addClass("affix");
    //$("#head-home").addClass("home-hide");
    $("div#head-home").css({ background: "none" });
    console.log("OK");
  } else {
    $(".nav").removeClass("affix");
    // $("#head-home").removeClass("home-hide");
    $("div#head-home").css({
      background: "url('assets/images/frans-slide0.jpg')",
    });
  }
});

// $(".navTrigger").click(function () {
//   $(this).toggleClass("active");
//   console.log("Clicked menu");
//   $("#mainListDiv").toggleClass("show_list");
//   $("#mainListDiv").fadeIn();
// });

// $(document).ready(function () {
//   $("#navbarDropdown").mouseenter(function () {
//     $(".dropdown-menu").slideToggle(300, "linear");
//   });

//   $(".dropdown-menu").mouseleave(function () {
//     $(this).slideToggle(300, "linear");
//   });
// });

$(document).ready(function () {
  // $(".dropdown-toggle").mouseenter(function () {
  //   var getChild = $(this).parent().find(".dropdown-menu");
  //   getChild.slideToggle(300, "linear");
  // });
  // $(".dropdown-menu").mouseleave(function () {
  //   $(this).slideToggle(300, "linear");
  // });
  //   $(".dropdown-toggle").bind("mouseleave mouseenter", function () {
  //     var getChild = $(this).parent().find(".dropdown-menu");
  //     getChild.slideToggle(300, "linear");
  //   });
});

$(".List").on("click", function () {
  var getparent = $(this).parent().attr("id");
  alert(getparent);
});

var $item = $(".carousel-item");
var $wHeight = $(window).height();
$item.eq(0).addClass("active");
$item.height($wHeight);
$item.addClass("full-screen");

$(".carousel img").each(function () {
  var $src = $(this).attr("src");
  var $color = $(this).attr("data-color");
  $(this)
    .parent()
    .css({
      "background-image": "url(" + $src + ")",
      "background-color": $color,
    });
  $(this).remove();
});

$(window).on("resize", function () {
  $wHeight = $(window).height();
  $item.height($wHeight);
});

$(".carousel").carousel({
  interval: 6000,
  pause: "false",
});
