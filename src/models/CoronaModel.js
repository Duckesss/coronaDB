const {model} = require("mongoose")
const CoronaSchema = require("./schemas/CoronaSchema")

module.exports = model("Corona",CoronaSchema)