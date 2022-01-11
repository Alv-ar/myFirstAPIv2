const mongoose = require('mongoose');

const filmSchema = mongoose.Schema({
  title: String,
  sinopsis: String,
  director: String,
  releasedDate: Date,
  actors: [{
    firstName: String,
    lastName: String
  }]
});

module.exports = mongoose.model('Film', filmSchema);