(function() {
  'use strict';

  // dependencies
  var express = require('express'),
    path = require('path'),
    app = express(),
    portNumber = 3000;

	// Configure static file serving
	app.use('/', express.static(path.resolve('./public')));

  // set port
  app.listen(portNumber);
  console.log('Server running on http://localhost:', portNumber);

  module.exports = app;
}());
