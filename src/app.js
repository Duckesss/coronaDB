const express = require("express")
const app = express()
const cors = require("cors")
const routes = require("./routes")
const database = require("./database")()
app.use(cors())
app.use(express.json())
app.use(routes)
module.exports = app
