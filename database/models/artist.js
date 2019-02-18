const mongoose = require('mongoose');
const AlbumSchema = require('./album');

const { Schema } = mongoose;

const ArtistSchema = new Schema({
  name: String,
  age: Number,
  yearsActive: Number,
  image: String,
  genre: String,
  website: String,
  netWorth: Number,
  labelName: String,
  retired: Boolean,
  Albums: [AlbumSchema]
});

module.exports = mongoose.model('artist', ArtistSchema);
