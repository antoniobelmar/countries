$(document).ready(function(){

  $("#country").change(function() {
    var country = $(this).val()
    $("#"+country.split(' ').join('')).removeClass()
    $(this).val("")
  });

})
