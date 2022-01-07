const express = require('express');
const LogModel = require('./model')

// Get all logs from api
exports.getLogs = async (req, res) => {
    const user = req.cookies.user
    try {
        const logs = await (LogModel.find({user:user})).populate('user');
        res.status(200).json(logs)
    } catch (error) {
        res.status(503).json('No login')
    }       
}
// Get all logs from api
exports.getFive = async (req, res) => {
    const user = req.cookies.user
    try {
        const logs = await (LogModel.find({user:user})).sort({date: -1}).limit(5).populate('user');
        console.log(logs)
        res.status(200).json(logs)
    } catch (error) {
        res.status(503).json('No login')
    }       
}

// Get log from api
exports.getLog = async (req, res) => {
    const log = req.params.id
    const user = req.cookies.user
    
    const logs = await (LogModel.find({user:user}).findOne({date:log}).populate('user'));
    if(logs !== null) {
        try {
            res.status(200).json(logs)
        } catch (error) {
            res.status(503).json('No login')
        } 
    } else {
        let errors = { msg: '' }
        errors.msg = 'No login!'        
        res.status(400).json({ errors })
    }
}

// Get all days in month for diagram
exports.getDiagram = async (req, res) => {
    const user = req.cookies.user
    const month = Number(req.params.id)
    try {
        const logs = await (LogModel.find({ $and: [{user:user, date: { $gte: month }}, { date: {$lt: (month+1)}} ]})).populate('user');
        res.status(200).json(logs)
    } catch (error) {
        res.status(503).json('No login')
    } 
}

exports.createLog = async (req, res) => {
    const cookie = req.cookies.user
    
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
    
    const dateExist = await LogModel.find({user:cookie}).findOne({date:date});
    
    const newLog = {
        airFeeling: airFeeling,
        airpressure: airpressure,
        date: date,
        description: description,
        humidity: humidity,
        precipitation: precipitation,
        temperature: temperature,
        user: cookie,
        windDirection: windDirection,
        weather: weather,
        windSpeed: windSpeed,
    }
   
    if (!dateExist) {     
        try {
            const log = await LogModel.create(newLog)
            res.status(201).json(log)
        } catch (error) {
            res.status(400).json(error)
        }
    } else {
        let errors = { msg: '' }
        errors.msg = 'Date is already logged!'        
        res.status(400).json({ errors })
    }
}

exports.changeLog = async (req, res) => {
    const log = req.params.id
    const user = req.cookies.user

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

    const getLog = await LogModel.find({user:user}).findOne({_id: log});
    
    const newLog = {
        airFeeling: airFeeling,
        airpressure: airpressure,
        date: date,
        description: description,
        humidity: humidity,
        precipitation: precipitation,
        temperature: temperature,
        user: user,
        windDirection: windDirection,
        weather: weather,
        windSpeed: windSpeed,
    }

    if (getLog) {     
        try {
            await LogModel.findByIdAndUpdate({ _id: log }, newLog)
            res.status(200).json('Log has been updated!')
        } catch (error) {
            res.status(400).json(error)
    }
    } else {
        let errors = { msg: '' }        
        errors.msg = 'No log to update!'        
        res.status(400).json({ errors })
    }
}

exports.deleteLog = async (req, res) => {
    const log = req.params.id
    const user = req.cookies.user
    
    const getLog = await LogModel.findById(log).exists({ _id: user});
    if (getLog) {     
        try {
            await LogModel.findByIdAndRemove({ _id: log })
            res.status(201).json(getLog)
        } catch (error) {
            res.status(400).json(error)
        }
    } else {
        let errors = { msg: '' }
        errors.msg = 'No log to delete'        
        res.status(400).json({ errors })
    }
}
