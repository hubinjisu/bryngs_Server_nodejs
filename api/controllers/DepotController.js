'use strict';

var mongoose = require('mongoose'),
  Depot = mongoose.model('Depots');

exports.list_all_depots = function(req, res) {
  Depot.find({}, function(err, depots) {
    if (err) {
      res.send(err);
    } else {
      res.json(depots);
    }
  });
};

exports.create_a_depot = function(req, res) {
  var new_depot = new Depot(req.body);
  new_depot.save(function(err, depots) {
    if (err) {
      res.send(err);
    } else {
      res.json(depots);
    }
  });
};

exports.read_a_depot = function(req, res) {
  Depot.findById(req.params.depotId, function(err, depots) {
    if (err) {
      res.send(err);
    } else {
      res.json(depots);
    }
  });
};

exports.update_a_depot = function(req, res) {
  Depot.findOneAndUpdate(req.params.depotId, req.body, { new: true }, function(err, depots) {
    if (err) {
      res.send(err);
    } else {
      res.json(depots);
    }
  });
};

exports.delete_a_depot = function(req, res) {
  Depot.remove({
    _id: req.params.depotId
  }, function(err, depots) {
    if (err) {
      res.send(err);
    } else {
      res.json({ message: 'Depot successfully deleted' });
    }
  });
};
