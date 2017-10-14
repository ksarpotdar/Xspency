// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $('#login').on('click', function(event) {
    var newLogin = {
      userId: $('#username').val,
      password: $('#password').val,
      mgrFlag: false
    };

    // Send the POST request
    $.ajax('/api/login', {
      type: 'POST',
      data: newLogin
    }).then(function(result) {
      if (result.status === 401) {
        alert('Incorrect username or password.');
      }
    });
  });
});
