let app = require('express');
let movieModel = require('../model/movie/movie.model.server');

app.post('/api/v1/movie', createMovie);
app.get('/api/v1/movies/:movieId', findMovieById);
// Might not be needed
app.get('/api/v1/movieByOId/:movieId', findMovieByObjectId);
app.get('/api/v1/movie', findAllMovies);


function createMovie(req, res) {
	let movie = req.body;
	movieModel.createMovie(movie)
		.then(function (movie) {
			res.status(201).json(movie);
		})
		.catch(function (error) {
			res.status(400).json({
				error: 'Error in creating movie'
			});
		});
}

function findMovieById(req, res) {
	let movieId = req.params["movieId"];
	movieModel.findMovieById(movieId)
		.then(function (movie) {
			res.status(200).json(movie);
		})
		.catch(function (error) {
			res.status(404).json({
				error: 'movie with ID ' + movieId + ' not found'
			});
		});
}

function findMovieByObjectId(req, res) {
	let movieId = req.params["movieId"];
	movieModel.findMovieByObjectId(movieId)
		.then(function (movie) {
			res.status(200).json(movie);
		})
		.catch(function (error) {
			res.status(404).json({
				error: 'movie with ID ' + movieId + ' not found'
			});
		});
}

function findAllMovies(req, res) {
	movieModel.findAllMovies()
		.then(function (movies) {
				res.status(200).json(movies);
			},
			function (error) {
				res.status(404).json({
					error: 'error in fetching all movies'
				});
			}
		);
}