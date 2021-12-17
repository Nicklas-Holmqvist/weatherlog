const express = require('express');
const controller = require('./controller');
const router = express.Router();
const { authUser } = require('../auth/controller')

router.get('/api/users/', controller.getUsers);
router.post('/api/user/register/', controller.createUser);
router.post('/api/user/login/', controller.login);
router.post('/api/user/addUserInfo', authUser, controller.addInfo);
router.put('/api/user/edit/', authUser, controller.editUser);
router.put('/api/user/changePassword', authUser, controller.changePassword);
router.post('/api/user/logout/', controller.logout);
router.delete('/api/user/delete', authUser, controller.deleteUser);

module.exports = router;
