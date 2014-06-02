// server.js

// set up ======================================================================
// get all the tools we need
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 4000;
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');
var http = require('http');
var path = require('path');
var configDB = require('./config/database.js');
var routes = require('./app/routes');
var api = require('./app/routes/api');


// configuration ===============================================================
mongoose.connect(configDB.url); // connect to our database
mongoose.set('debug', true);
require('./config/passport')(passport); // pass passport for configuration

app.configure(function() {

	// set up our express application
	app.use(express.logger('dev')); // log every request to the console
	app.use(express.cookieParser()); // read cookies (needed for auth)
	//app.use(require('connect').bodyParser());
	app.use(express.bodyParser()); // get information from html forms
	//app.use(app.router);
	app.set('views', __dirname + '/public/views');
	app.set('view engine', 'ejs'); // set up ejs for templating
	app.use(express.static(path.join(__dirname, 'public')));
	// required for passport
	app.use(express.session({ secret: 'Secret_sauce' })); // session secret
	app.use(passport.initialize()); //
	app.use(passport.session()); // persistent login sessions
	app.use(flash()); // use connect-flash for flash messages stored in session

});

// routes ======================================================================
require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport
require('./app/routes/api')(app);
//app.get('/', routes.index);
//app.get('/partials/:name', routes.partials);

// JSON API

// app.get('/api/bracket/:id', api.findById);

// app.get('/api/brackets', api.findAll);
// app.post('/api/bracket', api.addBracket);
// app.put('/api/bracket/:id', api.updateBracket);
//app.delete('/api/post/:id', api.deleteBracket);

// redirect all others to the index (HTML5 history)
// app.get('*', api.index);




// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);
