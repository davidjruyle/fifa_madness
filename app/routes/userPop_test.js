var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;

BSON = mongo.BSONPure;

MongoClient.connect('mongodb://dave:explore@ds031747.mongolab.com:31747/fifa-madness', function(err, db) {
    if(err) throw err;
console.log("connected");


var populateDB = function() {

 var fifa_users = [
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
        collection.insert(fifa_users, {safe:true}, function(err, result) {});
    });


populateDB();




// exports.findById = function(req, res) {
//     var id = req.params.id;
//     console.log('Retrieving User: ' + id);
//     db.collection('fifa_users', function(err, collection) {
//         collection.findOne({'_id':new BSON.ObjectID(id)}, function(err, item) {
//             res.send(item);
//         });
//     });
// };

// exports.findAll = function(req, res) {
//     db.collection('fifa_users', function(err, collection) {
//         collection.find().toArray(function(err, items) {
//             res.send(items);
//         });
//     });
// };

// exports.addUser = function(req, res) {
//     var User = req.body;
//     console.log('Adding User: ' + JSON.stringify(User));
//     db.collection('fifa_users', function(err, collection) {
//         collection.insert(User, {safe:true}, function(err, result) {
//             if (err) {
//                 res.send({'error':'An error has occurred'});
//             } else {
//                 console.log('Success: ' + JSON.stringify(result[0]));
//                 res.send(result[0]);
//             }
//         });
//     });
// }

// exports.updateUser = function(req, res) {
//     var id = req.params.id;
//     var User = req.body;
//     delete User._id;
//     console.log('Updating User: ' + id);
//     console.log(JSON.stringify(User));
//     db.collection('fifa_users', function(err, collection) {
//         collection.update({'_id':new BSON.ObjectID(id)}, User, {safe:true}, function(err, result) {
//             if (err) {
//                 console.log('Error updating User: ' + err);
//                 res.send({'error':'An error has occurred'});
//             } else {
//                 console.log('' + result + ' document(s) updated');
//                 res.send(User);
//             }
//         });
//     });
// }

// exports.deleteUser = function(req, res) {
//     var id = req.params.id;
//     console.log('Deleting User: ' + id);
//     db.collection('fifa_users', function(err, collection) {
//         collection.remove({'_id':new BSON.ObjectID(id)}, {safe:true}, function(err, result) {
//             if (err) {
//                 res.send({'error':'An error has occurred - ' + err});
//             } else {
//                 console.log('' + result + ' document(s) deleted');
//                 res.send(req.body);
//             }
//         });
//     });
// }

/*--------------------------------------------------------------------------------------------------------------------*/
// Populate database with sample data -- Only used once: the first time the application is started.
// You'd typically not find this code in a real-life app, since the database would already exist.





