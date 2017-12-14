var mongoose = require('mongoose');
const Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var UserSchema = new mongoose.Schema({
  email: { // the email will be both the username and email
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
  },
  FirstName: {
    type: String,
    required: false
  },
  LastName: {
      type: String,
      required: false
  }

});

var User = mongoose.model('user', UserSchema);

module.exports.createUser = function(newUser, callback){
	bcrypt.genSalt(10, function(err, salt) {
	    bcrypt.hash(newUser.password, salt, function(err, hash) {
	        newUser.password = hash;
	        newUser.save(callback);
	    });
	});
}

module.exports.getUserByUsername = function(username, callback){
	var query = {username: username};
	User.findOne(query, callback);
}

module.exports.getUserById = function(id, callback){
	User.findById(id, callback);
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
	bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    	if(err) throw err;
    	callback(null, isMatch);
	});
}

var ContactSchema = new mongoose.Schema({
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    Name: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
});

var HouseSchema = new mongoose.Schema({
    HouseType: { //this is to show if its a flat, bunglow...etc
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    Address: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    Price: {
      type: Number,
      required: true,
    }
    
});

var House = mongoose.model('houses', HouseSchema);
var Contact = mongoose.model('contact', ContactSchema);
module.exports = User, House, Contact;

