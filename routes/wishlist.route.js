const express = require('express');
const router = express.Router();
const Wishlist = require("../models/wishlist.model")

router.get('/', async(req ,res)=>{

  try{
    const prd = await Wishlist.find()
    res.json(prd)
  }catch(err){
    console.log("err", err)
  }

});


router.post('/', async (req, res)=>{
  console.log(req.body)

  const addPrd = req.body
    const newCart = new Wishlist(
      addPrd
      
    )
  
    try {
      const productData = await newCart.save();
      res.json(productData);
    } catch (error) {
      res.status(400).json({ success: false, message: error });
    }

})

router.delete('/:prdId', async(req, res)=>{
  try{
    const removedPrd = await Wishlist.remove({_id:req.params.prdId})
    
    const newPrd = await Wishlist.find();
    res.json(newPrd);
    
  }
  
  catch(err){
    res.json({message:err})
    console.log(err)
  }
  
})

module.exports = router