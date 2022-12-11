const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name : String,
    username : String,
    email : String,
    password : String,
})

const UserModel = mongoose.model("done", userSchema)

module.exports = UserModel;