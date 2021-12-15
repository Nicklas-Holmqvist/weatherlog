const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: "String",
    password: "string",
    city: "String",
    firstName: "String",
    lastName: "String"
})

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;