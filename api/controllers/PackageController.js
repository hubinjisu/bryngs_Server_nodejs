'use strict';
var mongoose = require('mongoose'),
  Package = mongoose.model('Packages');

exports.list_all_packages = function(req, res) {
  Package.find({}, function(err, packages) {
    if (err) {
      res.send(err);
    } else {
      res.json(packages);
    }
  })
  .populate('owner')
  .populate('shipment');
};

exports.create_a_package = function(req, res) {
  var new_package = new Package(req.body);
  new_package.save(function(err, packages) {
    if (err) {
      res.send(err);
    } else {
      res.json(packages);
    }
  });
};

exports.read_a_package = function(req, res) {
  Package.findById(req.params.packageId, function(err, packages) {
    if (err) {
      res.send(err);
    } else {
      res.json(packages);
    }
  })
  .populate('owner')
  .populate('shipment');
};

exports.update_a_package = function(req, res) {
  Package.findOneAndUpdate(req.params.packageId, req.body, { new: true }, function(err, packages) {
    if (err) {
      res.send(err);
    } else {
      res.json(packages);
    }
  });
};

exports.delete_a_package = function(req, res) {
  Package.remove({
    _id: req.params.packageId
  }, function(err, packages) {
    if (err) {
      res.send(err);
    } else {
      res.json({ message: 'Package successfully deleted' });
    }
  });
};

exports.pickup_a_package = function(req, res) {
  update_a_package(req, res);
  // TODO: update the package status, shipment status
  depotController.update_a_depot(req, res);
}
