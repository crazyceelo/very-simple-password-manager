const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ApplicationSchema = new Schema({
  appName: {
    type: String,
    required: true,
    unique: false,
    trim: true
  },

  userName: {
    type: String,
    required: true,
    unique: false,
    trim: true
  },

  password: {
    type: String,
    required: true,
    unique: false,
    trim: true
  },

  site: {
    type: String,
    required: false,
    unique: false,
    trim: true
  }
});

const Application = mongoose.model('Application', ApplicationSchema);
module.exports = Application;