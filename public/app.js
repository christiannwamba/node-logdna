
$(function() {
    $("form").submit(function(event) {
      event.preventDefault();
      var user = {
        name: $('input#name').val(),
        email: $('input#email').val(),
        password: $('input#password').val()
      }
      $.post("/loguser", { userData: user }, function() {
        $("input").val("");
        $("input").focus();
      });
    });
  });