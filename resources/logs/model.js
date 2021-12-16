const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
    airFeeling: {
        type : "String"
    },
    airpressure: {
        type : "String"
    },
    date: {
        type : "String"
    },
    description: {
        type : "String"
    },
    humidity: {
        type : "String"
    },
    precipitation: {
        type : "String"
    },
    temperature: {
        type : "String"
    },
    user: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    windDirection: {
        type : "String"
    },
    windSpeed: {
        type : "String"
    },
    weather: "String"
})

const LogModel = mongoose.model("log", logSchema);

module.exports = LogModel;