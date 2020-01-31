const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// (1) Create Schema

const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },

  date: {
    type: Date,
    default: Date.now
  }
});

//(2) Export your modul
module.exports = Item = mongoose.model('item', ItemSchema);
