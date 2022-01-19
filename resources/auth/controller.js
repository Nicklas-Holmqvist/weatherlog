const UserModel = require('../user/model');

exports.authUser = async (req, res, next) => {
	const cookie = req.cookies.user;
	const user = await UserModel.findOne({ _id: cookie})

	if (!user) {
	 return res.status(401).json('Ingen inloggning!');
	} else return next();
};

exports.isAuth = async (req, res) => {
	const cookie = req.cookies.user;

	const user = await UserModel.findOne({ _id: cookie });
	if(user !== null) {
		try {	
			res.status(200).json(user)	
		} catch (error) {
			res.status(401).json(user);
		}
	}else {
		res.status(200).json(user);
	}
};
