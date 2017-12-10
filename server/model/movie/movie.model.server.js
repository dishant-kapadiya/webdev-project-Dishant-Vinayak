let mongoose = require('mongoose');

let movieSchema = require('./movie.schema.server');
let movieModel = mongoose.model('MovieModel', movieSchema);

movieModel.createMovie = function (movie) {
	return movieModel.create(movie);
};
movieModel.findAllMovies = findAllMovies;
movieModel.findMovieById = findMovieById;
movieModel.addRating = addRating;
movieModel.addReview = addReview;
movieModel.findMovieByObjectId = findMovieByObjectId;
module.exports = movieModel;



function findMovieById(movieId) {
	return movieModel.findOne({movieId: movieId});
}

function findMovieByObjectId(movieId) {
	return movieModel.findOne({_id: movieId});
}

function findAllMovies() {
	return movieModel.find();
}

function addRating(movieId, rating) {
	return movieModel.update({'movieId': movieId}, {$push:{ratings:rating.rating}});
}

function addReview(movieId, review) {
	return movieModel.update({'movieId': movieId}, {$push: {reviews: review.review}});
}