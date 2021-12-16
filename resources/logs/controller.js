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

exports.createLog = async (req, res) => {
    const { 
        airFeeling,
        airpressure,
        date,
        description,
        humidity,
        precipitation,
        temperature,
        windDirection,
        weather,
        windSpeed
    } = req.body
    
    const userId = "61b9d2dcbd5038e17fc353a3"
    const dateExist = await LogModel.exists({ date: date });
    
    const newLog = {
        airFeeling: airFeeling,
        airpressure: airpressure,
        date: date,
        description: description,
        humidity: humidity,
        precipitation: precipitation,
        temperature: temperature,
        user: userId,
        windDirection: windDirection,
        weather: weather,
      windSpeed: windSpeed,
    }
    
    if (!dateExist) {     
        try {
            const log = await LogModel.create(newLog)
            res.status(201).json(log)
        console.log({log: newLog})
    } catch (error) {
        res.status(400).json(error)
    }
    } else {
        let errors = { msg: '' }
        
        // if email already exists in db
        errors.msg = 'Datumet är redan loggat!'
        
        res.status(400).json({ errors })
    }
}

exports.changeLog = async (req, res) => {
    const log = req.params.id

    const { 
        airFeeling,
        airpressure,
        date,
        description,
        humidity,
        precipitation,
        temperature,
        windDirection,
        weather,
        windSpeed
    } = req.body

    const getLog = await LogModel.findById(log);
    
    const userId = "61b9d2dcbd5038e17fc353a3"
    // const userId = ""
    // const userExist = await LogModel.exists({ user: userId });
    
    const newLog = {
        airFeeling: airFeeling,
        airpressure: airpressure,
        date: date,
        description: description,
        humidity: humidity,
        precipitation: precipitation,
        temperature: temperature,
        user: userId,
        windDirection: windDirection,
        weather: weather,
        windSpeed: windSpeed,
    }

    if (getLog && userId !== "") {     
        try {
            if(getLog) {
                await LogModel.findByIdAndUpdate({ _id: log }, newLog)
                res.status(200).json('Log has been updated!')
                console.log(newLog)
            } else {
                res.status(400).json('No log!')
            }
        } catch (error) {
            res.status(400).json(error)
    }
    } else {
        let errors = { msg: '' }
        
        // if email already exists in db
        errors.msg = 'No log to update!'
        
        res.status(400).json({ errors })
    }
}

exports.deleteLog = async (req, res) => {
    const log = req.params.id
    const userId = "61b9d2dcbd5038e17fc353a3"
    // const userId = ""
    const getLog = await LogModel.findById(log);
    if (getLog && userId) {     
        try {
            await LogModel.findByIdAndRemove({ _id: log })
            res.status(201).json(log)
    } catch (error) {
        res.status(400).json(error)
    }
    } else {
        let errors = { msg: '' }        
        // if email already exists in db
        errors.msg = 'Not autherize to delete this log'        
        res.status(400).json({ errors })
    }
}
