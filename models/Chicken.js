const mongoose = require("mongoose")

const chickenSchema = new mongoose.Schema({
    breed:String,
    age:Number,
    quantity:Number,
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("Chicken", chickenSchema)