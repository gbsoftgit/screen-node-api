const mongoose = require('mongoose')
const Schema = mongoose.Schema;

module.exports = mongoose.model('Gallery', new Schema({
    user: Schema.Types.ObjectId,
    medias: {
        type: [Schema.Types.ObjectId],
        default: undefined,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
}))