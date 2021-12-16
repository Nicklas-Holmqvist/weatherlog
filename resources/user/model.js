const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
	username: 'String',
	password: 'string',
	city: 'String',
	firstName: 'String',
	lastName: 'String',
});

userSchema.statics.login = async function (username, password) {
	const user = await this.findOne({ username });

	if (user) {
		const auth = await bcrypt.compare(password, user.password);
		if (auth) {
			return user;
		}
		throw Error('incorrect password');
	}
	throw Error('incorrect username');
};

const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;
