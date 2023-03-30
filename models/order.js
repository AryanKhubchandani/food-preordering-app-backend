const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  userId: { type: String, required: [true, "User ID is required"] },
  cafeId: { type: String, required: [true, "Cafe ID is required"] },
  orderItems: {
    type: Map,
    of: Number,
    required: [true, "Order items are required"],
  },
  total: { type: Number, required: [true, "Total amoung is required"] },
  readyBy: { type: Date },
});

OrderSchema.set("timestamps", true);

const Order = mongoose.model("order", OrderSchema);

module.exports = Order;
