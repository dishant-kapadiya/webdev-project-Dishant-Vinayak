module.exports = function (app) {

	let mediaModel = require('../model/media/media.model.server');

	app.post('/api/v1/owner/:ownerId/media', createMedia);
	app.get('/api/v1/owner/:ownerId/media', findMediaByOwner);
	app.get('/api/v1/media/:mediaId', findMediaById);
	app.put('/api/v1/media/:mediaId', updateMedia);
	app.delete('/api/v1/media/:mediaId', deleteMedia);

	app.post('/api/owner/:ownerId/website', createWebsite);
	app.get('/api/owner/:ownerId/website', findWebsitesByowner);
	app.get('/api/website/:websiteId', findWebsiteById);
	app.put('/api/website/:websiteId', updateWebsite);
	app.delete('/api/website/:websiteId', deleteWebsite);
	

	function createMedia(req, res) {
		mediaModel.createMedia(req.body)
			.then(function(owner){
				res.send(owner);
			})
			.catch(function(err){
				res.status(400);
				res.send({
					"error": "error while creating media"
				})
			});
	}

	function findMediaByOwner(req, res) {
		let ownerId = req.query.ownerId;
		
		mediaModel.findMediaByOwnerId(ownerId)
			.then(function(result){
				res.status(200).send(result);
			})
			.catch(function(error){
				res.status(400).send({
					"error": "error while fetching media for owner"
				});
			});
	}

	function findMediaById(req, res) {
		let mediaId = req.params.mediaId;

		mediaModel.findMediaById(mediaId)
			.then(function (media){
				if(media === null){
					res.status(404).send({
						"error": "media not found"
					});
					return;
				}
				res.status(200).send(media);
			})
			.catch(function (error) {
				res.status(404).send({
					"error": "Not Found"
				});
			});
	}

	function updateMedia(req, res) {
		let mediaId = req.params.mediaId;
		let media = req.body;

		mediaModel.updateMedia(mediaId, media)
			.then(function (result){
				res.status(200).send({
					"message": "media updated successfully"
				});
			})
			.catch(function (error) {
				res.status(404).send({
					"error": "Not Found"
				});
			});
	}

	function deleteMedia(req, res) {
		let mediaId = req.params.ownerId;

		mediaModel.deleteMedia(mediaId)
			.then(function (result){
				console.log(result);
				if(result.result.n === 0){
					res.status(404).send({
						"error": "media not found"
					});
					return;
				}
				res.status(200).send({
					"message": "media deleted successfully"
				});
			})
			.catch(function (error) {
				res.status(404).send({
					"error": "Not Found"
				});
			});
	}
};
