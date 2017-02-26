// ./src/server.js
'use strict';

module.exports = (() => {

	var express = require('express'),
		SimpleMath = require('src/simpleMath');

	class Server {

		constructor() {
			this._server = express();
			this._math = new SimpleMath();
		}

		init() {
			var me = this,
				server = me._server,
				math = me._math;

			server.get('/math/add/:input1/:input2', function(req, res) {
				var input1 = Number(req.params.input1),
					input2 = Number(req.params.input2);

				res.send(math.add(input1, input2));
			});

			server.get('/math/subtract/:input1/:input2', function(req, res) {
				var input1 = Number(req.params.input1),
					input2 = Number(req.params.input2);

				res.send(math.subtract(input1, input2));
			});

			server.get('/math/square/:input', function(req, res) {
				var input = Number(req.params.input);

				res.send(math.square(input));
			});

			server.listen(process.env.PORT);
			server.use (function (error, request, response, next) {
				response.status(400).send("Error: " + error);
			});
		}

	}

	return Server;

})();
