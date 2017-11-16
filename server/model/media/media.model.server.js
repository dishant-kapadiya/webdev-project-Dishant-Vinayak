let mongoose = require('mongoose');

let MediaSchema = require('./media.schema.server');
let mediaModel = mongoose.model("MediaModel", MediaSchema);

module.exports = mediaModel;

mediaModel.createMedia = function (media) {
	return mediaModel.create(media);
};

mediaModel.findMediaById = function (id) {
	return mediaModel.findOne({_id: id});
};

mediaModel.findMediaByOwnerId = function (id) {
	return mediaModel.find({ownerId: id});
};

mediaModel.findMediaByTags = function (tags) {
	return mediaModel.find({tags: {$all: tags}});
};

mediaModel.updateMedia = function (mediaId, media) {
	return mediaModel.update({_id: mediaId}, media);
};

mediaModel.deleteMedia = function (mediaId) {
	return mediaModel.remove({_id: mediaId});
};
