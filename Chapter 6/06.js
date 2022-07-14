// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.
$(document).ready(function () {
  /* Load HTML File */
  $("#letter-a a").click(function (e) {
    e.preventDefault();
    $("#dictionary").load("a.html");
    alert("Loaded");
  });

  /* Load JSON data and create html  */
  $("#letter-b a").click(function (e) {
    e.preventDefault();
    $.getJSON("b.json", function (data, textStatus, jqXHR) {
      let html = "";
      $.each(data, function (entryIndex, entry) {
        html += '<div class= "entry" >';
        html += '<h3 class= "term">' + entry.term + "</h3>";
        html += '<div class ="part">' + entry.part + "</div>";
        html += '<div class="definition">';
        html += entry.definition;
        if (entry.quote) {
          html += '<div class=" quote">';
          $.each(entry.quote, function (lineIndex, line) {
            html += '<div class= " quote-line">' + line + "</div>";
          });
          if (entry.author) {
            html += '<div class = " quote-author ">' + entry.author + "</div>";
          }
          html += "</div>";
        }
        html += "</div>";
        html += "</div>";
      });
      $("#dictionary").html(html);
    });
  });

  /* Load Javascript file */
  $("#letter-c a").click(function (e) {
    e.preventDefault();
    $.getScript("c.js");
  });

  /* Load XML File */
  $("#letter-d a").click(function (e) {
    e.preventDefault();
    $.get("d.xml", function (data) {
      $("#dictionary").empty();

      $(data)
        .find("entry")
        .each(function () {
          let $entry = $(this);
          let html = '<div class= "entry">';
          html += '<h3 class="term">' + $entry.attr("term");
          html += "</h3>";
          html += '<div class="part">' + $entry.attr("part");
          html += "</div>";
          html += '<div class= "definition">';
          html += $entry.find("definition").text();
          let quote = $entry.find("quote");
          if (quote.length) {
            html += '<div class="quote">';
            quote.find("line").each(function () {
              html += '<div class=" quote-line">';
              html += $(this).text() + "</div>";
            });
            if (quote.attr("author")) {
              html += '<div class= " quote-author">';
              html += quote.attr("author") + "</div>";
            }
            html += "</div>";
          }
          html += "</div>";
          html += "</div>";
          $("#dictionary").append($(html));
        });
    });
  });
});
