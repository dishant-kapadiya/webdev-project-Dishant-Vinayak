let mongoose = require('mongoose');
module.exports = mongoose.Schema({
	ownerId: {type: mongoose.Schema.ObjectId, ref: 'user'},
	username: String,
	movieId: {type: mongoose.Schema.ObjectId, ref: 'movie'},
	review: String,
	flagged: String,
	dateCreated: {type: Date, default: Date.now()}
}, {collection: 'review'});
