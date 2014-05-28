var mongoose = require('mongoose');


// mongoose.connect('mongodb://davidjruyle:6d40c25c635dca66a82b963b0b5c024c@oceanic.mongohq.com:10068/fifa_madness', function(err, db) {
//   var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function callback () {
//   // yay!
// });
//   console.log("Connected to Database");
// })


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("yay!");
});


var userSchema = mongoose.Schema({
    firstName: String,
    lastName: String

})
;
var myUser = mongoose.model('myUser', userSchema);

var davidjruyle = new myUser({firstName:'Dave',lastName:"Ruyle"});
var gillsperlein = new myUser({firstName:'gill',lastName:"sperlein"});

console.log(davidjruyle.firstName + " " + davidjruyle.lastName);


myUser.find(function (err, users) {
  if (err) return console.error(err);
  console.log(users)
})