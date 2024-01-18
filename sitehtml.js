$(document).ready(function () {
  $(".choose").click(function () {
    var selectedVal = $('input[name="fav_language"]:checked').val();
    var parsedValue = parseInt(selectedVal);
    console.log(parsedValue);
    if (parsedValue >= 3) {
      $("#w3review").hide();
    }
  });
});
