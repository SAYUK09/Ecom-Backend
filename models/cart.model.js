const mongoose = require('mongoose')

const CartSchema = new mongoose.Schema(
  {
  image: String,
  name: String,
  description : String,
  category: String,
  brand: String,
  originalPrice: Number,
  discountedPrice: Number,
  ratings: Number,
  qty: Number,
  inStock : Boolean,
  fastDelivery: Boolean,
  }
)

// const Cart = mongoose.model("Cart", CartSchema)

// module.exports = Cart

module.exports = mongoose.model("Cart", CartSchema)