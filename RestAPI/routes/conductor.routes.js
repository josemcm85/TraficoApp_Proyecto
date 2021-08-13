module.exports = app => {
    const conductores = require("../controllers/conductor.controller.js");
  
    // Create a new Customer
    app.post("/conductor", conductores.create);
  
    // Retrieve all Customers
    app.get("/conductores", conductores.findAll);
  
    // Retrieve a single Customer with customerId
    app.get("/conductor/:idconductor", conductores.findOne);
  
    // Update a Customer with customerId
    app.put("/conductores/:idconductor", conductores.update);
  
    // Delete a Customer with customerId
    app.delete("/conductores/:idconductor", conductores.delete);
  
    // Create a new Customer
    app.delete("/conductores", conductores.deleteAll);
  };