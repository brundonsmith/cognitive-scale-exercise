var mongoose = require('mongoose');

var Schema = mongoose.Schema,
	  ObjectId = Schema.ObjectId;

var CharacterSubmission = new Schema({
  character		     : { type: String, minlength: 1, maxlength: 1 },
	submissionTime   : { type: Date, default: Date.now }
});

CharacterSubmission = mongoose.model('CharacterSubmission', CharacterSubmission);

module.exports = { CharacterSubmission: CharacterSubmission };
