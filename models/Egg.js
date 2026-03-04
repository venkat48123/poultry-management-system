const mongoose = require("mongoose")

const eggSchema = new mongoose.Schema({
    count:Number,
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("Egg", eggSchema)