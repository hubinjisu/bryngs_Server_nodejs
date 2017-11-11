const Mongoose = require('mongoose')
const config = require('./config')

Mongoose.connect(config.database.url, function (err, database) {
  if (err) {
    console.log("database start error: " + err);
    process.exit(1);
  }

  console.log("Database connection ready");
});

const db = Mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback() {
    console.log("Connection with database succeeded.");
});

// Models
var Depot = require('../models/Depot');
var Package = require('../models/Package');
var Trip = require('../models/Trip');
var User = require('../models/User');
var Shipment = require('../models/Shipment');

exports.db = db;
