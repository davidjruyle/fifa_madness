// modules =================================================
var express = require('express');
var routes = require('./app/routes');
var api = require('./app/routes/api');
var http = require('http');
var path = require('path');
var app = express();
var mongoose= require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');
var port = process.env.PORT || 8080;
var configDB = require('./config/database.js');
var connect = require('connect');
var MongoStore = require('connect-mongo')(express);
var _ = require('lodash');


// configuration ===========================================
mongoose.connect(configDB.url);

// config files
var db = require('./config/db');

require('./config/passport')(passport);

var port = process.env.PORT || 4000; // set our port
// mongoose.connect(db.url); // connect to our mongoDB database (commented out after you enter in your own credentials)

app.configure(function() {
	app.use(express.logger('dev'));
	app.set('views', __dirname + '/views');
	//app.set('view engine', 'ejs'); // set up ejs for templating
	app.use(express.cookieParser());
	app.use(express.bodyParser()); 	
	app.use(express.static(path.join(__dirname, 'public')));
	app.use(app.router); 	// set the static files location /public/img will be /img for users
	
	app.use(express.session({ secret: 'keyboard cat' }));



	app.use(passport.initialize());
	app.use(passport.session());
	app.use(flash());					// pull information from html in POST
	app.use(express.methodOverride()); 					// simulate DELETE and PUT
});

// routes ==================================================
require('./app/routes')(app,passport); // pass our application into our routes
require('./app/routes/auth/routes');

//app routes 
app.get('/users', api.findAll);
// app.get('/users/:id', user.findById);
// app.post('/users', user.addUser);
// app.put('/users/:id', user.updateUser);
// app.delete('/users/:id', user.deleteUser);


// start app ===============================================
app.listen(port);	
console.log('listening on port ' + port); 			// shoutout to the user
exports = module.exports = app; 						// expose app





