const mongoose = require('mongoose')

const CartSchema = new mongoose.Schema(
  {
  user:{type:mongoose.Schema.Types.ObjectId, ref:"User"},
  productId : {type:String, required:true},
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
  } ,{timestamps: true}
)

// const Cart = mongoose.model("Cart", CartSchema)

// module.exports = Cart

module.exports = mongoose.model("Cart", CartSchema)