// ./index.js
'use strict';

// Add the root project directory to the app module search path:
require('app-module-path').addPath(__dirname);

(() => {

	var Server = require('./src/server'),
		server = new Server();

	server.init();

})();