var express = require('express');
var validate = require('express-validation');
var router = express.Router();

// Import the model (xspency.js) to use its database functions.
var xspency = require('../models/xspency.js');

// Create all our routes and set up logic within those routes where required.
router.get('/', function(req, res) {
  res.render('login', {});
  //   xspency.all(function(data) {
  //     var hbsObject = {
  //       cats: data
  //     };
  //     console.log(hbsObject);
  //     res.render('login', hbsObject);
  //   });
});

// Log in route to determine manager or employee function
router.post('/api/login', validate(validation.login), function(req, res) {
  //check login credentials against DB and return data based on user type
  xspency.login(function(data) {
    var hbsObject = {
      user: data
    };
    console.log(hbsObject);
    if (data.type === 'employee') res.render('employee', hbsObject);
    if (data.type === 'manager') res.render('manager', hbsObject);
  });
});

// Add new expense line
router.post('/api/expenses', function(req, res) {
  console.log('add expense route');
  // xspency.create(
  //   [
  //     'empId',
  //     'empName',
  //     'date',
  //     'duration',
  //     'type',
  //     'amount',
  //     'approval'
  //   ],
  //   [
  //     req.body.empId,
  //     req.body.empName,
  //     req.body.date,
  //     req.body.duration,
  //     req.body.type,
  //     req.body.amount,
  //     req.body.approval
  //   ],
  //   function(result) {
  //     // Send back the ID of the new quote
  //     res.json({ id: result.insertId });
  //   }
  // );
});

// Update an existing expense line
router.put('/api/expenses/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;

  console.log('update expense route');

  // xspency.update(
  //   {
  //     date: req.body.date,
  //     duration: req.body.duration,
  //     type: req.body.type,
  //     amount: req.body.amount,
  //     approval: req.body.approval
  //   },
  //   condition,
  //   function(result) {
  //     if (result.changedRows == 0) {
  //       // If no rows were changed, then the ID must not exist, so 404
  //       return res.status(404).end();
  //     } else {
  //       res.status(200).end();
  //     }
  //   }
  // );
});

// Delete an existing expense line
router.put('/api/expenses/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;

  console.log('delete expense route');

  // xspency.delete(
  //   condition,
  //   function(result) {
  //     if (result.changedRows == 0) {
  //       // If no rows were changed, then the ID must not exist, so 404
  //       return res.status(404).end();
  //     } else {
  //       res.status(200).end();
  //     }
  //   }
  // );
});

// Export routes for server.js to use.
module.exports = router;
