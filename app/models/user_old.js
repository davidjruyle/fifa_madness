//'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    crypto = require('crypto');

var mongoose = require('mongoose');

//mongoose.connect('mongodb://localhost/fifa_users');

// mongoose.connect('mongodb://davidjruyle:6d40c25c635dca66a82b963b0b5c024c@oceanic.mongohq.com:10068/fifa_madness', function(err, db) {
//   var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function callback () {
//   // yay!
// });
//   console.log("Connected to Database");
// })



//mongoose.connect('mongodb://localhost/fifa_users');

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function callback () {
//   console.log("yay!");
// });


mongoose.connect('mongodb://localhost/fifa_users', function (err) {
  // if we failed to connect, abort
  if (err) throw err;

  // we connected ok
  createData();
  console.log('WOW!');
})

// var userSchema = mongoose.Schema({
//     firstName: String,
//     lastName: String

// })
;
// var myUser = mongoose.model('myUser', userSchema);

// var davidjruyle = new myUser({firstName:'Dave',lastName:"Ruyle"});
// var gillsperlein = new myUser({firstName:'gill',lastName:"sperlein"});

// console.log(davidjruyle.firstName + " " + davidjruyle.lastName);


// myUser.find(function (err, users) {
//   if (err) return console.error(err);
//   console.log(users)
// })


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


/**
 * User Schema
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

/**
 * Virtuals
 */
// UserSchema.virtual('password').set(function(password) {
//     this._password = password;
//     this.salt = this.makeSalt();
//     this.hashed_password = this.hashPassword(password);
// }).get(function() {
//     return this._password;
// });

// /**
//  * Validations
//  */
// var validatePresenceOf = function(value) {
//     return value && value.length;
// };

// // The 4 validations below only apply if you are signing up traditionally.
// UserSchema.path('name').validate(function(name) {
//     // If you are authenticating by any of the oauth strategies, don't validate.
//     if (!this.provider) return true;
//     return (typeof name === 'string' && name.length > 0);
// }, 'Name cannot be blank');

// UserSchema.path('email').validate(function(email) {
//     // If you are authenticating by any of the oauth strategies, don't validate.
//     if (!this.provider) return true;
//     return (typeof email === 'string' && email.length > 0);
// }, 'Email cannot be blank');

// UserSchema.path('username').validate(function(username) {
//     // If you are authenticating by any of the oauth strategies, don't validate.
//     if (!this.provider) return true;
//     return (typeof username === 'string' && username.length > 0);
// }, 'Username cannot be blank');

// UserSchema.path('hashed_password').validate(function(hashed_password) {
//     // If you are authenticating by any of the oauth strategies, don't validate.
//     if (!this.provider) return true;
//     return (typeof hashed_password === 'string' && hashed_password.length > 0);
// }, 'Password cannot be blank');


// /**
//  * Pre-save hook
//  */
// UserSchema.pre('save', function(next) {
//     if (!this.isNew) return next();

//     if (!validatePresenceOf(this.password) && !this.provider)
//         next(new Error('Invalid password'));
//     else
//         next();
// });

// /**
//  * Methods
//  */
// UserSchema.methods = {

//     /**
//      * HasRole - check if the user has required role
//      *
//      * @param {String} plainText
//      * @return {Boolean}
//      * @api public
//      */
//     hasRole: function(role) {
//         var roles = this.roles;
//         return (roles.indexOf('admin') !== -1 || roles.indexOf(role) !== -1);
//     },
//     /**
//      * Authenticate - check if the passwords are the same
//      *
//      * @param {String} plainText
//      * @return {Boolean}
//      * @api public
//      */
//     authenticate: function(plainText) {
//         return this.hashPassword(plainText) === this.hashed_password;
//     },

//     /**
//      * Make salt
//      *
//      * @return {String}
//      * @api public
//      */
//     makeSalt: function() {
//         return crypto.randomBytes(16).toString('base64');
//     },

//     /**
//      * Hash password
//      *
//      * @param {String} password
//      * @return {String}
//      * @api public
//      */
//     hashPassword: function(password) {
//         if (!password || !this.salt) return '';
//         var salt = new Buffer(this.salt, 'base64');
//         return crypto.pbkdf2Sync(password, salt, 10000, 64).toString('base64');
//     }
// };

var User = mongoose.model('User', userSchema);
var Round2 = mongoose.model('Round2',Round2);



function createData () {
  User.create({
        firstName: 'Davey',
        lastName: 'Crockett',
        email: 'dave@foo.com',
        userID: 4,
        Round1: "bra"
  }, function (err) {
    if (err) return done(err);
    console.log(User);
    Round2.create({
        game2: 'Mex',
        game3: 'esp',
        game4: 'chi'

   
    }, function (err) {
      if (err) return done(err);
      //example();
    })
  })
}

 
