const express = require("express")
const routers = express.Router();

const viewRouter = require('./viewRouters.js');

routers.use('/', viewRouter)

module.exports = routers