// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  var mgrRedirect;

  $('#login').on('click', function(event) {
    var newLogin = {
      userId: $('#username').val(),
      password: $('#password').val(),
      managerView: $('#manager').is(':checked')
    };
    mgrRedirect = $('#manager').is(':checked');
    // Send the POST request
    $.ajax('/api/login', {
      type: 'POST',
      data: newLogin
    }).then(function(result) {
      if (result.response === 'Invalid username or password') {
        alert('Incorrect username or password.');
      } else {
        $.cookie('authenticated', true);
        if (mgrRedirect === true) {
          var ids = result.empIds.toString();
          window.location.href = '/manager/' + ids;
        } else {
          var id = result.id;
          window.location.href = '/employee/' + id;
        }
      }
    });
  });
});
