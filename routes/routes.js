const express = require('express');
const router = express.Router();
const controllers = require('./../controllers/controllers');

router.get('/hello-server', controllers.helloServer);

module.exports = router;