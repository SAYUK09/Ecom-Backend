const mongoose = require('mongoose')

const WishlistSchema = new mongoose.Schema(
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


module.exports = mongoose.model("Wishlist", WishlistSchema)