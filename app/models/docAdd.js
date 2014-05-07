var MongoClient = require('mongodb').MongoClient;
function addObject(collection, object){
  collection.insert(object, function(err, result){
    if(!err){
      console.log("Inserted : ");
      console.log(result);
    }
  });
}

//Adding a new user
MongoClient.connect("mongodb://fifa-admin:javacrash1@oceanic.mongohq.com:10068/fifa_madness/", function(err, db) {  
  var myDB = db.db("fifa_madness");
  //myDB.dropCollection("nebulae");
  myDB.createCollection("nebulae", function(err, nebulae){
    addObject(nebulae, {ngc:"NGC 7293", name:"Helix",
      type:"planetary",location:"Aquila"});
    addObject(nebulae, {ngc:"NGC 6543", name:"Cat's Eye",
      type:"planetary",location:"Draco"});
    addObject(nebulae, {ngc:"NGC 1952", name: "Crab",
      type:"supernova",location:"Taurus"});
  });
  setTimeout(function(){ db.close(); }, 3000);
});

//Adding a new Bracket and saving a Bracket
