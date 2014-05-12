// modules =================================================
var express = require('express');
var app     = express();
var mongoose= require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');
var port = process.env.PORT || 8080;
var configDB = require('./config/database.js');


// configuration ===========================================
mongoose.connect(configDB.url);

// config files
var db = require('./config/db');

require('./config/passport')(passport);

var port = process.env.PORT || 4000; // set our port
// mongoose.connect(db.url); // connect to our mongoDB database (commented out after you enter in your own credentials)

app.configure(function() {
	app.use(express.logger('dev'));
	app.use(express.cookieParser());
	app.use(express.bodyParser()); 	
	app.use(express.static(__dirname + '/public')); 	// set the static files location /public/img will be /img for users
	app.use(express.session({secret:'ilovescotchscotchyscotchscotch'}));					
	app.use(passport.initialize());
	app.use(passport.session());
	app.use(flash());					// pull information from html in POST
	app.use(express.methodOverride()); 					// simulate DELETE and PUT
});

// routes ==================================================
require('./app/routes')(app,passport); // pass our application into our routes

// start app ===============================================
app.listen(port);	
console.log('Magic happens on port ' + port); 			// shoutout to the user
exports = module.exports = app; 						// expose app