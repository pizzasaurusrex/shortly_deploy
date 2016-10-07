
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/shortlydb');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function(){
  console.log('MongoDB is good to go!');
});




module.exports = db;
