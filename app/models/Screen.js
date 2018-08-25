var mongoose = require('mongoose')
var Schema = mongoose.Schema
var g = require('./Gallery')



let ScreenSchema = new Schema({
    name: String,
    resoulution: {
        width: Number,
        height: Number
    },
    location: {
        lat: Number,
        lng: Number
    },
    gallery: Schema.Types.ObjectId,
    user: Schema.Types.ObjectId
})

module.exports = mongoose.model('Screen', ScreenSchema)
