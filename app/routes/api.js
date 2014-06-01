var User = require('../models/user');
var Bracket = require('../models/bracket');
var Winners = require('../models/winners');

exports.index = function(req, res) {
    	res.sendfile(__dirname + "/public/index.html"); // updated to reflect dir structure
	};

module.exports = function(app) {

	// api ---------------------------------------------------------------------
	
	
	//get all users
	app.get('/api/users', function(req, res) {

		// use mongoose to get all brackets in the database
		User.find(function(err, users) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)

			res.json(users); // return all brackets in JSON format
		});
	});




	// get all brackets
	app.get('/api/brackets', function(req, res) {

		// use mongoose to get all brackets in the database
		Bracket.find(function(err, brackets) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)

			res.json(brackets); // return all brackets in JSON format
		});
	});


	app.get('/api/brackets/:id', function(req, res){
		Bracket.find({_id: req.params.id}, function(err,brackets){
			res.json(brackets);
		});
	});




	// create Bracket and send back all brackets after creation
	app.post('/api/brackets', function(req, res) {
		console.info("userEmail: " + JSON.stringify(req.body));        //TEST
		console.info("totalScore: " + JSON.stringify(req.body.text));   //TEST
		console.info("Done: " + JSON.stringify(req.body.done));   //TEST  
		console.info("Headers: " + JSON.stringify(req.headers));  //TEST
		
		// create a Bracket, information comes from AJAX request from Angular
		Bracket.create({
			userID : req.user._id,
			totaScore: 7,
			brackets: req.body
			
		}, function(err) {
			if (err)
				res.send(err);

			
			// get and return all the brackets after you create another
			// Bracket.find(function(err, brackets) {
			// 	if (err)
			// 		res.send(err)
			// 	res.json(brackets);
			// });
		});

	});


	// delete a Bracket
	app.delete('/api/brackets/:id', function(req, res) {
		Bracket.remove({
			_id : req.params.Bracket_id
		}, function(err, Bracket) {
			if (err)
				res.send(err);

			// get and return all the brackets after you create another
			Bracket.find(function(err, brackets) {
				if (err)
					res.send(err)
				res.json(brackets);
			});
		});
	});


	exports.index = function(req, res) {
    	res.sendfile(__dirname + "/public/index.html"); // updated to reflect dir structure
	};


	// application -------------------------------------------------------------
	// app.get('*', function(req, res) {
	// 	res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	// });
};