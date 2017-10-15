if (!$.cookie('authenticated')) {
  window.location.href = '/';
}
$(function() {
  $('#addButton').on('click', function(event) {
    var newExpense = {
      expName: $('#expName').val(),
      date: $('#date').val(),
      duration: $('#duration').val(),
      costType: $('#costType').val(),
      amount: $('#amount').val(),
      EmployeeId: $('#employeeId').val()
    };

    // Create a new expense
    $.ajax('/api/expense', {
      type: 'POST',
      data: newExpense
    }).then(function() {
      console.log('created new expense line');
      // Reload the page to get the updated list
      location.reload();
    });
  });

  // Delete an expense
  $('.deleteButton').on('click', function(event) {
    var id = $(this).data('id');
    // Send the PUT request.
    $.ajax('/api/expense/delete/' + id, {
      type: 'PUT'
    }).then(function() {
      console.log('deleted expense item');
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
