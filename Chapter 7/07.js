// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.
$(document).ready(function () {
  console.log($("#books"));
  let $books = $("#books");
  let $controls = $('<div id="books-controls"></div>');
  $controls.insertAfter($books);

  $("<button>Pause</button>")
    .click(function (event) {
      event.preventDefault();
      $books.cycle("pause");
      $.cookie("cyclePaused", "y");
    })
    .button({
      icons: { primary: "ui-icon-pause" },
    })
    .appendTo($controls);
  $("<button>Resume</button>")
    .click(function (event) {
      event.preventDefault();
      let $paused = $("ul:paused");
      if ($paused.length) {
        $paused.cycle("resume");
      } else {
        $(this).effect("shake", {
          distance: 10,
        });
      }
      /* Customized selection  */
      //$books.cycle("resume");
      //$("ul:paused").cycle("resume");
      $.cookie("cyclePaused", null);
    })
    .button({
      icons: { primary: "ui-icon-play" },
    })
    .appendTo($controls);

  $books.cycle({
    timeout: 1000,
    speed: 400,
    pause: true,
    before: function () {
      $("#slider").slider("value", $("#books li").index(this));
    },
  });

  $books.hover(
    function () {
      $books.find(".title").animate(
        {
          backgroundColor: "#eee",
          color: "#000",
        },
        1000
      );
    },
    function () {
      $books.find(".title").animate(
        {
          backgroundColor: "#000",
          color: "#fff",
        },
        1000
      );
    }
  );

  /* Slider  */
  $('<div id="slider"></div>')
    .slider({
      min: 0,
      max: $("#books li").length - 1,
      slide: function (event, ui) {
        $books.cycle(ui.value);
      },
    })
    .appendTo($controls);

  /* Class Animations with jQuerry UI  */
  $("h1").click(function () {
    $(this).toggleClass("highlighted", "slow", "easeInExpo");
  });
});
