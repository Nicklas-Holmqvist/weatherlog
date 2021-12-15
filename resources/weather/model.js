const mongoose = require("mongoose");

const weatherSchema = new mongoose.Schema({
    weather: "String"
})

const WeatherModel = mongoose.model("weather", weatherSchema);

module.exports = WeatherModel;