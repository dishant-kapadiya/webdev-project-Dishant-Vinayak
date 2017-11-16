let mongoose = require('mongoose');
module.exports = mongoose.Schema({
	ownerId: {type: mongoose.Schema.ObjectId, ref: 'user'},
	description: String,
	tags: {type: [String], default: []},
	upVotes: Number,
	downVotes: Number,
	url: String,
	type: {type: String, enum: ['VIDEO', 'IMAGE', 'AUDIO']},
	dateCreated: {type: Date, default: Date.now()}
}, {collection: 'media'});
