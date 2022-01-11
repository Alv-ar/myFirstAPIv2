const mongoose = require('mongoose');

const filmSchema = mongoose.Schema({
  title: String,
  director: String,
});

module.exports = mongoose.model('Film', filmSchema);