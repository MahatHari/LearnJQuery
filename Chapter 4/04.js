// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.
/* $(document).ready(function () {
  const $firstpara = $("p").eq(1);
  $firstpara.hide();
  $("a.more").click(function (event) {
    event.preventDefault();
    if ($firstpara.is(":hidden")) {
      $firstpara.fadeIn("slow");
      $(this).text("read less");
    } else {
      $firstpara.fadeOut("slow");
      $(this).text("read more");
    }
  });
}); */

/* Using SlideToggle  */
// $(document).ready(function () {
//   const $firstPara = $("p").eq(1);
//   $firstPara.hide();
//   $("a.more").click(function (e) {
//     e.preventDefault();
//     $firstPara.slideToggle("slow");
//     const link = $(this);
//     if (link.text() === "read more") {
//       link.text("read less");
//     } else {
//       link.text("read more");
//     }
//   });
// });
/* Building Effects by Hand */
$(document).ready(function () {
  const firstPara = $("p").eq(1);
  firstPara.hide();
  $("a.more").click(function (e) {
    e.preventDefault();

    firstPara.animate({ height: "toggle", opacity: "toggle" }, "slow");

    const link = $(this);
    if (link.text() === "read more") {
      link.text("read less");
    } else {
      link.text("read more");
    }
  });
});

$(document).ready(function () {
  const speech = $("div.speech");
  const defaultSize = speech.css("fontSize");
  $("#switcher button ").click(function () {
    let num = parseFloat(speech.css("fontSize"));

    switch (this.id) {
      case "switcher-large":
        num *= 1.4;
        break;
      case "switcher-small":
        num /= 1.4;
        break;
      default:
        num = parseFloat(defaultSize);
    }
    speech.animate({ fontSize: num + "px" }, "slow");
  });
});

// $(document).ready(function () {
//   $("div.label").click(function (e) {
//     e.preventDefault();
//     let paraWidth = $("div.speech p").outerWidth();
//     let switcher = $(this).parent();
//     let switcherWidth = switcher.outerWidth();

//     switcher
//       .css({
//         position: "relative",
//       })
//       .animate(
//         {
//           left: paraWidth - switcherWidth,
//         },
//         "slow"
//       )
//       .animate(
//         {
//           height: "+=20px",
//         },
//         "slow"
//       )
//       .animate(
//         {
//           borderWidth: "5px",
//         },
//         "slow"
//       );
//   });
// });

/* Queuing effects manually */
$(document).ready(function () {
  $("div.label").click(function (e) {
    e.preventDefault();
    let paraWidth = $("div.speech p").outerWidth();
    let switcher = $(this).parent();
    let switcherWidth = switcher.outerWidth();

    switcher
      .css({
        position: "relative",
      })
      .fadeTo("fast", 0.5)
      .animate(
        {
          left: paraWidth - switcherWidth,
        },
        {
          duration: "slow",
          queue: false,
        }
      )
      .animate(
        {
          height: "+=20px",
        },
        "slow"
      )
      .fadeTo("slow", 1.0)
      .slideUp("slow")
      .queue(function (next) {
        switcher.css({ backgroundColor: "#f00" });
        next();
      })

      .animate(
        {
          borderWidth: "5px",
        },
        "slow"
      )
      .slideDown("slow");
  });
});
$(document).ready(function () {
  $("p")
    .eq(2)
    .css("border", "1px solid #333")
    .click(function () {
      let clickedItem = $(this);
      clickedItem.next().slideDown("slow", function () {
        clickedItem.slideUp("slow");
      });
    });
  $("p").eq(3).css("backgroundColor", "#ccc").hide();
});
