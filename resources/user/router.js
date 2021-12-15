const express = require('express');
const controller = require('./controller')
const router = express.Router();

router.get("/api/users/", controller.getUsers);

module.exports = router;