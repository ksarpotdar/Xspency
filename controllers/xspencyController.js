var express = require("express");

var router = express.Router();

// Import the model (xspency.js) to use its database functions.
var xspency = require("../models/xspency.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    res.render("login", {});
//   xspency.all(function(data) {
//     var hbsObject = {
//       cats: data
//     };
//     console.log(hbsObject);
//     res.render("login", hbsObject);
//   });
});

router.post("/api/login", validation('../rules/login.json'), function(req,res){
    //check login credentials against DB and return data based on user type
    xspency.login(function(data){
            //     var hbsObject = {
            //       user: data
            //     };
            //     console.log(hbsObject);
            // if data.type === 'employee'
            // res.render("employee", hbsObject);
            // if data.type === 'manager'
            // res.render("manager", hbsObject);
    });
});



router.post("/api/expenses", function(req, res) {
    console.log('add expense route');
//   xspency.create([
//     "name", "sleepy"
//   ], [
//     req.body.name, req.body.sleepy
//   ], function(result) {
//     // Send back the ID of the new quote
//     res.json({ id: result.insertId });
//   });
});

router.put("/api/expenses/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("update expense route");

//   xspency.update({
//     sleepy: req.body.sleepy
//   }, condition, function(result) {
//     if (result.changedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
});

// Export routes for server.js to use.
module.exports = router;
