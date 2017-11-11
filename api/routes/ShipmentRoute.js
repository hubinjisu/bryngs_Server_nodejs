'use strict';
module.exports = function(app) {
  var controller = require('../controllers/ShipmentController');


  app.route('/api/shipments')
    .get(controller.list_all_shipments)
    .post(controller.create_a_shipment);

  app.route('/api/shipments/:shipmentId')
    .get(controller.read_a_shipment)
    .put(controller.update_a_shipment)
    .delete(controller.delete_a_shipment);
};
