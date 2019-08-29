const express = require("express");
const cartsRoutes = express.Router();
// const cart = require("./cart-items");
const pool = require("../connection/pg-connection-pool");

function selectAllItems(req, res) {
  pool.query("select * from shoppingCart order by id").then(result => {
    res.send(result.rows);
  });
}

cartsRoutes.get("/cart-items", selectAllItems);

cartsRoutes.post("/cart-items", (req, res) => {
  pool
    .query(
      "insert into shoppingCart (product, price, quantity) values ($1::text, $2::smallint, $3::smallint)",
      [req.body.product, req.body.price, req.body.quantity] // 2nd param will always be an array
    )
    .then(() => {
      selectAllItems(req, res);
    });
});

cartsRoutes.put("/cart-items/:id", (req, res) => {
  pool
    .query("update shoppingCart set quantity=$1::int where id=$2::int", [
      req.body.quantity,
      req.params.id
    ])
    .then(() => {
      selectAllItems(req, res);
    });
});

cartsRoutes.delete("/cart-items/:id", (req, res) => {
  pool
    .query("delete from shoppingCart where id=$1::int", [req.params.id])
    .then(() => {
      selectAllItems(req, res);
    });
});

module.exports = cartsRoutes;
