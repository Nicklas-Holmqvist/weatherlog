const express = require('express');
const LogModel = require('./model')

// Get all products from api
exports.getLogs = async (req, res) => {
    try {
        const logs = await LogModel.find({});
        res.status(200).json(logs) 
        console.log(logs)
    } catch (error) {
        res.status(503).json('No database connection')
    }       
}