
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var winnersSchema = new Schema({

winners : [
	{A1: String,
	A2: String, 
	B1: String,
	B2: String,
	C1: String,
	C2: String,
	D1: String,
	D2: String,
	E1: String,
	E2: String,
	F1: String,
	F2: String,
	G1: String,
	H1: String,
	H2: String}
]

});

// create the model for bracket and expose it to our app
module.exports = mongoose.model('Winners', winnersSchema);

