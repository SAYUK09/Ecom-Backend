const express = require('express');
const router = express.Router();
const Product = require("../models/product.model")
console.log(Product)

router.get('/', async(req ,res)=>{
 
  try{
    const product = await Product.find()
    res.json(product)
  }catch(err){
    res.status(400).json({success:true,message:"error while fetching the product", error:err.message})
  }

});

router.post('/', async (req, res)=>{
  console.log(req.body)
  const addProduct = req.body
    const newProduct = new Product(
      addProduct
     
    )
    
    try {
      const productData = await newProduct.save();
      res.json(productData);
    } catch (error) {
      res.status(400).json({success:true,message:"error while adding the product", error:err.message})
    }

})

module.exports = router;
