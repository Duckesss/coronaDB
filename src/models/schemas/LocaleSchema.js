const {Schema} = require("mongoose")
const LocaleSchema = new Schema({
    latitude: {
        type:Number,
        required:true
    },
    longitude: {
        type: Number,
        required: true
    }
})
module.exports = LocaleSchema