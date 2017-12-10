module.exports = function (app) {
	app.post('/api/v1/search/movies', searchMoviesHandler);
	app.get('/api/v1/search/mostpopular', searchMostPopularMovies);
	app.get('/api/v1/search/highestgrossing', searchHighestGrossingMovies);
	app.get('/api/v1/search/latestrelease', searchLatestReleaseMovies);

	function searchMoviesHandler(req, res) {
		searchMovies(req.body.query)
			.then((result) => {
				res.status(200);
				res.send(result);
			})
			.catch((error) => {
				res.status(400);
				res.send(error);
			})
	}

	function searchMostPopularMovies(req, res) {
		searchMoviesWithParam('popularity.desc')
			.then((result) => {
				res.status(200);
				res.send(result);
			})
			.catch((error) => {
				res.status(400);
				res.send(error);
			})
	}

	function searchHighestGrossingMovies(req, res) {
		searchMoviesWithParam('revenue.desc')
			.then((result) => {
				res.status(200);
				res.send(result);
			})
			.catch((error) => {
				res.status(400);
				res.send(error);
			})
	}

	function searchLatestReleaseMovies(req, res) {
		searchMoviesWithParam('release_date.desc')
			.then((result) => {
				res.status(200);
				res.send(result);
			})
			.catch((error) => {
				res.status(400);
				res.send(error);
			})
	}

	function searchMovies(searchQuery) {
		const API_KEY = process.env.TMDB_KEY || 'd3d04ee78153a24eeb1f7a0e73f56a9c';
		const TMDB_URL = 'https://api.themoviedb.org/3/search/movie';

		let options = {
			uri: TMDB_URL,
			qs: {
				api_key: API_KEY,
				query: searchQuery
			},
			json: true // Automatically parses the JSON string in the response
		};

		return new Promise(function (resolve, reject) {
			require('request-promise')(options)
				.then((response) => {
					resolve(response.results)
				})
				.catch((err) => {
					reject({
						"message": "Bad Request"
					})
				});
		});
	}

	function searchMoviesWithParam(param) {
		const API_KEY = process.env.TMDB_KEY || 'd3d04ee78153a24eeb1f7a0e73f56a9c';
		const TMDB_URL = 'https://api.themoviedb.org/3/discover/movie';

		let options = {
			uri: TMDB_URL,
			qs: {
				api_key: API_KEY,
				sort_by: param
			},
			json: true // Automatically parses the JSON string in the response
		};


		return new Promise(function (resolve, reject) {
			require('request-promise')(options)
				.then((response) => {
					resolve(response.results)
				})
				.catch((err) => {
					reject({
						"message": "Bad Request"
					})
				});
		});
	}
};
