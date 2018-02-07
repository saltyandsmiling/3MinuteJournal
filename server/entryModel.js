const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment');
const db = mongoose.connect('mongodb://localhost/test');

const entrySchema = new Schema({
  gratitudes: [],
  intentions: [],
  affirmations: [],
  createdAt: String
});

module.exports = mongoose.model('entryModel', entrySchema);