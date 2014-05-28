var bracket = require('./models/bracket');
var user = require('./models/user');


module.exports = function(app, passport) {


// Define a middleware function to be used for every secured routes 
	var auth = function(req, res, next){ 
		if (!req.isAuthenticated()) 
			res.send(401); 
		else 
			next(); 
	}; 

	//added this to see if the request to the database being on a different domain were causing problems
	app.all('/*', function(req, res, next) {
	    res.header('Access-Control-Allow-Origin', '*');
	    res.header('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With');
	    next();
	});



	//======================================
	//API CALLS FOR BUILDING BRACKETS
	//======================================

	
	// get all brackets
	app.get('/api/brackets', function(req, res) {

		// use mongoose to get all brackets in the database
		bracket.find(function(err, brackets) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)

			res.json(brackets); // return all brackets in JSON format
		});
	});


	// create bracket and send back all brackets after creation
	app.post('/api/brackets', function(req, res) {

		// create a bracket, information comes from AJAX request from Angular
		bracket.create({
			text : req.body.text,
			done : false
		}, function(err, bracket) {
			if (err)
				res.send(err);
		});

	});

	//delete a bracket
	app.delete('/api/brackets/:bracket_id', function(req, res) {
		bracket.remove({
			_id : req.params.bracket_id
		}, function(err, bracket) {
			if (err)
				res.send(err);

			// get and return all the brackets after you delete one
			bracket.find(function(err, brackets) {
				if (err)
					res.send(err)
				res.json(brackets);
			});
		});
	});



	//======================================
	//API CALLS FOR USERS AND AUTHENTICATION
	//======================================

	//API Call works
	app.get('/api/users', function(req, res) {

		// use mongoose to get all users in the database
		user.find(function(err, users) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)

			res.json(users); // return all users in JSON format
		});
	});

	//Currently working but no redirects to Angular are working..TODO EJS perhaps
	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect : '/dashboard.html', // redirect to the secure profile section
		//failureRedirect : '/signup', // redirect back to the signup page if there is an error
		//failureFlash : true // allow flash messages

	}));

	//TO DO
	app.post('/signin', passport.authenticate('local-login', function(req, res) {
		//successRedirect : '/profile', // redirect to the secure profile section
		//failureRedirect : '/login', // redirect back to the signup page if there is an error
		//failureFlash : true // allow flash messages
		//sres.send(req.user);
	}));

	//TO DO
	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});


	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.redirect('/'); // load the single view file (angular will handle the page changes on the front-end)
	});
};