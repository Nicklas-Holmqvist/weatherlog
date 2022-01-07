const express = require('express');
const controller = require('./controller')
const router = express.Router();
const { authUser } = require('../auth/controller')

router.get("/api/logs/", authUser, controller.getLogs);
router.get("/api/home/", authUser, controller.getFive);
router.get("/api/log/:id", authUser, controller.getLog);
router.post("/api/logs/register", controller.createLog);
router.get("/api/diagram/:id", controller.getDiagram);
router.put("/api/logs/:id", authUser, controller.changeLog);
router.delete("/api/logs/:id", authUser, controller.deleteLog);

module.exports = router;