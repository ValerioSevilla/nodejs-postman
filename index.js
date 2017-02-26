// ./index.js
'use strict';

(() => {

	var Server = require('./src/server'),
		server = new Server();

	server.init();

})();