const CoronaModel = require("../models/CoronaModel")

exports.saveWorstDays = async (req,res) => {
    const {cases, locale, date} = req.body
    const info = cases.reduce((result,data) => {
        const states = {
            "confirmed": () => {
                if(data.Cases > result.maxCases.amount){
                    result.maxCases.amount = data.Cases
                    result.maxCases.day = data.Date
                }
            },
            "deaths": () => {
                if(data.Cases > result.maxDeaths.amount){
                    result.maxDeaths.amount = data.Cases
                    result.maxDeaths.day = data.Date
                }
            }
        }
        states[data.Status.toLowerCase()] && states[data.Status.toLowerCase()]()
        return result
    },{
        maxDeaths:{
            amount: 0,
            day: ''
        },
        maxCases:{
            amount: 0,
            day: ''
        }
    })
    const novoRegistro = new CoronaModel({
        user:{
            locale,
            date
        },
        ...info
    })
    await novoRegistro.save()
    return res.json(novoRegistro)
}