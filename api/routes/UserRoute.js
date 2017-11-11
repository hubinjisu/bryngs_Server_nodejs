'use strict';
module.exports = function(app) {
  var controller = require('../controllers/UserController');

  app.route('/api/users')
    .get(controller.list_all_users)
    .post(controller.create_a_user);

  app.route('/api/users/:userId')
    .get(controller.read_a_user)
    .put(controller.update_a_user)
    .delete(controller.delete_a_user);
};
