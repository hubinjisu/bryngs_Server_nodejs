'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Package = new Schema({
  name: String,
  description: String,
  weight: Number,
  width: Number,
  height: Number,
  length: Number,
  imgUrl: String,
  identifyNumber: String,
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'Users'
  },
  shipment: {
    type: Schema.Types.ObjectId,
    ref: 'Shipments'
  }
});

module.exports = mongoose.model('Packages', Package);
