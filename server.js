// Import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require("mongoose");
const weatherRouter = require('./resources/weather/router')
const userRouter = require('./resources/user/router')

// Create a new express application named 'app'
const app = express();

// Set our backend port to be either an environment variable or port 5000
const port = process.env.PORT || 5000;
const mognoDb = 'mongodb+srv://nicklas:!Nicklas@weatherlog.3tpno.mongodb.net/weatherlog'

// This application level middleware prints incoming requests to the servers console
app.use((req, res, next) => {
    console.log(`Request_Endpoint: ${req.method} ${req.url}`);
    next();
});

// Routers
app.use(weatherRouter)
app.use(userRouter)

async function run() {
  try {
    await mongoose.connect(
      mognoDb,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Database is connected");
  } catch (error) {
    console.error(error);
  }
}

// Configure the bodyParser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// Configure the CORs middleware
app.use(cors());


// This middleware informs the express application to serve our compiled React files
if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
};

// Catch any bad requests
app.get('*', (req, res) => {
    res.status(200).json({
        msg: 'Catch All'
    });
});

// Configure our server to listen on the port defiend by our port variable
app.listen(port, () => console.log(`BACK_END_SERVICE_PORT: ${port}`));

run()