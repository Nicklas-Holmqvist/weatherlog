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
	const { username, password } = req.body;
	const usernameExists = await UserModel.exists({ username: username });

	if (!usernameExists) {
		const hashedPassword = await bcrypt.hash(password, 10);

		const newUser = {
			username: username,
			password: hashedPassword,
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
		// här fångas error från "throw"

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

// Log out
exports.logout = (req, res) => {
	try {
		res.cookie('user', '', { maxAge: 1 });
		res.status(200).json('User has logged out');
	} catch (error) {
		res.status(400).json(error);
	}
};
