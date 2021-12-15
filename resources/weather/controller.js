const express = require('express');
const WeatherModel = require('./model')

// Get all products from api
exports.getWeathers = async (req, res) => {
    try {
        const weather = await WeatherModel.find({});
        res.status(200).json(weather) 
    } catch (error) {
        res.status(503).json('No database connection')
    }       
}