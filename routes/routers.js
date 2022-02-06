const express = require("express")
const routers = express.Router();

const viewRouter = require('./viewRouters.js');
const databaseRouter = require('./databaseRouter.js')

routers.use('/', viewRouter)
routers.use('/api/', databaseRouter)

module.exports = routers