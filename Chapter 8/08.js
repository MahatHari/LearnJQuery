// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.
$(document).ready(function () {
  let $inventory = $("#inventory tbody");
  let quantities = $inventory
    .find("td:nth-child(2)")
    .map((index, qty) => $(qty).text())
    .get();

  let prices = $inventory
    .find("td:nth-child(3)")
    .map((index, price) => $(price).text())
    .get();

  let sum = $.sum(quantities);
  $("#sum").find("td:nth-child(2)").text(sum);
  let average = $.average(quantities);
  $("#average").find("td:nth-child(2)").text(average);
  let priceAvg = $.average(prices);
  $("#average").find("td:nth-child(3)").text(priceAvg.toFixed(2));
  let priceSum = $.sum(prices);
  $("#sum").find("td:nth-child(3)").text(priceSum.toFixed(2));

  $("table").click(function () {
    $("tr").swapClass("one", "two");
  });
  $("h1").shadow({
    copyOffset: function (index) {
      return { x: -index, y: -2 * index };
    },
  });

  /* Using our tooltip */
  $("a").tooltip();
});
