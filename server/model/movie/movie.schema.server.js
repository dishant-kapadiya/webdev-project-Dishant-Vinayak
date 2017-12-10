let mongoose = require('mongoose');
module.exports = mongoose.Schema({
	movieId: Number,
	title: String,
	dateCreated: {type: Date, default: Date.now()}
}, {collection: 'movie'});
