const express = require("express");
const router = express.Router();
const Cafe = require("../models/cafe");
const Item = require("../models/item");
const Order = require("../models/order");
const { addMinutes, getTime } = require("../middleware/time");

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
  // if userId already exists, show error
  if (Order.findOne({ userId: req.body.userId })) {
    res.status(409).send({ error: "Another order already in progrss" });
  }
  Order.create(req.body)
    .then(function (order) {
      res.send(order);
    })
    .catch(next);
});

// get a list of orders from db
router.put("/order/:id", function (req, res, next) {
  Order.findOneAndUpdate(
    { userId: req.params.id },
    {
      new: true,
    }
  ).then(function (order) {
    order.readyBy = getTime(order);
    res.send(order);
  });
});

// delete an order from db
router.delete("/order/:id", function (req, res, next) {
  Order.findOneAndDelete({ userId: req.params.id }).then(function (order) {
    res.send(order);
  });
});

// update order readyBy time by admin
router.put("/admin/:id", function (req, res, next) {
  Order.findOneAndUpdate({ userId: req.params.id })
    .then(function (order) {
      order.adminTime = addMinutes(new Date(), req.body.prepTime);
      order.save();
      res.send(order);
    })
    .catch(next);
});

module.exports = router;
