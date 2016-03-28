$(document).ready(function() {

  $('#nav-toggle').click(function() {
    $('nav').animate({"left":"0px"}, 400);
  });

  $('#nav-close').click(function() {
    $('nav').animate({"left":"-300px"}, 400);
  });

  $('#cocktail-origin-toggle').click(function() {
    $('#cocktail-origin-stories').toggle();
  });

});