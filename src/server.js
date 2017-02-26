// ./src/server.js
'use strict';

module.exports = (() => {

	var express = require('express'),
		bodyParser = require('body-parser'),
		SimpleMath = require('src/simpleMath');

	const CommonPrefix = '/api/1.0',
		MathPrefix = CommonPrefix + '/math',
		MathAddPath = MathPrefix + '/add/:input1/:input2',
		MathSubtractPath = MathPrefix + '/subtract/:input1/:input2',
		MathSquarePath = MathPrefix + '/square/:input',
		MathAccumulatePath = MathPrefix + '/accumulate';

	class Server {

		constructor() {
			this._server = express();
			this._server.use(bodyParser.urlencoded({extended: true}));
			this._server.use(bodyParser.json());
			this._math = new SimpleMath();
		}

		init() {
			var me = this,
				server = me._server,
				math = me._math;

			server.get(MathAddPath, function(req, res) {
				var input1 = Number(req.params.input1),
					input2 = Number(req.params.input2);

				res.send(math.add(input1, input2));
			});

			server.get(MathSubtractPath, function(req, res) {
				var input1 = Number(req.params.input1),
					input2 = Number(req.params.input2);

				res.send(math.subtract(input1, input2));
			});

			server.get(MathSquarePath, function(req, res) {
				var input = Number(req.params.input);

				res.send(math.square(input));
			});

			server.post(MathAccumulatePath, function(req, res) {
				var params = req.body,
					input = Number(params.data);

				res.send(math.accumulate(input));
			});

			server.listen(process.env.PORT);
			server.use (function (error, request, response, next) {
				response.status(400).send("Error: " + error);
			});
		}

	}

	return Server;

})();
