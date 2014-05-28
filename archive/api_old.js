/*
 * Serve JSON to our AngularJS client
 */

// load up the user model //  
// var User = require('../models/user');
// var Bracket = require('../models/bracket');

var dbUrl = 'mongodb://fifa-admin:javacrash1@oceanic.mongohq.com:10068/fifa_madness'

var mongo = require('mongodb');

var Server = mongo.Server,
    db = mongo.Db,
    BSON = mongo.BSONPure;

//mongodb://fifa-admin:javacrash1@oceanic.mongohq.com:10068/fifa_madness


// npm install mongodb
var mongodb = require('mongodb')
  , MongoClient = mongodb.MongoClient
  , BSON = mongo.BSONPure;
 
MongoClient.connect(dbUrl, function(err, db) {
  // operate on the collection named "test"
  //var collection = db.collection('test')




// var server = new Server('localhost', 27017, {auto_reconnect: true});
// db = new Db('winedb', server, {safe: true});

// db.open(function(err, db) {
//     if(!err) {
//         console.log("Connected to 'fifa_madness' database");
//         db.collection('wines', {safe:true}, function(err, collection) {
//             if (err) {
//                 console.log("The 'wines' collection doesn't exist. Creating it with sample data...");
//                 populateDB();
//             }
//         });
//     }
// });


exports.name = function (req, res) {
  res.json({
    name: 'Bob'
  });
};

exports.findById = function(req, res) {
    var id = req.params.id;
    console.log('Retrieving bracket: ' + id);
    db.collection('brackets', function(err, collection) {
        collection.findOne({'_id':new BSON.ObjectID(id)}, function(err, item) {
            res.send(item);
        });
    });
};

exports.findAll = function(req, res) {
    db.collection('users', function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.send(items);
        });
    });
};

exports.addBracket = function(req, res) {
    var bracket = req.body;
    console.log('Adding bracket: ' + JSON.stringify(wine));
    db.collection('bracket', function(err, collection) {
        collection.insert(bracket, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                console.log('Success: ' + JSON.stringify(result[0]));
                res.send(result[0]);
            }
        });
    });
}

exports.updateBracket = function(req, res) {
    var id = req.params.id;
    var bracket = req.body;
    delete bracket._id;
    console.log('Updating bracket: ' + id);
    console.log(JSON.stringify(wine));
    db.collection('brackets', function(err, collection) {
        collection.update({'_id':new BSON.ObjectID(id)}, bracket, {safe:true}, function(err, result) {
            if (err) {
                console.log('Error updating bracket ' + err);
                res.send({'error':'An error has occurred'});
            } else {
                console.log('' + result + ' document(s) updated');
                res.send(wine);
            }
        });
    });
}

exports.deleteBracket = function(req, res) {
    var id = req.params.id;
    console.log('Deleting bracket: ' + id);
    db.collection('brackets', function(err, collection) {
        collection.remove({'_id':new BSON.ObjectID(id)}, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred - ' + err});
            } else {
                console.log('' + result + ' document(s) deleted');
                res.send(req.body);
            }
        });
    });
}

})
