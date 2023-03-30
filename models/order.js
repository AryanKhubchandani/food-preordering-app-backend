const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  userId: { type: String, required: true },
  cafeId: { type: String, required: true },
  orderItems: { type: Map, of: Number, required: true },
  total: { type: Number, required: true },
});

OrderSchema.set("timestamps", true);

const Order = mongoose.model("order", OrderSchema);

module.exports = Order;
