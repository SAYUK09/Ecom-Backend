const express = require('express');
const router = express.Router();
const Cart = require("../models/cart.model")

// GET
router.get('/', async(req ,res)=>{

  try{
    const prd = await Cart.find()
    res.json(prd)
  }catch(err){
    console.log("err", err)
  }

});

// POST
router.post('/', async (req, res)=>{
  console.log(req.body)

  const addPrd = req.body
    const newCart = new Cart(
      addPrd
      
    )
  
    try {
      const productData = await newCart.save();
      res.json(productData);
    } catch (error) {
      res.status(400).json({ success: false, message: error });
    }

})

// SPECIFIC
router.get('/:prdId', async(req, res)=>{
  try{
    const cartItem = await Cart.findById(req.params.prdId)
    res.json(cartItem)
  }catch (err){
    res.json({message:err})
  }
} )

// DELETE 
router.delete('/:prdId', async(req, res)=>{
  try{
    const removedPrd = await Cart.remove({_id:req.params.prdId})
    
    const newPrd = await Cart.find();
    res.json(newPrd);
    
  }
  
  catch(err){
    res.json({message:err})
    console.log(err)
  }
  
})

// Patch
router.patch('/:prdId', async(req, res)=>{
  try{
    const updatedPrd = await Cart.updateOne({_id : req.params.prdId}, {
      $set:{qty:req.body.qty}
    })

    const newPrd = await Cart.find();
    res.json(newPrd);
    console.log(updatedPrd)

  }catch(err){
    
    res.json({message:err})
    console.log(err)
  }
})

module.exports = router