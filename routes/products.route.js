const express = require('express');
const router = express.Router();
const Product = require("../models/product.model")
console.log(Product)

router.get('/', async(req ,res)=>{
 
  try{
    const product = await Product.find()
    res.json(product)
  }catch(err){
    console.log("err", err)
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
      res.status(400).json({ success: false, message: error });
    }

})

module.exports = router;
