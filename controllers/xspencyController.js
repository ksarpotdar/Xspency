var express = require('express');
var validate = require('express-validation');
var loginValidation = require('../validation/login.js');
var expenseValidation = require('../validation/expenseValidation.js');
var router = express.Router();
var Sequelize = require('sequelize');

// Import the model (xspency.js) to use its database functions.
var db = require('../models');
var Op = Sequelize.Op

// Log in route to determine manager or employee function
router.post('/api/login', validate(loginValidation), function(req, res) {
    if (req.body.managerView === 'true') {
        // Queries the database for manager with entered username and password
        db.Employee.findAll({attributes:['id'], where:{userId: req.body.username, password: req.body.password, mgrFlag: true}}).then(function(response){
            if (response.length === 1){
                // Queries the database for the employee id's that are associated with the manager id 
                db.Employee.findAll({attributes:['id'], where:{mgrId: response[0].id}}).then(function(response){
                    // Puts all returned employee id's into an array
                    var ids = []
                    response.forEach(function (object){
                        ids.push(object.id);
                    });
                    // Queries for all expenses associated with the returned employee id's in the array 
                    db.Expense.findAll({where:{EmployeeId: {[Op.in]:ids}}}).then(function(response){
                        console.log(JSON.stringify(response))    
                        // Returns all responses in an array of objects 
                        res.json(response);
                        // Returns all responses to index handlebar 
                        // var hbsObject = {
                        //     expenses: response
                        //   };
                        //   //console.log(dbSqlburgers);
                        //   res.render("index", hbsObject);
                        // });
                    })
                })
            } else {
                res.json({response: "no match"})
            }  
        });
    } else {
  // Queries the database for employee with entered username and password
        db.Employee.findAll({attributes:['id'], where:{userId: req.body.username, password: req.body.password}}).then(function(response){
            if (response.length === 1){
            // Queries for all expenses associated with the returned employee id's in the array 
                    db.Expense.findAll({where:{EmployeeId: response[0].id}}).then(function(response){
                        console.log(JSON.stringify(response))    
                        
                        res.json(response);
                        // Returns all responses to index handlebar 
                        // var hbsObject = {
                        //     expenses: response
                        //   };
                        //   //console.log(dbSqlburgers);
                        //   res.render("index", hbsObject);
                        // });
                    })
            } else {
                res.json({response: "no match"})
            }  
        });
    }
});

// Add new expense line
router.post('/api/expenses', validate(expenseValidation), function(req, res) {
  console.log('add expense route');
  // db.Expense.create(
  //   [
  //     'expName',
  //     'date',
  //     'duration',
  //     'type',
  //     'amount',
    //   'EmployeeId'
   //   ],
  //   [
  //     req.body.expName,
  //     req.body.date,
  //     req.body.duration,
  //     req.body.type,
  //     req.body.amount,
//       req.body.EmployeeId
  //   ],
  //   function(result) {
  //     // Send back the ID of the new quote
  //     res.json({ id: result.insertId });
  //   }
  // );
});

// Update an existing expense line
router.put('/api/expenses/:id', validate(expenseValidation), function(req, res) {
  var condition = 'id = ' + req.params.id;

  console.log('update expense route');

  // db.Expense.update(
  //   {
  //     expName: req.body.expName,
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
