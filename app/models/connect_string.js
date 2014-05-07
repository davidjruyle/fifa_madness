var mongodb = require('mongodb')
  , MongoClient = mongodb.MongoClient
MongoClient.connect("mongodb://fifa-admin:javacrash1@oceanic.mongohq.com:10068/fifa_madness/", function(err, db) {
  var collection = db.collection('fifa_users');
  if(err){
    console.log(err);
    console.log(collection);
    console.log("Connection Failed Via Connection String.");
  } else {
    console.log("Connected Via Connection String . . .");
    db.logout(function(err, result) {
      if(!err){
        console.log("Logged out Via Connection String . . .");
      }
      db.close();
      console.log("Connection closed . . .");
    });
  }
});

//mongodb://fifa-admin:javacrash1@oceanic.mongohq.com:10068/fifa-madness