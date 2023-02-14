const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CafeScehma = new Schema({
  name: { type: String },
  location: { type: String },
  type: { type: String },
  price: { type: Number },
  ac: { type: Boolean },
});

const Cafe = mongoose.model("cafe", CafeScehma);

module.exports = Cafe;
