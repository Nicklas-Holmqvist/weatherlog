const express = require('express');
const controller = require('./controller')
const router = express.Router();
const { authUser } = require('../auth/controller')

router.get("/api/logs/", controller.getLogs);
router.post("/api/logs/register", controller.createLog);
router.put("/api/logs/:id", authUser, controller.changeLog);
router.delete("/api/logs/:id", authUser, controller.deleteLog);

module.exports = router;