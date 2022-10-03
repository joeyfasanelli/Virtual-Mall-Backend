// -----------------------------------
// DEPENDENCIES
// -----------------------------------
require("dotenv").config();
const { PORT = 4000, MONGODB_URL } = process.env;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");

/////////////////////////////
//DATABASE CONNECTION
///////////////////////////
mongoose.connect(MONGODB_URL);

mongoose.connection
  .on("open", () => console.log("you are connected to mongoose"))
  .on("close", () => console.log("You are disconnected from mongoose"))
  .on("error", (error) => console.log(error));

////////////////////////
//MODELS
///////////////////////

//userSchema

//cartSchema

//productSchema

//storeSchema

///////////////////
//MIDDLEWARE
//////////////////
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

////////////////////
//ROUTES
///////////////////
//test route
app.get("/", (req, res) => {
  res.send("Mall Landing Page");
});

// GET /stores/:storeID/products/:productID Retrieve ALL products
const productController = require('./controllers/product.js');
app.use('store/:storeId/product', productController);

// Store route
const storeController = require('./controllers/store.js');
app.use('/store', storeController);



app.get('/cart', async (req, res) => {
  try {
    res.jsoin(await cart.find({}));
  } catch (error) {
    res.status(400).json(error);
  }
});



// -----------------------------------
// LISTENER
// ----------------------------------
app.listen(PORT, () => {
  console.log(`listening on PORT ${PORT}`);
});
