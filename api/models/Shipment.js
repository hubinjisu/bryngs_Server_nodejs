'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Shipment = new Schema({
  name: String,
  payment: Number,
  priority: Number,
  identifyNumber: String,
  duration: String,
  status: Number,
  originDepot: {
    type: Schema.Types.ObjectId,
    ref: 'Depots'
  },
  destinationDepot: {
    type: Schema.Types.ObjectId,
    ref: 'Depots'
  },
  package: {
    type: Schema.Types.ObjectId,
    ref: 'Packages'
  },
  courier: {
    type: Schema.Types.ObjectId,
    ref: 'Users'
  },
  trip: {
    type: Schema.Types.ObjectId,
    ref: 'Trips'
  }
});

module.exports = mongoose.model('Shipments', Shipment);
