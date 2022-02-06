const express = require("express")
const routers = express.Router();

const viewRouter = require('./viewRouter.js');

routers.use('/', viewRouter)

module.e