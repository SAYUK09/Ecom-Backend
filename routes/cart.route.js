const express = require('express');
const router = express.Router();
const Cart = require("../models/cart.model")
const verify =  require("../middlewares/verifyToken")

// GET
router.get('/', verify, async(req ,res)=>{

  try {
    const cart = await Cart.find({ user: req.user._id });
    res.json(cart);
  } catch (err) {
    res.status(400).json({success:true,message:"error while fetching the product", error:err.message});
  }

  // try{
  //   const product = await Cart.find()
  //   res.json(product)
   
  // }catch(err){
  //   console.log("err", err)
  //   res.status(400).json({success:true,message:"error while fetching the product", error:err.message})
  // }

});

// POST
router.post('/', verify, async (req, res)=>{
  console.log(req.body)
  
  const addProduct = req.body
    const newCart = new Cart(
      {...addProduct,
      user:req.user._id}
      
    )
  
    try {
      const productData = await newCart.save();
      res.json(productData)
      
    } catch (error) {
      res.status(400).json({ success: false, message: "error while adding product", error:error.message });
    }

})

// SPECIFIC
router.get('/:prdId',verify, async(req, res)=>{
  try{
    const cartItem = await Cart.findById(req.params.prdId)
    res.json(cartItem)
  }catch (err){
     res.status(400).json({ success: false, message: "error while fetching the product", error:error.message });
  }
} )

// DELETE 
router.delete('/:prdId',verify, async(req, res)=>{
  try{

    // const cart = await Cart.find({ user: req.user._id });
    // console.log(cart, "carrttttt")

    const removedProduct = await Cart.remove({_id:req.params.prdId, user:req.user._id})
    
    const newPrd = await Cart.find();
    res.json(newPrd);
    
  }
  
  catch(err){
    res.status(400).json({ success: false, message: "error while fetching the product", error:error.message });
  }
  
})

// Patch
router.patch('/:prdId',verify, async(req, res)=>{
  try{
    const updatedPrd = await Cart.updateOne({_id : req.params.prdId, user:req.user._id}, {
      $set:{qty:req.body.qty}
    })

    const newPrd = await Cart.find();
    res.json(newPrd);
    console.log(updatedPrd)

  }catch(err){
    
    res.status(400).json({ success: false, message: "error while updating the product", error:error.message });
  }
})

module.exports = router