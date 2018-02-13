var connection = require("./config/connection.js");
var Burger = require("./models/burger.js");

connection.connect(function(err) {
    if(err) throw err;
    console.log(connection.threadId);

   
    Burger.selectAll(function(data) {
        console.log(data);
        console.log("\n");
    });

  

    Burger.insertOne(["burger_name", "devoured"], ["Angry Bird", 1], function(data) {
        console.log(data);
    });

    // burger.updateOne({devoured: req.body.devoured}, condition, function() {

    Burger.updateOne({devoured: 0}, "id = " + 2, function (data) {
        console.log(data);
    });


    connection.end();
});