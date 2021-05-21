const mongoose = require("mongoose")
const databases = {
    mongoConnect: function(){
        const db_name = 'coronaDB'
        const strConn = `mongodb+srv://${process.env.USUARIO}:${process.env.PASSWORD}@cluster0.ejos5.gcp.mongodb.net/${db_name}?retryWrites=true&w=majority`
        mongoose.connect(strConn,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
    }
}

module.exports = function(){
    Object.values(databases).forEach(db => db())
}