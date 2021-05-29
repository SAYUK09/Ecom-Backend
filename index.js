const express = require("express")
const app = express()
const mongoose = require("mongoose")
require("dotenv")
const bodyParser = require('body-parser')
const cors = require("cors")

app.use(bodyParser.json())
app.use(cors())

//Import Routes
const prodsRoute = require("./routes/products.route")

const cartRoute = require("./routes/cart.route")

const wishlistRoute = require("./routes/wishlist.route")

const dbconnection = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("server connected");
  } catch (error) {
    console.log(error);
  }
};
dbconnection()

//Routes
app.get('/',(req, res)=>{
  res.send("HOMEEEE")
})

app.use("/products", prodsRoute)

app.use("/cart", cartRoute)

app.use("/wishlist", wishlistRoute)


app.listen(3000)
