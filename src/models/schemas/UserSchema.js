const {Schema} = require("mongoose")
const LocaleSchema = require("./LocaleSchema")
const UserSchema = new Schema({
    locale: {
        type: LocaleSchema,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
})
module.exports = UserSchema