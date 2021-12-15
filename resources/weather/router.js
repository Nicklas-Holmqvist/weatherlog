const express = require('express');
const controller = require('./controller')
const router = express.Router();

router.get("/api/weather/", controller.getWeathers);

module.exports = router;