const express = require('express');
const UserModel = require('./model');
const bcrypt = require('bcrypt');

// Get all products from api
exports.getUsers = async (req, res) => {
    const cookie = req.cookies.user
	try {
		const user = await UserModel.findById(cookie);
		res.status(200).json(user);
	} catch (error) {
		res.status(503).json('No database connection');
	}
};

// Create new user
exports.createUser = async (req, res) => {
	const { email,
		password } = req.body;

	const emailExists = await UserModel.exists({ email });

	if (!emailExists) {
		const hashedPassword = await bcrypt.hash(password, 10);

		const newUser = {
			email,
			password: hashedPassword
		};
		
		try {
			const user = await UserModel.create(newUser);
			const login = await UserModel.login(email, password);

			res.cookie('user', login._id, { maxAge: 1000 * 60 * 60 * 24 });
			res.status(201).json(user);
		} catch (error) {
			res.status(400).json(error);
		}
	} else {
		let errors = { email: '' };
		errors.email = 'Denna email är redan registrerad';
		res.status(400).json({ errors });
	}
};

exports.addInfo = async (req, res) => {
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
			res.status(200).json('Lagt till information')
        } catch (error) {
            res.status(400).json(error)
    }
    } else {
        let errors = { msg: '' }        
        errors.msg = 'Användaren finns inte!'        
        res.status(400).json({ errors })
    }
}

// Log in
exports.login = async (req, res) => {
	const { email, password } = req.body;
	let errors = { email: '', password: '' };

	try {
		const user = await UserModel.login(email, password);
		res.cookie('user', user._id, { maxAge: 1000 * 60 * 60 * 24 });
		res.status(200).json({ user });
	} catch (err) {

		//incorrect email
		if (err.message === 'incorrect email') {
			errors.email = 'Denna email-adress finns ej registrerad';
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
        city,
        email
    } = req.body
    
    const getUser = await UserModel.findById(user);
    
    const newUser = {
        firstName: firstName,
		lastName: lastName,
		city: city,
        email: email
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

    const getUser = await UserModel.findById(user);
	const authUser = await bcrypt.compare(oldPassword, getUser.password);
	const compareNew = await bcrypt.compare(newPassword, getUser.password);
	
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    let errors = { msg: '',
                boolean: false,
                code:'' }   

    if (authUser) {   

        const updatedPassword = {
            password: hashedPassword
		}
        if (newPassword.length < 6) {
			errors.msg = 'Lösenordet måste vara minst 6 tecken'   
            errors.boolean = true   
            errors.code = 401   
            res.status(400).json(errors)
			return;
		}
        
        if(compareNew) {
            errors.msg = 'Du kan inte använda samma lösenord'   
            errors.boolean = true   
            errors.code = 401   
            res.status(400).json(errors)
            return
        }      
        try {           
            await UserModel.findByIdAndUpdate({ _id: user }, updatedPassword)
            errors.msg = 'Lösenordet har uppdaterats'   
            errors.boolean = false  
            errors.code = 200    
			res.status(200).json(errors)
        } catch (error) {
            res.status(400).json(errors)
        }
    } else {     
        errors.msg = 'Gamla lösenordet stämmer inte'   
        errors.boolean = true       
        errors.code = 400   
        res.status(400).json(errors)
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

