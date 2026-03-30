const mongoose = require("mongoose");

mongoose.connect("mongodb://profiejack_db_user:4czpcqzRGa5K0mph@ac-zkqyl56-shard-00-00.ylommzi.mongodb.net:27017,ac-zkqyl56-shard-00-01.ylommzi.mongodb.net:27017,ac-zkqyl56-shard-00-02.ylommzi.mongodb.net:27017/?ssl=true&replicaSet=atlas-p66pbc-shard-0&authSource=admin&appName=techtrendz")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));
