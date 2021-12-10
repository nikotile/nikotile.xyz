const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let collection = '';
process.env.NODE_ENV === 'production' ? collection = 'nikotile' : collection = 'dev';

const entrySchema = new Schema({
  title: String,
  description: String,
  date: String,
  pubDate: String,
  guid: Number,
}, { timestamps: true, collection });

const Entry = mongoose.model('Entry', entrySchema);

module.exports = Entry;
