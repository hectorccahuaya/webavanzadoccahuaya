const utils = require('../lib/utils');

const User = require('../models/user.js');

const exposedFields = ['username', 'name', 'email'];
module.exports = {
	signup: (req, res, next) => {
		var user = new User({
			...req.body
		});
		user
			.save()
			.then(result => {
				const token = utils.generateToken({
					_id: result['_doc']['_id'],
					name: result['_doc']['name'],
					username: result['_doc']['username'],
					email: result['_doc']['email']
				});
				const exposedData = utils.getCleanUser(result['_doc']);
				res.status(200).json({
					message: 'User succesfully signup!',
					data: exposedData,
					token: token
				});
			})
			.catch(err => {
				console.log(err);
				res.status(500).json({
					error: err
				});
			});
	},
	signin: (req, res, next) => {
		console.log('Entre aqui', req.body);
		User.findOne({ username: req.body.username })
			.select(exposedFields.join(' ') + ' password')
			.exec((err, user) => {
				if (err) res.status(500).json(err);
				console.log('Lo que encuentra', user);
				if (!user) {
					return res.status(401).json({
						error: true,
						message: 'Username or Password is wrong'
					});
				}
				user
					.comparePassword(req.body.password)
					.then(valid => {
						if (!valid) {
							return res.status(401).json({
								error: true,
								message: 'Username or Password is wrong'
							});
						}
						console.log('Antes de enviar');
						res.json({
							message: 'User succesfully logged!',
							data: user,
							token: utils.generateToken(user)
						});
					})
					.catch(err => {
						res.status(500).json(err);
					});
			});
	},
	refreshToken: (req, res, next) => {
		var token = req.body.token || req.query.token;
		if (!token) {
			return res.status(401).json({ message: 'Must pass token' });
		}
		utils
			.verifyToken(token)
			.then(user => {
				User.findById(
					{
						_id: user._id
					},
					function(err, user) {
						if (err) throw err;

						const exposedData = utils.getCleanUser(user['_id']);
						const newToken = utils.generateToken(exposedData);

						res.status(200).json({
							user: exposedData,
							token: newToken
						});
					}
				);
			})
			.catch(err => {
				res.status(500).json(err);
			});
	},
	verifyToken: (req, res, next) => {
		const token = req.headers['authorizacion'];
		if (!token)
			res.status(401).json({
				error: true,
				message:
					'Please register Log in using a valid email to submit posts blabalbalbalb'
			});
		utils
			.verifyToken(token)
			.then(function(user) {
				req.user = user;
				next();
			})
			.catch(function(err) {
				console.log(err);
				res.status(500).json({
					error: err
				});
			});
	},
	create: (req, res, next) => {
		var user = new User({
			...req.body
		});
		user
			.save()
			.then(result => {
				res.status(200).json({
					message: 'User succesfully created!',
					data: {
						...result['_doc']
					},
					ejemplo: 'Hola entro rico '
				});
			})
			.catch(err => {
				console.log(err);
				res.status(500).json({
					error: err,
					bla: 'blblalbalalablablblab'
				});
			});
	},
	find: (req, res, next) => {
		User.find()
			.select(exposedFields.join(' '))
			.exec()
			.then(docs => {
				const response = {
					count: docs.length,
					data: docs.map(doc => {
						return {
							...doc['_doc']
						};
					})
				};
				res.status(200).json(response);
			})
			.catch(err => {
				console.log(err);
				res.status(500).json({
					error: err
				});
			});
	},
	findOne: (req, res, next) => {
		const id = req.params.id;
		User.findById(id)
			.exec()
			.then(doc => {
				if (doc) {
					res.status(200).json({
						data: doc['_doc']
					});
				} else {
					res
						.status(404)
						.json({ message: 'No valid entry found for provided ID' });
				}
			})
			.catch(err => {
				console.log(err);
				res.status(500).json({
					error: err
				});
			});
	},
	update: (req, res, next) => {
		const id = req.params.id;
		let updateParams = {
			...req.body
		};
		User.update({ _id: id }, { $set: updateParams })
			.exec()
			.then(result => {
				res.status(200).json({
					message: 'User updated!',
					data: result['_doc']
				});
			})
			.catch(err => {
				console.log(err);
				res.status(500).json({
					error: err
				});
			});
	},
	delete: (req, res, next) => {
		const id = req.params.id;
		User.remove({ _id: id })
			.exec()
			.then(result => {
				res.status(200).json({
					message: 'User deleted!'
				});
			})
			.catch(err => {
				console.log(err);
				res.status(500).json({
					error: err
				});
			});
	}
};
