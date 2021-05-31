const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  image: {type:String, required: true},
  name: {type:String, required:true},
  description : {type:String, required:true},
  category: {type:String, required:true},
  brand: {type:String, required:true},
  originalPrice: {type:Number, required:true},
  discountedPrice: {type:Number, required:true},
  ratings: {type:Number, required:true},
  qty: {type:Number, required:true},
  inStock : {type:Boolean, required:true},
  fastDelivery: {type:Boolean, required:true},
  })

const Product = mongoose.model("Product", ProductSchema)

module.exports = Product


