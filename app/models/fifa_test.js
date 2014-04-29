
var mongoose = require('mongoose')
var Schema = mongoose.Schema;

console.log('Running mongoose version %s', mongoose.version);


/**
 * Rounds schemas
 */

//Rounds Schemas
var Round2 = new Schema({
    game2:String,
    game3:String,
    game4:String
})


var Round3 = new Schema({
    game5:String,
    game6:String,
    game7:String,
    game8:String
})

var Round4 = new Schema({
    game9:String,
    game10:String,
    game11:String,
})

var Round5 = new Schema({
    game12:String,
    game13:String,
    game14:String,
})

var Round6 = new Schema({
    game15:String,
    game16:String,
    game17:String,
})

var Round7 = new Schema({
    game18:String,
    game19:String,
    game20:String,
})

var Round8 = new Schema({
    game21:String,
    game22:String,
    game23:String
})

var Round9 = new Schema({
    game24:String,
    game25:String,
    game26:String,
    game27:String
})

var Round10 = new Schema({
    game28:String,
    game29:String,
    game30:String,
    game31:String
})

var Round11 = new Schema({
    game30:String,
    game31:String,
    game32:String
})

var Round12 = new Schema({
    game33:String,
    game34:String,
    game35:String
})

var Round13 = new Schema({
    game36:String,
    game37:String,
    game38:String,
    game39:String
})

var Round14 = new Schema({
    game40:String,
    game41:String,
    game42:String
})

var Round15 = new Schema({
    game43:String,
    game44:String,
    game45:String,
    game46:String // last game should be 48
})

var Round16 = new Schema({
    game49:String,
    game50:String,
    game51:String,
    game52:String,
    game53:String,
    game54:String,
    game55:String,
    game56:String
})

var Round17 = new Schema({
    game57:String,
    game58:String,
    game59:String
  
})

var Round18 = new Schema({
    game60:String
  
})


var Round19 = new Schema({
    game61:String
  
})

var Round20 = new Schema({
    game62:String
  
})



var Round2 = mongoose.model('Round2', Round2);
var Round3 = mongoose.model('Round3', Round3);
var Round4 = mongoose.model('Round4', Round4);
var Round5 = mongoose.model('Round5', Round5);
var Round6 = mongoose.model('Round6', Round6);
var Round7 = mongoose.model('Round7', Round7);
var Round8 = mongoose.model('Round8', Round8);
var Round9 = mongoose.model('Round9', Round9);
var Round10 = mongoose.model('Round10', Round10);

var Round11 = mongoose.model('Round11', Round11);
var Round12 = mongoose.model('Round12', Round12);
var Round13 = mongoose.model('Round13', Round13);
var Round14 = mongoose.model('Round14', Round14);
var Round15 = mongoose.model('Round15', Round15);
var Round16 = mongoose.model('Round16', Round16);
var Round17 = mongoose.model('Round17', Round17);
var Round18 = mongoose.model('Round18', Round18);
var Round19 = mongoose.model('Round19', Round19);

var Round20 = mongoose.model('Round20', Round20);









/**
 * User schema
 */

var userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    
    email: {
        type:String,
        required:true
    },
    userID: {
        type: Number,
        unique: true
    },
    roles: [{
        type: String,
        default: 'authenticated'
    }],
    pic: String,
    totalScore: Number,
    Round1: String,
    Round2: [Round2],
    Round3: [Round3],
    Round4: [Round4],
    Round5: [Round5],
    Round6: [Round6],
    Round7: [Round7],
    Round8: [Round8],
    Round9: [Round9],
    Round10: [Round10],
    Round11: [Round11],
    Round12: [Round12],
    Round13: [Round13],
    Round14: [Round14],
    Round15: [Round15],
    Round16: [Round16],
    Round15: [Round15],
    Round16: [Round16],
    Round17: [Round17],
    Round18: [Round18],
    Round19: [Round19],
    Round20: [Round20],
    hashed_password: String,
    provider: String,
    salt: String,
    facebook: {},
    twitter: {},
    google: {},
    linkedin: {}
});

var User= mongoose.model('User', userSchema);



/**
 * Connect to the console database on localhost with
 * the default port (27017)
 */

mongoose.connect('mongodb://localhost/fifa_users', function (err) {
  // if we failed to connect, abort
  if (err) throw err;

  // we connected ok
  createData();
})

/**
 * Data generation
 */

function createData () {
  User.create({
    firstName: 'David'
    ,lastName : 'Ruyle'
    ,email: 'dave.ruyle@gmail.com',
    userID:6})
  // }, function (err, nintendo64) {
  //   if (err) return done(err);

  //   Game.create({
  //       name: 'Legend of Zelda: Ocarina of Time'
  //     , developer: 'Nintendo'
  //     , released: new Date('November 21, 1998')
  //     , consoles: [nintendo64]
  //   }, function (err) {
  //     if (err) return done(err);
  //     example();
  //   })
  // })
}

/**
 * Population
 */

// function example () {
//   Game
//   .findOne({ name: /^Legend of Zelda/ })
//   .populate('consoles')
//   .exec(function (err, ocinara) {
//     if (err) return done(err);

//     console.log(
//         '"%s" was released for the %s on %s'
//       , ocinara.name
//       , ocinara.consoles[0].name
//       , ocinara.released.toLocaleDateString());

//     done();
//   })
// }

function done (err) {
  if (err) console.error(err);
  Console.remove(function () {
    Game.remove(function () {
      mongoose.disconnect();
    })
  })
}
