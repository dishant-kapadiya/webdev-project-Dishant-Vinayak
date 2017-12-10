let mongoose = require('mongoose');

let MovieSchema = require('./movie.schema.server');
let movieModel = mongoose.model("MovieModel", MovieSchema);

module.exports = movieModel;

movieModel.createUser = function (user) {
	return movieModel.create(user);
};

movieModel.findUserByEmail = function (userName) {
	return movieModel.findOne({email: userName});
};

movieModel.findUserByCredentials = function (username, password) {
	return movieModel.findOne({email: username, password: password});
};

movieModel.findUserById = function (userId) {
	return movieModel.findOne({_id: userId});
};

movieModel.updateUser = function (userId, user) {
	return movieModel.update({_id: userId}, user);
};

movieModel.deleteUser = function (userId) {
	return movieModel.remove({_id: userId});
};
