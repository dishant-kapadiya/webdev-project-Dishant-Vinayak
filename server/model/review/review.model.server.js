let mongoose = require('mongoose');

let reviewSchema = require('./review.schema.server');
let reviewModel = mongoose.model('ReviewModel', reviewSchema);

module.exports = reviewModel;

reviewModel.createReview = function (review) {
	return reviewModel.create(review);
};

reviewModel.findAllReviews = function () {
	return reviewModel.find();
};

reviewModel.findReviewById = function (reviewId) {
	return reviewModel.findOne({_id: reviewId});
};

reviewModel.findReviewsByMovieId = function (movieId) {
		return reviewModel.find({movieId: movieId});
	};

reviewModel.findReviewsByUserId = function (userId) {
	return reviewModel.find({userId: userId});
};

reviewModel.deleteReview = function (reviewId) {
	return reviewModel.remove({_id: reviewId});
};

reviewModel.findReviewByFor = function (userId, movieId) {
	return reviewModel.findOne({userId: userId, movieId: movieId});
};

reviewModel.updateReview = function (reviewId, review) {
	return reviewModel.update({_id: reviewId}, {$set: review});
};














