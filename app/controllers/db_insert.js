
var MongoClient = require('mongodb').MongoClient;
var format = require('util').format;

MongoClient.connect('mongodb://fifa-admin:javacrash1@oceanic.mongohq.com:10068/fifa_madness/', function(err,db){
  if (err) throw err;
  console.log(err);
  console.log("connected to Database");

  //This needs to be taken from the Form submission
  var thisdoc = {firstName:"Matt",lastName:"Holbein",email:"mh@fakemail.com",hashed_password:"fffff",Round1:"bra"};

  db.collection('fifa_users').insert(thisdoc, function(err,records){
  	if(err) throw err;
  	console.log("Record added as "+records[0]._id);
  });
});


