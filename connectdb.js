const mongoose = require("mongoose");
require("dotenv").config();
// const uri = process.env.MONGO_DB_URL_LOCAL;
const uri = process.env.MONGO_DB_URL;

const connectToDB = async () => {
  mongoose
    .connect(uri)
    .then((res) => {
      console.log("Connected to Mongo successfully");
    })
    .catch((err) => {
      console.log("Connected error to Mongo ", err);
    });
};

module.exports = connectToDB;
