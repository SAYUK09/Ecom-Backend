const mongoose = require('mongoose')

const WishlistSchema = new mongoose.Schema(
  {
  user:{type:mongoose.Schema.Types.ObjectId, ref:"User"},
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
  }
  ,{timestamps: true}
)


module.exports = mongoose.model("Wishlist", WishlistSchema)