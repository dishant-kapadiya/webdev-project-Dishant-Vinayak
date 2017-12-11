let mongoose = require('mongoose');

let UserSchema = require('./user.schema.server');
let userModel = mongoose.model("UserModel", UserSchema);

module.exports = userModel;

userModel.createUser = function (user) {
	return userModel.create(user);
};

userModel.findUserByEmail = function (userName) {
	return userModel.findOne({email: userName});
};

userModel.findUserByCredentials = function (username, password) {
	return userModel.findOne({email: username, password: password});
};

userModel.findUserById = function (userId) {
	return userModel.findOne({_id: userId});
};

userModel.allUsers = function () {
	return userModel.find({})
};

userModel.updateUser = function (userId, user) {
	return userModel.update({_id: userId}, user);
};

userModel.deleteUser = function (userId) {
	return userModel.remove({_id: userId});
};

userModel.findUserByFacebookId = function (facebookId) {
	return userModel.findOne({'facebook.id': facebookId});
};

userModel.findFollowsList = function (userId) {
	return userModel.findOne({'_id': userId}).select('follows');
};

userModel.findFollowersList = function (userId) {
	return userModel.findOne({'_id': userId}).select('followers');
};

userModel.addFollower = function (userId, otherId) {
	return new Promise(function (resolve, reject) {
		userModel.update({_id: userId}, {$push: {follows: otherId}})
			.then(function (result) {
				userModel.update({_id: otherId}, {$push: {followers: userId}})
					.then(function (result) {
						resolve(result)
					})
					.catch(function(error){
						reject(error)
					})
			})
			.catch(function (error) {
				reject(error)
			})
	});
};

userModel.removeFollower = function (userId, otherId) {
	return new Promise(function (resolve, reject) {
		userModel.update({_id: userId}, {$pull: {follows: otherId}})
			.then(function (result) {
				userModel.update({_id: otherId}, {$pull: {followers: userId}})
					.then(function (result) {
						resolve(result)
					})
					.catch(function(error){
						reject(error)
					})
			})
			.catch(function (error) {
				reject(error)
			})
	});
};