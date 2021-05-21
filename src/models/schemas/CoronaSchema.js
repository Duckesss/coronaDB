const {Schema} = require("mongoose")
const CaseSchema = require('./CaseSchema')
const UserSchema = require('./UserSchema')

const CoronaSchema = new Schema({
    user: {
        type: UserSchema,
        required: true
    },
    maxDeaths:{
        type: CaseSchema,
        required: true
    },
    maxCases: {
        type: CaseSchema,
        required: true
    },
})
module.exports = CoronaSchema