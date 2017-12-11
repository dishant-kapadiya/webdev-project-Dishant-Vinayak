module.exports = function (app) {

	let userModel = require('../model/user/user.model.server');

	let passport = require('passport');
	let LocalStrategy = require('passport-local').Strategy;
	let FacebookStrategy = require('passport-facebook').Strategy;
	let bcrypt = require("bcrypt-nodejs");

	app.post('/api/v1/user', createUser);
	app.get('/api/v1/user', findUser);
	app.get('/api/v1/allUsers', allUsers);
	app.get('/api/v1/user/:userId', findUserById);
	app.post('/api/v1/userDetails', getUserDetails);
	app.get('/api/v1/user/:userId/follows', findFollowsList);
	app.get('/api/v1/user/:userId/followers', findFollowersList);
	app.get('/api/v1/user/:userId/follow/:otherUserId', addFollower);
	app.get('/api/v1/user/:userId/unfollow/:otherUserId', removeFollower);
	app.put('/api/v1/user/:userId', updateUser);
	app.delete('/api/v1/user/:userId', deleteUser);


	// cookies, sessions and OAuth
	app.post('/api/v1/login', passport.authenticate('local'), login);
	app.post('/api/v1/logout', logout);
	app.post('/api/v1/register', register);
	app.post('/api/v1/loggedIn', loggedIn);
	app.get('/api/v1/facebook/login', passport.authenticate('facebook', {scope: ['email']}));
	app.get('/auth/facebook/callback', passport.authenticate('facebook', {
		successRedirect: '/home',
		failureRedirect: '/login'
	}));

	let facebookConfig = {
		clientID: process.env.FACEBOOK_CLIENT_ID || "asdflasdfasdfasdfasdf",
		clientSecret: process.env.FACEBOOK_CLIENT_SECRET || "asdflasdfasdfasdfasdf",
		callbackURL: process.env.FACEBOOK_CALLBACK_URL || "asdflasdfasdfasdfasdf"
	};

	passport.serializeUser((user, done) => {
			done(null, user);
		}
	);

	passport.deserializeUser((user, done) => {
		userModel.findUserById(user._id)
			.then(
				function (user) {
					done(null, user);
				},
				function (err) {
					done(err, null);
				}
			);
	});

	passport.use(new LocalStrategy((username, password, done) => {
			userModel.findUserByEmail(username)
				.then(function (user) {
						if (user && bcrypt.compareSync(password, user.password)) {
							return done(null, user);
						} else {
							return done(null, false);
						}
					},
					function (err) {
						if (err) {
							return done(err);
						}
					}
				)
				.catch(function (err) {
					return done(err);
				});
		}
	));

	passport.use(new FacebookStrategy(facebookConfig, (token, refreshToken, profile, done) => {
			userModel.findUserByFacebookId(profile.id)
				.then(
					function (user) {
						if (user) {
							return done(null, user);
						} else {
							let names = profile.displayName.split(" ");
							let newFacebookUser = {
								lastName: names[1],
								firstName: names[0],
								email: profile.emails ? profile.emails[0].value : "",
								facebook: {
									id: profile.id,
									token: token
								}
							};
							return userModel.createUser(newFacebookUser);
						}
					},
					function (err) {
						if (err) {
							return done(err);
						}
					}
				)
				.then(
					function (user) {
						return done(null, user);
					},
					function (err) {
						if (err) {
							return done(err);
						}
					}
				);
		}
	));

	function login(req, res) {
		let user = req.user;
		res.json(user);
	}

	function logout(req, res) {
		req.logOut();
		res.sendStatus(200);
	}

	function register(req, res) {
		let user = req.body;
		console.log(user);
		user.password = bcrypt.hashSync(user.password);
		userModel.createUser(user)
			.then(
				function (user) {
					if (user) {
						req.login(user, function (err) {
							if (err) {
								res.status(400).send(err);
							} else {
								res.json(user);
							}
						});
					}
				});
	}

	function loggedIn(req, res) {
		res.send(req.isAuthenticated() ? req.user : '0');
	}

	function createUser(req, res) {
		userModel.createUser(req.body)
			.then(function (user) {
				res.send(user);
			})
			.catch(function (err) {
				res.status(400);
				res.send({
					"error": "error while creating user"
				})
			})
	}

	function findUser(req, res) {
		let query = req.query;
		if (query.hasOwnProperty('password')) {
			findUserByCredentials(query, res)
		} else {
			findUserByEmail(query, res);
		}
	}

	function allUsers(req, res) {
		userModel.allUsers()
			.then(function (users) {
				res.status(200).json(users)
			})
			.catch(function (error) {
				res.status(404).json({
					error: "couldn't fetch all users"
				})
			})
	}

	function findFollowsList(req, res) {
		userModel.findFollowsList(req.params['userId'])
			.then(function (users) {
				res.status(200).json(users)
			})
			.catch(function (error) {
				res.status(404).json({
					error: "couldn't fetch follows list"
				})
			})
	}

	function findFollowersList(req, res) {
		userModel.findFollowersList(req.params['userId'])
			.then(function (users) {
				res.status(200).json(users)
			})
			.catch(function (error) {
				res.status(404).json({
					error: "couldn't fetch follows list"
				})
			})
	}

	function addFollower(req, res) {
		userModel.addFollower(req.params['userId'], req.params['otherUserId'])
			.then(function (users) {
				res.sendStatus(200)
			})
			.catch(function (error) {
				res.sendStatus(404)
			})
	}

	function removeFollower(req, res) {
		userModel.removeFollower(req.params['userId'], req.params['otherUserId'])
			.then(function (users) {
				res.sendStatus(200)
			})
			.catch(function (error) {
				res.sendStatus(404)
			})
	}

	function findUserByEmail(req, res) {
		userModel.findUserByEmail(req.email)
			.then(function (user) {
				if (user === null) {
					res.status(404).send({
						"error": "user not found"
					});
					return;
				}
				res.status(200).send(user);
			})
			.catch(function (error) {
				res.status(404).send({
					"error": "Not Found"
				});
			});
	}

	function findUserByCredentials(req, res) {
		userModel.findUserByCredentials(req.email, req.password)
			.then(function (user) {
				if (user === null) {
					res.status(404).send({
						"error": "user not found"
					});
					return;
				}
				res.status(200).send(user);
			})
			.catch(function (error) {
				res.status(404).send({
					"error": "Not Found"
				});
			});
	}

	function findUserById(req, res) {
		let userId = req.params.userId;

		userModel.findUserById(userId)
			.then(function (user) {
				if (user === null) {
					res.status(404).send({
						"error": "user not found"
					});
					return;
				}
				res.status(200).send(user);
			})
			.catch(function (error) {
				res.status(404).send({
					"error": "Not Found"
				});
			});
	}

	function getUserDetails(req, res) {
		let userIds = req.body;
		let promises = userIds.map(x => userModel.findUserDetailsById(x));

		Promise.all(promises)
			.then(function (users) {
				res.status(200).json(users)
			})
			.catch(function (error) {
				res.status(404).json({
					"error": "some or all users not found"
				})
			});
	}

	function updateUser(req, res) {
		let userId = req.params.userId;
		let user = req.body;

		userModel.updateUser(userId, user)
			.then(function (result) {
				res.status(200).send({
					"message": "user updated successfully"
				});
			})
			.catch(function (error) {
				res.status(404).send({
					"error": "Not Found"
				});
			});
	}

	function deleteUser(req, res) {
		let userId = req.params.userId;

		userModel.deleteUser(userId)
			.then(function (result) {
				console.log(result);
				if (result.result.n === 0) {
					res.status(404).send({
						"error": "user not found"
					});
					return;
				}
				res.status(200).send({
					"message": "user deleted successfully"
				});
			})
			.catch(function (error) {
				res.status(404).send({
					"error": "Not Found"
				});
			});
	}
};
