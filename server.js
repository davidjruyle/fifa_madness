// modules =================================================
var express = require('express');
var app     = express();
var mongoose= require('mongoose');
var db = mongoose.connect('mongodb://fifa-admin:javacrash1@oceanic.mongohq.com:10068/fifa_madness/');
var mongoStore = require('connect-mongo')(express);
var passport = require('passport');
var GoogleStrategy = require('passport-google').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var TwitterStrategy = require('passport-twitter').Strategy;



// configuration ===========================================
	
// config files
var db = require('./config/db');
require('./app/models/users.js');

var port = process.env.PORT || 4000; // changed to port 80 to push to Bitnami --- this should be set as an environmental variable
// mongoose.connect(db.url); // connect to our mongoDB database (commented out after you enter in your own credentials)

app.configure(function() {
	app.use(express.static(__dirname + '/public')); 	// set the static files location /public/img will be /img for users
	app.use(express.logger('dev')); 					// log every request to the console
	app.use(express.bodyParser()); 						// pull information from html in POST
	app.use(express.methodOverride());
	app.use(passport.initialize());
	app.use(passport.session());
	app.use(express.session({
	  secret: 'SECRET',
	  cookie: {maxAge: 60*60*1000},
	  store: new mongoStore({
	      //db: db.connection.db,
	      url:'mongodb://fifa-admin:javacrash1@oceanic.mongohq.com:10068/fifa_madness/',
	      collection: 'sessions'
	    })
	  })); 					// simulate DELETE and PUT
});

// routes ==================================================
require('./app/routes')(app); // pass our application into our routes

//passport authentication
passport.use(new GoogleStrategy({
    returnURL: 'http://localhost/auth/google/callback',
    realm: 'http://localhost/'
  },
  function(identifier, profile, done) {
    process.nextTick(function () {
      profile.identifier = identifier;
      return done(null, profile);
    });
  }
));



// start app ===============================================
app.listen(port);	
console.log('Magic happens on port ' + port); 			// shoutout to the user
exports = module.exports = app; 						// expose app