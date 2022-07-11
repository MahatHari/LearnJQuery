// /* // This is the custom JavaScript file referenced by index.html. You will notice
// // that this file is currently empty. By adding code to this empty file and
// // then viewing index.html in a browser, you can experiment with the example
// // page or follow along with the examples in the book.
// //
// // See README.txt for more information.
// $(document).ready(function () {
//   //   $("#switcher-large").on("click", function () {
//   //     $("body").removeClass().addClass("large");
//   //   });
//   //   $("#switcher-narrow").on("click", function () {
//   //     $("body").removeClass().addClass("narrow");
//   //   });
//   $("#switcher-default").addClass("selected");
//   /*
//   $("#switcher button").on("click", function () {
//     let bodyClass = this.id.split("-")[1];
//     $("body").removeClass().addClass(bodyClass);
//     $("#switcher button").removeClass("selected");
//     $(this).addClass("selected");
//   }); */
//   /* Above can be written using event bubling as well */
//   /*   $("#switcher button").click(function (event) {
//     let bodyClass = this.id.split("-")[1];
//     $("body").removeClass().addClass(bodyClass);
//     $("#switcher button").removeClass("selected");
//     $(this).addClass("selected");
//     event.stopProgation();
//   });
//  */
//   $("#switcher").click(function (event) {
//     if ($(event.target).is("button")) {
//       console.log(event.target);
//       let bodyClass = event.target.id.split("-")[1];
//       $("body").removeClass().addClass(bodyClass);
//       $("#switcher button").removeClass("selected");
//       $(event.target).addClass("selected");
//       event.stopPropagation();
//     } else {
//       $("#switcher button").toggleClass("hidden");
//     }
//   });

//   /* $("#switcher").click(function (event) {
//     if (event.target == this) {
//       $("#switcher button").toggleClass("hidden");
//     }
//   }); */
//   $("#switcher h3").hover(
//     function () {
//       $(this).addClass("hover");
//     },
//     function () {
//       $(this).removeClass("hover");
//     }
//   );
// });

$(document).ready(function () {
  //ENABLE hover effect on style switcher
  $("#switcher").hover(
    function () {
      $(this).addClass("hover");
    },
    function () {
      $(this).removeClass("hover");
    }
  );

  //ALLOW THE STYLE SWITCHER TO EXPAND AND COLLAPSE

  const toggleSwitcher = function (event) {
    if (!$(event.target).is("button")) {
      $("#switcher button").toggleClass("hidden");
    }
  };
  $("#switcher").on("click", toggleSwitcher);
  //SIMULATE THE CLICK SO WE CAN START ON COLLPSED STATE
  $("#switcher").click();

  //The setBodyClass() function changes the page style
  const setBodyClass = function (className) {
    $("body").removeClass().addClass(className);
    $("#switcher button").removeClass("selected");
    $("#switcher-" + className).addClass("selected");
    $("#switcher").off("click", toggleSwitcher);
    if (className === "defult") {
      $("#switcher").on("click", toggleSwitcher);
    }
  };

  //BEGIN WITH THE SWITCHER-DEFULT BUTTON SELECTED

  $("#switcher-default").addClass("selected");

  //Map key codes to their corresponding buttons to click

  const triggers = {
    D: "default",
    N: "narrow",
    L: "large",
  };
  // call setBodyClss when a button is clicked
  $("#switcher").click(function (event) {
    if ($(event.target).is("button")) {
      const bodyClass = event.target.id.split("-")[1];
      setBodyClass(bodyClass);
    }
  });

  //Call setBodyClass when a key is pressed
  $(document).keyup(function (event) {
    const key = String.fromCharCode(event.keyCode);
    console.log(key);
    if (key in triggers) {
      setBodyClass(triggers[key]);
    }
  });
});
