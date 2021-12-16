const express = require('express');
const LogModel = require('./model')

// Get all logs from api
exports.getLogs = async (req, res) => {
    try {
        const logs = await LogModel.find({}).populate('user');
        res.status(200).json(logs) 
        console.log(logs)
    } catch (error) {
        res.status(503).json('No database connection')
    }       
}