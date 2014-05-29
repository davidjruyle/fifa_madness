var Bracket = require('../models/bracket');

module.exports = function(app) {

	// api ---------------------------------------------------------------------
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

	// create Bracket and send back all brackets after creation
	app.post('/api/brackets', function(req, res) {
		console.info("userEmail: " + JSON.stringify(req.body));        //TEST
		console.info("totalScore: " + JSON.stringify(req.body.text));   //TEST
		console.info("Done: " + JSON.stringify(req.body.done));   //TEST  
		console.info("Headers: " + JSON.stringify(req.headers));  //TEST
		// create a Bracket, information comes from AJAX request from Angular
		Bracket.create({
			userEmail : 'darwood@fake.com',
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
	app.delete('/api/brackets/:Bracket_id', function(req, res) {
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

	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});
};