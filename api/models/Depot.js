'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Depot = new Schema({
  name: String,
  address: String,
  maxSpaceCapacity: Number,
  maxWeightCapacity: Number,
  status: Number,
});

module.exports = mongoose.model('Depots', Depot);
