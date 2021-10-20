$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const userInput = $("input#userInput").val().toUpperCase();
    $("ul#response").prepend("<li>" + userInput + "</li>");
  });
});    