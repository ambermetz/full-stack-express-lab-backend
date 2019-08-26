const express = require("express");
const cartsRoutes = express.Router();
const cart = require("./cart-items");

cartsRoutes.get("/cart-items", (req, res) => {
  console.log("get worked");
  res.send(cart);
});

cartsRoutes.post("/cart-items", (req, res) => {
  // adds object to the array of people
  //   console.log(cart.push(req.body));
  console.log("post worked");
  console.log(req.body);
});

cartsRoutes.put("/cart-items/:id", (req, res) => {
  console.log("put worked");
  console.log(req.params.id);
});

// :id is a parameter.

cartsRoutes.delete("/cart-items/:id", (req, res) => {
  console.log("delete worked");
  console.log(req.params.id);
});

module.exports = cartsRoutes;
