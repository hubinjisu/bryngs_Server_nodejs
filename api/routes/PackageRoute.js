'use strict';
module.exports = function(app) {
  var controller = require('../controllers/PackageController');


  // package Routes
  app.route('/api/packages')
    .get(controller.list_all_packages)
    .post(controller.create_a_package);

  app.route('/api/packages/:packageId')
    .get(controller.read_a_package)
    .put(controller.update_a_package)
    .delete(controller.delete_a_package);
};
