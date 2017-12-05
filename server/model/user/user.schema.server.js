let mongoose = require('mongoose');
module.exports = mongoose.Schema({
	firstName: String,
	lastName: String,
	email: String,
	password: String,
	phone: String,
    role: {
        type: String,
        default: 'Fan',
        enum: ['Fan', 'Critic', 'Admin']
    },
	genre: {type: [String], default: []},
	follows: {type: mongoose.Schema.ObjectId, ref: 'UserModel'},
	followers: {type: mongoose.Schema.ObjectId, ref: 'UserModel'},
	dateCreated: {type: Date, default: Date.now()}
}, {collection: 'user'});