'use strict';
var mongoose = require('mongoose');
var User = mongoose.model('Users');
const Common = require('../config/common')
const Config = require('../config/config')
const Jwt = require('jsonwebtoken')
const privateKey = Config.key.privateKey
const async = require('async')

exports.list_all_users = function(req, res) {
  User.find({}, function(err, users) {
    if (err) {
      res.send(err);
    } else {
      res.json(users);
    }
  });
};

exports.create_a_user = function(req, res) {
  var new_user = new User(req.body);
  new_user.save(function(err, users) {
    if (err) {
      res.send(err);
    } else {
      res.json(users);
    }
  });
};

exports.read_a_user = function(req, res) {
  User.findById(req.params.userId, function(err, users) {
    if (err) {
      res.send(err);
    } else {
      res.json(users);
    }
  });
};

exports.update_a_user = function(req, res) {
  User.findOneAndUpdate(req.params.userId, req.body, { new: true }, function(err, user) {
    if (err) {
      res.send(err);
    } else {
      res.json(user);
    }
  });
};

exports.delete_a_user = function(req, res) {
  User.remove({
    _id: req.params.userId
  }, function(err, users) {
    if (err) {
      res.send(err);
    } else {
      res.json({ message: 'User successfully deleted' });
    }
  });
};
