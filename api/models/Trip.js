'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Trip = new Schema({
  description: String,
  date: String,
  time: String,
  origin: String,
  destination: String,
  weightCapacity: Number,
  spaceCapacity: Number,
  carType: String,
  status: Number,
  pauseTime: Number,
  driver: {
    type: Schema.Types.ObjectId,
    ref: 'Users'
  },
});

module.exports = mongoose.model('Trips', Trip);
