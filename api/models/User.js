'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
  /**
    userName. It can only contain valid email id, should be unique, is required and indexed.
  */
  username: {
      type: String,
      unique: true,
      required: true
  },
  /**
    password. It can only contain string, is required field.
  */
  password: {
      type: String,
      required: true
  },
  firstName: String,
  lastName: String,
  phoneNumber: String,
  email: String,
  personalID: String,
  passportImgUrl: String,
  birthDate: String,
  address: String,
  userType: Number,
  preferredOriginRadius: Number,
  preferredDestinationRadius: Number,
  paymentType: String,
  isVerified: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Users', User);
