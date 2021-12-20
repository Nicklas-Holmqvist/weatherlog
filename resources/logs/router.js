const express = require('express');
const controller = require('./controller')
const router = express.Router();
const { authUser } = require('../auth/controller')

router.get("/api/logs/", controller.getLogs);
router.post("/api/logs/register", controller.createLog);
router.put("/api/logs/:id", controller.changeLog);
router.delete("/api/logs/:id", controller.deleteLog);

module.exports = router;