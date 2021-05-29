const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({ 
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
})

const Product = mongoose.model("Product", ProductSchema)

module.exports = Product


