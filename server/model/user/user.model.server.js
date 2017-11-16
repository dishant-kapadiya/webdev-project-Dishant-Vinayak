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

userModel.updateUser = function (userId, user) {
	return userModel.update({_id: userId}, user);
};

userModel.deleteUser = function (userId) {
	return userModel.remove({_id: userId});
};
