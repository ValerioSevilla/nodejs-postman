// ./src/server.js
'use strict';

module.exports = (() => {

	var express = require('express');

	class Server {

		constructor() {
			this._server = express();
			// eslint-disable-next-line
			this._router = express.Router();
		}

		applyRoutes() {
			var routerInstance = new Router();
			routerInstance.apply(this._router);
		}

		handleErrors() {
			this._server.use(function (error, request, response, next) {
				if (error instanceof SyntaxError) {
					response.status(400).send(syntaxErrorMessage);
				} else {
					console.log(error);
					response.status(500).send(unknownErrorMessage);
				}
			});
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
