const express = require('express');
const UserModel = require('./model')

// Get all products from api
exports.getUsers = async (req, res) => {
    try {
        const users = await UserModel.find({});
        res.status(200).json(users) 
    } catch (error) {
        res.status(503).json('No database connection')
    }       
}