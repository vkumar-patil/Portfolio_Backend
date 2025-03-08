const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const connectedDB =async () => {
  try {
    const connect =await mongoose.connect(process.env.MONGODB_LOCAL);
    if (connect) {
      console.log("mongoDB connected");
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectedDB;
