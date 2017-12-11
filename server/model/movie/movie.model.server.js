let mongoose = require('mongoose');

let movieSchema = require('./movie.schema.server');
let movieModel = mongoose.model('MovieModel', movieSchema);

module.exports = movieModel;

movieModel.createMovie = function (movie) {
	return movieModel.create(movie);
};

movieModel.findAllMovies = function () {
	return movieModel.find();
};

movieModel.findMovieById = function findMovieById(movieId) {
	return movieModel.findOne({movieId: movieId});
};

movieModel.addRating = function (movieId, rating) {
	return movieModel.update({'movieId': movieId}, {$push: {ratings: rating.rating}});
};

movieModel.addReview = function (movieId, review) {
	return movieModel.update({'movieId': movieId}, {$push: {reviews: review.review}});
};

movieModel.findMovieByObjectId = function (movieId) {
	return movieModel.findOne({movieId: movieId});
};
