var mongoose = require('mongoose');


mongoose.connect('mongodb://davidjruyle:6d40c25c635dca66a82b963b0b5c024c@oceanic.mongohq.com:10068/fifa_madness', function(err, db) {
  if(err) throw err;
  console.log("Connected to Database");
})
