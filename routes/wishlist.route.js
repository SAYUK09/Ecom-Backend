const express = require('express');
const router = express.Router();
const Wishlist = require("../models/wishlist.model")

router.get('/', async(req ,res)=>{

  try{
    const product = await Wishlist.find()
    res.json(product)
  }catch(err){
    console.log("err", err)
  }

});


router.post('/', async (req, res)=>{
  console.log(req.body)

  const addProduct = req.body
    const newWishlist = new Wishlist(
      addProduct
      
    )
  
    try {
      const productData = await newWishlist.save();
      res.json(productData);
    } catch (error) {
      res.status(400).json({ success: false, message: error });
    }

})

router.delete('/:prdId', async(req, res)=>{
  try{
    const removedProduct = await Wishlist.remove({_id:req.params.prdId})
    
    const newProduct = await Wishlist.find();
    res.json(newProduct);
    
  }
  
  catch(err){
    res.json({message:err})
    console.log(err)
  }
  
})

module.exports = router