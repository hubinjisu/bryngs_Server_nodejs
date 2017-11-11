// Set up
var express = require('express');
var app = express();
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');
var methodOverride = require('method-override');
const config = require('./api/config/config')
const db = require('./api/config/db')

// Parses urlencoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
// Send JSON responses
app.use(bodyParser.json());  // parse application/vnd.api+json as json
app.use(logger('dev')); // Log requests to API using morgan
app.use(methodOverride());
app.use(cors());
var router = express.Router();


// Routes
var packageRoutes = require('./api/routes/PackageRoute');
var tripRoutes = require('./api/routes/TripRoute');
var depotRoutes = require('./api/routes/DepotRoute');
var userRoutes = require('./api/routes/UserRoute');
packageRoutes(app);
tripRoutes(app);
depotRoutes(app);
userRoutes(app);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

// listen
var port = config.server.port;
var server = app.listen(port, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
