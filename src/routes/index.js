const { Router } = require('express')
const CoronaController = require('../controllers/CoronaController')
const routes = Router()

routes.get("/ping", (req,res) => res.send("pong"))
routes.post("/saveWorstDays", CoronaController.saveWorstDays)

module.exports = routes