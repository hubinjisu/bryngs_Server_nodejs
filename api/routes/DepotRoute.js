'use strict';
module.exports = function(app) {
  var controller = require('../controllers/DepotController');


  app.route('/api/depots')
    .get(controller.list_all_depots)
    .post(controller.create_a_depot);

  app.route('/api/depots/:depotId')
    .get(controller.read_a_depot)
    .put(controller.update_a_depot)
    .delete(controller.delete_a_depot);
};
