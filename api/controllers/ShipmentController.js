'use strict';
var mongoose = require('mongoose');
var Shipment = mongoose.model('Shipments');

exports.list_all_shipments = function(req, res) {
  Shipment.find({}, function(err, shipments) {
    if (err) {
      res.send(err);
    } else {
      res.json(shipments);
    }
  })
  .populate('originDepot')
  .populate('destinationDepot')
  .populate('package')
  .populate('courier')
  .populate('trip');
};

exports.create_a_shipment = function(req, res) {
  var new_shipment = new Shipment(req.body);
  new_shipment.save(function(err, shipments) {
    if (err) {
      res.send(err);
    } else {
      res.json(shipments);
    }
  });
};

exports.read_a_shipment = function(req, res) {
  Shipment.findById(req.params.shipmentId, function(err, shipments) {
    if (err) {
      res.send(err);
    } else {
      res.json(shipments);
    }
  })
  .populate('originDepot')
  .populate('destinationDepot')
  .populate('package')
  .populate('courier')
  .populate('trip');
};

exports.update_a_shipment = function(req, res) {
  Shipment.findOneAndUpdate(req.params.shipmentId, req.body, { new: true }, function(err, shipments) {
    if (err) {
      res.send(err);
    } else {
      res.json(shipments);
    }
  });
};

exports.delete_a_shipment = function(req, res) {
  Shipment.remove({
    _id: req.params.shipmentId
  }, function(err, shipments) {
    if (err) {
      res.send(err);
    } else {
      res.json({ message: 'Shipment successfully deleted' });
    }
  });
};

exports.pickup_a_shipment = function(req, res) {
  update_a_shipment(req, res);
  // TODO: update the shipment status, shipment status
  depotController.update_a_depot(req, res);
}
