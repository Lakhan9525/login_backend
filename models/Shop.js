const mongoose = require("mongoose");

const shoppingList = mongoose.Schema({
    title: String,
    quantity: String,
    priority: String,
    date: String,
    time: String,
    description: String
})

const ShopModel = mongoose.model("work", shoppingList)

module.exports = ShopModel;