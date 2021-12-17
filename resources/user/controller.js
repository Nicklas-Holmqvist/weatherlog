const express = require('express');
const UserModel = require('./model');
const bcrypt = require('bcrypt');

// Get all products from api
exports.getUsers = async (req, res) => {
	try {
		const users = await UserModel.find({});
		res.status(200).json(users);
	} catch (error) {
		res.status(503).json('No database connection');
	}
};

// Create new user
exports.createUser = async (req, res) => {
	const { username,
			password,
			firstName,
			lastName,
			city } = req.body;

	const usernameExists = await UserModel.exists({ username: username });

	if (!usernameExists) {
		const hashedPassword = await bcrypt.hash(password, 10);

		const newUser = {
			username: username,
			password: hashedPassword,
			firstName: firstName,
			lastName: lastName,
			city: city
		};

		try {
			const user = await UserModel.create(newUser);
			res.status(201).json(user);
		} catch (error) {
			res.status(400).json(error);
		}
	} else {
		let errors = { username: '' };

		// if username already exists in db
		errors.username = 'Denna username är redan registrerad';

		res.status(400).json({ errors });
	}
};

// Log in
exports.login = async (req, res) => {
	const { username, password } = req.body;
	let errors = { username: '', password: '' };

	try {
		const user = await UserModel.login(username, password);
		res.cookie('user', user._id, { maxAge: 1000 * 60 * 60 * 24 });
		res.status(200).json({ user });
	} catch (err) {

		//incorrect username
		if (err.message === 'incorrect username') {
			errors.username = 'Denna username finns ej registrerad';
		}

		//incorrect password
		if (err.message === 'incorrect password') {
			errors.password = 'Fel lösenord';
		}

		res.status(400).json({ errors });
	}
};

exports.editUser = async (req, res) => {
    const user = req.cookies.user

    const { 
        firstName,
        lastName,
        city
    } = req.body

    const getUser = await UserModel.findById(user);
    
    const newUser = {
        firstName: firstName,
		lastName: lastName,
		city: city
    }

    if (getUser) {     
        try {           
			await UserModel.findByIdAndUpdate({ _id: user }, newUser)
			res.status(200).json('User has been updated!')
        } catch (error) {
            res.status(400).json(error)
    }
    } else {
        let errors = { msg: '' }        
        errors.msg = 'The user does not exist'        
        res.status(400).json({ errors })
    }
}

exports.changePassword = async (req, res) => {
    const user = req.cookies.user

    const { 
        oldPassword,
        newPassword
    } = req.body

    const getUser = await UserModel.findById(user).exists(oldPassword);
    
    const updatedPassword = {
        password: newPassword
    }

    if (getUser) {     
        try {           
			await UserModel.findByIdAndUpdate({ _id: user }, updatedPassword)
			res.status(200).json('Password has been updated!')
        } catch (error) {
            res.status(400).json(error)
    }
    } else {
        let errors = { msg: '' }        
        errors.msg = 'The old password does not match!'        
        res.status(400).json({ errors })
    }
}

// Log out
exports.logout = (req, res) => {
	try {
		res.cookie('user', '', { maxAge: 1 });
		res.status(200).json('User has logged out');
	} catch (error) {
		res.status(400).json(error);
	}
};

exports.deleteUser = async (req, res) => {
    const user = req.cookies.user
    
    const getUser = await UserModel.findById(user);
    if (getUser) {     
        try {
            await UserModel.findByIdAndRemove({ _id: user })
            res.status(201).json(getUser)
    } catch (error) {
        res.status(400).json(error)
    }
    } else {
        let errors = { msg: '' }
        errors.msg = 'No user exist!'        
        res.status(400).json({ errors })
    }
}

