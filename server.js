// Import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const mongoose = require('mongoose');
const logsRouter = require('./resources/logs/router');
const authRouter = require('./resources/auth/router');
const userRouter = require('./resources/user/router');

// Create a new express application named 'app'
const app = express();

// Set our backend port to be either an environment variable or port 5000
const port = process.env.PORT || 5000;
const mongoDB =
	process.env.OLIVER_MONGODB_CONNECTION ||
	process.env.NICKLAS_MONGODB_CONNECTION;

// This application level middleware prints incoming requests to the servers console
app.use((req, res, next) => {
	console.log(`Request_Endpoint: ${req.method} ${req.url}`);
	next();
});

// Configure the bodyParser middleware
app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);

// Routers
app.use(logsRouter);
app.use(userRouter);
app.use(authRouter);

// Connecting to MongoDB
// The variable MONGODB_URL uses as a key in Heroku and the url link as value
// It won´t work without it!
mongoose.connect(process.env.MONGODB_URL || mongoDB, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
	console.log('Mongoose is connected!');
});

// Configure the CORs middleware
app.use(cors());

// This middleware informs the express application to serve our compiled React files
if (
	process.env.NODE_ENV === 'production' ||
	process.env.NODE_ENV === 'staging'
) {
	app.use(express.static(path.join(__dirname, 'client/build')));

	app.get('*', function (req, res) {
		res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
	});
}

// Catch any bad requests
app.get('*', (req, res) => {
	res.status(200).json({
		msg: 'Catch All',
	});
});

// Configure our server to listen on the port defiend by our port variable
app.listen(port, () => console.log(`BACK_END_SERVICE_PORT: ${port}`));
