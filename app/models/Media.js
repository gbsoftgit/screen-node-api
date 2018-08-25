var mongoose = require('mongoose')
var Schema = mongoose.Schema

let MediaSchema = new Schema({
    name: String,
    url: String,
    size: Number,
    media_type: String,
    user: Schema.Types.ObjectId,
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Media', MediaSchema)