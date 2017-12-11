module.exports = function (app) {
	let reviewModel = require('../model/review/review.model.server');

	app.post('/api/v1/review', createReview);
	app.get('/api/v1/review/:reviewId', findReviewById);
	app.get('/api/v1/reviews', findAllReviews);
	app.get('/api/v1/reviewsBy/:userId', findReviewsByUserId);
	app.get('/api/v1/reviewsFor/:movieId', findReviewsByMovieId);
	app.get('/api/v1/reviewByFor/:userId/:movieId', findReviewByFor);
	app.put('/api/v1/review', updateReview);
	app.delete('/api/v1/review/:reviewId', deleteReview);


	function createReview(req, res) {
		let review = req.body;
		reviewModel.createReview(review)
			.then(function (result) {
				res.status(201).json(result);
			})
			.catch(function (error) {
				res.sendStatus(400).json({
					error: 'Error in creating review'
				});
			});
	}

	function findReviewById(req, res) {
		let reviewId = req.params["reviewId"];
		reviewModel.findReviewById(reviewId)
			.then(function (result) {
				if (result === null) {
					res.status(404).send({
						error: 'review with ID ' + reviewId + ' not found'
					});
				}
				res.status(200).json(result);
			})
			.catch(function (error) {
				res.status(404).json({
					error: 'review with ID ' + reviewId + ' not found'
				});
			});
	}

	function findAllReviews(req, res) {
		reviewModel.findAllReviews()
			.then(function (result) {
				res.status(200).json(result);
			})
			.catch(function (error) {
				res.status(404).json({
					error: 'error while fetching reviews'
				});
			});
	}

	function findReviewsByUserId(req, res) {
		let userId = req.params["userId"];
		reviewModel.findReviewsByUserId(userId)
			.then(function (result) {
				res.status(200).json(result);
			})
			.catch(function (error) {
				res.status(404).json({
					error: 'error while fetching reviews'
				});
			});
	}

	function findReviewsByMovieId(req, res) {
		let movieId = req.params["movieId"];
		reviewModel.findReviewsByMovieId(movieId)
			.then(function (reviews) {
				res.json(reviews);
			})
			.catch(function (error) {
				res.status(404).json({
					error: 'error while fetching reviews'
				});
			});
	}

	function findReviewByFor(req, res) {
		let userId = req.params["userId"];
		let movieId = req.params["movieId"];

		reviewModel.findReviewByFor(userId, movieId)
			.then(function (review) {
				res.json(review);
			})
			.catch(function (error) {
				res.status(404).json({
					error: 'error while fetching reviews'
				});
			});
	}

	function updateReview(req, res) {
		let review = req.body;
		reviewModel.updateReview(review._id, review)
			.then(function (res) {
				res.sendStatus(200);
			})
			.catch(function (err) {
				res.status(404).json({
					error: 'error while updating review'
				});
			});
	}

	function deleteReview(req, res) {
		let reviewId = req.params.reviewId;
		reviewModel.deleteReview(reviewId)
			.then(function (status) {
				res.status(200).send(status);
			})
			.catch(function (error) {
				res.status(404).send({
					error: 'error while deleting review'
				});
			});
	}
};
