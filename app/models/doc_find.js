var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://fifa-admin:javacrash1@oceanic.mongohq.com:10068/fifa_madness/", function(err, db) {
  var myDB = db.db("fifa");
  myDB.collection("fifa_users", function(err, fifa_users){
    fifa_users.find(function(err, items){
      items.toArray(function(err, itemArr){
        console.log("Document Array: ");
        console.log(itemArr);
      });
    });
    // fifa_users.find(function(err, items){
    //   items.each(function(err, item){
    //     if(item){
    //       console.log("Singular Document: ");
    //       console.log(item);
    //     }
    //   });
    // });
    fifa_users.findOne({user_id:12}, function(err, item){
      console.log("Found One: ");
      console.log(item);
    });
  });
  setTimeout(function(){ db.close(); }, 3000);
});