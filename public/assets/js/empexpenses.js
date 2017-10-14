var Controller = require('../controllers');

var newLogin = {
  userId: $('#username').val,
  password: $('#password').val,
  mgrFlag: false
};

// Create a new expense
$.ajax('/api/expense', {
  type: 'POST',
  data: newLogin
}).then(function() {
  on('click');
  console.log('created new expense line');
  // Reload the page to get the updated list
  location.reload();
});

// Delete an expense
$.ajax('/api/expense/delete/:id' + id, {
  type: 'PUT'
}).then(function() {
  console.log('changed to devoured');
  // Reload the page to get the updated list
  location.reload();
});

$('.create-form').on('submit', function(event) {
  // Make sure to preventDefault on a submit event.
  event.preventDefault();

});
