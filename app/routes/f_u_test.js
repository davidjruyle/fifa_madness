var mongo = require('mongodb');

var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;

var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('fifaUsers_db', server, {safe: true});

db.open(function(err, db) {
    if(!err) {
        console.log("Connected to 'fifaUsers_db' database");
        db.collection('fifa_users', {safe:true}, function(err, collection) {
            //if (err) {
                console.log("The 'fifa_users' collection doesn't exist. Creating it with sample data...");
                populateDB();
            //}
        });
    }
});

exports.findById = function(req, res) {
    var id = req.params.id;
    console.log('Retrieving fifa_users: ' + id);
    db.collection('fifa_userss', function(err, collection) {
        collection.findOne({'_id':new BSON.ObjectID(id)}, function(err, item) {
            res.send(item);
        });
    });
};

exports.findAll = function(req, res) {
    db.collection('fifa_userss', function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.send(items);
        });
    });
};

exports.addfifa_users = function(req, res) {
    var fifa_users = req.body;
    console.log('Adding fifa_users: ' + JSON.stringify(fifa_users));
    db.collection('fifa_userss', function(err, collection) {
        collection.insert(fifa_users, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                console.log('Success: ' + JSON.stringify(result[0]));
                res.send(result[0]);
            }
        });
    });
}

exports.updatefifa_users = function(req, res) {
    var id = req.params.id;
    var fifa_users = req.body;
    delete fifa_users._id;
    console.log('Updating fifa_users: ' + id);
    console.log(JSON.stringify(fifa_users));
    db.collection('fifa_userss', function(err, collection) {
        collection.update({'_id':new BSON.ObjectID(id)}, fifa_users, {safe:true}, function(err, result) {
            if (err) {
                console.log('Error updating fifa_users: ' + err);
                res.send({'error':'An error has occurred'});
            } else {
                console.log('' + result + ' document(s) updated');
                res.send(fifa_users);
            }
        });
    });
}

exports.deletefifa_users = function(req, res) {
    var id = req.params.id;
    console.log('Deleting fifa_users: ' + id);
    db.collection('fifa_userss', function(err, collection) {
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

/*--------------------------------------------------------------------------------------------------------------------*/
// Populate database with sample data -- Only used once: the first time the application is started.
// You'd typically not find this code in a real-life app, since the database would already exist.
var populateDB = function() {

    var fifa_userss = [
    {
        user_id: 7,
        firstName: "Jeff",
        lastName: "Johnson",
        email: "jjohnson@foomail.com",
        pic: "placeholder.jpg",
        TotalScore:0,
        Round1:"bra",
        Round2: [
    {
      game2: "mex",
      game3: "esp",
      game4: "chi"
    }
  ],
  Round3: [
    {
      game5: "col",
      game6: "jpn",
      game7: "uru",
      game8: "ita"
    }
  ],
  Round4: [
    {
      game9: "ecu",
      game10: "fra",
      game11: "arg"
    }
  ],
  Round5: [
    {
      game12: "nga",
      game13: "ger",
      game14: "usa"
    }
  ],
  Round6: [
    {
      game15: "bel",
      game16: "kor",
      game17: "bra"
    }
  ],
  Round7: [
    {
      game18: "cro",
      game19: "esp",
      game20: "ned"
    }
  ],
  Round8: [
    {
      game21: "col",
      game22: "jpn",
      game23: "eng"
    }
  ],
  Round9: [
    {
      game24: "arg",
      game25: "bih",
      game41: "bel",
      game26: "ger"
    }
  ],
  Round10: [
    {
      game41: "bel",
      game27: "arg",
      game28: "bih",
      game29: "ger"
    }
  ],
  Round11: [
    {
      game30: "usa",
      game31: "bel",
      game32: "kor"
    }
  ],
  Round12: [
    {
      game33: "bra",
      game34: "mex",
      game35: "esp"
    }
  ],
  Round13: [
    {
      game36: "col",
      game37: "gre",
      game41: "bel",
      game38: "ita"
    }
  ],
  Round14: [
    {
      game39: "sui",
      game40: "fra",
      game41: "arg"
    }
  ],
  Round15: [
    {
      game42: "ger",
      game43: "por",
      game44: "bel",
      game41: "bel",
      game45: "alg"
    }
  ],
  Round16: [
    {
      game46: null,
      game47: null,
      game48: null,
      game49: null,
      game50: null,
      game51: null,
      game52: null,
      game53: null
    }
  ],
  Round17: [
    {
      game54: null,
      game55: null,
      game56: null,
      game57: null
    }
  ],
  Round18: [
    {
      game58: null
    }
  ],
  Round19: [
    {
      game59: null
    }
  ],
  Round20: [
    {
      game60: null
    }
  ]
    },
    {
        user_id: 8,
        firstName: "Jeff",
        lastName: "Johnson",
        email: "jjohnson@foomail.com",
        pic: "placeholder.jpg",
        TotalScore:0,
        Round1:"bra",
        Round2: [
    {
      game2: "mex",
      game3: "esp",
      game4: "chi"
    }
  ],
  Round3: [
    {
      game5: "col",
      game6: "jpn",
      game7: "uru",
      game8: "ita"
    }
  ],
  Round4: [
    {
      game9: "ecu",
      game10: "fra",
      game11: "arg"
    }
  ],
  Round5: [
    {
      game12: "nga",
      game13: "ger",
      game14: "usa"
    }
  ],
  Round6: [
    {
      game15: "bel",
      game16: "kor",
      game17: "bra"
    }
  ],
  Round7: [
    {
      game18: "cro",
      game19: "esp",
      game20: "ned"
    }
  ],
  Round8: [
    {
      game21: "col",
      game22: "jpn",
      game23: "eng"
    }
  ],
  Round9: [
    {
      game24: "arg",
      game25: "bih",
      game41: "bel",
      game26: "ger"
    }
  ],
  Round10: [
    {
      game41: "bel",
      game27: "arg",
      game28: "bih",
      game29: "ger"
    }
  ],
  Round11: [
    {
      game30: "usa",
      game31: "bel",
      game32: "kor"
    }
  ],
  Round12: [
    {
      game33: "bra",
      game34: "mex",
      game35: "esp"
    }
  ],
  Round13: [
    {
      game36: "col",
      game37: "gre",
      game41: "bel",
      game38: "ita"
    }
  ],
  Round14: [
    {
      game39: "sui",
      game40: "fra",
      game41: "arg"
    }
  ],
  Round15: [
    {
      game42: "ger",
      game43: "por",
      game44: "bel",
      game41: "bel",
      game45: "alg"
    }
  ],
  Round16: [
    {
      game46: null,
      game47: null,
      game48: null,
      game49: null,
      game50: null,
      game51: null,
      game52: null,
      game53: null
    }
  ],
  Round17: [
    {
      game54: null,
      game55: null,
      game56: null,
      game57: null
    }
  ],
  Round18: [
    {
      game58: null
    }
  ],
  Round19: [
    {
      game59: null
    }
  ],
  Round20: [
    {
      game60: null
    }
  ]
    },
    
    {
        user_id: 9,
        firstName: "Dan",
        lastName: "Johnson",
        email: "djohnson@foomail.com",
        pic: "placeholder.jpg",
        TotalScore:0,
        Round1:"bra",
        Round2: [
    {
      game2: "mex",
      game3: "esp",
      game4: "chi"
    }
  ],
  Round3: [
    {
      game5: "col",
      game6: "jpn",
      game7: "uru",
      game8: "ita"
    }
  ],
  Round4: [
    {
      game9: "ecu",
      game10: "fra",
      game11: "arg"
    }
  ],
  Round5: [
    {
      game12: "nga",
      game13: "ger",
      game14: "usa"
    }
  ],
  Round6: [
    {
      game15: "bel",
      game16: "kor",
      game17: "bra"
    }
  ],
  Round7: [
    {
      game18: "cro",
      game19: "esp",
      game20: "ned"
    }
  ],
  Round8: [
    {
      game21: "col",
      game22: "jpn",
      game23: "eng"
    }
  ],
  Round9: [
    {
      game24: "arg",
      game25: "bih",
      game41: "bel",
      game26: "ger"
    }
  ],
  Round10: [
    {
      game41: "bel",
      game27: "arg",
      game28: "bih",
      game29: "ger"
    }
  ],
  Round11: [
    {
      game30: "usa",
      game31: "bel",
      game32: "kor"
    }
  ],
  Round12: [
    {
      game33: "bra",
      game34: "mex",
      game35: "esp"
    }
  ],
  Round13: [
    {
      game36: "col",
      game37: "gre",
      game41: "bel",
      game38: "ita"
    }
  ],
  Round14: [
    {
      game39: "sui",
      game40: "fra",
      game41: "arg"
    }
  ],
  Round15: [
    {
      game42: "ger",
      game43: "por",
      game44: "bel",
      game41: "bel",
      game45: "alg"
    }
  ],
  Round16: [
    {
      game46: null,
      game47: null,
      game48: null,
      game49: null,
      game50: null,
      game51: null,
      game52: null,
      game53: null
    }
  ],
  Round17: [
    {
      game54: null,
      game55: null,
      game56: null,
      game57: null
    }
  ],
  Round18: [
    {
      game58: null
    }
  ],
  Round19: [
    {
      game59: null
    }
  ],
  Round20: [
    {
      game60: null
    }
  ]
    },
    {
        user_id: 10,
        firstName: "Jeff",
        lastName: "Williams",
        email: "jwilliams@foomail.com",
        pic: "placeholder.jpg",
        TotalScore:0,
        Round1:"bra",
        Round2: [
    {
      game2: "mex",
      game3: "esp",
      game4: "chi"
    }
  ],
  Round3: [
    {
      game5: "col",
      game6: "jpn",
      game7: "uru",
      game8: "ita"
    }
  ],
  Round4: [
    {
      game9: "ecu",
      game10: "fra",
      game11: "arg"
    }
  ],
  Round5: [
    {
      game12: "nga",
      game13: "ger",
      game14: "usa"
    }
  ],
  Round6: [
    {
      game15: "bel",
      game16: "kor",
      game17: "bra"
    }
  ],
  Round7: [
    {
      game18: "cro",
      game19: "esp",
      game20: "ned"
    }
  ],
  Round8: [
    {
      game21: "col",
      game22: "jpn",
      game23: "eng"
    }
  ],
  Round9: [
    {
      game24: "arg",
      game25: "bih",
      game41: "bel",
      game26: "ger"
    }
  ],
  Round10: [
    {
      game41: "bel",
      game27: "arg",
      game28: "bih",
      game29: "ger"
    }
  ],
  Round11: [
    {
      game30: "usa",
      game31: "bel",
      game32: "kor"
    }
  ],
  Round12: [
    {
      game33: "bra",
      game34: "mex",
      game35: "esp"
    }
  ],
  Round13: [
    {
      game36: "col",
      game37: "gre",
      game41: "bel",
      game38: "ita"
    }
  ],
  Round14: [
    {
      game39: "sui",
      game40: "fra",
      game41: "arg"
    }
  ],
  Round15: [
    {
      game42: "ger",
      game43: "por",
      game44: "bel",
      game41: "bel",
      game45: "alg"
    }
  ],
  Round16: [
    {
      game46: null,
      game47: null,
      game48: null,
      game49: null,
      game50: null,
      game51: null,
      game52: null,
      game53: null
    }
  ],
  Round17: [
    {
      game54: null,
      game55: null,
      game56: null,
      game57: null
    }
  ],
  Round18: [
    {
      game58: null
    }
  ],
  Round19: [
    {
      game59: null
    }
  ],
  Round20: [
    {
      game60: null
    }
  ]
    },
    {
        user_id: 11,
        firstName: "Brendon",
        lastName: "Wood",
        email: "Bwood@foomail.com",
        pic: "placeholder.jpg",
        TotalScore:0,
        Round1:"bra",
        Round2: [
    {
      game2: "mex",
      game3: "esp",
      game4: "chi"
    }
  ],
  Round3: [
    {
      game5: "col",
      game6: "jpn",
      game7: "uru",
      game8: "ita"
    }
  ],
  Round4: [
    {
      game9: "ecu",
      game10: "fra",
      game11: "arg"
    }
  ],
  Round5: [
    {
      game12: "nga",
      game13: "ger",
      game14: "usa"
    }
  ],
  Round6: [
    {
      game15: "bel",
      game16: "kor",
      game17: "bra"
    }
  ],
  Round7: [
    {
      game18: "cro",
      game19: "esp",
      game20: "ned"
    }
  ],
  Round8: [
    {
      game21: "col",
      game22: "jpn",
      game23: "eng"
    }
  ],
  Round9: [
    {
      game24: "arg",
      game25: "bih",
      game41: "bel",
      game26: "ger"
    }
  ],
  Round10: [
    {
      game41: "bel",
      game27: "arg",
      game28: "bih",
      game29: "ger"
    }
  ],
  Round11: [
    {
      game30: "usa",
      game31: "bel",
      game32: "kor"
    }
  ],
  Round12: [
    {
      game33: "bra",
      game34: "mex",
      game35: "esp"
    }
  ],
  Round13: [
    {
      game36: "col",
      game37: "gre",
      game41: "bel",
      game38: "ita"
    }
  ],
  Round14: [
    {
      game39: "sui",
      game40: "fra",
      game41: "arg"
    }
  ],
  Round15: [
    {
      game42: "ger",
      game43: "por",
      game44: "bel",
      game41: "bel",
      game45: "alg"
    }
  ],
  Round16: [
    {
      game46: null,
      game47: null,
      game48: null,
      game49: null,
      game50: null,
      game51: null,
      game52: null,
      game53: null
    }
  ],
  Round17: [
    {
      game54: null,
      game55: null,
      game56: null,
      game57: null
    }
  ],
  Round18: [
    {
      game58: null
    }
  ],
  Round19: [
    {
      game59: null
    }
  ],
  Round20: [
    {
      game60: null
    }
  ]
    },
    {
        user_id: 12,
        firstName: "Michael",
        lastName: "Williams",
        email: "mwilliams@foomail.com",
        pic: "placeholder.jpg",
        TotalScore:0,
        Round1:"bra",
        Round2: [
    {
      game2: "mex",
      game3: "esp",
      game4: "chi"
    }
  ],
  Round3: [
    {
      game5: "col",
      game6: "jpn",
      game7: "uru",
      game8: "ita"
    }
  ],
  Round4: [
    {
      game9: "ecu",
      game10: "fra",
      game11: "arg"
    }
  ],
  Round5: [
    {
      game12: "nga",
      game13: "ger",
      game14: "usa"
    }
  ],
  Round6: [
    {
      game15: "bel",
      game16: "kor",
      game17: "bra"
    }
  ],
  Round7: [
    {
      game18: "cro",
      game19: "esp",
      game20: "ned"
    }
  ],
  Round8: [
    {
      game21: "col",
      game22: "jpn",
      game23: "eng"
    }
  ],
  Round9: [
    {
      game24: "arg",
      game25: "bih",
      game41: "bel",
      game26: "ger"
    }
  ],
  Round10: [
    {
      game41: "bel",
      game27: "arg",
      game28: "bih",
      game29: "ger"
    }
  ],
  Round11: [
    {
      game30: "usa",
      game31: "bel",
      game32: "kor"
    }
  ],
  Round12: [
    {
      game33: "bra",
      game34: "mex",
      game35: "esp"
    }
  ],
  Round13: [
    {
      game36: "col",
      game37: "gre",
      game41: "bel",
      game38: "ita"
    }
  ],
  Round14: [
    {
      game39: "sui",
      game40: "fra",
      game41: "arg"
    }
  ],
  Round15: [
    {
      game42: "ger",
      game43: "por",
      game44: "bel",
      game41: "bel",
      game45: "alg"
    }
  ],
  Round16: [
    {
      game46: null,
      game47: null,
      game48: null,
      game49: null,
      game50: null,
      game51: null,
      game52: null,
      game53: null
    }
  ],
  Round17: [
    {
      game54: null,
      game55: null,
      game56: null,
      game57: null
    }
  ],
  Round18: [
    {
      game58: null
    }
  ],
  Round19: [
    {
      game59: null
    }
  ],
  Round20: [
    {
      game60: null
    }
  ]
    },
    {
        user_id: 13,
        firstName: "Gill",
        lastName: "Sperlein",
        email: "GSperlein@foomail.com",
        pic: "placeholder.jpg",
        TotalScore:0,
        Round1:"bra",
        Round2: [
    {
      game2: "mex",
      game3: "esp",
      game4: "chi"
    }
  ],
  Round3: [
    {
      game5: "col",
      game6: "jpn",
      game7: "uru",
      game8: "ita"
    }
  ],
  Round4: [
    {
      game9: "ecu",
      game10: "fra",
      game11: "arg"
    }
  ],
  Round5: [
    {
      game12: "nga",
      game13: "ger",
      game14: "usa"
    }
  ],
  Round6: [
    {
      game15: "bel",
      game16: "kor",
      game17: "bra"
    }
  ],
  Round7: [
    {
      game18: "cro",
      game19: "esp",
      game20: "ned"
    }
  ],
  Round8: [
    {
      game21: "col",
      game22: "jpn",
      game23: "eng"
    }
  ],
  Round9: [
    {
      game24: "arg",
      game25: "bih",
      game41: "bel",
      game26: "ger"
    }
  ],
  Round10: [
    {
      game41: "bel",
      game27: "arg",
      game28: "bih",
      game29: "ger"
    }
  ],
  Round11: [
    {
      game30: "usa",
      game31: "bel",
      game32: "kor"
    }
  ],
  Round12: [
    {
      game33: "bra",
      game34: "mex",
      game35: "esp"
    }
  ],
  Round13: [
    {
      game36: "col",
      game37: "gre",
      game41: "bel",
      game38: "ita"
    }
  ],
  Round14: [
    {
      game39: "sui",
      game40: "fra",
      game41: "arg"
    }
  ],
  Round15: [
    {
      game42: "ger",
      game43: "por",
      game44: "bel",
      game41: "bel",
      game45: "alg"
    }
  ],
  Round16: [
    {
      game46: null,
      game47: null,
      game48: null,
      game49: null,
      game50: null,
      game51: null,
      game52: null,
      game53: null
    }
  ],
  Round17: [
    {
      game54: null,
      game55: null,
      game56: null,
      game57: null
    }
  ],
  Round18: [
    {
      game58: null
    }
  ],
  Round19: [
    {
      game59: null
    }
  ],
  Round20: [
    {
      game60: null
    }
  ]
    },
    {
        user_id: 14,
        firstName: "Tarun",
        lastName: "Bhatnagar",
        email: "tarun@foomail.com",
        pic: "placeholder.jpg",
        TotalScore:0,
        Round1:"bra",
        Round2: [
    {
      game2: "mex",
      game3: "esp",
      game4: "chi"
    }
  ],
  Round3: [
    {
      game5: "col",
      game6: "jpn",
      game7: "uru",
      game8: "ita"
    }
  ],
  Round4: [
    {
      game9: "ecu",
      game10: "fra",
      game11: "arg"
    }
  ],
  Round5: [
    {
      game12: "nga",
      game13: "ger",
      game14: "usa"
    }
  ],
  Round6: [
    {
      game15: "bel",
      game16: "kor",
      game17: "bra"
    }
  ],
  Round7: [
    {
      game18: "cro",
      game19: "esp",
      game20: "ned"
    }
  ],
  Round8: [
    {
      game21: "col",
      game22: "jpn",
      game23: "eng"
    }
  ],
  Round9: [
    {
      game24: "arg",
      game25: "bih",
      game41: "bel",
      game26: "ger"
    }
  ],
  Round10: [
    {
      game41: "bel",
      game27: "arg",
      game28: "bih",
      game29: "ger"
    }
  ],
  Round11: [
    {
      game30: "usa",
      game31: "bel",
      game32: "kor"
    }
  ],
  Round12: [
    {
      game33: "bra",
      game34: "mex",
      game35: "esp"
    }
  ],
  Round13: [
    {
      game36: "col",
      game37: "gre",
      game41: "bel",
      game38: "ita"
    }
  ],
  Round14: [
    {
      game39: "sui",
      game40: "fra",
      game41: "arg"
    }
  ],
  Round15: [
    {
      game42: "ger",
      game43: "por",
      game44: "bel",
      game41: "bel",
      game45: "alg"
    }
  ],
  Round16: [
    {
      game46: null,
      game47: null,
      game48: null,
      game49: null,
      game50: null,
      game51: null,
      game52: null,
      game53: null
    }
  ],
  Round17: [
    {
      game54: null,
      game55: null,
      game56: null,
      game57: null
    }
  ],
  Round18: [
    {
      game58: null
    }
  ],
  Round19: [
    {
      game59: null
    }
  ],
  Round20: [
    {
      game60: null
    }
  ]
    },
    {
        user_id: 15,
        firstName: "Eddie",
        lastName: "Whitehurst",
        email: "eddie@foomail.com",
        pic: "placeholder.jpg",
        TotalScore:0,
        Round1:"bra",
        Round2: [
    {
      game2: "mex",
      game3: "esp",
      game4: "chi"
    }
  ],
  Round3: [
    {
      game5: "col",
      game6: "jpn",
      game7: "uru",
      game8: "ita"
    }
  ],
  Round4: [
    {
      game9: "ecu",
      game10: "fra",
      game11: "arg"
    }
  ],
  Round5: [
    {
      game12: "nga",
      game13: "ger",
      game14: "usa"
    }
  ],
  Round6: [
    {
      game15: "bel",
      game16: "kor",
      game17: "bra"
    }
  ],
  Round7: [
    {
      game18: "cro",
      game19: "esp",
      game20: "ned"
    }
  ],
  Round8: [
    {
      game21: "col",
      game22: "jpn",
      game23: "eng"
    }
  ],
  Round9: [
    {
      game24: "arg",
      game25: "bih",
      game41: "bel",
      game26: "ger"
    }
  ],
  Round10: [
    {
      game41: "bel",
      game27: "arg",
      game28: "bih",
      game29: "ger"
    }
  ],
  Round11: [
    {
      game30: "usa",
      game31: "bel",
      game32: "kor"
    }
  ],
  Round12: [
    {
      game33: "bra",
      game34: "mex",
      game35: "esp"
    }
  ],
  Round13: [
    {
      game36: "col",
      game37: "gre",
      game41: "bel",
      game38: "ita"
    }
  ],
  Round14: [
    {
      game39: "sui",
      game40: "fra",
      game41: "arg"
    }
  ],
  Round15: [
    {
      game42: "ger",
      game43: "por",
      game44: "bel",
      game41: "bel",
      game45: "alg"
    }
  ],
  Round16: [
    {
      game46: null,
      game47: null,
      game48: null,
      game49: null,
      game50: null,
      game51: null,
      game52: null,
      game53: null
    }
  ],
  Round17: [
    {
      game54: null,
      game55: null,
      game56: null,
      game57: null
    }
  ],
  Round18: [
    {
      game58: null
    }
  ],
  Round19: [
    {
      game59: null
    }
  ],
  Round20: [
    {
      game60: null
    }
  ]
    },
    {
        user_id: 16,
        firstName: "Carlos",
        lastName: "Morales",
        email: "cmorales@foomail.com",
        pic: "placeholder.jpg",
        TotalScore:0,
        Round1:"bra",
        Round2: [
    {
      game2: "mex",
      game3: "esp",
      game4: "chi"
    }
  ],
  Round3: [
    {
      game5: "col",
      game6: "jpn",
      game7: "uru",
      game8: "ita"
    }
  ],
  Round4: [
    {
      game9: "ecu",
      game10: "fra",
      game11: "arg"
    }
  ],
  Round5: [
    {
      game12: "nga",
      game13: "ger",
      game14: "usa"
    }
  ],
  Round6: [
    {
      game15: "bel",
      game16: "kor",
      game17: "bra"
    }
  ],
  Round7: [
    {
      game18: "cro",
      game19: "esp",
      game20: "ned"
    }
  ],
  Round8: [
    {
      game21: "col",
      game22: "jpn",
      game23: "eng"
    }
  ],
  Round9: [
    {
      game24: "arg",
      game25: "bih",
      game41: "bel",
      game26: "ger"
    }
  ],
  Round10: [
    {
      game41: "bel",
      game27: "arg",
      game28: "bih",
      game29: "ger"
    }
  ],
  Round11: [
    {
      game30: "usa",
      game31: "bel",
      game32: "kor"
    }
  ],
  Round12: [
    {
      game33: "bra",
      game34: "mex",
      game35: "esp"
    }
  ],
  Round13: [
    {
      game36: "col",
      game37: "gre",
      game41: "bel",
      game38: "ita"
    }
  ],
  Round14: [
    {
      game39: "sui",
      game40: "fra",
      game41: "arg"
    }
  ],
  Round15: [
    {
      game42: "ger",
      game43: "por",
      game44: "bel",
      game41: "bel",
      game45: "alg"
    }
  ],
  Round16: [
    {
      game46: null,
      game47: null,
      game48: null,
      game49: null,
      game50: null,
      game51: null,
      game52: null,
      game53: null
    }
  ],
  Round17: [
    {
      game54: null,
      game55: null,
      game56: null,
      game57: null
    }
  ],
  Round18: [
    {
      game58: null
    }
  ],
  Round19: [
    {
      game59: null
    }
  ],
  Round20: [
    {
      game60: null
    }
  ]
    },
    {
        user_id: 17,
        firstName: "Robin",
        lastName: "Doherty",
        email: "rd@foomail.com",
        pic: "placeholder.jpg",
        TotalScore:0,
        Round1:"bra",
        Round2: [
    {
      game2: "mex",
      game3: "esp",
      game4: "chi"
    }
  ],
  Round3: [
    {
      game5: "col",
      game6: "jpn",
      game7: "uru",
      game8: "ita"
    }
  ],
  Round4: [
    {
      game9: "ecu",
      game10: "fra",
      game11: "arg"
    }
  ],
  Round5: [
    {
      game12: "nga",
      game13: "ger",
      game14: "usa"
    }
  ],
  Round6: [
    {
      game15: "bel",
      game16: "kor",
      game17: "bra"
    }
  ],
  Round7: [
    {
      game18: "cro",
      game19: "esp",
      game20: "ned"
    }
  ],
  Round8: [
    {
      game21: "col",
      game22: "jpn",
      game23: "eng"
    }
  ],
  Round9: [
    {
      game24: "arg",
      game25: "bih",
      game41: "bel",
      game26: "ger"
    }
  ],
  Round10: [
    {
      game41: "bel",
      game27: "arg",
      game28: "bih",
      game29: "ger"
    }
  ],
  Round11: [
    {
      game30: "usa",
      game31: "bel",
      game32: "kor"
    }
  ],
  Round12: [
    {
      game33: "bra",
      game34: "mex",
      game35: "esp"
    }
  ],
  Round13: [
    {
      game36: "col",
      game37: "gre",
      game41: "bel",
      game38: "ita"
    }
  ],
  Round14: [
    {
      game39: "sui",
      game40: "fra",
      game41: "arg"
    }
  ],
  Round15: [
    {
      game42: "ger",
      game43: "por",
      game44: "bel",
      game41: "bel",
      game45: "alg"
    }
  ],
  Round16: [
    {
      game46: null,
      game47: null,
      game48: null,
      game49: null,
      game50: null,
      game51: null,
      game52: null,
      game53: null
    }
  ],
  Round17: [
    {
      game54: null,
      game55: null,
      game56: null,
      game57: null
    }
  ],
  Round18: [
    {
      game58: null
    }
  ],
  Round19: [
    {
      game59: null
    }
  ],
  Round20: [
    {
      game60: null
    }
  ]
    },
    ];

    db.collection('fifa_users', function(err, collection) {
        collection.insert(fifa_userss, {safe:true}, function(err, result) {});
    });

};