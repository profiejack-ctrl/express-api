const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://profiejack_db_user:4czpcqzRGa5K0mph@techtrendz.ylommzi.mongodb.net/shoppers")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));
