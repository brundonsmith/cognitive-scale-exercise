var mongoose = require('mongoose');

var Schema = mongoose.Schema,
	  ObjectId = Schema.ObjectId;

var CharacterSubmission = new Schema({
  character		     : { type: String, minlength: 1, maxlength: 1 },
	submissionTime   : { type: Date, default: Date.now } // in case we ever want to, say, view the submissions on a timeline
});

CharacterSubmission = mongoose.model('CharacterSubmission', CharacterSubmission);

module.exports = { CharacterSubmission: CharacterSubmission };
