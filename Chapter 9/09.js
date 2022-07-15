// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.
$(document).ready(function () {
  function stripe() {
    $("#news tbody").each(function () {
      $(this)
        .children()
        .has("td")
        .filter(function (index) {
          return index % 4 < 2;
        })
        .addClass("alt");
    });
  }
  stripe();
  $("#topics a").click(function (event) {
    event.preventDefault();
    let topic = $(this).text();
    $("#topics a.selected").removeClass("selected");
    $(this).addClass("selected");

    // $("#news tr").show();
    // if (topic !== "All") {
    //   $('#news tr:has(td):not(:contains("' + topic + '"))').hide();
    // }
    /* Avoiding other td having topic as substring */
    $("#news").find("tr").show();
    if (topic !== "All") {
      $("#news") // select #news
        .find("tr:has(td)") //find tr with that has td
        // not the matched value
        .not(function () {
          return $(this).children(":nth-child(4)").text() === topic; // check for 4th td in tr and check if its text is same
        })
        .hide(); //hide those not matching
    }
    stripe();
  });
  /* Striping table rows */
  // $("#news").find("tr:nth-child(even)").addClass("alt");

  /* String table rows using filter, on each 2 and not each two */
});
