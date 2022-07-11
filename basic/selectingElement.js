$(document).ready(function () {
  $("#selected-plays >li").addClass("horizontal");

  //selecting list with no horizontal class
  $("#selected-plays li:not(.horizontal)").addClass("sub-level");
  //Also folowing can be used
  // $("li:not(.horizontal").addClass("sub-level");

  /* Attribute Selectrors */
  $('a[href^="mailto:"]').addClass("mailto");
  $('a[href$=".pdf"').addClass("pdflink");
  $('a[href^="http"][href*="henry"]').addClass("henrylink");
});
