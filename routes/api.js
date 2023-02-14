const express = require("express");
const router = express.Router();
const Cafe = require("../models/cafe");

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

module.exports = router;
