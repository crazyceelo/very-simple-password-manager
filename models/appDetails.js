const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ApplicationSchema = new Schema({
  appName: {
    type: String,
    require: true,
    unique: true
  },

  userName: {
    type: String,
    require: true,
    unique: false
  },

  password: {
    type: String,
    require: true,
    unique: false
  }
});

const Application = mongoose.model('Application', ApplicationSchema);
module.exports = Application;