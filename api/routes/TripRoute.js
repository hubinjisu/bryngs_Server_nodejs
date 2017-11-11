'use strict';
module.exports = function(app) {
  var controller = require('../controllers/TripController');


  app.route('/api/trips')
    .get(controller.list_all_trips)
    .post(controller.create_a_trip);

  app.route('/api/trips/:tripId')
    .get(controller.read_a_trip)
    .put(controller.update_a_trip)
    .delete(controller.delete_a_trip);
};
