const express = require('express');
const controller = require('./controller');
const router = express.Router();

router.get('/api/users/', controller.getUsers);
router.post('/api/user/register/', controller.createUser);
router.post('/api/user/login/', controller.login);
router.post('/api/user/logout/', controller.logout);

module.exports = router;
