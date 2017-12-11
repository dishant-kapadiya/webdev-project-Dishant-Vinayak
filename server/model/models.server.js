let connectionString = 'mongodb://localhost:27017/CS5610_Project'; // for local

if(process.env.MLAB_USERNAME_WEBDEV) { // check if running remotely
	let username = process.env.MLAB_USERNAME_WEBDEV; // get from environment
	let password = process.env.MLAB_PASSWORD_WEBDEV;
	connectionString = 'mongodb://' + username + ':' + password;
	connectionString += '@ds139619.mlab.com:39619/heroku_zbvksx01'; // use yours
}

let mongoose = require("mongoose");
let db = mongoose.connect(connectionString, {
	useMongoClient: true
});
module.exports = db;