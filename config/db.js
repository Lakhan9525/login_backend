const mongoose= require("mongoose")
require("dotenv").config()

const connection = mongoose.connect(process.env.mongo_url)
//const connection = mongoose.connect("mongodb://localhost:27017/shoppingapp")
//mongodb+srv://Lakhan:<password>@cluster0.foawcdm.mongodb.net/test

module.exports = connection;