let mongoose = require('mongoose');
module.exports = mongoose.Schema({
	firstName: String,
	lastName: String,
	email: String,
	password: String,
	phone: String,
	genre: {type: [String], default: []},
	follows: {type: mongoose.Schema.ObjectId, ref: 'user'},
	followers: {type: mongoose.Schema.ObjectId, ref: 'user'},
	dateCreated: {type: Date, default: Date.now()}
}, {collection: 'user'});