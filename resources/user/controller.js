const express = require('express');
const UserModel = require('./model');
const LogModel = require('../logs/model');
const bcrypt = require('bcrypt');

// Get all products from api
exports.getUsers = async (req, res) => {
    const cookie = req.cookies.user
	try {
		const user = await UserModel.findById(cookie);
        const exportUser = {
            _id: user._id,
            email: user.email,
            city: user.city,
            firstName: user.firstName,
            lastName: user.lastName
        }
		res.status(200).json(exportUser);
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

    const formatedEmail = email.toLowerCase().trim()

	try {
		const user = await UserModel.login(formatedEmail, password);
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
        email,
        firstName,
        lastName,
        city,
    } = req.body
    
    
    const newUser = {
        email: email,
        firstName: firstName,
		lastName: lastName,
		city: city,
    }

    let errors = { 
        msg: '',
        boolean: false,
        code:'',
        success: false 
    }   

    const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if(!email.match(regexEmail)){
        errors.msg = 'Emailen har fel format ex. namne@domän.se'   
        errors.boolean = true       
        errors.code = 401 
        errors.success = false
        await UserModel.findByIdAndUpdate({ _id: user }, newUser)
        res.status(401).json(errors)
        return
    }

    const getUser = await UserModel.findById(user);
    const validEmailChange = await UserModel.find({_id: {$ne: user}}).findOne({email: email})

    if (getUser && validEmailChange === null) { 
        try {           
            errors.msg = 'Emailen har uppdaterats'   
            errors.boolean = false       
            errors.code = 200 
            errors.success = true
			await UserModel.findByIdAndUpdate({ _id: user }, newUser)
			res.status(200).json(errors)
        } catch (error) {
            res.status(400).json(error)
    }
    } else {
        errors.msg = 'Emailen finns redan registrerad!'   
        errors.boolean = true       
        errors.code = 401   
        errors.success = false
        res.status(401).json(errors)
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
                code:'',
                success: false }   

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
            errors.success = true
			res.status(200).json(errors)
        } catch (error) {
            res.status(400).json(error)
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
            await LogModel.deleteMany({ user: user })
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

