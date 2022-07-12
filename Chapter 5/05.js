// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.
$(document).ready(function () {
  $("div.chapter a[href*='wikipedia']").attr({
    rel: "external",
    title: function () {
      return "Learn more about " + $(this).text() + " at Wikipedia. ";
    },
    id: function (index, oldValue) {
      return "wikilink-" + index;
    },
  });
  /* Creating and Instering new Elements */
  $('<a href="#top"> back to top </a>').insertAfter("div.chapter p");
  $('<a id="top" ></a>').prependTo("body");

  /* Moving Elements */
  /* STYLE 1 */
  //   let notes = $('<ol id="notes"> </ol>').insertBefore("#footer");
  //   $("span.footnote").each(function (index) {
  //     $("<sup>" + (index + 1) + "</sup>").insertBefore(this);
  //     $(this).appendTo(notes).wrap("<li></li>");
  //   });

  /* Moving ELEMENT with inverted form, to exploit chaingin */
  /* STYLE 2 */
  let notes = $('<ol id="notes"> </ol>').insertBefore("#footer");
  $("span.footnote").each(function (index) {
    $(this)
      .before(
        [
          '<a href="#footnote-',
          index + 1,
          '" id="context-',
          index + 1,
          '" class="context">',
          "<sup>",
          index + 1,
          "</sup></a>",
        ].join("")
      )
      .appendTo(notes)
      .append(
        ['&nbsp; (<a href="#context-', index + 1, '">context</a>)'].join("")
      )
      .wrap('<li id="footnote-' + (index + 1) + '"></li>');
  });
});
