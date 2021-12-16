const express = require('express');
const controller = require('./controller');
const router = express.Router();

router.get('/auth', controller.isAuth);

module.exports = router;
