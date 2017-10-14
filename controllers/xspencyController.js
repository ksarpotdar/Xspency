var express = require('express');
var validate = require('express-validation');
var loginValidation = require('../validation/login.js');
var expenseValidation = require('../validation/expenseValidation.js');
var deleteValidation = require('../validation/deleteValidation.js');
var router = express.Router();
var Sequelize = require('sequelize');
var hash = require('node_hash');

// Import the model (xspency.js) to use its database functions.
var db = require('../models');

var Op = Sequelize.Op;

function hashInput(input) {
  var salt = 'sUp3rS3CRiT$@lt';
  var salted_sha256 = hash.sha256(input, salt);
  return salted_sha256;
}

router.get('/', function(req, res) {
  res.render('login', {});
});

// Log in route to determine manager or employee function
router.post('/api/login', validate(loginValidation), function(req, res) {
  var mgrView = req.body.managerView;
  var hashpass = hashInput(req.body.password);
  if (mgrView === 'true') {
    // Queries the database for manager with entered username and password
    db.Employee
      .findAll({
        attributes: ['id'],
        where: {
          userId: req.body.username,
          password: hashpass,
          mgrFlag: true
        }
      })
      .then(function(response) {
        if (response.length === 1) {
          // Queries the database for the employee id's that are associated with the manager id
          db.Employee
            .findAll({ attributes: ['id'], where: { mgrId: response[0].id } })
            .then(function(response) {
              // Puts all returned employee id's into an array
              var ids = [];
              response.forEach(function(object) {
                ids.push(object.id);
              });
              // Queries for all expenses associated with the returned employee id's in the array
              db.Expense
                .findAll({
                  where: { EmployeeId: { [Op.in]: ids } },
                  include: [
                    {
                      model: db.Employee,
                      attributes: ['id', 'empName']
                    }
                  ]
                })
                .then(function(response) {
                  console.log(JSON.stringify(response));

                  // Returns all responses to manager handlebar
                  var hbsObject = {
                    Expense: response
                  };
                  console.log(hbsObject);
                  res.render('manager', hbsObject);
                });
            });
        } else {
          res.status(401).json({ response: 'Invalid username or password' });
        }
      });
  } else {
    // Queries the database for employee with entered username and password
    db.Employee
      .findAll({
        attributes: ['id'],
        where: {
          userId: req.body.username,
          password: hashpass
        }
      })
      .then(function(response) {
        if (response.length === 1) {
          // Queries for all expenses associated with the returned employee id's in the array
          db.Expense
            .findAll({ where: { EmployeeId: response[0].id } })
            .then(function(response) {
              console.log(JSON.stringify(response));

              var hbsObject = {
                Expense: response
              };

              // Returns all responses to index handlebar
              res.render('employee', hbsObject);
            });
        } else {
          res.status(401).json({ response: 'Invalid username or password' });
        }
      });
  }
});

// Add new expense line
router.post('/api/expense', validate(expenseValidation), function(req, res) {
  db.Expense
    .create({
      expName: req.body.expName,
      date: req.body.date,
      duration: req.body.duration,
      costType: req.body.costType,
      amount: req.body.amount,
      EmployeeId: req.body.EmployeeId
    })
    .then(function(result) {
      // Send back the ID of the new quote
      var responseObj = {
        recordId: result.dataValues.id
      };
      res.status(200).json(responseObj);
    })
    .catch(function(err) {
      res.status(500).json(err);
    });
  console.log('add expense route');
});

// Delete an existing expense line
router.put('/api/expense/delete/:id', validate(deleteValidation), function(
  req,
  res
) {
  var condition = { where: { id: req.params.id } };

  console.log('delete expense route');

  db.Expense
    .destroy(condition)
    .then(function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    })
    .catch(function(err) {
      res.status(500).json(err);
    });
});

// Update an existing expense line
// router.put('/api/expense/:id', validate(expenseValidation), function(req, res) {
//   var condition = { where: { id: req.params.id } };

//   console.log('update expense route');

//   db.Expense
//     .update(
//       {
//         expName: req.body.expName,
//         date: req.body.date,
//         duration: req.body.duration,
//         type: req.body.costType,
//         amount: req.body.amount
//         //approval: req.body.approval
//       },
//       condition
//     )
//     .then(function(result) {
//       if (result.changedRows == 0) {
//         // If no rows were changed, then the ID must not exist, so 404
//         return res.status(404).end();
//       } else {
//         res.status(200).end();
//       }
//     })
//     .catch(function(err) {
//       res.status(500).json(err);
//     });
// });

// Populates and refreshes employee expense view 
// function expenseLoop() {
//   db.Expense
//     .findAll({ where: { EmployeeId: response[0].id } })
//     .then(function(response) {
//       console.log(JSON.stringify(response));

//       var hbsObject = {
//         Expense: response
//       };

//       // Returns all responses to index handlebar
//       res.render('employee', hbsObject);
//     });
// }

// Export routes for server.js to use.
module.exports = router;
