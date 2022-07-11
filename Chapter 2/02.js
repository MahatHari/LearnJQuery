// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.
$(document).ready(function () {
  $("#selected-plays > li").addClass("special");
  $("li>a").parent().siblings().addClass("afterlink");
  $('a[href$=".pdf"]').parent().closest("ul").addClass("tragedy");
});
$(document).ready(function () {
  $("td:nth-child(3)").addClass("year");
  $("td:contains(Tragedy)").parent().first().addClass("special");
});
