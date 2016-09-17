// express
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// database
mongoose.connect('mongodb://app:pass@ds033126.mlab.com:33126/cognitive-scale-exercise');
var models = require('./models/CharacterSubmission');
var CharacterSubmission = models.CharacterSubmission;

// application
var app = express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
var oneDay = 8.64e+7;

// static resources needed by Angular
app.use(express.static( __dirname + '/', { maxAge: oneDay }));

// api
app.post('/api/characters', function(req, res, next) {
  for(var i = 0; i < req.body.characters.length; i++) {
    var newSubmission = new CharacterSubmission({ character: req.body.characters[i] });
    newSubmission.save(function(err){
      if(err) {
        res.status(500).send(err);
        return next(err);
      }
    });
  }
  res.send('Submission saved successfully!');
  return next();
});
app.get('/api/character-counts', function(req, res) {
  CharacterSubmission.find().sort({ character: 1 }).exec(function(err, submissions){
    if(err) {
      res.status(500).send(err)
      return next(err);
    } else {
      var characterCounts = {};
      for(var i = 0; i < submissions.length; i++) {
        if(characterCounts[submissions[i].character]) {
          characterCounts[submissions[i].character]++;
        } else {
          characterCounts[submissions[i].character] = 1;
        }
      }
      res.send(characterCounts);
      return next();
    }

  });
});

// NOTE: In a production application, we'd likely want to separate the API
// server from the web server for scalability of both performance and the
// codebase

// load the app
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

// start
app.set('port', (process.env.PORT || 8000));
app.listen(app.get('port'));
console.log('Listening on port ' + app.get('port') + '...');
