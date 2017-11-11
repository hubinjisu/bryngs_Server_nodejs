'use strict';

var mongoose = require('mongoose'),
  Trip = mongoose.model('Trips');

exports.list_all_trips = function(req, res) {
  Trip.find({}, function(err, trips) {
    if (err) {
      res.send(err);
    } else {
      res.json(trips);
    }
  })
  .populate('driver');
};

exports.create_a_trip = function(req, res) {
  var new_trip = new Trip(req.body);
  new_trip.save(function(err, trips) {
    if (err) {
      res.send(err);
    } else {
      res.json(trips);
    }
  });
};

exports.read_a_trip = function(req, res) {
  Trip.findById(req.params.tripId, function(err, trips) {
    if (err) {
      res.send(err);
    } else {
      res.json(trips);
    }
  })
  .populate('driver');
};

exports.update_a_trip = function(req, res) {
  Trip.findOneAndUpdate(req.params.depotId, req.body, { new: true }, function(err, trips) {
    if (err) {
      res.send(err);
    } else {
      res.json(trips);
    }
  });
};

exports.delete_a_trip = function(req, res) {
  Trip.remove({
    _id: req.params.tripId
  }, function(err, trips) {
    if (err) {
      res.send(err);
    } else {
      res.json({ message: 'Trip successfully deleted' });
    }
  });
};
