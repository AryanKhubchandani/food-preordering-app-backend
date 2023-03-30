const express = require("express");
const router = express.Router();
const Cafe = require("../models/cafe");
const Item = require("../models/item");
const Order = require("../models/order");

// get a list of cafes from db
router.get("/cafes", function (req, res, next) {
  Cafe.find({}).then(function (cafes) {
    res.send(cafes);
  });
});

// add a new cafe to db
router.post("/cafes", function (req, res, next) {
  Cafe.create(req.body)
    .then(function (cafe) {
      res.send(cafe);
    })
    .catch(next);
});

// get a list of items from db
router.get("/items/:id", function (req, res, next) {
  Item.find({ cafeId: req.params.id }).then(function (items) {
    res.send(items);
  });
});

// add a new item to db
router.post("/items", function (req, res, next) {
  Item.create(req.body)
    .then(function (item) {
      res.send(item);
    })
    .catch(next);
});

// post an order to db
router.post("/order", function (req, res, next) {
  Order.create(req.body)
    .then(function (order) {
      res.send(order);
    })
    .catch(next);
});

// get a list of orders from db
router.get("/order/:id", function (req, res, next) {
  Order.find({ userId: req.params.id }).then(function (orders) {
    res.send(orders);
  });
});

module.exports = router;
