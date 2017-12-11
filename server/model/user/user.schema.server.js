let mongoose = require('mongoose');
module.exports = mongoose.Schema({
	firstName: String,
	lastName: String,
	email: String,
	password: String,
	phone: String,
    role: {type: String, default: 'Fan', enum: ['Fan', 'Critic', 'moderator', 'admin']},
	genre: {type: [String], default: []},
	follows: [{type: mongoose.Schema.ObjectId, ref: 'user', default: [], unique: true}],
	followers: [{type: mongoose.Schema.ObjectId, ref: 'user', default: [], unique: true}],
	dateCreated: {type: Date, default: Date.now()}
}, {collection: 'user'});