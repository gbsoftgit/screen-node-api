const mongoose = require('mongoose')
const Schema = mongoose.Schema

let PlaylistSchema = new Schema({
    elements: [
        {
            id: Schema.Types.ObjectId,
            media_type: String,
            order: Number
        }
    ],
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

module.exports = mongoose.model('Playlist', PlaylistSchema)