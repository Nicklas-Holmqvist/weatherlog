const express = require('express');
const controller = require('./controller')
const router = express.Router();

router.get("/api/logs/", controller.getLogs);

module.exports = router;