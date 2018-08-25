var mongoose = require('mongoose')
var Schema = mongoose.Schema

let UserMetaSchema = Schema({
	key: String,
	value: String,
	created_at: {
		type: Date,
		default: Date.now
	},
	updated_at: {
		type: Date,
		default: Date.now
	}
})

let UserSchema = new Schema({
	username: String,
	email: {
		type: String,
		unique: true
	},
	password: String,
	remember_token: String,
	meta: {
		type: [UserMetaSchema],
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
})

module.exports = mongoose.model('User', UserSchema)