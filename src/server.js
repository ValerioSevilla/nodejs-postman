// ./src/server.js
'use strict';

module.exports = (() => {

	var express = require('express');

	class Server {

		constructor() {
			this._server = express();
		}

		init() {
			var me = this,
				server = me._server;

			server.listen(process.env.PORT);
			server.use (function (error, request, response, next) {
				response.status(400).send("Error: " + error);
			});
		}

	}

	return Server;

})();
