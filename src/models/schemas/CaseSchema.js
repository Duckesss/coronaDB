const {Schema} = require("mongoose")
const CaseSchema = new Schema({
    amount: {
        type: Number,
        required: true
    },
    day: {
        type: Date,
        required: true
    }
})

module.exports = CaseSchema